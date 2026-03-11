import fs from "fs";

const rawData = JSON.parse(fs.readFileSync("src/data/hospitals.json", "utf8"));

function parseCoordinates(coordString) {
  if (!coordString) return null;

  const parts = coordString.split(",");

  if (parts.length !== 2) return null;

  const lat = parseFloat(parts[0]);
  const lng = parseFloat(parts[1]);

  return [lat, lng];
}

const cleaned = rawData.map((h) => {
  return {
  name: h.Hospital_Name,
  state: h.State,
  district: h.District,
  address: h.Address_Original_First_Line,
  pincode: h.Pincode,
  coordinates: parseCoordinates(h.Location_Coordinates),
  specialties: h.Specialties || h.Discipline_Systems_of_Medicine,
  facilities: h.Facilities,
  doctors: Number(h.Number_Doctor) || 0,
  beds: Number(h.Total_Num_Beds) || 0,
  emergency: h.Emergency_Services === "Yes",
  queue: Math.floor(Math.random() * 30)
};
});

fs.writeFileSync(
  "src/data/hospitals_clean.json",
  JSON.stringify(cleaned, null, 2),
);

console.log("✅ Clean dataset created: src/data/hospitals_clean.json");
console.log("Hospitals processed:", cleaned.length);
