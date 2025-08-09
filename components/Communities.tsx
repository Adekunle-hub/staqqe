import Image from "next/image";
import React from "react";
import "./styles/slider.css";

const Communities = () => {
  const communityTestimonials = [
    {
      id: 1,
      avatar: "/Mask.png",
      name: "Sarah Johnson",
      role: "Community Leader",
      organization: "Lagos Women's Cooperative",
      note: `"Staqqe transformed our monthly contributions. No more worries about fund mismanagement or lack of transparency. Every member can see exactly where their money goes."`,
    },
    {
      id: 2,
      avatar: "/Mask.png",
      name: "Sarah Johnson",
      role: "Community Leader",
      organization: "Lagos Women's Cooperative",
      note: `"Staqqe transformed our monthly contributions. No more worries about fund mismanagement or lack of transparency. Every member can see exactly where their money goes."`,
    },
    {
      id: 3,
      avatar: "/Mask.png",
      name: "Sarah Johnson",
      role: "Community Leader",
      organization: "Lagos Women's Cooperative",
      note: `"Staqqe transformed our monthly contributions. No more worries about fund mismanagement or lack of transparency. Every member can see exactly where their money goes."`,
    },
    {
      id: 4,
      avatar: "/Mask.png",
      name: "Sarah Johnson",
      role: "Community Leader",
      organization: "Lagos Women's Cooperative",
      note: `"Staqqe transformed our monthly contributions. No more worries about fund mismanagement or lack of transparency. Every member can see exactly where their money goes."`,
    },
    {
      id: 5,
      avatar: "/Mask.png",
      name: "Sarah Johnson",
      role: "Community Leader",
      organization: "Lagos Women's Cooperative",
      note: `"Staqqe transformed our monthly contributions. No more worries about fund mismanagement or lack of transparency. Every member can see exactly where their money goes."`,
    },
    {
      id: 6,
      avatar: "/Mask.png",
      name: "Sarah Johnson",
      role: "Community Leader",
      organization: "Lagos Women's Cooperative",
      note: `"Staqqe transformed our monthly contributions. No more worries about fund mismanagement or lack of transparency. Every member can see exactly where their money goes."`,
    },
    {
      id: 7,
      avatar: "/Mask.png",
      name: "Sarah Johnson",
      role: "Community Leader",
      organization: "Lagos Women's Cooperative",
      note: `"Staqqe transformed our monthly contributions. No more worries about fund mismanagement or lack of transparency. Every member can see exactly where their money goes."`,
    },
    {
      id: 8,
      avatar: "/Mask.png",
      name: "Sarah Johnson",
      role: "Community Leader",
      organization: "Lagos Women's Cooperative",
      note: `"Staqqe transformed our monthly contributions. No more worries about fund mismanagement or lack of transparency. Every member can see exactly where their money goes."`,
    },
    {
      id: 9,
      avatar: "/Mask.png",
      name: "Sarah Johnson",
      role: "Community Leader",
      organization: "Lagos Women's Cooperative",
      note: `"Staqqe transformed our monthly contributions. No more worries about fund mismanagement or lack of transparency. Every member can see exactly where their money goes."`,
    },
  ];

  return (
    <section className="bg-[#EFF6FF] py-[1rem] md:py-[2.5rem]">
      <div className="w-full px-[1.2rem] md:px-0 md:w-[90%] mx-auto">
        <h1 className="text-center md:px-[3rem] mx-auto font-bold text-[1.5rem]">
          Trusted by <span className="text-primary">Communities </span>{" "}
          Everywhere
        </h1>
        <p className="text-center  text-[13px] text-[#111211]">
          {`See how groups across Nigeria are transforming their savings with
          staqqe's secure platform.`}
          
        </p>
        <main className="flex  w-[100%] overflow-hidden  ">
          <div className="marquee w-max flex gap-[1rem] items-center justify-center mt-[1rem] md:mt-[3rem]">
            {[...communityTestimonials, ...communityTestimonials].map(
              (testimonial, index) => (
                <div
                  className="flex h-[12rem] md:h-[17rem]  shrink-0 flex-col bg-white w-[16rem] md:w-[25rem]  rounded-[.8rem] p-[.8rem] md:p-[1.8rem] border-2 gap-[.6rem]"
                  key={index}
                >
                  <section className="flex items-start justify-between">
                    <div className="flex items-center gap-2 ">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        width={40}
                        height={40}
                        quality={100}
                        priority
                      />
                      <div className="flex leading-4 flex-col text-[11px] md:text-[13px]">
                        <h3 className="">{testimonial.name}</h3>
                        <p className="p-0 text-[#606873] m-0">
                          {testimonial.role}
                        </p>
                        <h3 className="font-semibold text-[10px] text-primary">
                          {testimonial.organization}
                        </h3>
                      </div>
                    </div>

                    <div className="relative md:w-[50px] h-[30px] w-[30px] md:h-[50px] ">
                      <Image
                        src="/comment.png"
                        alt="comment-logo"
                        fill
                        priority
                        className="object-contain"
                       
                      />
                    </div>
                  </section>
                  <section className="flex h-[20px] md:h-[25px]   items-center justify-between">
                    <Image src="/star.png" alt="stars" width={70}  loading="eager" height={50} />
                    <Image
                      src="/social media.png"
                      alt="social media"
                      width={90}
                      height={90}
                       loading="eager"
                    />
                  </section>
                  <p className="md:text-[15px] text-[10px] text-[#4F545B] my-[2px] md:my-[1rem]">
                    {testimonial.note}
                  </p>
                </div>
              )
            )}
          </div>
        </main>
      </div>
    </section>
  );
};

export default Communities;
