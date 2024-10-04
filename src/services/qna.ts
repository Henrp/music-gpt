// Query Logic
import { Pinecone } from "@pinecone-database/pinecone";
import { loadQAStuffChain } from "langchain/chains";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { Document } from "langchain/document";
import { OpenAI } from "langchain/llms/openai";

type Props = {
  client: Pinecone;
  indexName: string;
  question: string;
};

/** Ask question to Pinecone Vectorstore and LLM */
export const queryPineconeAndQueryLLM = async ({
  client,
  indexName,
  question,
}: Props) => {
  // 1. Retrieve Pinecone Index
  const index = client.index(indexName);

  // 2. Create Query Embedding
  const queryEmbedding = await new OpenAIEmbeddings().embedQuery(question);

  // 3. Compare query embeddings with Pinecone Vectorstore
  let queryResponse = await index.query({
    topK: 5,
    vector: queryEmbedding,
    includeValues: true,
    includeMetadata: true,
  }); // = context

  // 4. Ask Question to LLM
  console.log(`Asking Question: ${question} to LLM...`);
  // context + question => answer

  if (queryResponse.matches?.length) {
    // for now just basics

    const llm = new OpenAI({
      modelName: "gpt-4o-mini",
      openAIApiKey: process.env.OPENAI_API_KEY,
    });

    // chain: chain of models
    const chain = loadQAStuffChain(llm);
    // combine queryResponse.matches together = creating context
    const concatenatedPageContent = queryResponse.matches
      .map((match) => match.metadata?.pageContent)
      .join(" ");
    // Ask LLM with context + question
    const result = await chain.call({
      input_documents: [new Document({ pageContent: concatenatedPageContent })],
      question: question,
    });
    console.log(`LLM Answer: ${result.text}`);
    return result.text;
  } else {
    console.log("Since there are no matches, we cannot ask question to LLM.");
  }
};
