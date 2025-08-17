import React from 'react'
import { Button } from "@/components/ui/button";
export const Intro = () => {
  const introImg = "https://raw.githubusercontent.com/ZAINBASHARATALI/Large-Gif/master/portfoliopic.webp";
  return (
    <div className='intro' >
    <div className='text'>
        <p className='text-p'>Hi, My Name is Zain Ali.</p>
        <h1 className="font-bold">I build Mobile Apps for Android & iOS</h1>
        <p className="text-p">I am specialized in developing mobile apps for Android & iOS using Flutter for disruptive businesses.</p>
        <div className='hire-btn'><Button className='hire'>Hire Me For</Button>  </div>
            
         
        </div>
        <div className='image'>
        
            <img className="intro-img" width="700px" src={introImg} alt="intro-gif" />
            </div>
           
        
    </div>
    
  )
}
