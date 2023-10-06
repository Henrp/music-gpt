import React from "react";

const exampleQuestions = [
  "What is Music??",
  "Who is Johann Sebastian Bach?",
  "What is a half note?",
];

export default function Examples() {
  return (
    <div className="flex items-center gap-2">
      {exampleQuestions.map((question, index) => (
        <div
          key={question}
          className="border border-[#C0C0C0]/60 
        bg-secondary rounded-xl py-1 px-4"
        >
          <p className="text-lsm text-primaryDark">{question}</p>
        </div>
      ))}
    </div>
  );
}
