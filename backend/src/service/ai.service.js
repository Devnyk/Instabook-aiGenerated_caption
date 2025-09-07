const { GoogleGenerativeAI } = require("@google/generative-ai");

const ai = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function generateCaption(base64ImageFile) {
  const model = ai.getGenerativeModel({ model: "gemini-1.5-flash" });

  const contents = [
    {
      inlineData: {
        mimeType: "image/jpeg",
        data: base64ImageFile,
      },
    },
    { text: "Caption this image." },
  ];

  const result = await model.generateContent(contents);

  return result.response.text();
}

module.exports = { generateCaption };
