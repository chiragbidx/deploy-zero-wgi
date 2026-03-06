"use server";

export async function generateDocumentation(formData: FormData) {
  const apiKey = process.env.OPENAI_API_KEY;
  const featureInput = formData.get("featureDescription") as string;

  if (!apiKey) {
    return { error: "OPENAI_API_KEY not set on server.", result: null };
  }
  if (!featureInput || featureInput.length < 10) {
    return { error: "Please enter a longer feature description.", result: null };
  }

  // Compose a clear prompt for AI documentation writing
  const prompt = `
You are a technical documentation writer for modern SaaS teams.

Given this raw product/feature description, create a detailed, professional product documentation section.
Format with markdown—headings, lists, and code where suitable.
Be concise, developer-oriented, but not verbose. 
Do not invent new functionality, but clarify and group key ideas.
---
Feature description:
${featureInput}
---
Docs:
`;

  try {
    const resp = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }],
        temperature: 0.4,
        max_tokens: 800,
        top_p: 1,
      }),
    });

    if (!resp.ok) {
      return { error: `OpenAI API error (${resp.status}): ${await resp.text()}`, result: null };
    }
    const data = await resp.json();
    const generated = data.choices?.[0]?.message?.content?.trim() as string | undefined;
    if (!generated) {
      return { error: "Did not receive a valid response from OpenAI.", result: null };
    }
    return { error: null, result: generated };
  } catch (e: any) {
    return { error: "OpenAI connection failed. " + e.message, result: null };
  }
}