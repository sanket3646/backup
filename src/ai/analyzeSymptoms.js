export async function analyzeSymptoms(symptom) {
  const res = await fetch("https://abhimanyu-backend.onrender.com/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ symptom }),
  });

  const data = await res.json();

  return data;
}
