import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import Groq from "groq-sdk";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

app.post("/analyze", async (req, res) => {
  const { symptom } = req.body;

  try {
    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "system",
          content: `
You are a medical triage assistant.

Given symptoms from a patient, return a JSON response with:
- possible_conditions (array of 3–5 likely conditions)
- specialization (the most appropriate medical department)
- urgency (low, medium, high)
- advice (short explanation)

You are a medical triage assistant.

Given patient symptoms, return JSON with:

possible_conditions: list of likely conditions
specialization: appropriate medical department
equipment_needed: medical equipment typically required
urgency: low, medium, or high

Do not recommend surgery unless clearly necessary.
Most mild symptoms should map to General Medicine.
Return ONLY JSON.
`,
        },
        {
          role: "user",
          content: symptom,
        },
      ],
      response_format: { type: "json_object" },
    });

    const result = JSON.parse(completion.choices[0].message.content);

    res.json(result);
  } catch (error) {
    console.error("AI ERROR:", error);

    res.status(500).json({
      error: error.message,
    });
  }
});

app.listen(3001, () => {
  console.log("AI server running on port 3001");
});
