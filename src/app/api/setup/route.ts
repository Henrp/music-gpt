// localhost:3000/api/setup

import { createPineconeIndex, updatePineconeWithData } from "@/services";
import { Pinecone } from "@pinecone-database/pinecone";
import { APIChain } from "langchain/chains";
import { DirectoryLoader } from "langchain/document_loaders/fs/directory";
import { PDFLoader } from "langchain/document_loaders/fs/pdf";
import { TextLoader } from "langchain/document_loaders/fs/text";
import { NextRequest, NextResponse } from "next/server";

// export async function GET() {
//   // createPineconeIndex
//   // updatePineconeWithData

//   const loader = new DirectoryLoader("./src/documents", {
//     ".txt": (path) => new TextLoader(path),
//     ".pdf": (path) => new PDFLoader(path),
//     ".md": (path) => new TextLoader(path),
//   });

//   const docs = await loader.load();

//   console.log("docs: ", docs);

//   if (
//     process.env.PINECONE_API_KEY === undefined ||
//     process.env.PINECONE_ENVIRONMENT === undefined
//   ) {
//     throw new Error("PINECONE_API_KEY or PINECONE_ENVIRONMENT is not defined");
//   }
//   // 1. Create a client
//   const client = new Pinecone({
//     apiKey: process.env.PINECONE_API_KEY,
//     environment: process.env.PINECONE_ENVIRONMENT,
//   });

//   // try - catch block
//   try {
//     await createPineconeIndex({ client });
//     await updatePineconeWithData({ client, docs });
//   } catch (err) {
//     console.log("Error: ", err);
//   }

//   return NextResponse.json({
//     data: "successfully created pinecone index and updated pinecone with data",
//   });
// }

// RESTful API
// = CRUD (Create, Read, Update, and Delete)
// POST GET PUT DELETE

// POST - Create
export async function GET() {
  return NextResponse.json({ msg: "DISABLED API" });
}
