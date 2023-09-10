// index.ts
// 1. create Pinecone index
// 2. upload our own data into Pinecone vectorstore

import { Pinecone, PineconeRecord } from "@pinecone-database/pinecone";
import { Document } from "langchain/document";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { resolve } from "path";

type Params = {
  client: Pinecone;
};

/** Create Pinecone Index */
export const createPineconeIndex = async ({ client }: Params) => {
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

  // 2. Check Duplicate Pinecone Index
  const indexName = "music-gpt-index";
  const vectorDimension = 1536;
  const timeout = 80000;
  console.log(`Checking for duplicate index: ${indexName} ...`);
  const existingIndexes = await client.listIndexes();

  if (!existingIndexes.includes({ name: indexName })) {
    // 3. Create Pinecone Index
    console.log(`Creating index: ${indexName} ...`);

    await client.createIndex({
      name: indexName,
      dimension: vectorDimension,
      metric: "cosine",
    });

    console.log(
      `Creating index... please wait for it to finish initialization`
    );
    await new Promise((resolve) => setTimeout(resolve, timeout));
    console.log(`Index ${indexName} created!`);
  } else {
    console.log(`Index ${indexName} already exists!`);
  }
};

type UpdateParams = {
  client: Pinecone;
  docs: Document[];
};

/** Upload data into Pinecone vectorstore */
export const updatePineconeWithData = async ({
  client,
  docs,
}: UpdateParams) => {
  // 1. Retrieve Pinecone Index
  const indexName = "music-gpt-index";
  const index = client.index(indexName);

  // 2. Process each doc in the docs array
  for (const doc of docs) {
    console.log(`Uploading document: ${doc.metadata.source} ...`);
    const txtPath = doc.metadata.source;
    const text = doc.pageContent;

    // 3. Split text into text chunks
    const splitter = new RecursiveCharacterTextSplitter({
      chunkSize: 500,
      chunkOverlap: 50,
    });

    const chunks = await splitter.createDocuments([text]);
    console.log(`Text Split into ${chunks.length} chunks`);

    // 4. Convert chunks into vectors (=embeddings)
    const embeddings = await new OpenAIEmbeddings().embedDocuments(
      chunks.map((chunk) => chunk.pageContent.replace(/\n/g, " "))
    );
    console.log("Finished creating embeddings");

    // 5. Upload vectors into Pinecone Index
    // embeddings => pinecone index
    // need to format embeddings in some way
    // vector: { id: string; values: number[], metadata }

    // batch
    // AI <= train dataset
    // dataset => split into small groups => batch: size of small group

    // upsert => update and insert
    // upsert batch to pinecone index

    // in one batch, there are multiple vectors (embeddings)

    const batchSize = 100;
    let batch: PineconeRecord[] = [];
    for (let idx = 0; idx < chunks.length; idx++) {
      const chunk = chunks[idx];
      const embedding = embeddings[idx];

      const vector = {
        id: `${idx}`,
        values: embedding,
        metadata: {
          ...chunk.metadata,
          loc: JSON.stringify(chunk.metadata.loc),
          pageContent: chunk.pageContent,
          txtPath: txtPath,
        },
      };

      batch = [...batch, vector];

      // When batch is full or it's the last vector, upsert batch into pinecone index
      if (batch.length === batchSize || idx === chunks.length - 1) {
        await index.upsert(batch);
        // empty the batch
        batch = [];
      }
    }

    console.log(`Finished uploading documents into pinecone index`);
  }
};
