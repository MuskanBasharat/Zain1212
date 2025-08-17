import React from 'react'
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
export const Header = () => {

   
      const logo = "https://raw.githubusercontent.com/ZAINBASHARATALI/Large-Gif/master/namelogo.png";
      const menu = "https://uploads-ssl.webflow.com/5e8c566954381032f62e178b/63f78112e606e96fdd53fb3e_nav-icon.svg";
  return (
    <header className="flex flex-header flex-wrap items-center gap-2 md:flex-row" >
       <img className="logo" src={logo} alt="logo" />
      <div className="list">

      <a href='#work'>  <Button variant="ghost" className='nav'>What I Do</Button></a>
     <a href='#products'> <Button variant="ghost" className='nav'>My Work</Button></a>
      <a href='#contact'><Button variant="ghost" className='nav'>Conatct</Button></a>
      </div>
      <div className="sheet">
      <Sheet> 
  <SheetTrigger><img src={menu} alt="menu" /></SheetTrigger>
  <SheetContent className="w-[400px] sm:w-[400px]" side='top'>
   
    <div className="menu-list">
     <a href='#work'><Button variant="ghost" className='nav' >What I Do</Button></a>
    <a href='#products'><Button variant="ghost" className='nav'>My Work</Button></a>
   <a href='#contact'> <Button variant="ghost" className='nav' >Conatct</Button></a>
    </div>
    <SheetHeader className='hide'>
      <SheetDescription><SheetTitle>Title</SheetTitle></SheetDescription></SheetHeader>  </SheetContent>
</Sheet>
</div>
      
         </header>
  )
}

