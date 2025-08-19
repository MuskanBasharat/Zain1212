"use client";

import React, { useState } from "react";
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
  const [open, setOpen] = useState(false);

  const logo =
    "https://raw.githubusercontent.com/ZAINBASHARATALI/Large-Gif/master/namelogo.png";
  const menu =
    "https://uploads-ssl.webflow.com/5e8c566954381032f62e178b/63f78112e606e96fdd53fb3e_nav-icon.svg";

  const handleClose = () => setOpen(false);

  return (
    <header className="flex flex-header flex-wrap items-center gap-2 md:flex-row">
      <a href="/">
        <img className="logo" src={logo} alt="logo" />
      </a>

      {/* Desktop nav */}
      <div className="list hidden md:flex">
        <a href="#work">
          <Button variant="ghost" className="nav">
            What I Do
          </Button>
        </a>
        <a href="#products">
          <Button variant="ghost" className="nav">
            My Work
          </Button>
        </a>
        <a href="#contact">
          <Button variant="ghost" className="nav">
            Contact
          </Button>
        </a>
      </div>

      {/* Mobile nav */}
      <div className="sheet md:hidden">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger>
            <img src={menu} alt="menu" />
          </SheetTrigger>
          <SheetContent className="w-[400px] sm:w-[400px]" side="top">
            <div className="menu-list flex flex-col gap-4">
              <a href="#work" onClick={handleClose}>
                <Button variant="ghost" className="nav">
                  What I Do
                </Button>
              </a>
              <a href="#products" onClick={handleClose}>
                <Button variant="ghost" className="nav">
                  My Work
                </Button>
              </a>
              <a href="#contact" onClick={handleClose}>
                <Button variant="ghost" className="nav">
                  Contact
                </Button>
              </a>
            </div>
            <SheetHeader className="hide">
              <SheetDescription>
                <SheetTitle>Title</SheetTitle>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};
