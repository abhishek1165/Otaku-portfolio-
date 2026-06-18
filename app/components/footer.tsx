"use client";

import React from 'react'
import {useState,useEffect} from 'react'
import { TextHoverEffect } from "@/app/components/ui/text-hover-effect";

const formatTime=()=>new Date().toLocaleTimeString();

const Footer = () : React.ReactElement => {
  const [timeNow,setTimeNow]= useState<string>("");
   useEffect(()=>{
    const initialId=window.setTimeout(()=>setTimeNow(formatTime()),0);
    const intervalId=window.setInterval(()=>setTimeNow(formatTime()),1000);
    return ()=>{
      window.clearTimeout(initialId);
      window.clearInterval(intervalId);
    }

   },[])
  return (
    <footer className={"relative mx-auto pb-12 md:pb-0 lg:pb-0 xl:pb-0 max-w-[1320px] bg-zinc-950 border-t border-zinc-800 text-zinc-300 overflow-hidden"}>
      <div className={"flex flex-col sm:flex-row items-center justify-between gap-4 px-20 py-5"}>
        <div className="w-[60%] h-28 flex-shrink-0">
          <TextHoverEffect text="ABHISHEK" />
        </div>
        <div className={"text-lg cursor-pointer"}>
          Reach out →
        </div>
        <div className='text-lg'>{timeNow}</div>
      </div>
    </footer>
  )
}

export default Footer