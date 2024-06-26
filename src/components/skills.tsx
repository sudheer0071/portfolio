"use client"
"use client";
import Image from "next/image";
import React, {  useRef }  from "react";
import { Space_Grotesk } from "next/font/google";
import { motion } from "framer-motion";
import {   useSetRecoilState } from "recoil";
import { aboutHoverState,   aboutState,   contactHoverState, contactState, projectHoverState,  projectState,  skillHoverState, skillState } from "@/app/recoilContextProvider";
import handleViewport from "react-in-viewport";
const space = Space_Grotesk({ subsets: ["latin"], weight: "400" });

 

const fronendskills = [
  {
    id: 1,
    name: "NextJs",
    icon: "/nxt.png",
  },
  {
    id: 2,
    name: "ReactJs",
    icon: "/react.svg",
  },
  {
    id: 3,
    name: "Typescript",
    icon: "/typescript-icon.svg",
  },
  {
    id: 4,
    name: "Javascript",
    icon: "/js.png",
  },
  
  
  {
    id: 5,
    name: "Python",
    icon: "/python.svg",
  },
  {
    id: 6,
    name: "C++",
    icon: "/cpp.svg",
  },
];

const backendSkills = [
  {
    id: 0,
    name: "TailwindCss",
    icon: "/tailwind.png",
  },
  {
    id: 1,
    name: "NodeJs",
    icon: "/nodejs.png",
  },
  {
    id: 2,
    name: "ExpressJs",
    icon: "/express.png",
  },
  {
    id: 3,
    name: "Django",
    icon: "/django.svg",
  },
  {
    id: 4,
    name: "Prisma",
    icon: "/prisma.png",
  },
];

const databases = [
  {
    id: 0,
    name: "MongoDB",
    icon: "/mongo.png",
  },
  {
    id: 1,
    name: "Postgres",
    icon: "/postgres.png",
  },
  {
    id: 2,
    name: "Redis",
    icon: "/redis.png",
  },
  {
    id: 3,
    name: "SQLite",
    icon: "/sqlite.svg",
  },
];

const tools = [
  {
    id: 0,
    name: "Docker",
    icon: "/docker.png",
  },
  {
    id: 1,
    name: "Git",
    icon: "/git.png",
  },
  {
    id: 2,
    name: "Github",
    icon: "/github.png",
  },
];

const tools_2 = [
  {
    id: 1,
    name: "VsCode",
    icon: "/vscode.png",
  },
  {
    id: 2,
    name: "IntelliJ",
    icon: "/intellij.svg",
  },
];

const tools_3 = [
  {
    id: 1,
    name: "Linux",
    icon: "/linux.png",
  },
]; 

const Tools = (({forwardedRef}:any)=>{
   return   <div ref={forwardedRef} className="viewport-block flex justify-center gap-10 mt-10 flex-wrap">
   {tools_2.map((skill) => (
     <motion.div
     key={skill.id}
     initial={{ scale: 0.3, opacity: 0 }}
     whileInView={{ scale: 1, opacity: 1 }}
     whileHover={{
       scale: 1.1,
       transition: {
         duration: 0.2,
         type: "spring",
         stiffness: 260,
         damping: 20,
       },
     }}
     transition={{
       duration: 1,
       type: "spring",
       stiffness: 260,
       damping: 20,
       delay: 0.2,
     }}
     whileTap={{
       scale: 0.9,
       transition: {
         duration: 0.2,
         type: "spring",
         stiffness: 260,
         damping: 20,
       },
     }}
       className="flex flex-wrap justify-center gap-6 cursor-pointer"
     >
       <div className="relative ">
         <span className="absolute top-0 left-0 mt-[5px] ml-[5px] h-full  rounded  bg-[#34c07c] w-[150px]"></span>
         <span
           className={` ${space.className} relative h-full rounded border-t-[1px] border-l-[1px] border-[#374151] bg-[#1e1e2e] px-4 py-3 text-md text-white  transition duration-100 flex items-center gap-2 justify-center w-[150px]`}
         >
           <Image
             src={skill.icon}
             width={25}
             height={25}
             alt={skill.name}
           />
           {skill.name}
         </span>
       </div>
     </motion.div>
   ))}
 </div>
})

