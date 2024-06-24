"use client"
import React, { useEffect } from "react";
import { TracingBeam } from "@/components/ui/TracingScoll";
import ProjectCard from "@/components/Project_card";
import { HeroHighlight } from "@/components/ui/DotBeackground";

import Skills from "@/components/skills";
import Navbar from "@/components/NavBar";
import AboutMe from "@/components/About";
import { useRecoilState } from "recoil";
import { aboutState, projectState, skillState } from "./recoilContextProvider";

export default function GridBackgroundDemo() {

  const [about, setAbout] = useRecoilState(aboutState)
  const [skill, setSkill] = useRecoilState(skillState)
  const [project, setproject] = useRecoilState(projectState)

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


