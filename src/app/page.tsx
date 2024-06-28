"use client"
import React, { useEffect, useRef, useState } from "react";
import { TracingBeam } from "@/components/ui/TracingScoll";
import ProjectCard from "@/components/Project_card";
import { HeroHighlight } from "@/components/ui/DotBeackground";
import { aboutHoverState, aboutState, contactHoverState, contactState, onPageState, projectHoverState, projectState, scrollState, skillHoverState, skillState } from "./recoilContextProvider";

import Skills from "@/components/skills";
import Navbar from "@/components/NavBar";
import AboutMe from "@/components/About"; 
import Contact from "@/components/Contact";
import {  useRecoilState, useSetRecoilState } from "recoil";
import handleViewport from 'react-in-viewport'; 
import { motion } from "framer-motion";

export default function GridBackgroundDemo() { 

 

  const setAbout = useSetRecoilState(aboutState)
  const setSkill = useSetRecoilState(skillState)
  const setProject = useSetRecoilState(projectState)
  const setContact = useSetRecoilState(contactState)

  const setAboutHover = useSetRecoilState(aboutHoverState)
  const setSkillHover = useSetRecoilState(skillHoverState)
  const setProjectHover = useSetRecoilState(projectHoverState)
  const setContactHover = useSetRecoilState(contactHoverState)
  
  const setScrollState = useSetRecoilState(scrollState) 
  const [scrolling] = useRecoilState(scrollState)
  const [onPage] = useRecoilState(onPageState)
  console.log("scrolling in page.tsx: "+scrolling);
  
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(()=>{ 
    setAbout(true);
    setSkill(false)
    setProject(false)
    setContact(false)
  },[])
 
 
const ViewportContact = handleViewport(Contact,/** options: {}, config: {} **/) 
 
  return (
    < div  
    className=" scroll scroll-smooth h-screen"> 
      <HeroHighlight className=" flex justify-start overflow-x-hidden">

        <TracingBeam className="">
          <motion.div 
          className=" flex-col">
            <div id="NAVBAR" className=" mt-8 text-white flex justify-center">
              <Navbar />
            </div>

            <div id="About" className=" my-20 flex justify-center  ">  
              <AboutMe/>
            </div> 
            <div  id="Skills" className=" my-20 ">
              <div className="flex justify-center ">
                <Skills /> 
              </div>
            </div>
            <div id="Projects" className="  ">
              <ProjectCard/> 
            </div>
            <div id="Contact" className="  ">  
              {scrolling? <ViewportContact onEnterViewport={()=>{
                 setContactHover(true)
                 setProjectHover(false);
                 setSkillHover(false);
                 setAboutHover(false);
                 setTimeout(() => {
                  setSkill(false)
                  setAbout(false)
                  setProject(false)
                  setContact(true)
               }, 1000);
                console.log("entered viewport")}
                } onLeaveViewport={()=> {
                  setContactHover(false) 
                  setProjectHover(true); 
                  setTimeout(() => {
                    // setProject(true)
                    setAbout(false)
                    setSkill(false)
                    setContact(false)
                  }, 1000); 
                    console.log("leaving viewPort")}
                } />:<Contact/>}
             
            </div>
          </motion.div>
        </TracingBeam>
      </HeroHighlight>
    </ div>
  );
}
  