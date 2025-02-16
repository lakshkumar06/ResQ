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

// Function to send emails
const sendEmail = async (recipient, subject, message) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  let mailOptions = {
    from: process.env.EMAIL_USER,
    to: recipient,
    subject: subject,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`Email sent to ${recipient}`);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

// Function 1: AI-powered daily report
const generateDailyReport = async () => {
  const jsonData = loadJsonData();
  if (!jsonData) return;

  const prompt = `
    Given the following JSON data: ${JSON.stringify(jsonData)},
    Generate a summary of the daily status of resources and disasters.
  `;

  const response = await llm.invoke(prompt);
  console.log("Daily Report:\n", response.content);
};

// Function 2: Notify volunteers if a fire station requests resources
const notifyVolunteers = async () => {
  const jsonData = loadJsonData();
  if (!jsonData) return;

  const fireStations = jsonData.fire_stations || [];
  for (const station of fireStations) {
    if (station.resources_requested && station.resources_requested.length > 0) {
      const volunteers = jsonData.volunteers || [];
      const message = `Fire station ${station.name} requested the following resources: ${station.resources_requested.join(", ")}`;
      
      for (const volunteer of volunteers) {
        await sendEmail(volunteer.email, "Urgent: Fire Station Needs Help!", message);
      }
    }
  }
};

// Function 3: Send daily event updates to other fire stations
const notifyFireStations = async () => {
  const jsonData = loadJsonData();
  if (!jsonData) return;

  const fireStations = jsonData.fire_stations || [];
  const dailyEvents = jsonData.daily_events || "No new updates today.";
  
  for (const station of fireStations) {
    await sendEmail(station.email, "Daily Fire Station Update", dailyEvents);
  }
};

// Run all functions
const run = async () => {
  await generateDailyReport();
  await notifyVolunteers();
  await notifyFireStations();
};

run();