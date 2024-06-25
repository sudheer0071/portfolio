"use client";

import { DockIcon, Github, Linkedin, Mail } from "lucide-react";
import { PlaceholdersAndVanishInput } from "./ui/VanishPlaceholder";
import {toast, Toaster } from "sonner";

export function PlaceholderVanish() {
  const placeholders = [
    "How to reach you?",
    "I would like to work work with you.",
    "Can you build website like this for my project as well?",
    "Write a Javascript method to reverse a string",
    "why are you gay?",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success(<div className=" font-semibold text-base">
      <div className=" flex"> 
      <div className=" font-medium">            
      Thanks for asking!
      </div>
      </div>
      <div className="">I{"'"}ll get back to you as soon as possible :{")"}</div>
      </div>)
  };
  return (
    <div className=" flex flex-col justify-center  items-center px-4">
      <h2 className="sm:mb-20 text-xl text-center sm:text-5xl bg-gradient-to-r from-slate-300  to-indigo-400 inline-block text-transparent bg-clip-text font-medium">
        Ask me anything! 
      </h2>
      <PlaceholdersAndVanishInput 
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
    </div>
  );
}
 
 
export default function Contact(){
  return <div className=" text-white">
      {/* <Toaster position="bottom-right" />
    <PlaceholderVanish />
     <div className=" font-medium text-gray-300 m-5 flex justify-center gap-10 mb-10 mt-20 ">
      <div>
        <div className=" justify-center flex"> 
        <Mail/>
        </div>
        <a href="mailto:sudheer1614@gmail.com">
        <span>sudheer1614@gmail.com</span></a>
      </div>
      <div>
        <div className=" justify-center flex"> 
        <DockIcon/>
        </div>
        <a href="/sudheer_chaurasia.pdf">
        <span>My CV</span></a>
      </div>
      <div>
        <div className=" flex justify-center">
          <Linkedin/>
        </div>
        <a href="https://www.linkedin.com/in/sudheer-8075121a0/" target="_blank">
        <span>sudheer chaurasia</span></a>
      </div>
      <div>
        <div className=" flex justify-center">
          <Github/>
        </div>
        <a href="https://github.com/sudheer0071" target="_blank" >
        <span>sudheer0071</span></a>
      </div> 
     </div> */}
    </div>
}
