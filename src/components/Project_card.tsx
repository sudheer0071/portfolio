import React, { useEffect, useState } from "react";

import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { HoverBorderGradient } from "@/components/ui/Button"; 
import { motion } from "framer-motion";
import SparkleHeader from "./SparkleHeader";
import { TypewriterEffect } from "./ui/TypeWriter"; 
import { useRecoilState } from "recoil";
import { aboutState, projectState, skillState } from "@/app/recoilContextProvider";
import Image from "next/image";
 

const words = [
  {
    text: "I'm",
  },
  {
    text: "a",
  },
  {
    text: "passionate ",
  },
  {
    text: "web",
    className: "text-blue-500 dark:text-blue-500",
  },
  {
    text: "developer",
    className: "text-blue-500 dark:text-blue-500",
  },
  {
    text: "from",
  },
  {
    text: "India.",
  }, 
];


const projects = [
  { 
    title:"Swasthlekh",
    details:[
      {
      header:'Streamlining Patient-Doctor Interactions: ',
      description:'Enhancing the ease ofcommunication and scheduling between patients and doctors to provide a smoother experience.'
      },
      {
      header:'Optimizing Time Management:',
      description:"Reducing waiting times and making the best use of both patient's and doctor's time. Reduced wait time 65%, leading to 25% more patients per day for doctors."
      },
      {
      header:'Ensuring Smooth Workflow:',
      description:"Improving the flow of operations across various hospital processes such as OPD checkups, report understanding for patients, and medical record management."
      },
    ],
    typer:[
      {
        text: "Swasth",
        className: "text-white dark:text-blue-500",
      },
      {
        text: "लेख",
        className: "text-pink-500 dark:text-blue-500",
      },
      {
        text: "web",
      },
      {
        text: "app ",
      },
      {
        text: ",",
      },
      {
        text: "the", 
      },
      {
        text: "project's",
      },
      {
        text: "objective",
      }, 
      {
        text: "is",
      }, 
      {
        text: "to",
      }, 
      {
        text: "enhance",
      }, 
      {
        text: "the",
      }, 
      {
        text: "efficiency",
        className: "text-blue-500 dark:text-blue-500",
      }, 
      {
        text: "of",
      }, 
      {
        text: "the",
      }, 
      {
        text: "entire",
      }, 
      {
        text: "hospital",
      }, 
      {
        text: "system",
      }, 
      {
        text: "by",
      }, 
      {
        text: "streamlining",
        className: "text-blue-500 dark:text-blue-500",
      }, 
      {
        text: "patient",
        className: "text-blue-500 dark:text-blue-500",
      }, 
      {
        text: "-",
        className: "text-blue-500 dark:text-blue-500",
      }, 
      {
        text: "doctor",
        className: "text-blue-500 dark:text-blue-500",
      }, 
      {
        text: "interactions.",
        className: "text-blue-500 dark:text-blue-500",
      }, 
    ],
    description:"Swasthlekh web app, The project's objective is to enhance the efficiency of the entire hospital system by streamlining patient-doctor interactions",
    techStack:['react.svg','tailwind.png','typescript-icon.svg','nodejs.png','express.png','prisma.png','postgres.png','cloudvision.svg','google-cloud.svg'],
    live:"swasthlekh.vercel.app",
    git:"swasthlekh", 
    src:"swasthlekh_home"
  }, 
  { 
    title:"MLHybridX-Module",
    details:[ 
      {
      header:'Perform Basic ML tasks just by calling single functions:',
      description:"Generally on implementing any ML algorithm , many steps are needed to perform, where more code is needed to be written, by using this module, perform simple data analysis, in just few lines of code !"
      }, 
      {
      header:'Deal with dataset seamlessly:',
      description:"Dealing with data becomes easy on using MLHybridx as it allows users to perform tasks like train, test and split by just calling simple functions."
      }, 
    ],
    typer:[ 
      {
        text: "This",
      },  
      {
        text: "project",
      }, 
      {
        text: "focuses",
      }, 
      {
        text: "on",
      }, 
      {
        text: "the",
      }, 
      {
        text: "implementation",
        className: "text-blue-500 dark:text-blue-500",
      }, 
      {
        text:"of"
      },
      {
        text:"fundamental"
      },
      {
        text:"Machine",
        className: "text-blue-500 dark:text-blue-500",
      },
      {
        text:"Learning",
        className: "text-blue-500 dark:text-blue-500",
      },
      {
        text:"Algorithms",
        className: "text-blue-500 dark:text-blue-500",
      },
      {
        text:"from"
      },
        
      {
        text:"scratch."
      },
        
    ], 
    description:"The primary goal is to gain a deep understanding of how these algorithms work by coding them manually. By implementing algorithms like linear regression and logistic regression, we can explore their inner workings, mathematical foundations, and practical applications.",
    techStack:['python.svg','sciket.png','pypi.svg' ],
    live:"ml",
    git:"MLHybridX-Module",
    src:"mlxhybrid", 
  }, 
  { 
    title:"Medium",
    details:[ 
      {
      header:'Easy to use and access blogs:',
      description:"Read the blogs from anywhere in the globe posted by anyone with more user freiendly and simple UI."
      }, 
      {
      header:'Post or Edit your own blogs:',
      description:"No word limit ! , wirte blogs without worrying about number of words, users can able to create blog and post it and can edit anytime if changes are needed."
      }, 
    ],
    typer:[ 
      {
        text: "A",
      },  
      {
        text: "place",
      }, 
      {
        text: "where",
      }, 
      {
        text: "users",
      }, 
      {
        text: "can",
      }, 
      {
        text: "Read",
        className: "text-blue-500 dark:text-blue-500",
      }, 
      {
        text:","
      },
      {
        text: "Write",
        className: "text-purple-500 dark:text-blue-500",
      }, 
      {
        text: "and", 
      }, 
      {
        text: "Post",
        className: "text-emerald-500 dark:text-blue-500",
      },  
      {
        text: "blogs.",
        className: "text-white font-semibold dark:text-blue-500",
      },  
    ], 
    description:"Medium Clone with more interactive interface where anyone can post blogs and edit them.",
    techStack:['react.svg','tailwind.png','typescript-icon.svg','nodejs.png','express.png','prisma.png','postgres.png','cloudflare.svg' ],
    live:"medium-chindi.vercel.app/signup",
    git:"Medium-blogs",
    src:"medium_home", 
  },  
  { 
    title:"Portfolio",
    details:[ 
      {
      header:'Why these animtions?',
      description:"Because i love animations!"
      }, 
      {
      header:'Difficult bit:',
      description:"That floating springy animation thingy you seen on top in navbar was little challenging, rest is cool :)"
      }, 
    ],
    typer:[ 
      {
        text: "Well",
      },  
      {
        text: "this",
      }, 
      {
        text: "is",
      }, 
      {
        text: "portfolio",
      }, 
      {
        text: "handcrafted",
      }, 
      {
        text: "by",
      }, 
      {
        text: "me", 
      }, 
      {
        text: "in", 
      }, 
      {
        text: "10",
        className: "text-pink-500 ",
      }, 
      {
        text: "hours",
        className: "text-pink-500  ",
      }, 
      {
        text: ";)",
        className: " font-medium text-pink-500  ",
      },  
      {
        text: "sudheer0071",
        className: " cursor-pointer text-purple-500 dark:text-blue-500",
      },  
    ], 
    description:"A simple portfolio made with <3 by me. ",
    techStack:['nxt.png','next-js.svg','framer.svg','react.svg','tailwind.png','typescript-icon.svg', ],
    live:"sudheer.tech",
    git:"Medium-blogs",
    src:"portfolio_home", 
  },  
  
]

