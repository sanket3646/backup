export async function analyzeSymptoms(symptom) {
  const res = await fetch("http://localhost:3001/analyze", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ symptom }),
  });

  const data = await res.json();

  return data;
}
