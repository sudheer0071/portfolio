"use client"
import React, { useRef, useState } from "react";
import { MotionConfig, motion } from "framer-motion";
import { aboutHoverState, aboutState, contactHoverState, contactState, onPageState,  projectHoverState, projectState, scrollState, skillHoverState, skillState } from "@/app/recoilContextProvider";
import { useRecoilState, useSetRecoilState } from "recoil";

export default function Navbar() {

  const [about, setAbout] = useRecoilState(aboutState)
  const [skill, setSkill] = useRecoilState(skillState)
  const [project, setProject] = useRecoilState(projectState)
  const [contact, setContact] = useRecoilState(contactState)

  const [aboutHover, setAboutHover] = useRecoilState(aboutHoverState)
  const [skillHover, setSkillHover] = useRecoilState(skillHoverState)
  const [projectHover, setProjectHover] = useRecoilState(projectHoverState)
  const [contactHover, setContactHover] = useRecoilState(contactHoverState)
  
  const setScrollState = useSetRecoilState(scrollState) 
  const [scrolling] = useRecoilState(scrollState)
 

  return (
    <div className=" flex justify-center">

      <div id="box" className="  shadow-lg shadow-gray-500 z-50 fixed font-medium top-1  backdrop-blur-sm rounded-full px-3 py-2">
        <div
        onClick={(event:React.SyntheticEvent)=>{  
          setScrollState(false)
          setTimeout(() => {
            setScrollState(true)
          }, 2000);
          console.log("scrolling: ");
          console.log(scrolling);
          
          event.preventDefault() 
          const target = event.target as HTMLAnchorElement
          console.log(target);
          
          const id = target.getAttribute('href')?.replace("/#",'')
          
          console.log("id = "+id);
          if(id=='About'){
            setAboutHover(true)
             
            setAbout(true)
          }
          else if (id=='Skills') {
            setContactHover(false)
            setProjectHover(false)
            setAboutHover(false)
            setSkillHover(true)
            setSkill(true)
            setAbout(false)
            setProject(false)
            setContact(false)
          }
          else if(id=='Projects'){
            setProjectHover(true)
            setProject(true)
          }
          else if(id == 'Contact'){
            setContactHover(true)
            setContact(true)
          }

          const element  = document.getElementById(String(id))
          element?.scrollIntoView({
            behavior:"smooth"
          })
        }}
        className="flex gap-32 ">
          <MotionConfig
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 7,
            }}
          >

            <motion.a
              onHoverStart={() => {

                setSkillHover(false);
                setProjectHover(false);
                setAboutHover(true);
                setContactHover(false)
              }}
              onHoverEnd={() => {
                setAboutHover(false);
              }}
              onClick={() => {
                console.log("about clicked");

                setSkill(false);
                setProject(false);
                setAbout(true);
                setContact(false)
              }}
 
              className="p-4 rounded-md text-sm lg:text-xl relative no-underline duration-300 ease-in bg-transparent text-zinc-100"
              href="/#About"
            >
              About 
              <motion.div
                animate={about ? { x: contactHover ? 665 : projectHover ? 417 : skillHover ? 210 : 0, width: projectHover ? 130:contactHover?110 : 93 } : ''}

                transition={{
                  type: "spring",
                  stiffness: projectHover ? 150 : contactHover ? 150 : 200,
                  damping: projectHover ? 10 : contactHover ? 12 : 7,
                }}
                className={`absolute -z-10 bottom-0 left-0 h-full ${about ? 'bg-[#93a5f3]/70' : ''} rounded-full`}
                aria-hidden="true"
                style={{ width: "100%", opacity: 1 }}
              />
            </motion.a>

            <motion.a
              onHoverStart={() => {
                setContactHover(false)
                setProjectHover(false);
                setSkillHover(true);
                setAboutHover(false);
              }}
              onHoverEnd={() => {
                setSkillHover(false);
              }}
              onClick={() => {
                console.log('skill clicked');
                setContact(false)
                setAbout(false);
                setProject(false);
                setSkill(true);
              }}
              className="p-4 rounded-md text-sm lg:text-xl relative no-underline duration-300 ease-in bg-transparent text-zinc-100"
              href="/#Skills"
            >
               Skills 
              <motion.div
                animate={skill ? {
                  x: aboutHover ? -220 : projectHover ? 200 : contactHover ? 440 : 0,
                  width: aboutHover ? 98 : projectHover ? 130 : contactHover ? 125 : 80,
                } : ''}
                className={` -z-10 absolute bottom-0 left-0 h-full ${skill ? 'bg-[#93a5f3]/70' : ''} rounded-full`}
                aria-hidden="true"
                style={{ width: "100%", opacity: 1 }}
              />
            </motion.a>

            <motion.a
              onHoverStart={() => {
                setContactHover(false)
                setSkillHover(false);
                setProjectHover(true);
                setAboutHover(false);
              }}
              onHoverEnd={() => {
                setProjectHover(false);
              }}
              onClick={() => {
                console.log("project clicked");
                setContact(false)
                setAbout(false);
                setSkill(false);
                setProject(true);
              }}
              className="p-4 rounded-md text-sm lg:text-xl relative no-underline duration-300 ease-in bg-transparent text-zinc-100"
              href="/#Projects"
            >
              Projects 
              <motion.div
                animate={project ? {
                  x: aboutHover ? -430 : skillHover ? -210 : contactHover ? 230 : -6,
                  width: aboutHover ? 100 : skillHover ? 88 : contactHover ? 120 : 120,
                } : ""}
                className={`absolute -z-10 bottom-0 left-0 h-full ${project ? 'bg-[#93a5f3]/70' : ''} rounded-full`}
                aria-hidden="true"
                style={{ width: "100%", opacity: 1 }}
              />
            </motion.a>
            <motion.a  
             
              onHoverStart={() => {
                setContactHover(true)
                setSkillHover(false);
                setProjectHover(false);
                setAboutHover(false);
              }}
              onHoverEnd={() => {
                setContactHover(false);
              }}
              onClick={( ) => {
                
                setContact(true)
                setAbout(false);
                setSkill(false);
                setProject(false);
              }}
              className="p-4 rounded-md text-sm lg:text-xl relative no-underline duration-300 ease-in bg-transparent text-zinc-100" 
              href="/#Contact"
            >
              Contact 
              <motion.div
                animate={contact ? {
                  x: aboutHover ? -670 : skillHover ? -450 : projectHover ? -240 : -8,
                  width: aboutHover ? 100 : skillHover ? 88 : projectHover ? 110 : 120,
                } : ""}
                transition={{
                  type: "spring",
                  stiffness: aboutHover || skillHover ? 170 : 200,
                  damping: aboutHover || skillHover ? 12 : 7,
                }}
                className={`absolute -z-10 bottom-0 left-0 h-full ${contact ? 'bg-[#93a5f3]/70' : ''} rounded-full`}
                aria-hidden="true"
                style={{ width: "100%", opacity: 1 }}
              />
            </motion.a>
          </MotionConfig>
        </div>

      </div>
    </div>
  );
}