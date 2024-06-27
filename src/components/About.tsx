"use client"
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { CircleCheck, GithubIcon, LinkedinIcon, Mail } from 'lucide-react'; 
import { HoverBorderGradient } from "@/components/ui/Button"; 
import { TypewriterEffect } from "@/components/ui/TypeWriter";
 
import {toast, Toaster } from "sonner";
import { ButtonsCard } from "@/components/SpinnerButton"; 
import SparkleHeader from "@/components/SparkleHeader"; 
import TextGenerateEffect from "@/components/ui/GenerateText"; 
import reactElementToJSXString from "react-element-to-jsx-string";
import { IconClipboard } from "@tabler/icons-react"; 
import handleViewport from "react-in-viewport";
import { aboutHoverState, aboutState, contactHoverState, contactState, projectHoverState, projectState, skillHoverState, skillState } from "@/app/recoilContextProvider";
import { useRecoilState, useSetRecoilState } from "recoil";

export default function AboutMe({forwardedRef}:any){ 
  // useEffect(()=>{
  //   setAbout(true)
  //   setSkill(false)
  //   setProject(false)
  // },[about]) 
  
  const [about, setAbout] = useRecoilState(aboutState)
  const [skill, setSkill] = useRecoilState(skillState)
  const [project, setProject] = useRecoilState(projectState)
  const [contact, setContact] = useRecoilState(contactState)

  const setAboutHover = useSetRecoilState(aboutHoverState)
  const setSkillHover = useSetRecoilState(skillHoverState)
  const setProjectHover = useSetRecoilState(projectHoverState)
  const setContactHover = useSetRecoilState(contactHoverState)

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
      text: "full",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "stack",
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

  const copy = (button: any) => {
    if (button.code) {
      copyToClipboard(button.code);
      return;
    }
    let buttonString = reactElementToJSXString(button.string);
 
    if (buttonString) {
      const textToCopy = buttonString;
      copyToClipboard(textToCopy);
    }
  };
 
  const copyToClipboard = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        console.log("Text copied to clipboard:", text);
        toast.success(<div className=" font-semibold text-base">
          <div className=" flex">
          <div className=" ">
          <CircleCheck/>
          </div>
          <div className=" ml-4">            
          Copied to clipboard
          </div>
          </div>
          <div className=" ml-10">I hope you run this in your terminal :)</div>
          </div>);
      })
      .catch((err) => {
        console.error("Error copying text to clipboard:", err);
        toast.error("Error copying to clipboard");
      });
  };
 const words2 = " Hey there! I'm Sudheer, a Developer  by profession. Currently hacking with web development more focussed towards backend, building supercool websites and integrating it with databases! "
  
const GeneratedText = ({forwardedRef}:any)=>{
  return   <div ref={forwardedRef} className="viewport-block max-w-md  text-xl italic font-mono text-[#b2dbf2]">
  <TextGenerateEffect className="text-[#b2dbf2]" words={words2} /> 
 </div>
} 

const ViewText = handleViewport(GeneratedText)


  return <div ref={forwardedRef} className=" viewport-block">
     <div className="grid md:grid-cols-2 grid-cols-1 gap-10 md:gap-20 place-items-center">
    <div>
      <div className=" bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text  ">
      {/* <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-400 py-8">
        Portfolio
      </p>  */} 
      <SparkleHeader text="Sudheer Chaurasia"/>
      </div>
      <div className=" w-full">
    <TypewriterEffect words={words}/>
      </div>

     <div>
     <div className=" flex items-center my-7 gap-5"> 
      <div className="  "> 
            <HoverBorderGradient className=" ">
              <a href={`https://github.com/sudheer0071`} target="_blank"> 
              <GithubIcon/>
              </a>
            </HoverBorderGradient>  
      </div>
            <HoverBorderGradient>
              <a href={`mailto:sudheer1614@gmail.com`} target="_blank"> 
              <Mail/>
                </a> 
            </HoverBorderGradient> 
            <HoverBorderGradient>
              <a href={`https://www.linkedin.com/in/sudheer-8075121a0/`} target="_blank"> 
              <LinkedinIcon/>
                </a> 
            </HoverBorderGradient> 
          </div>
     </div>
     <div> 
          <ViewText 
          onEnterViewport={()=>{
            setContactHover(false)
            setProjectHover(false);
            setSkillHover(false);
            setAboutHover(true); 
            setTimeout(() => {
             setSkill(false)
             setAbout(true)
             setProject(false)
             setContact(false)
          }, 1000);
           console.log("entered viewport")}
           } onLeaveViewport={()=> {setAboutHover(false); console.log("leaving viewPort")}
           }
          />
     </div>
     <div>
     <div className=" my-14 w-full">
      <Toaster position="bottom-right" />
      <div className=" mt-7"> 
          <ButtonsCard className="" onClick={() => copy(buttons)}>
            {buttons.component}
          </ButtonsCard> 
      </div>
    </div>
     </div>
    </div>
    <div className=" -mt-20"> 
      <div className="relative rounded-full animate-float">
    <CardContainer className=" inter-var">
        <CardBody className="relative group/card hover:shadow-2xl w-auto sm:w-[30rem] h-auto rounded-xl  "> 
          <CardItem translateZ={10} className=" rounded-full w-full "> 
            <img loading="lazy" decoding="async" data-ning='1' src="https://pub-e8df4856c93040158123b7cc75760e95.r2.dev/professional.png" height={400} width={400} className=" rounded-3xl opacity-70 g group-hover/card:shadow-2xl group-hover/card:shadow-black-500" alt="swasthlekh " />
          </CardItem>  
        </CardBody>
       </CardContainer>
    </div>
      </div>
  </div>
  </div>
}


export const buttons = { name: "Shimmer",
  description: "Shimmer button for your website",
  showDot: false,
  component: (
    <button className=" w-full text-left text-2xl font-mono animate-shimmer rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%]  py-10 py font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"> 
    <p className=" ml-10">
      npx sudheerdev 
    </p>
    <IconClipboard className="absolute right-6 top-10 m-auto text-neutral-300 group-hover/btn:block hidden transition duration-200" />
    </button>
  ),
   string:'npx sudheerdev'
  }  