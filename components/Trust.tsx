import React from "react";
import Image from "next/image";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";

const Trust = () => {
  const steps = [
    {
      id: 1,
      icon: "/group.png",
      step: "STEP 1",
      main: "create your group",
      text: "Set up your contribution group with custom rules, member roles, and contribution schedules.",
    },
    {
      id: 2,
      icon: "/security.png",
      step: "STEP 2",
      main: "configure security",
      text: "Define admin roles, approval requirements, and multi-signature rules to protect your funds.",
    },
    {
      id: 3,
      icon: "/contributing.png",
      step: "STEP 3",
      main: "start contributing",
      text: "Define amounts, frequency, and rules for contributions and payouts.",
    },
    {
      id: 4,
      icon: "/manage.png",
      step: "STEP 4",
      main: "manage & withdraw",
      text: "Admins can request withdrawals that require group approval, ensuring transparent fund usage.",
    },
  ];

  return (
    <fieldset className="bg-[#EFF6FF] w-full">
      <section className="md:w-[85%]  w-[90%] mx-auto py-[1rem] md:py-[3rem]">
        <div className="text-center">
          <h1 className="lg:text-[1.8rem]  text-[1.3rem]  font-semibold">
            Built for <span className="text-primary">Trust</span> &{" "}
            <span className="text-primary">Security</span>
          </h1>
          <p className="text-center  mb-[1rem] text-[12px] md:text-[14px]  mx-auto mt-2">
            Get started in minutes with our simple 4-step process designed for
            any group size or contribution goal.
          </p>
        </div>

        <main className="w-full ">
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 my-4">
            {steps.map((step) => (
              <section
                key={step.id}
                className="flex flex-col hide-scrollbar mt-[2.5rem] gap-[.4rem] items-center justify-center min-w-[250px] md:min-w-0 snap-start"
              >
                <Image width={30} height={30} alt={step.main} src={step.icon} />
                <div className="w-full min-h-[12rem] items-stretch text-center md:h-full flex border-[2px] border-gray-200 rounded-lg bg-white shadow-sm flex-col p-4">
                  <div className="pb-2">
                    <h2 className="text-primary text-[1rem] mb-0 pb-0 font-semibold">
                      {step.step}
                    </h2>
                  </div>
                  <div className="flex flex-col gap-[.5rem] flex-1">
                    <h3 className="font-bold text-[15px] text-[#1F2937] capitalize">
                      {step.main}
                    </h3>
                    <p className="text-[12px] leading-relaxed">{step.text}</p>
                  </div>
                </div>
              </section>
            ))}
          </div>

          <div className="md:hidden">
            <ScrollArea
              aria-orientation="horizontal"
              className="overflow-x-auto mx-auto  w-[90vw]"
            >
              <div className="flex items-stretch gap-4 my-4 w-max snap-x snap-mandatory">
                {steps.map((step) => (
                  <section
                    key={step.id}
                    className="flex flex-col items-center gap-2 max-w-[13rem] snap-start"
                  >
                    <Image
                      width={30}
                      height={30}
                      alt={step.main}
                      src={step.icon}
                    />
                    <div className="w-full h-[11rem] text-center  flex border-[2px] border-gray-200 rounded-lg bg-white shadow-sm flex-col px-2 py-4">
                      <div className="pb-2">
                        <h2 className="text-primary text-[1rem] font-semibold">
                          {step.step}
                        </h2>
                      </div>
                      <div className="flex flex-col gap-2 flex-1">
                        <h3 className="font-bold text-[15px] text-[#1F2937] capitalize">
                          {step.main}
                        </h3>
                        <p className="text-[12px] text-[#1F2937]  leading-relaxed break-words">
                          {step.text}
                        </p>
                      </div>
                    </div>
                  </section>
                ))}
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </div>
        </main>
      </section>
    </fieldset>
  );
};

export default Trust;
