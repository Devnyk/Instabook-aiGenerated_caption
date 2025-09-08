// ai.service.js
const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

async function generateCaption(base64ImageFile) {
  const contents = [
    {
      inlineData: {
        mimeType: "image/jpeg",
        data: base64ImageFile,
      },
    },
    { text: "Caption this image." },
  ];

  try {
    const result = await ai.models.generateContent({
      contents: contents,
      model: "gemini-2.0-flash",
      config: {
        systemInstruction:
          "You are an expert at generating captions for images. Generate a single caption for the image that is concise, engaging, and relevant to the image content. Avoid using hashtags or mentions in the caption.",
      },
    });

    return result.text;
  } catch (error) {
    console.error("Error generating caption:", error);
    throw new Error("Failed to generate caption from AI service.");
  }
}

module.exports = { generateCaption };
