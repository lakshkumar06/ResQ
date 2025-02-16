import { ChatOpenAI } from "@langchain/openai";  // Fix import
import fs from "fs";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

// Initialize LangChain AI model (GPT-4 Turbo)
const llm = new ChatOpenAI({
  modelName: "gpt-3.5-turbo",
  temperature: 0.7,
  openAIApiKey: process.env.OPENAI_API_KEY,
});

// Load main JSON file
const loadJsonData = () => {
  try {
    const data = fs.readFileSync("main.json", "utf8");
    return JSON.parse(data);
  } catch (err) {
    console.error("Error reading main.json:", err);
    return null;
  }
};

// Function to generate summary and store in notifications
export const generateSummaryAndStore = async () => {
  const jsonData = loadJsonData();
  if (!jsonData) return;

  const prompt = `
    Given the following JSON data: ${JSON.stringify(jsonData)},
    Generate a summary of the daily status of resources and disasters.
  `;

  const response = await llm.invoke(prompt);
  const summary = response.content;

  // Store summary in notifications of Fire Station 2
  jsonData[1].notifications.push({
    message: summary,
    sender: "Firebot",
    time: new Date().toISOString(),
  });

  // Save updated JSON data
  fs.writeFileSync("main.json", JSON.stringify(jsonData, null, 2));
  console.log("Summary stored in Fire Station 2 notifications.");
};