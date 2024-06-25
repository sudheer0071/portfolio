 "use client"
import React, { useState } from "react"; 
import { MotionConfig, motion } from "framer-motion"; 
import { aboutState, contactState, projectState, skillState } from "@/app/recoilContextProvider";
import { useRecoilState } from "recoil"; 
export default function Navbar() { 

  const [about, setAbout] = useRecoilState(aboutState)
  const [skill, setSkill] = useRecoilState(skillState)
  const [project, setProject] = useRecoilState(projectState)
  const [contact, setContact] = useRecoilState(contactState)

  const [aboutHover, setAboutHover] = useState(false)
  const [skillHover, setSkillHover] = useState(false)
  const [projectHover, setProjectHover] = useState(false)
  const [contactHover, setContactHover] = useState(false)
  
console.log(about);
console.log(skill);
console.log(project);
console.log(contact);

console.log("hover states");
console.log(aboutHover);
console.log(skillHover);
console.log(projectHover);



  return (
    <div className=" flex justify-center">                        
   
    <div id="box" className="  shadow-lg shadow-gray-500 z-50 fixed font-medium top-1  backdrop-blur-sm rounded-full px-3 py-2">
       <div className="  flex gap-32"> 
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
    className="p-4 rounded-md text-sm lg:text-base relative no-underline duration-300 ease-in bg-transparent text-zinc-100"
    href="/#About"
  >
    <span className="font-jetbrain text-xl text-foreground">About</span>
    <motion.div
      animate={about?{  x: contactHover?670 : projectHover ? 417 : skillHover ? 210 : 0, width: projectHover ? 130 : 100 }:''} 
       
      transition={{
        type: "spring",
        stiffness: 200,
        damping: projectHover|| contactHover ? 10 : 7,
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
    className="p-4 rounded-md text-sm lg:text-base relative no-underline duration-300 ease-in bg-transparent text-zinc-100"
    href="/#Skills"
  >
    <span className="font-jetbrain text-xl text-foreground">Skills</span>
    <motion.div
      animate={skill?{
        x: aboutHover ? -220 : projectHover ? 200 : contactHover? 440 : 0,
        width: aboutHover ? 98 : projectHover ? 130 :contactHover?125: 80,
      }:''} 
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
    className="p-4 rounded-md text-sm lg:text-base relative no-underline duration-300 ease-in bg-transparent text-zinc-100"
    href="/#Projects"
  >
    <span className="font-jetbrain text-xl text-foreground">Projects</span>
    <motion.div
      animate={project?{
        x: aboutHover ? -430 : skillHover ? -210 : contactHover? 230: -20,
        width: aboutHover ? 100 : skillHover ? 88 :contactHover?120: 150,
      }:""}
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
    onClick={() => {
      console.log("project clicked"); 
  setContact(true)
      setAbout(false);
      setSkill(false);
      setProject(false);
    }}
    className="p-4 rounded-md text-sm lg:text-base relative no-underline duration-300 ease-in bg-transparent text-zinc-100"
    href="/#Contact"
  >
    <span className="font-jetbrain text-xl text-foreground">Contact</span>
    <motion.div
      animate={contact?{
        x: aboutHover ? -670 : skillHover ? -450 : projectHover? -240 : -8,
        width: aboutHover ? 100 : skillHover ? 88 : 120,
      }:""}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: aboutHover|| skillHover ? 10 : 7,
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
 