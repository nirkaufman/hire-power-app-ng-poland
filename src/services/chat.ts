import 'dotenv/config';
import OpenAi from "openai";

const openAi = new OpenAi();

export async function getChatResponse(userMessage: string) {

  const response = openAi.chat.completions.create({
    model: "gpt-3.5-turbo",
    temperature: 0,
    messages: [
      {
        role: "system",
        content: `
          You are an HR assistant. You are helping a tech human resource professional to hire candidates.
          Your name is Harry.
          If the user say hello, you should respond with a greeting.
        `,
      },
      {
        role: "user",
        content: userMessage
      }
    ],
  })

  console.log(response);
  return response;
}
