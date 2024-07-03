"use client"

import React from 'react';
import { RecoilRoot, atom} from 'recoil'; 
export const aboutState = atom({
  key:'about',
  default:false
})

export const skillState = atom({
  key:'skill',
  default:false
})

export const projectState = atom({
  key:'project',
  default:false
}) 
export const contactState = atom({
  key:'contact',
  default:false
}) 

export const  aboutHoverState = atom({
  key:"aboutHover",
  default:false
})

export const  skillHoverState = atom({
  key:"skillHover",
  default:false
})

export const  projectHoverState = atom({
  key:"projectHover",
  default:false
})

export const  contactHoverState = atom({
  key:"contactHover",
  default:false
})

export const scrollState = atom({
  key:"scrolling",
  default:true
})

export const onPageState = atom({
  key:"onPage",
  default:true
})

export const smallState = atom({
  key:"small",
  default:false  
})

export default function RecoilContextProvider({ children }:any){
  return <RecoilRoot>{children}</RecoilRoot>
}