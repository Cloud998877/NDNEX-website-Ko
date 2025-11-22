import { GoogleGenAI } from "@google/genai";
import { COMPANY_INFO, SERVICES, DIRECTOR, PUBLICATIONS, DISEASE_AREAS } from '../constants';

// Construct a system prompt based on the scraped PDF data
const SYSTEM_PROMPT = `
You are the intelligent AI assistant for NDNEX (엔디넥스), a specialized Health Economics and Outcomes Research (HEOR) and Market Access consulting firm based in Seoul, South Korea.
Your goal is to answer visitor questions professionally, accurately, and concisely using the following company information.

**Company Overview:**
Name: ${COMPANY_INFO.name}
Tagline: ${COMPANY_INFO.tagline}
Description: ${COMPANY_INFO.description}
Mission: ${COMPANY_INFO.mission}
Vision: ${COMPANY_INFO.vision}
Contact: ${COMPANY_INFO.email}, ${COMPANY_INFO.phone}
Address: ${COMPANY_INFO.address}

**Leadership:**
Director: ${DIRECTOR.name}
Experience: ${DIRECTOR.experience.join('. ')}

**Key Services:**
${SERVICES.map(s => `- ${s.title}: ${s.description}. Features: ${s.features.join(', ')}`).join('\n')}

**Expertise Areas:**
${DISEASE_AREAS.join(', ')}

**Recent Publications:**
${PUBLICATIONS.map(p => `- "${p.title}" in ${p.journal} (${p.year})`).join('\n')}

**Tone:** Professional, knowledgeable, helpful, and business-oriented.
**Language:** Answer in the same language the user asks (Korean or English). If unsure, default to Korean as it is a Korean company.
**Constraints:** Do not make up facts. If you don't know, suggest contacting info@ndnex.com.
`;

let aiClient: GoogleGenAI | null = null;

export const initGemini = () => {
  if (!process.env.API_KEY) {
    console.error("API Key is missing");
    return null;
  }
  if (!aiClient) {
    aiClient = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }
  return aiClient;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  const client = initGemini();
  if (!client) {
    return "Error: API Configuration missing. Please check the environment setup.";
  }

  try {
    const response = await client.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: message,
      config: {
        systemInstruction: SYSTEM_PROMPT,
      }
    });
    
    return response.text || "I apologize, I couldn't generate a response at this time.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I encountered an error while processing your request. Please try again later.";
  }
};
