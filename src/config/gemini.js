// npm install @google/generative-ai 

import {
    GoogleGenerativeAI
} from "@google/generative-ai";

const getApiKey = async () => {
    try {
        const response = await fetch("http://localhost:5000/get-api-key");
        const data = await response.json();
        return data.apiKey;
    } catch (error) {
        console.error("Error fetching API Key:", error);
    }
};
getApiKey().then(apiKey => {
    console.log("Secure API Key:", apiKey);
});
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
    model: "gemini-1.5-pro",
});

const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
};

async function runChat(prompt) {
    const chatSession = model.startChat({
        generationConfig,
        history: [
        ],
    });

    const result = await chatSession.sendMessage(prompt);
    // console.log(result.response.text());
    return result.response.text();
}

export default runChat;