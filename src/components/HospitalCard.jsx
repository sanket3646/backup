import { MapPin, Users } from "lucide-react";
import { estimateWaitTime } from "../utils/waitTime";
import { useNavigate } from "react-router-dom";

export default function HospitalCard({ hospital }) {
  const navigate = useNavigate();

  function handleBook() {
    navigate("/PatientPortal", {
      state: { hospital },
    });
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow flex justify-between items-center">
      <div className="space-y-1">
        <h3 className="font-semibold text-lg">{hospital.name}</h3>

        <p className="text-sm text-slate-500 flex items-center gap-2">
          <MapPin className="w-4 h-4" />
          {hospital.address}, {hospital.district}, {hospital.state}
        </p>

        {hospital.distance && (
          <p className="text-sm text-gray-500">
            Distance: {hospital.distance} km
          </p>
        )}

        {hospital.specialties && (
          <p className="text-sm text-gray-500">
            Specialties: {hospital.specialties}
          </p>
        )}

        {hospital.facilities && (
          <p className="text-sm text-gray-500">
            Facilities: {hospital.facilities}
          </p>
        )}

        <div className="flex items-center gap-4 text-sm text-slate-600">
          <span className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            Queue: {hospital.queue ?? "Unknown"}
          </span>

          <span>
            Estimated wait:{" "}
            {estimateWaitTime(hospital.queue || 0, hospital.doctors || 1)} min
          </span>
        </div>
      </div>

      <button
        onClick={handleBook}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
      >
        Book Token
      </button>
    </div>
  );
}
