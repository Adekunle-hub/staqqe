import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

const Transform = () => {
  const benefits = ["No Setup Fees", "30-Day Free Trial", "Cancel Anytime"];
  return (
    <section className="bg-[#202279] py-[1rem] md:py-[3rem]">
      <main className="md:w-[50%] w-full px-[1.2rem] md:px-0 mx-auto">
        <h1 className="text-center leading-8 md:leading-15 text-[1.5rem] md:text-[3rem] font-bold text-white">
          Ready to Transform Your Group Savings?
        </h1>
        <p className="text-center my-[1rem] md:mb-[3rem] md:mt-[1.5rem] text-white text-[13px]">
          {`Join thousands of groups who've already secured their contributions
          with staqqe. Get started today and experience the future of community
          savings.`}
        </p>
        <div className="flex items-center justify-center gap-4">
          <Button className="bg-white border-1 hover:bg-white/80 cursor-pointer border-[#F9FAFB] text-[#080CD4] font-bold text-[.8rem]">
            Start Your Free Trial
          </Button>
          <Button className="bg-primary cursor-pointer border-1 border-[#F9FAFB] text-white  font-bold text-[.8rem]">
            Schedule a Demo
          </Button>
        </div>
        <div className="flex items-center mt-[2rem] justify-between">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex text-white items-center gap-1">
              <Image src="/circle tick.png" alt="" width={13} height={20} />
              <p className="text-[10px] md:text-[14px] ">{benefit}</p>
            </div>
          ))}
        </div>
      </main>
    </section>
  );
};

export default Transform;
