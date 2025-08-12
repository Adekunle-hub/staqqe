import Image from "next/image";
import React from "react";

const Work = () => {
  const staqqeFeatures = [
    {
      id: 1,
      img: "/Icons_Square.png",
      main: "Multi-Signature Security",
      text: "Every withdrawal requires approval from multiple admins, preventing unauthorized access and fund mismanagement.",
    },
    {
      id: 2,
      img: "/Icons_Square(1).png",
      main: "Role-Based Access",
      text: "Granular permissions for admins, co-admins, and viewers ensure the right people have the right level of control.",
    },
    {
      id: 3,
      img: "/Icons_Square(2).png",
      main: "Complete Transparency",
      text: "All members can view transaction history, contribution schedules, and fund usage in real-time.",
    },
    {
      id: 4,
      img: "/Icons_Square(5).png",
      main: "Automated Contributions",
      text: "Set up recurring deposits that run automatically, making consistent savings effortless for everyone.",
    },
    {
      id: 5,
      img: "/Icons_Square(3).png",
      main: "Flexible Payment Options",
      text: "Integrate with banks, mobile wallets, and other payment methods for seamless transactions.",
    },
    {
      id: 6,
      img: "/Icons_Square(4).png",
      main: "Audit Trail",
      text: "Immutable records track every transaction and decision, providing accountability and preventing disputes.",
    },
  ];
  return (
    <section className="bg-white w-full py-[1rem] md:py-[2rem] lg:pt-[4rem] lg:pb-[2rem]">
      <div className="md:w-[85%] w-full px-[1.2rem] md:px-0 mx-auto">
        <h1 className="text-center font-semibold text-[1.4rem] ">
          How <span className="text-primary">staqqe </span> Work
        </h1>
        <p className="text-center mt-[3px]  text-[15px] px-[1rem] text-[#111211]">
          Every feature is designed to protect your funds while giving your
          group complete control and transparency.
        </p>
        <main className="overflow-x-auto w-full md:overflow-visible">
          <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-[1rem] md:gap-[2rem] min-w-max md:min-w-0 py-[1.5rem] md:py-[2rem] lg:py-[3rem] snap-x snap-mandatory scroll-pl-4">
            {staqqeFeatures.map((feature) => (
              <article
                className=" flex-shrink-0 md:min-w-0 md:flex-shrink md:flex-grow flex flex-col text-[#1F2937] gap-[3px] md:gap-[.7rem]  max-w-[250px] md:max-w-fit py-[1rem] md:py-[2rem] px-[.5rem]  md:px-[1.5rem] snap-start border rounded-[.7rem]"
                key={feature.id}
              >
                <Image
                  src={feature.img}
                  alt={feature.main}
                  width={30}
                  height={30}
                  quality={100}
                  className="object-contain "
                />
                
                <h3 className="font-bold text-[1.1rem] ">
                  {feature.main}
                </h3>
                <p className="lg:text-[13px] m-0 p-0 text-[15px]">{feature.text}</p>
              </article>
            ))}
          </div>
        </main>
      </div>
    </section>
  );
};

export default Work;
