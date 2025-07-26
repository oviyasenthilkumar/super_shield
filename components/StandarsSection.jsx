import Image from "next/image";

export const standardsList = [
  {
    title: "Certified Quality Management",
    description:
      "Our operations follow a robust, fully implemented system assessed and certified by a globally recognized certification body, in compliance with ISO 9001, European Union Directives, and international best practices.",
  },
  {
    title: "CE Marking and Factory Production Control",
    description:
      "Our products bear the CE mark, demonstrating compliance with European Construction Product Regulations (CPR 305/2011). They undergo comprehensive product testing and factory inspections by notified bodies to ensure reliability, consistency, and adherence to European norms.",
  },
  {
    title: "Harmonized Technical Specifications",
    description:
      "Our products covered under specific harmonized technical specifications meet stringent EU regulations and carry CE marking on their packaging. To enhance transparency, we provide clear visual identifiers in our product documentation, making it easier to recognize CE-certified products and their reference standards.",
  },
];

export default function StandardsSection() {
  return (
    <section className=" py-16 px-4 md:px-8 lg:px-16 text-black">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Text content */}
        <div>
          <h2 className=" text-2xl md:text-3xl lg:text-4xl font-semibold leading-10 text-left poppins tracking-wide">
            Meeting Standards and Setting Standards
          </h2>
          <p className="mt-8 lg:mt-3 lg:max-w-xl text-sm md:text-base leading-6 lg:leading-7 text-black font-normal text-left open-sans">
            At Supershield, we are committed to exceeding global quality,
            environmental, and safety standards. Our rigorous compliance ensures
            that our products and systems meet the highest industry benchmarks.
          </p>
          <p className="mt-8 lg:mt-3 lg:max-w-xl text-sm md:text-base  leading-6 text-black font-normal text-left open-sans">
            At Supershield, we don’t just meet standards—we set them, ensuring
            trust, quality, and compliance in every product we deliver
            worldwide.
          </p>
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <Image
            src="/abt-map.webp"
            alt="Global Standards Map"
            width={500}
            height={300}
            className="w-full max-w-md"
          />
        </div>
      </div>

      {/* Standards Cards */}
      <div className="mt-12 space-y-8 max-w-7xl mx-auto">
        {standardsList.map((item, index) => (
          <div
            key={index}
            className={`mb-5  pb-6 ${
              index !== standardsList.length - 1
                ? "border-b border-b-[#d3d3d3] max-w-6xl "
                : ""
            }`}
          >
            <h3 className="text-black font-semibold leading-8 text-lg md:text-xl mb-4 poppins text-left">
              {item.title}
            </h3>
            <p className="text-gray-700 text-sm md:text-base leading-6 lg:leading-7 flex-grow text-left open-sans font-normal max-w-6xl">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
