"use client"

import React, { useEffect, useState } from "react";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import { MotionConfig, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { aboutState, projectState, skillState } from "@/app/recoilContextProvider";
import { useRecoilState } from "recoil";

export const Test = () => {
  const [about, setAbout] = useRecoilState(aboutState)
  const [skill, setSkill] = useRecoilState(skillState)
  const [project, setproject] = useRecoilState(projectState)
  const [aboutHover, setAboutHover] = useState(false)
  const [skillHover, setSkillHover] = useState(false)
  const [projectHover, setProjectHover] = useState(false)

  const [hover, setHover] = useState(false)
  const [isHovered, setIsHovered] = useState(false);
  return <div>
    <div className="flex gap-20">
      <MotionConfig
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 7,
        }}
      >
        <motion.a 
         onHoverStart={() => {setSkillHover(false); setProjectHover(false); setAboutHover(true)}}
         onHoverEnd={() => {setAboutHover(false)}} 
         onClick={()=> {setAbout(true);setSkill(false);setproject(false)}}  

         className="px-4 py-2 rounded-md text-sm lg:text-base relative no-underline duration-300 ease-in bg-transparent text-zinc-100" data-active="true" href="/#About">

          <span className="font-jetbrain text-xl text-foreground">About</span>
          <motion.div
             animate={{ x: projectHover ? 200 :skillHover?100: 0}} 

            className={`absolute bottom-0 left-0 h-full ${about ? 'bg-[#CBA6F7]/70' : ''}  hover:bg-[#CBA6F7]/70 rounded-full  `} aria-hidden="true" style={{ width: "100%", opacity: 1 }}></motion.div>
        </motion.a>

        <motion.a  
        onHoverStart={() => {setSkillHover(true); setProjectHover(false); setAboutHover(false)}}
        onHoverEnd={() => {setSkillHover(false) }}
        // onHoverEnd={() => {setSkillHover(false); setProjectHover(false); setAboutHover(true)}}
       onClick={()=> { setSkill(true); setAbout(false);setproject(false)}}

        className="px-4 py-2 rounded-md text-sm lg:text-base relative no-underline duration-300 ease-in bg-transparent text-zinc-100" data-active="true" href="/#Skills">
          <span className="font-jetbrain text-xl text-foreground">Skils</span>
          {<motion.div
          animate={{ x: aboutHover ? -100 :projectHover?120: 0}}

            className={`absolute bottom-0 left-0 h-full ${skill ? 'bg-[#CBA6F7]/70' : ''} hover:bg-[#CBA6F7]/70 rounded-full z-10`} aria-hidden="true" style={{ width: "100%", opacity: 1 }}></motion.div>}
        </motion.a>

        <motion.a 
         onHoverStart={() => {setSkillHover(false); setProjectHover(true); setAboutHover(false)}}
         onHoverEnd={() => {setProjectHover(false)}} 
           onClick={()=> {setAbout(false);setSkill(false);setproject(true)}} 
           className="px-4 py-2 rounded-md text-sm lg:text-base relative no-underline duration-300 ease-in bg-transparent text-zinc-100" data-active="true" href="/#Projects">

          <span className="font-jetbrain text-xl text-foreground">Projects</span>

          <motion.div 
          animate={{ x: aboutHover ? -200 :skillHover?-120: 0}}
          className={`absolute bottom-0 left-0 h-full ${project ? 'bg-[#CBA6F7]/70' : ''}  rounded-full -z-10`} aria-hidden="true" style={{ width: "100%", opacity: 1 }}>
            
          </motion.div>
          </motion.a>
        {/* <a
         onClick={() => { setAbout(false); setSkill(false); setproject(true) }} className="px-4 py-2 rounded-md text-sm lg:text-base relative no-underline duration-300 ease-in bg-transparent text-zinc-100" data-active="true" href="/">
          <span className="font-jetbrain text-xl text-foreground">Conact</span>
          <div className={`absolute bottom-0 left-0 h-full ${project ? 'bg-[#CBA6F7]/70' : ''}  rounded-full -z-10`} aria-hidden="true" style={{ width: "100%", opacity: 1 }}></div>
          </a> */}
      </MotionConfig>

    </div>
  </div>
}