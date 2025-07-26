"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const timelineData = [
  {
    year: "1998",
    title: "DPC Crystalline Technology",
    subtitle: "Self healing Admixtures, Coatings and Mortars",
    description:
      "The journey began with the realization of the need for durable and long-lasting waterproofing solutions for concrete structures. Supershield developed self-healing admixtures, coatings, and mortars based on Crystalline Technology that waterproof and protect concrete structures.",
  },
  {
    year: "2001",
    title: "Thermokote",
    subtitle: "Thermal Insulation and Protective Coatings",
    description:
      "Supershield developed THERMOKOTE, an innovative product designed as an all-in-one solution that effectively insulated roofs and walls while also serving as an exceptional thermal barrier and waterproofing system.",
  },
  {
    year: "2004",
    title: "Slipstop",
    subtitle: "Anti-Slip Treatment for Natural and Artificial Stones",
    description:
      "Supershield developed a unique high-performance anti-slip treatment for both natural and artificial stones that reduces the risk of slipping without altering the aesthetic appeal of the floors.",
  },
  {
    year: "2010",
    title: "Multiseal Crystalline Technology",
    subtitle:
      "Multifunctional Crystalline Waterproofing and Surface Protection",
    description:
      "Multiseal Technology waterproofs and protects concrete infrastructures by enhancing sustainability through self-healing multifunctional crystals and a hydrophobic barrier; making it ideal for both above-ground and below-ground structures.",
  },
  {
    year: "2013",
    title: "Multiguard",
    subtitle:
      "Crystalline Cementitious Waterproofing and Protective Barrier System",
    description:
      "Multiguard is a flagship product based on Supershield’s Multiseal Technology. It provides repellence on the concrete surface and forms hygroscopic crystalline structures deep inside.",
  },
  {
    year: "2014",
    title: "DPC Admixplus",
    subtitle: "Liquid Crystalline Concrete Waterproofing",
    description:
      "Supershield, committed to innovation, developed Admixplus, a new-generation water-based, self-healing crystalline admixture for waterproofing concrete. Supershield Admixplus enhances concrete durability and performance while prioritising environmental sustainability.",
  },
  {
    year: "2016",
    title: "Ecopath",
    subtitle: "Polymer-Engineered Soil Roads",
    description:
      "Supershield develops Ecopath, a sustainable and eco-friendly solution to create stable, durable, and erosion-resistant soil roads. The key feature of Ecopath lies in its ability to penetrate deep into the soil, bond with the existing particles, and create a robust matrix.",
  },
  {
    year: "2018",
    title: "Crystalspray",
    subtitle: "Water-based, Hygroscopic Crystalline Waterproofing Coating",
    description:
      "As part of its ongoing efforts to develop and broaden its self-healing concrete protection range, Supershield introduced Crystalspray, a liquid crystalline waterproofing coating. It's eco-friendly and easy to use.",
  },
  {
    year: "2019",
    title: "DMC Crystalline Technology",
    subtitle: "Dynamic Multifunctional Crystalline Technology",
    description:
      "Dynamic Multifunctional Crystalline Technology ensures concrete that is resilient from day one and built to endure. From managing water and thermal energy during casting to preventing ice formation, regulating humidity in hardened concrete, and defending against freeze-thaw cycles and chemical damage, Supershield admixtures enhance durability, sustainability, and longevity in any environment.",
  },
  {
    year: "2021",
    title: "Panelstop",
    subtitle: "Waterstops with Swellable Lining",
    description:
      "Supershield develops Panelstop, a unique range of waterstops specifically designed for concrete structures requiring high levels of chemical resistance. Their galvanised steel construction, special coating, and unique swellable lining technology allow the waterstop to expand upon contact with moisture, effectively sealing joints in the concrete structure.",
  },
  {
    year: "2022",
    title: "Multiseal Admixplus",
    subtitle:
      "Self-healing Dynamic Multifunctional and Hydrophobic Crystalline Additive",
    description:
      "Combination of self-healing Dynamic Multifunctional Crystals and Hydrophobic pore lining admixture that provides multi protection for concrete in extreme weather variable conditions.",
  },
];

export default function TimeLineSection() {
  //   const timelineRef = useRef(null);

  //   useEffect(() => {
  //     const items = gsap.utils.toArray(".timeline-item");
  //     items.forEach((item, index) => {
  //       gsap.fromTo(
  //         item,
  //         { opacity: 0, y: 50 },
  //         {
  //           opacity: 1,
  //           y: 0,
  //           duration: 0.8,
  //           scrollTrigger: {
  //             trigger: item,
  //             start: "top 80%",
  //             toggleActions: "play none none reverse",
  //           },
  //         }
  //       );
  //     });
  //   }, []);

  return (
    <section className="py-16 px-4 md:px-8 lg:px-24 bg-white max-w-7xl mx-auto">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-12">
        Timeline of Product Innovations
      </h2>

      <div className="relative border-l-4 border-red-600 pl-8 md:pl-12 max-w-5xl mx-auto">
        {timelineData.map((item, index) => (
          <div key={index} className=" mb-12 relative">
            <div className="absolute -left-13 md:-left-18 top-0 w-12 h-12 flex items-center justify-center bg-red-600 text-white font-bold rounded-full text-sm md:text-base shadow-lg ">
              {item.year}
            </div>
            <h3 className="text-xl md:text-2xl font-semibold text-black">
              {item.title}
            </h3>
            <h4 className="text-red-600 font-semibold text-sm md:text-base  md:text-lg mt-1">
              {item.subtitle}
            </h4>
            <p className="text-gray-700 mt-2 text-sm md:text-base">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
