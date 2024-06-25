"use client"
import React, { useEffect } from "react";
import { TracingBeam } from "@/components/ui/TracingScoll";
import ProjectCard from "@/components/Project_card";
import { HeroHighlight } from "@/components/ui/DotBeackground";
import { aboutState, contactState, projectState, skillState } from "./recoilContextProvider";

import Skills from "@/components/skills";
import Navbar from "@/components/NavBar";
import AboutMe from "@/components/About"; 
import Contact from "@/components/Contact";
import { useRecoilState } from "recoil";

export default function GridBackgroundDemo() { 

  

  const [about, setAbout] = useRecoilState(aboutState)
  const [skill, setSkill] = useRecoilState(skillState)
  const [project, setProject] = useRecoilState(projectState)
  const [contact, setContact] = useRecoilState(contactState)

  useEffect(()=>{

    setAbout(true);
    setSkill(false)
    setProject(false)
    setContact(false)
  },[])

  return (
    <div >
      <HeroHighlight className="flex justify-start overflow-x-hidden">

        <TracingBeam className="">
          <div className="  flex-col">
            <div id="NAVBAR" className=" mt-8 text-white flex justify-center">
              <Navbar />
            </div>

            <div id="About" className=" my-20 flex justify-center  ">
              <AboutMe />
            </div>

            <div  id="Skills" className=" my-20 ">
              <div className="flex justify-center ">
                <Skills />
              </div>
            </div>
            <div id="Projects" className="  ">
              <ProjectCard />
            </div>
            <div id="Contact" className="  ">
              <Contact />
            </div>
          </div>
        </TracingBeam>
      </HeroHighlight>
    </div>
  );
}


