import { ChatOpenAI } from "@langchain/openai";

export const ChatOpenRouter = ({
  modelName,
  apiKey
}) => {
  return new ChatOpenAI(
    {
        apiKey: apiKey,
     baseUrl:   'https://openrouter.ai/api/v1',

      model:   modelName,
      
    },
    
  )
}