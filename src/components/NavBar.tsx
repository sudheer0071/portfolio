 "use client"
import React, { useEffect, useState } from "react";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import { MotionConfig, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { aboutState, projectState, skillState } from "@/app/recoilContextProvider";
import { useRecoilState } from "recoil";
import { BackgroundGradient } from "./ui/Outline";
import Image from "next/image";
export default function Navbar() {
  const router = useRouter()
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "/about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];

  const [about, setAbout] = useRecoilState(aboutState)
  const [skill, setSkill] = useRecoilState(skillState)
  const [project, setProject] = useRecoilState(projectState)

  const [aboutHover, setAboutHover] = useState(false)
  const [skillHover, setSkillHover] = useState(false)
  const [projectHover, setProjectHover] = useState(false)
  
console.log(about);
console.log(skill);
console.log(project);

console.log("hover states");
console.log(aboutHover);
console.log(skillHover);
console.log(projectHover);



  return (
    <div>
      <BackgroundGradient className=" rounded-[22px] max-w-sm p-4 sm:p-10 bg-zinc-900" >
    <div className=" z-50 font-medium top-1 fixed backdrop-blur-sm rounded-full flex justify-center px-9 py-5">
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
    }}
    onHoverEnd={() => {
      setAboutHover(false);
    }}
    onClick={() => {
      console.log("about clicked"); 

      setSkill(false);
      setProject(false);
      setAbout(true);
    }}
    className="p-4 rounded-md text-sm lg:text-base relative no-underline duration-300 ease-in bg-transparent text-zinc-100"
    href="/#About"
  >
    <span className="font-jetbrain text-xl text-foreground">About</span>
    <motion.div
      animate={about?{  x: projectHover ? 415 : skillHover ? 200 : 0, width: projectHover ? 130 : 100 }:''} 
       
      transition={{
        type: "spring",
        stiffness: 200,
        damping: projectHover ? 10 : 7,
      }}
      className={`absolute -z-10 bottom-0 left-0 h-full ${about ? 'bg-[#CBA5F7]/70' : ''} rounded-full`}
      aria-hidden="true"
      style={{ width: "100%", opacity: 1 }}
    />
  </motion.a>

  <motion.a
    onHoverStart={() => {
      setProjectHover(false);
      setSkillHover(true);
      setAboutHover(false);
    }}
    onHoverEnd={() => {
      setSkillHover(false);
    }}
    onClick={() => {
      console.log('skill clicked'); 

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
        x: aboutHover ? -220 : projectHover ? 190 : 0,
        width: aboutHover ? 100 : projectHover ? 140 : 80,
      }:''} 
      className={` -z-10 absolute bottom-0 left-0 h-full ${skill ? 'bg-[#CBA6F7]/70' : ''} rounded-full`}
      aria-hidden="true"
      style={{ width: "100%", opacity: 1 }}
    />
  </motion.a>

  <motion.a
    onHoverStart={() => {
      setSkillHover(false);
      setProjectHover(true);
      setAboutHover(false);
    }}
    onHoverEnd={() => {
      setProjectHover(false);
    }}
    onClick={() => {
      console.log("project clicked"); 

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
        x: aboutHover ? -430 : skillHover ? -210 : -20,
        width: aboutHover ? 100 : skillHover ? 88 : 150,
      }:""}
      className={`absolute -z-10 bottom-0 left-0 h-full ${project ? 'bg-[#CBA6F7]/70' : ''} rounded-full`}
      aria-hidden="true"
      style={{ width: "100%", opacity: 1 }}
    />
  </motion.a> 
      </MotionConfig>
    </div> 
       
    </div> 
        
      </BackgroundGradient>
    </div>
  );
}
 