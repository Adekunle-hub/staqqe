import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "./ui/button";
import { Arrow } from "./common/icons";

const Pricing = () => {
  const plans = [
    {
      icon: "/Icons_circle.png",
      title: "Starter",
      description: "Perfect for small groups just getting started",
      price: "Free",
      priceNote: "/Forever",
      features: [
        "Up to 10 members",
        "Basic contribution tracking",
        "Standard security features",
        "Email support",
        "Mobile app access",
      ],
      button: "Get Started",
    },
    {
      icon: "/Icons_circle(1).png",
      title: "Professional",
      description: "Advanced features for growing communities",
      price: "₦2,500",
      priceNote: "/per month",
      features: [
        "Up to 100 members",
        "Multi signature approvals",
        "Automated contributions",
        "Advanced analytics",
        "Priority support",
        "Custom branding",
        "Export capabilities",
      ],
      button: "Get Started",
    },
    {
      icon: "/Icons_circle(2).png",
      title: "Enterprise",
      description: "Perfect for large organizations with custom needs",
      price: "Custom",
      priceNote: "",
      features: [
        "Unlimited members",
        "Advanced Admins",
        "Custom integrations",
        "Dedicated account manager",
        "24/7 support",
        "Blockchain Integration",
        "Export Capabilities",
      ],
      button: "Contact Sales",
    },
  ];

  return (
    <section className="bg-[#F9FAFB] md:py-[2.5rem] py-[1rem]">
      <div className="md:w-[85%] w-[90%] mx-auto">
        <h3 className="capitalize md:text-[1.5rem]  text-[1.8rem] font-semibold text-center  ">
          simple, <span className="text-primary">transparent</span> pricing
        </h3>
        <p className="text-center text-[#111211] text-[14px]">
          Choose the plan that fits your group's needs. No hidden fees, no
          surprises.
        </p>
        <main className="flex py-[1rem] overflow-x-auto snap-x hide-scrollbar snap-mandatory mt-[1rem] sm:mt-[2rem] md:mt-[4rem] sm:grid md:grid-cols-3 gap-4 w-full">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`p-4 flex flex-col shrink-0  w-[80%] sm:w-full border-[1.4px] items-center
              ${index === 1 ? "  border-[#5155FA] border-1 shadow-[#5155FA] shadow-md" : "shadow-none"}
            `}
            >
              <CardHeader className="flex flex-col items-center text-center w-full">
                <Image
                  src={plan.icon}
                  alt={`${plan.title}-icon`}
                  width={30}
                  height={30}
                />
                <CardTitle>{plan.title}</CardTitle>
                <CardDescription className="text-[12px] text-[#848484]">
                  {plan.description}
                </CardDescription>
                <div className="text-[1.3rem] font-bold">
                  {plan.price}
                  {plan.priceNote && (
                    <span className="text-[10px] text-[#1F2937] font-normal">
                      {" "}
                      {plan.priceNote}
                    </span>
                  )}
                </div>
              </CardHeader>
              <CardContent className="flex flex-col  items-start w-full gap-y-2">
                {plan.features.map((feature, index) => (
                  <div
                    key={index}
                    className={`flex text-[#848484]  items-center gap-2 text-sm
                 
                  `}
                  >
                    <Image
                      src="/mark.png"
                      alt="yes-icon"
                      width={20}
                      height={20}
                    />
                    <span>{feature}</span>
                  </div>
                ))}
                <Button
                  className={`mt-4 md:mb-[1.4rem] mb-0 bg-black w-full
                  ${index === 1 ? "bg-primary text-white" : ""}
                  `}
                >
                  {plan.button}
                </Button>
              </CardContent>
            </Card>
          ))}
        </main>
        <section className="text-center mt-[1rem]">
          <p className="text-[#A0A5AF] text-[13px]">
            Need something different? We offer custom solutions for unique
            requirements.
          </p>
          <div className="flex gap-[1px]  w-fit items-center mx-auto justify-center">
            <a href="/contact" className="underline font-bold text-[12px]  text-[#1C20C0]">
              Contact our sales team{" "}
            </a>
            <Arrow  iconColor="#1C20C0" size={18}/>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Pricing;