const ViewTool = handleViewport(Tools)

 export default function Skills ( ) {
  //  const color = inViewport ? '#217ac0' : '#ff9800';
  //  const text = inViewport ? 'In viewport' : 'Not in viewport';
 


const setAboutHover = useSetRecoilState(aboutHoverState)
const setSkillHover = useSetRecoilState(skillHoverState)
const setProjectHover = useSetRecoilState(projectHoverState)
const setContactHover = useSetRecoilState(contactHoverState)


const setAbout = useSetRecoilState(aboutState)
const setSkill = useSetRecoilState(skillState)
const setProject = useSetRecoilState(projectState)
const setContact = useSetRecoilState(contactState)

const ref = useRef(null)

// useEffect(()=>{
//   console.log("inside skilll");
//   const observer = new IntersectionObserver(
//     ([entry])=>{
//       console.log("inside entry");
//       if (entry.isIntersecting) {
//         console.log("inside interaction");
        
//         setSkillHover(true);
//       }else{
//         setSkillHover(false)
//       }
//     },
//     {threshold:0.1}
//   )

//   if (ref.current) {
//     observer.observe(ref.current)
//   }

//   return ()=> {
//     if (ref.current) {
//       observer.unobserve(ref.current)
//     }
//   }

// },[skill])

   return (
     <div >
        <div className="flex justify-center flex-col viewport-block">
      <div className="flex items-center justify-center">
        <motion.span
          initial={{ scale: 0.8, x: -100, opacity: 0 }}
          whileInView={{ scale: 1, x: 0, opacity: 1 }}
          transition={{
            duration: 1,
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
           
          onLoadedData={()=>  {console.log("loaded");
           setSkillHover(true)}}
          className=" text-3xl text-purple-500 md:text-5xl font-bold"
        >{`<`}</motion.span>
        <motion.span
          initial={{ scale: 0.2, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 1,
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          className="text-6xl font-mono text-[#67e8f9] font-semibold"
        >
          Skills
        </motion.span>
        <motion.span
          initial={{ scale: 0.8, x: 100, opacity: 0 }}
          whileInView={{ scale: 1, x: 0, opacity: 1 }}
          transition={{
            duration: 1,
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          className=" text-3xl text-purple-500 md:text-5xl font-bold"
        >{`/>`}</motion.span>
      </div>
      <div className="flex justify-center gap-10 mt-10 flex-wrap">
        {fronendskills.map((skill) => (
          <motion.div
          key={skill.id}
          initial={{ scale: 0.3, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          whileHover={{
            scale: 1.1,
            transition: {
              duration: 0.2,
              type: "spring",
              stiffness: 260,
              damping: 20,
            },
          }}
          transition={{
            duration: 1,
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.2,
          }}
          whileTap={{
            scale: 0.9,
            transition: {
              duration: 0.2,
              type: "spring",
              stiffness: 260,
              damping: 20,
            },
          }}
            className="flex flex-wrap justify-center gap-6 cursor-pointer"
          >
            <div className="relative ">
              <span className="absolute top-0 left-0 mt-[5px] ml-[5px] h-full  rounded  bg-[#caa6f7] w-[150px] md:w-[160px]"></span>
              <span
                className={` ${space.className} relative h-full rounded border-t-[1px] border-l-[1px] border-[#374151] bg-[#1e1e2e] px-4 py-3 text-md text-white  transition duration-100 flex items-center gap-2 justify-center w-[150px] md:w-[160px]`}
              >
                <Image
                  src={`${skill.icon}`}
                  width={25}
                  height={25}
                  alt={skill.name}
                />
                {skill.name}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="flex justify-center gap-10 mt-10 flex-wrap">
        {backendSkills.map((skill) => (
          <motion.div
          key={skill.id}
            initial={{ scale: 0.3, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            whileHover={{
              scale: 1.1,
              transition: {
                duration: 0.2,
                type: "spring",
                stiffness: 260,
                damping: 20,
              },
            }}
            transition={{
              duration: 1,
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 0.2,
            }}
            whileTap={{
              scale: 0.9,
              transition: {
                duration: 0.2,
                type: "spring",
                stiffness: 260,
                damping: 20,
              },
            }}
            className="flex flex-wrap justify-center gap-6 cursor-pointer"
          >
            <div className="relative ">
              <span className="absolute top-0 left-0 mt-[5px] ml-[5px] h-full  rounded  bg-[#34c07c] w-[150px]"></span>
              <span
                className={` ${space.className} relative h-full rounded border-t-[1px] border-l-[1px] border-[#374151] bg-[#1e1e2e] px-4 py-3 text-md text-white  transition duration-100 flex items-center gap-2 justify-center w-[150px]`}
              >
                <Image
                  src={skill.icon}
                  width={25}
                  height={25}
                  alt={skill.name}
                />
                {skill.name}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="flex justify-center gap-10 mt-10 flex-wrap">
        {databases.map((skill) => (
          <motion.div
          key={skill.id}
          initial={{ scale: 0.3, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          whileHover={{
            scale: 1.1,
            transition: {
              duration: 0.2,
              type: "spring",
              stiffness: 260,
              damping: 20,
            },
          }}
          transition={{
            duration: 1,
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.2,
          }}
          whileTap={{
            scale: 0.9,
            transition: {
              duration: 0.2,
              type: "spring",
              stiffness: 260,
              damping: 20,
            },
          }}
            className="flex flex-wrap justify-center gap-6 cursor-pointer"
          >
            <div className="relative ">
              <span className="absolute top-0 left-0 mt-[5px] ml-[5px] h-full  rounded  bg-[#dc8070] w-[150px] md:w-[160px] "></span>
              <span
                className={` ${space.className} relative h-full rounded border-t-[1px] border-l-[1px] border-[#374151] bg-[#1e1e2e] px-4 py-3 text-md text-white  transition duration-100 flex items-center gap-2 justify-center w-[150px] md:w-[160px]`}
              >
                <Image
                  src={skill.icon}
                  width={25}
                  height={25}
                  alt={skill.name}
                />
                {skill.name}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="flex justify-center gap-10 mt-10 flex-wrap">
        {tools.map((skill) => (
          <motion.div
          key={skill.id}
          initial={{ scale: 0.3, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          whileHover={{
            scale: 1.1,
            transition: {
              duration: 0.2,
              type: "spring",
              stiffness: 260,
              damping: 20,
            },
          }}
          transition={{
            duration: 1,
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.2,
          }}
          whileTap={{
            scale: 0.9,
            transition: {
              duration: 0.2,
              type: "spring",
              stiffness: 260,
              damping: 20,
            },
          }}
            className="flex flex-wrap justify-center gap-6 cursor-pointer"
          >
            <div className="relative ">
              <span className="absolute top-0 left-0 mt-[5px] ml-[5px] h-full  rounded  bg-[#67e8f9] w-[150px]"></span>
              <span
                className={` ${space.className} relative h-full rounded border-t-[1px] border-l-[1px] border-[#374151] bg-[#1e1e2e] px-4 py-3 text-md text-white  transition duration-100 flex items-center gap-2 justify-center w-[150px]`}
              >
                <Image
                  src={skill.icon}
                  width={25}
                  height={25}
                  alt={skill.name}
                />
                {skill.name}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
      <div className=" ">
       <ViewTool 
       onEnterViewport={()=>{
        setContactHover(false)
        setProjectHover(false);
        setSkillHover(true);
        setAboutHover(false);
        setTimeout(() => {
           setSkill(true)
           setAbout(false)
           setProject(false)
           setContact(false)
        }, 1000);
       console.log("Inside tooolls.....")}
       } onLeaveViewport={()=> {
         setSkillHover(false);
          console.log("leaving viewPort")}
       }
       />
      </div>
      <div className="flex justify-center gap-10 mt-10">
        {tools_3.map((skill) => (
          <motion.div
          key={skill.id}
          initial={{ scale: 0.3, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          whileHover={{
            scale: 1.1,
            transition: {
              duration: 0.2,
              type: "spring",
              stiffness: 260,
              damping: 20,
            },
          }}
          transition={{
            duration: 1,
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.2,
          }}
          whileTap={{
            scale: 0.9,
            transition: {
              duration: 0.2,
              type: "spring",
              stiffness: 260,
              damping: 20,
            },
          }}
            className="flex flex-wrap justify-center gap-6 cursor-pointer"
          >
            <div className="relative  ">
              <span className="absolute top-0 left-0 mt-[5px] ml-[5px] h-full  rounded  bg-[#caa6f7] w-[150px]"></span>
              <span
                className={` ${space.className} relative h-full rounded border-t-[1px] border-l-[1px] border-[#374151] bg-[#1e1e2e] px-4 py-3 text-md text-white  transition duration-100 flex items-center gap-2 justify-center w-[150px]`}
              >
                <Image
                  src={skill.icon}
                  width={25}
                  height={25}
                  alt={skill.name}
                />
                {skill.name}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

     </div>
   );
 };
 
 