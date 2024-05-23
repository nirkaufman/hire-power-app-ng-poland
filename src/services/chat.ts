import 'dotenv/config';
import OpenAi from "openai";

const openAi = new OpenAi();


export async function getChatResponse(userMessage: string) {

  const response = openAi.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "user",
        content: userMessage
      }
    ],
  })

  console.log(response);
  return response;
}
