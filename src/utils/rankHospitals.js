import { getDistance } from "./distance";

export function rankHospitals(hospitals, aiResult, userLocation) {
  const ranked = hospitals.map((hospital) => {
    let score = 0;

    // 1️⃣ SPECIALIZATION MATCH (highest priority)
    if (
      hospital.specialties &&
      aiResult.specialization &&
      hospital.specialties
        .toLowerCase()
        .includes(aiResult.specialization.toLowerCase())
    ) {
      score += 60;
    }

    // 2️⃣ EQUIPMENT / FACILITY MATCH
    const equipment = Array.isArray(aiResult.equipment_needed)
      ? aiResult.equipment_needed
      : aiResult.equipment_needed
        ? [aiResult.equipment_needed]
        : [];

    if (hospital.facilities && equipment.length) {
      equipment.forEach((eq) => {
        if (hospital.facilities.toLowerCase().includes(eq.toLowerCase())) {
          score += 25;
        }
      });
    }

    // 3️⃣ DISTANCE (lower priority now)
    if (hospital.coordinates && userLocation) {
      const dist = getDistance(
        userLocation.lat,
        userLocation.lng,
        hospital.coordinates[0],
        hospital.coordinates[1],
      );

      hospital.distance = dist.toFixed(1);

      // distance contributes less to score
      score += Math.max(0, 20 - dist);
    }

    // 4️⃣ SHORTER QUEUE = BETTER
    if (hospital.queue !== undefined) {
      score += Math.max(0, 15 - hospital.queue);
    }

    // 5️⃣ DOCTOR AVAILABILITY
    if (hospital.doctors && hospital.doctors > 0) {
      score += Math.min(10, hospital.doctors);
    }

    // 6️⃣ BED CAPACITY
    if (hospital.beds && hospital.beds > 0) {
      score += Math.min(10, hospital.beds / 10);
    }

    // 7️⃣ EMERGENCY SUPPORT
    if (hospital.emergency) {
      score += 10;
    }

    return {
      ...hospital,
      score,
    };
  });

  return ranked.sort((a, b) => b.score - a.score);
}
