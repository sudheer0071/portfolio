"use client"
import React, { useEffect, useRef, useState } from "react";
import { TracingBeam } from "@/components/ui/TracingScoll";
import ProjectCard from "@/components/Project_card";
import { HeroHighlight } from "@/components/ui/DotBeackground";
import { aboutHoverState, aboutState, contactHoverState, contactState, onPageState, projectHoverState, projectState, scrollState, skillHoverState, skillState, smallState } from "./recoilContextProvider";

import Skills from "@/components/skills";
import Navbar from "@/components/NavBar";
import AboutMe from "@/components/About"; 
import Contact from "@/components/Contact";
import {  useRecoilState, useSetRecoilState } from "recoil";
import handleViewport from 'react-in-viewport'; 
import { motion } from "framer-motion"; 
import { ReactLenis } from "@studio-freight/react-lenis";
import SmoothScrolling from "@/components/SmoothScroll";
 
export default function GridBackgroundDemo() { 

 

  const setAbout = useSetRecoilState(aboutState)
  const setSkill = useSetRecoilState(skillState)
  const setProject = useSetRecoilState(projectState)
  const setContact = useSetRecoilState(contactState)

  const setAboutHover = useSetRecoilState(aboutHoverState)
  const setSkillHover = useSetRecoilState(skillHoverState)
  const setProjectHover = useSetRecoilState(projectHoverState)
  const setContactHover = useSetRecoilState(contactHoverState)
  const setSmall = useSetRecoilState(smallState)
  
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

    const handleResize = ()=>{
      if (window.innerWidth<640) {
        console.log("inside smalllllllllllllllllll");
        
        setSmall(true);
      }
    }
    const mediaQuery = window.matchMedia('(max-width: 640px)');
    const handleMediaQueryChange = (e:any) => {
      if (e.matches) {
        setSmall(true);
      }
    };

    // Initial check
    if (mediaQuery.matches) {
      setSmall(true);
    }

    // Add event listeners
    mediaQuery.addEventListener('change', handleMediaQueryChange);
    window.addEventListener('resize', handleResize);

    // Clean up event listeners on component unmount
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
      window.removeEventListener('resize', handleResize);
    };
  },[])
 

 
const ViewportContact = handleViewport(Contact,/** options: {}, config: {} **/) 
 
  return ( 
    < div  
    className=" scroll-smooth h-screen ">  
    <SmoothScrolling>
      <HeroHighlight className=" flex justify-start overflow-x-hidden">

        <TracingBeam className="">
          <motion.div 
          className=" lg:ml-0 flex-col">
            <div id="NAVBAR" className="mt-8 text-white hidden md:flex lg:flex justify-center">
              <Navbar />
            </div>

            <div id="About" className=" md:ml-10 lg:ml-5 my-20 flex justify-center  ">  
              <AboutMe/>
            </div> 
            <div  id="Skills" className=" my-20 ">
              <div className="flex justify-center ">
                <Skills /> 
              </div>
            </div>
            <div id="Projects" className=" px-10 md:px-0 lg:px-0">
              <ProjectCard/> 
            </div>
            <div id="Contact" className=" mt-40">  
              {scrolling? <ViewportContact onEnterViewport={()=>{
                 setContactHover(true)
                 setProjectHover(false);
                 setSkillHover(false);
                 setAboutHover(false);
                //  setProject(false)
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
                    setProject(true)
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
    </SmoothScrolling>

   
    </ div> 
  );
}
  