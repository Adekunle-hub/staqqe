import MaxContainer from "@/components/common/MaxWidth";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { Arrow } from "@/components/common/icons";

const Hero = () => {
  return (
    <MaxContainer>
      <main className="flex flex-col md:flex-row md:items-end items-start justify-center w-full px-[1.2rem] md:w-[90%] mx-auto">
        <section className="w-full md:w-[45%] px-[1.2rem] md:px-0 order-2 md:order-1 mb-[2rem] gap-y-[1.3rem] md:gap-y-[3rem]  flex flex-col md:justify-between">
          <div className="mt-[1rem] md:mt-0">
            <h1 className="md:text-[3rem] text-[2.3rem] text-[#1F2937] leading-10 capitalize font-bold">
              Secure Group <br />{" "}
              <span className="text-[#080CD4]">Contributions</span> <br /> made
              simple
            </h1>
            <p className="md:mt-[2rem] w-[90%] sm:w-[70%] md:w-full mt-[.7rem] text-[#5A5F66] text-[15px]">
              Transform your community savings with transparent, fraud-proof
              digital contributions. Built for groups who demand security,
              accountability, and complete control over their funds.
            </p>
          </div>
          <div className="flex  gap-4">
            <Button className="bg-[#080CD4] transition-colors duration-300 ease-in-out  cursor-pointer hover:bg-[#080CD4]/80 flex items-center text-white text-[1rem]">
              Start your Group
              <Arrow />
            </Button>
            <Button className="bg-white text-[#080CD4] hover:bg-white/40 transition-colors duration-300 ease-in-out cursor-pointer text-[1rem] border-1 border-[#080CD4]">
              {" "}
              Watch Demo
            </Button>
          </div>
          <div className="flex gap-3">
            <Image
              src="/Appstore.png"
              alt="download in appstore"
              width={100}
              height={50}
            />
            <Image
              src="/Playstore.png"
              alt="download in playstore"
              width={100}
              height={50}
            />
          </div>
        </section>
        <section className="order-1">
          <div className="w-[] hidden lg:block">
            <Image
              src="/staqqe-hero.png"
              alt="staqqe"
              height={700}
              width={680}
              quality={100}
            />
          </div>
          <div className="w-[] block lg:hidden">
            <Image
              src="/mobileHero.png"
              alt="staqqe"
              height={180}
              width={400}
              quality={100}
            />
          </div>
        </section>
      </main>
    </MaxContainer>
  );
};

export default Hero;
