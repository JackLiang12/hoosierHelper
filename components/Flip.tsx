import React from "react";
import { FlipWords } from "./ui/flip-words";

export default function Flip() {
  const words = ["Easy", "Accessible", "Impactful", "Essential"];
  return (
    <div className="flipWords">
      <span className="hidden sm:block">
        Donating Food Made
        <a className="flipFont">
        <FlipWords words={words}></FlipWords></a>
      </span>
      <span className="block sm:hidden">Donating</span>
      <span className="block sm:hidden">Food</span>
      <span className="block sm:hidden">Made</span>
      <span className="block sm:hidden"><div className="flipFont"><FlipWords words={words}></FlipWords></div></span>
    </div>
  );
}
