"use client";
import React, { useState } from "react";
import MaxContainer from "./common/MaxWidth";
import { Button } from "./ui/button";

type navItem = {
  id: number;
  text: string;
};
const DesktopHeader = () => {
  
  const [activeNavId, setActiveNavId] = useState(1);
  const navList: navItem[] = [
    {
      id: 1,
      text: "features",
    },
    {
      id: 2,
      text: "how it works",
    },
    {
      id: 3,
      text: "security",
    },
    {
      id: 4,
      text: "pricing",
    },
    {
      id: 5,
      text: "solutions",
    },
    {
      id: 6,
      text: "developers",
    },
    {
      id: 7,
      text: "contact",
    },
  ];


  return (
    <MaxContainer>
      <section className="w-full bg-[#d9d9d9] py-2">
        <nav className="w-[90%] mx-auto bg-white flex items-center justify-between">
          <h3 className="text-[1.5rem] text-[#d9d9d9] font-semibold">
            {" "}
            staqqe
          </h3>

          <div className="flex gap-[2.5rem] relative items-center justify-center">
            {navList.map((nav) => (
              <div
                key={nav.id}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveNavId(nav.id);
                }}
                className="relative flex gap-2 "
              >
                <a className="text-[13px] cursor-pointer pb-[2px] text-[#1F2937] capitalize ">
                  {nav.text}
                </a>
                {activeNavId === nav.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#1F2937] rounded-full"></div>
                )}
              </div>
            ))}
          </div>
          <Button className="bg-[#080CD4] font-bold text-[#F9FAFB]">
            Sign in
          </Button>
        </nav>
      </section>
    </MaxContainer>
  );
};

export default DesktopHeader;
