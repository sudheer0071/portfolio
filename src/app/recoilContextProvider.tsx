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

export default function RecoilContextProvider({ children }:any){
  return <RecoilRoot>{children}</RecoilRoot>
}