"use client";
// use~ ex) useState, useEffect, ... => Client Side Rendering
// read data from the server (x always)

// console.log() will appear at the browser's developer tool

import React from "react";

export default function Button() {
  // const [isPressed, setIsPressed] = useState(false);
  // setIsPressed(true);
  return <button onClick={() => console.log("Hello World")}>Press Me!</button>;
}
