import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

const Security = () => {
  const securityFeatures = [
    {
      id: "1",
      icon: "/multi.png",
      title: "Multi-Signature Protection",
      description:
        "Large transactions require approval from multiple administrators",
      note: "2-3 Admin Approvals Required",
    },
    {
      id: "2",
      icon: "/multi.png",
      title: "Multi-Signature Protection",
      description:
        "Large transactions require approval from multiple administrators",
      note: "2-3 Admin Approvals Required",
    },
    {
      id: "3",
      icon: "/multi.png",
      title: "Multi-Signature Protection",
      description:
        "Large transactions require approval from multiple administrators",
      note: "2-3 Admin Approvals Required",
    },
    {
      id: "4",
      icon: "/multi.png",
      title: "Multi-Signature Protection",
      description:
        "Large transactions require approval from multiple administrators",
      note: "2-3 Admin Approvals Required",
    },
  ];
  return (
    <section className="bg-[#ffffff] lg:[#ffffff] md:bg-[#F9FAFB] py-[1rem] md:py-[3rem]">
      <article className="w-full px-[1.2rem] md:px-0 md:w-[85%] flex flex-col gap-[1rem] md:gap-[2rem] items-center  mx-auto">
        <div className="text-center">
          <h1 className="text-[1.4rem] font-bold capitalize">
            {" "}
            <span className="text-primary">Security</span> you can trust
          </h1>
          <p className=" text-[14px] md:text-[15px]">
            Your funds are protected by multiple layers of security, giving you
            peace of mind while maintaining full control.
          </p>
        </div>

        <main className="grid w-full bg-yelllow-500 lg:grid-cols-2 grid-cols-1 gap-[5px] md:gap-[1rem] items-center ">
          {securityFeatures.map((securityFeature) => (
            <section className="flex items-center py-2 px-3 gap-[1rem] bg-[#F3F4F6] rounded-bg-[#DBDBDB] rounded-[1rem] border-1" key={securityFeature.id}>
              <Image
                width={30}
                height={30}
                src={securityFeature.icon}
                alt={securityFeature.title}
              />
              <div className="flex flex-col ">
                <h1 className="md:text-[1rem] text-[14px] text-[#000000] font-semibold">{securityFeature.title}</h1>
                <p className="text-[13px] p-0 m-0 text-[#555555]">{securityFeature.description}</p>
                <p className="text-[10px] text-[#292CE3] font-semibold">{securityFeature.note}</p>
              </div>
            </section>
          ))}
        </main>
        <div className="flex flex-col py-[5px] md:py-[1rem] rounded-[1rem] items-center text-white w-full bg-primary">
            <h3 className="md:text-[1.3rem] text-[1rem] font-bold">Future-Proof with blockchain</h3>
            <p className="text-[13px] mt-2  text-center">{`We're developing smart contract integration for ultimate transparency and decentralized fund management.`}</p>
            <Button className="bg-white mt-[1rem] cursor-pointer hover:bg-[white]/90 px-[1rem] text-black">
                Learn  More About Our Roadmap
            </Button>
        </div>
      </article>
    </section>
  );
};

export default Security;
