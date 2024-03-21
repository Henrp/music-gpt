import { queryPineconeAndQueryLLM } from "@/services/qna";
import { Pinecone } from "@pinecone-database/pinecone";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  console.log("ASK API CALLED!");
  // call queryPineconeAndQueryLLM({question, etc})
  // return response from queryPineconeAndQueryLLM

  const body = await req.json(); // ( = question)
  // const question = body.question;

  if (
    process.env.PINECONE_API_KEY === undefined ||
    process.env.PINECONE_ENVIRONMENT === undefined
  ) {
    throw new Error("PINECONE_API_KEY or PINECONE_ENVIRONMENT is not defined");
  }
  // 1. Create a client
  const client = new Pinecone({
    apiKey: process.env.PINECONE_API_KEY,
    environment: process.env.PINECONE_ENVIRONMENT,
  });

  const indexName = "music-gpt-index";
  const text = await queryPineconeAndQueryLLM({
    client,
    indexName,
    question: body,
  });

  return NextResponse.json({ answer: text });
}

// request [client] -> API -> response [back to client]
//
