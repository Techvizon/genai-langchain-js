import { ChatOpenAI } from "@langchain/openai"
import { HumanMessage, SystemMessage } from "@langchain/core/messages";

async function main() {
  const openRouterApiKey = process.env.OPENROUTER_KEY;

  const llm = new ChatOpenAI({
    configuration:{
      apiKey:openRouterApiKey,
      baseURL:'https://openrouter.ai/api/v1',
    },
      
    model:"deepseek/deepseek-r1-0528:free",
    
  });

  const messages = [
    
    new HumanMessage('What is the capital of India ?')
  ];

  const result = await llm.invoke(messages);
  console.log(result.content);
}

main();