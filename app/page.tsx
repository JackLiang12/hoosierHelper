"use client";
import AboutPage from "@/components/AboutPage";
import Endcard from "@/components/Endcard";
import Flip from "@/components/Flip";
import FoodSafety from "@/components/FoodSafety";
import Heropage from "@/components/Heropage";
import Missionpage from "@/components/Missionpage";
import Sponsorbanner from "@/components/Sponsorbanner";
import { FlipWords } from "@/components/ui/flip-words";
import { FloatingNavDemo } from "@/components/ui/FloatingNavDemo";
import { useState, useEffect } from "react";

export default function HomePage() {
  return (
    <>
      {/* <FloatingNavDemo></FloatingNavDemo> */}
      {/* <img className="mainPageImage" src="/images.png"></img> */}
      {/* <Flip></Flip> */}
      {/* <AboutPage></AboutPage> */}
      <div>
        <Heropage></Heropage>
        <div>
          <Missionpage></Missionpage>
          <FoodSafety></FoodSafety>
          <Sponsorbanner></Sponsorbanner>
        </div>
      </div>
      <Endcard></Endcard>
    </>
  );
}
