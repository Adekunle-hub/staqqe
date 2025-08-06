import Image from "next/image";
import React from "react";

const Footer = () => {
  const socialMedia = [
    {
      name: "linkedIn",
      image: "/linkedIn.png",
    },
    {
      name: "Instagram",
      image: "/instagram.png",
    },
    {
      name: "Whatsapp",
      image: "/whatsapp.png",
    },
    {
      name: "Facebook",
      image: "/facebook.png",
    },
  ];
  const footerIcon = [
    {
      info: "hello@staqqe.com",
      icon: "/email.png",
    },
    {
      info: "+234(0)800 STAQQE",
      icon: "/call.png",
    },
    {
      info: "Lagos, Nigeria",
      icon: "/location.png",
    },
  ];

  const productList = [
    "Features",
    "Security",
    "Pricing",
    "API Documentation",
    "Integrations",
  ];
  const companyFeatures = ["About Us", "Careers", "Press", "Blog", "Contact"];
  return (
    <footer className="bg-[#1F2937]  py-[1rem] md:py-[3rem]">
      <main className="lg:w-[85%] w-[90%]  text-[#FFFFFF] flex justify-between pr-0 lg:pr-[5rem] mx-auto">
        <section className="max-w-[50%]  w-[40%] flex flex-col ">
          <h4 className="md:text-[1.5rem] mb-[.7rem] text-[1rem] ">Staqqe</h4>
          <p className=" text-[11px] md:text-[13px]  ">
            Transforming group savings with secure, transparent, and fraud-proof
            digital contributions. Built for communities who demand
            accountability and control.
          </p>
          <div className="flex items-center mt-[.7rem] cursor-pointer gap-[.7rem]">
            {socialMedia.map((app,index) => (
              <Image key={index} src={app.image} alt={app.name} width={25} height={15} />
            ))}
          </div>
        </section>
        <section className="flex w-fit flex-col items-start">
          <h4 className="md:text-[1.5rem] md:mb-0 mb-[.7rem] text-[1rem]">Product</h4>
          <div className=" ml-[.7rem] md:ml-[1.5rem]">
            {productList.map((item, index) => (
              <li key={index} className="underline  text-[11px] md:text-[14px]">{item}</li>
            ))}
          </div>
        </section>
        <section className="w-fit">
          <h4 className="md:text-[1.5rem] mb-[.7rem] md:mb-0 text-[1rem]">Company</h4>
          <div className="md:ml-[2rem] ml-[1rem]">
            {companyFeatures.map((item, index) => (
              <li key={index} className="text-[11px] md:text-[14px]">{item}</li>
            ))}
          </div>
        </section>
      </main>
      <section className=" w-[90%] md:w-[85%] mx-auto pr-[0] md:pr-[5rem]">
        <div className="w-full h-[1px] mx-auto mb-[1rem] mt-[1.5rem] bg-[#7B7B7B] text-[#7B7B7B]"></div>
        <div className="flex text-[#ffffff] items-center justify-between">
          {footerIcon.map((item, index) => (
            <div className="flex gap-1 text-[7px]  items-center" key={index}>
              <Image className="w-[14px]" src={item.icon} alt={item.info} width={20} height={20} />
              <p className=" md:text-[.8rem] text-[9px]">{item.info}</p>
            </div>
          ))}
        </div>
       <div className="w-full h-[1px] mb-[1rem] mt-[1.5rem] text-[] bg-[#7B7B7B] text-[#7B7B7B]"></div>
      </section>
    </footer>
  );
};

export default Footer;
