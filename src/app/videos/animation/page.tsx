import WordRotate from "@/components/WordRoate";
import React from "react";

const words = ["indie hackers", "content creators", "makers"];

export default function page() {
  return (
    <h1 className="text-5xl font-semibold text-center my-12">
      The best way for
      <span className="text-green-600">
        <WordRotate words={words} />
      </span>
      to track project goals.
    </h1>
  );
}
