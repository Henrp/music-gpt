import { NextResponse } from "next/server";

export async function POST() {
  // call queryPineconeAndQueryLLM({question, etc})
  // return response from queryPineconeAndQueryLLM

  return NextResponse.json({ msg: "Ask Question" });
}
