import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
  const data = [
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
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
