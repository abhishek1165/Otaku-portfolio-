"use client";

import React from "react";
import { useEffect,useRef } from "react";
import{cn} from "@/app/lib/utils";
import Link from"next/link";
import { homePageStyles } from "@/public/dummyStyles";



const   HomePage= (): React.ReactElement => {
  const videoRef=useRef<HTMLVideoElement>(null);
      useEffect(()=>{
         if( videoRef.current){
          videoRef.current.play().catch((error)=>{
            console.error("Error playing video:",error);
          })
         }
      },[videoRef]);

      return (
        <>
        <div className={homePageStyles.container}>
           <div className={cn(homePageStyles.backgroundGrid.wrapper,
            homePageStyles.backgroundGrid.pattern,
           )}/>

         
        </div>
         
        </>
      )
    
}

export default HomePage


