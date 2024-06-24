"use client"
import React from "react";
import { TracingBeam } from "@/components/ui/TracingScoll";
import ProjectCard from "@/components/Project_card";
import { HeroHighlight } from "@/components/ui/DotBeackground";

import Skills from "@/components/skills";
import Navbar from "@/components/NavBar";
import AboutMe from "@/components/About"; 

export default function GridBackgroundDemo() { 
  // useEffect(()=>{

  //   setAbout(true);
  //   setSkill(false)
  //   setproject(false)
  // },[skill,about, project])

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
          </div>
        </TracingBeam>
      </HeroHighlight>
    </div>
  );
}


