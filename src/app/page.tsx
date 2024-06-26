"use client"
import React, { useEffect } from "react";
import { TracingBeam } from "@/components/ui/TracingScoll";
import ProjectCard from "@/components/Project_card";
import { HeroHighlight } from "@/components/ui/DotBeackground";
import { aboutHoverState, aboutState, contactHoverState, contactState, projectHoverState, projectState, skillHoverState, skillState } from "./recoilContextProvider";

import Skills from "@/components/skills";
import Navbar from "@/components/NavBar";
import AboutMe from "@/components/About"; 
import Contact from "@/components/Contact";
import { useRecoilState, useSetRecoilState } from "recoil";
import handleViewport from 'react-in-viewport'; 

export default function GridBackgroundDemo() { 

  

  const setAbout = useSetRecoilState(aboutState)
  const setSkill = useSetRecoilState(skillState)
  const setProject = useSetRecoilState(projectState)
  const setContact = useSetRecoilState(contactState)

  const setAboutHover = useSetRecoilState(aboutHoverState)
  const setSkillHover = useSetRecoilState(skillHoverState)
  const setProjectHover = useSetRecoilState(projectHoverState)
  const setContactHover = useSetRecoilState(contactHoverState)
  
  

  useEffect(()=>{ 
    setAbout(true);
    setSkill(false)
    setProject(false)
    setContact(false)
  },[])

const ViewportAbout = handleViewport(AboutMe,  /** options: {}, config: {} **/)
const ViewportSkill = handleViewport(Skills,/** options: {}, config: {} **/)
const ViewportProject = handleViewport(ProjectCard,/** options: {}, config: {} **/)
const ViewportContact = handleViewport(Contact,/** options: {}, config: {} **/)


  return (
    <div className=" ">
      <HeroHighlight className=" flex justify-start overflow-x-hidden">

        <TracingBeam className="">
          <div className=" flex-col">
            <div id="NAVBAR" className=" mt-8 text-white flex justify-center">
              <Navbar />
            </div>

            <div id="About" className=" my-20 flex justify-center  "> 
              {/* <ViewportAbout onEnterViewport={()=>{
                 setContactHover(false)
                 setProjectHover(false);
                 setSkillHover(false);
                 setAboutHover(true); 
              //    setTimeout(() => {
              //     setSkill(false)
              //     setAbout(true)
              //     setProject(false)
              //     setContact(false)
              //  }, 1000);
                console.log("entered viewport")}
                } onLeaveViewport={()=> {setAboutHover(false); console.log("leaving viewPort")}
                } /> */}
                <AboutMe/>
            </div>

            <div  id="Skills" className=" my-20 ">
              <div className="flex justify-center ">
                <Skills />
                {/* <ViewportSkill onEnterViewport={()=>{
                 setContactHover(false)
                 setProjectHover(false);
                 setSkillHover(true);
                 setAboutHover(false);
                //  setTimeout(() => {
                //     setSkill(true)
                //     setAbout(false)
                //     setProject(false)
                //     setContact(false)
                //  }, 1000);
                console.log("entered viewport")}
                } onLeaveViewport={()=> {
                  setSkillHover(false);
                   console.log("leaving viewPort")}
                } /> */}
              </div>
            </div>
            <div id="Projects" className="  ">
              {/* <ProjectCard/> */}
            <ViewportProject onEnterViewport={()=>{
                 setContactHover(false)
                 setProjectHover(true);
                 setSkillHover(false);
                 setAboutHover(false);
              //    setTimeout(() => {
              //     setSkill(false)
              //     setAbout(false)
              //     setProject(true)
              //     setContact(false)
              //  }, 1000);
                console.log("entered viewport")}
                } onLeaveViewport={()=> {
                  setProjectHover(false);
                  // setSkillHover(true) 
                  // setContactHover(true)
                  // setAboutHover(true)
                   console.log("leaving viewPort")}
                } /> 
            </div>
            <div id="Contact" className="  "> 
              {/* <Contact/> */}
              <ViewportContact onEnterViewport={()=>{
                 setContactHover(true)
                 setProjectHover(false);
                 setSkillHover(false);
                 setAboutHover(false);
              //    setTimeout(() => {
              //     setSkill(false)
              //     setAbout(false)
              //     setProject(false)
              //     setContact(true)
              //  }, 1000);
                console.log("entered viewport")}
                } onLeaveViewport={()=> {setContactHover(false); 
                    console.log("leaving viewPort")}
                } />
            </div>
          </div>
        </TracingBeam>
      </HeroHighlight>
    </div>
  );
}

