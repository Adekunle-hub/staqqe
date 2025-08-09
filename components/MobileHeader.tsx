"use client";
import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { MdClose } from "react-icons/md";
import { Button } from "./ui/button";

const MobileHeader = () => {
  const [menu, setMenu] = useState(false);
  const navList = ["Features", "How it works", "Solutions"];
  const handleMenu = () => {
    setMenu(!menu);
  };
  return (
    <section className=" py-[1rem] bg-[#F9FAFB]  md:py-[1rem]">
      <nav className="w-full px-[1.2rem]   md:bg-[#FFFFFF] justify-between  flex  items-center ">
        <div className="flex w-[50%]  items-center gap-3 ">
          {menu ? (
            <MdClose
              onClick={() => {
                handleMenu();
              }}
              className="text-gray-900 mt-1 stroke-2 scale-100 opacity-100 lg:hidden transition-all duration-300"
            />
          ) : (
            <CiMenuBurger
              onClick={() => {
                handleMenu();
              }}
              className="text-gray-900 mt-1 stroke-2 scale-100 opacity-100 transition-all lg:hidden duration-300"
            />
          )}
          <h1 className="text-primary font-bold text-[1.2rem]">staqqe</h1>
        </div>
        <div className="flex gap-2 justify-end w-full items-center">
          {navList.map((item, index) => (
            <a className="text-[12px] text-[#1F2937] mr-[1rem] hidden md:block " key={index}>
              {item}
            </a>
          ))}
          <Button className="w-[3rem] cursor-pointer font-semibold text-[15px]  h-[1.5rem] px-[2rem] py-[.8rem] leading-none">
            Sign in
          </Button>
        </div>
      </nav>
    </section>
  );
};

export default MobileHeader;
