"use client";
import React from "react";
import { SparklesCore } from "@/components/ui/Sparkles";

export default function SparkleHeader({text, project }:{text:string, project?:boolean}) {
  const classname = "bg-gradient-to-r from-blue-600 via-white to-indigo-400 inline-block text-transparent bg-clip-text";
  return (
    <div className=" w-full justify-center overflow-hidden rounded-md">
      <h1 className={`md:text-6xl ${project?' text-4xl':' text-5xl '} font-sans lg:text-6xl font-bold text-left relative z-20  ${project?'text-white':classname}`}>
        {text}
      </h1>
      <div className={` flex  ${project?' -ml-20 mt-2':''} justify-center bg-transparent h-10 relative`}>
        {/* Gradients */}
        <div className="absolute -ml-16 inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute -ml-16 inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute -ml-16 inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className=" w-72"
          particleColor="#FFFFFF"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0   h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
  );
}