export default function ProjectCard({forwardedRef}:any){

const [about, setAbout] = useRecoilState(aboutState)
const [skill, setSkill] = useRecoilState(skillState)
const [project, setProject] = useRecoilState(projectState)

// useEffect(()=>{
//   setAbout(false)
//   setSkill(false)
//   setProject(true)
// },[ project])

  return <div ref={forwardedRef} className=" viewport-block mb-3"> 
      <div className=" ml-10 text-6xl items-center flex justify-center  ">
           <motion.div 
           initial = {{scale:0.8,x:-200, opacity:0}}
           whileInView={{scale:1,x:0, opacity:1}}
           transition={{ 
            type:"spring",
            stiffness:260,
            damping:20,
           }}
           className=" text-purple-500 font-bold" 
           >
            {'<'}
           </motion.div>
           <motion.div
            initial = {{scale:0.3,  opacity:0}}
            whileInView={{scale:1,  opacity:1}}
            transition={{  
              type:"spring",
              stiffness:260,
              damping:20,
            }}
           className="text-6xl font-mono text-[#67e8f9] font-semibold">
            Projects
           </motion.div>
           <motion.div
            initial = {{scale:0.8,x:200, opacity:0}}
            whileInView={{scale:1,x:0, opacity:1}}
            transition={{  
              type:"spring",
              stiffness:260,
              damping:20,
            }}
           className=" font-bold text-purple-500">
            {'/>'}
           </motion.div>
      </div>
      {projects.map((project,idx)=>(
      <div key={idx} className="grid md:grid-cols-2 grid-cols-1 gap-10 md:gap-20 place-items-center"> 
    <motion.div
      initial = {{scale:0.8,x:-200, opacity:0}}
      whileInView={{scale:1,x:0, opacity:1}}
      transition={{ 
       type:"spring",
       stiffness:260,
       damping:20,
      }}
    >
    <div className={`  ${project.title.includes('Module')?' ':'w-80'} text-white`}> 
      <SparkleHeader project={true} text={project.title}/>
      </div>
      <div className=" max-w-xl w-full">
    <TypewriterEffect words={project.typer}/>
      </div> 
       {project.details.map((detail, idx)=>(
        <div key={idx}>
   <div className=" bg-gradient-to-r from-pink-300  to-indigo-400 inline-block text-transparent bg-clip-text font-medium text-2xl mt-5">
   {detail.header} 
   </div>
   <p className=" text-gray-200  "> 
  {detail.description}</p>
        </div>
    ))}
    </motion.div>
    <motion.div
      initial = {{scale:0.8,x:200, opacity:0}}
      whileInView={{scale:1,x:0, opacity:1}}
      transition={{ 
       type:"spring",
       stiffness:260,
       damping:20,
      }}
    className=" "> 
      <div className="relative animate-float hover:animate-none"> 
       <CardContainer className=" inter-var">
        <CardBody className=" bg-gray-900 relative group/card hover:shadow-2xl hover:shadow-gray-300 hover:border-none border-white w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
          <CardItem translateZ={50} className="  flex justify-center font-bold text-3xl text-neutral-300 dark:text-white">
          {project.title}
          </CardItem> 
          <CardItem as={"p"} translateZ={60} className=" font-mono flex justify-center  max-w-sm mt-2 text-neutral-300 dark:text-white">
          {project.description}
          </CardItem> 
          <CardItem translateZ={100} className=" w-full mt-4">  
            <img src={`https://pub-e8df4856c93040158123b7cc75760e95.r2.dev/${project.src}.png`} height={1000} width={1000} className=" h-60 w-full rounded-xl g group-hover/card:shadow-2xl group-hover/card:shadow-black-500" alt="swasthlekh " />
          </CardItem> 
          <div className="flex justify-center items-center mt-7 gap-5 text-white">
          {project.techStack.map((tech,idx)=>(
            <Image
            src={`/${tech}`}
            key={idx} width={tech.includes("sciket")?70:30} height={30}
            alt={tech}
            />
            
          ))}
          </div>
          <div className={` flex ${project.live.includes("sudheer")?' justify-center':"justify-between"} items-center mt-16`}>
            <CardItem translateX={ project.live.includes("sudheer") ?0:23}>
            <HoverBorderGradient>
              <a href={project.live=="ml"?'https://pypi.org/project/mlhybridx/':`https://${project.live}`} target="_blank">{project.live=='ml'?'Docs / Installation':'Live'}</a>
            </HoverBorderGradient>
            </CardItem>
            {!project.live.includes("sudheer")?<CardItem translateX={-23}>
            <HoverBorderGradient>
              <a href={`https://github.com/sudheer0071/${project.git}`} target="_blank">Github</a> 
            </HoverBorderGradient>
            </CardItem> :''}
            
          </div>
        </CardBody>
       </CardContainer> 
    </div>
      </motion.div>
  </div>
      ))}
    
  </div>
}