"use client";
import Image from "next/image";

const AdaptiveTechnology = () => {
  const challenges = [
    {
      text: "Improves workability and finishability even in hot, cold, or windy conditions",
      icon: "key1.png",
    },
    {
      text: "Enhances hydration in extreme hot or cold climates by ensuring moisture availability",
      icon: "key2.png",
    },
    {
      text: "Prevents thermal stress and cracking during hydration by optimizing heat evolution and controlling the differential heat curve.",
      icon: "key3.png",
    },
    {
      text: "Manages heat buildup in mass concrete pours, reducing cracking and DEF risks",
      icon: "key4.png",
    },
    {
      text: "Enhances microstructural bonding and reduces porosity at the ITZ",
      icon: "key5.png",
    },
    {
      text: "Self-heals micro-cracks and pores that form over time to protect concrete from deterioration",
      icon: "key6.png",
    },
    {
      text: "Adapts and dynamically manages temperature, moisture, and vapor fluctuations within the concrete",
      icon: "key7.png",
    },
    {
      text: "Provides Resilience Against Chemical and Diverse Environmental Challenges throughout the concrete lifecycle",
      icon: "key8.png",
    },
  ];
  return (
    <section className="w-full lg:bg-[linear-gradient(to_right,_#ededed_50%,_#F7F7F7_50%)] py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full max-w-7xl mx-auto mt-8 lg:mt-18">
        {/* Left Column */}
        <div className="flex items-start  py-12 lg:py-0 bg-[#ededed] lg:bg-transparent">
          <div className="py-5 pr-4 space-y-6 p-7 lg:p-0 mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold sm:leading-8 md:leading-9 lg:leading-10 text-black poppins tracking-wide">
              Crystalline Waterproofing <br />
              Was Just the Beginning.
            </h2>
            <h3 className="text-xl md:text-3xl text-black sm:leading-7 md:leading-8 lg:leading-9  font-medium poppins">
              Meet SHIELD – World’s Only Adaptive Crystalline Technology
              <sup>®</sup>
            </h3>
            <p className="text-justify font-normal leading-6 lg:leading-7 text-black open-sans text-sm md:text-base   max-w-3xl lg:max-w-lg">
              Traditional crystalline technologies are designed to waterproof
              concrete by filling pores and sealing cracks after they occur — a
              reactive approach that addresses defects and offers only basic
              durability.
            </p>
            <p className="text-justify font-normal leading-6 text-black open-sans text-sm md:text-base  max-w-3xl lg:max-w-lg">
              SHIELD Adaptive Crystalline Technologies go far beyond, it begins
              working from the casting stage, enhancing fresh concrete
              properties, supporting optimal hydration, and delivering superior
              performance even in extreme climates. It actively manages thermal,
              moisture, water, and vapor movement—adapting to phase changes
              throughout the concrete’s lifecycle. Designed for both intense
              heat and freezing temperatures, it reduces thermal stress and
              shrinkage cracks, ensuring long-term resilience, durability, and
              crack-free performance.
            </p>
            <p className="text-justify font-normal leading-6 text-black open-sans text-sm md:text-base  max-w-3xl lg:max-w-lg">
              With SHIELD Adaptive Crystalline, concrete isn’t just protected —
              it’s climate-change ready and durable by design, not by repair.
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex items-start bg-[#F7F7F7] lg:bg-transparent py-12 lg:py-0 ">
          <div className="py-5 pl-4 p-8 lg:p-0 lg:pl-8 mx-auto ">
            <h2 className="text-2xl md:text-3xl lg:text-4xl  pl-4 font-semibold mb-6 text-black poppins sm:leading-8 md:leading-9 lg:leading-10 tracking-wide">
              Key Challenges Addressed by SHIELD Adaptive Crystalline Technology
              <sup>®</sup>
            </h2>
            <div>
              {challenges.map((item, idx) => (
                <div key={idx} className="flex items-start gap-5 p-4">
                  <Image
                    src={`/${item.icon}`}
                    alt={`icon-${idx + 1}`}
                    width={32}
                    height={32}
                    className="w-8 h-8 object-contain mt-1"
                  />
                  <p className="text-base leading-6 text-black font-normal open-sans max-w-3xl ">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdaptiveTechnology;
