

"use client";
import Image from "next/image";
import Link from "next/link";

export default function ExecutionPhase() {
  return (
    <section className="px-4 md:px-0 py-12 bg-white max-w-7xl mx-auto">
      {/* Intro Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 text-gray-900 poppins leading-10">
            Execution Phase
          </h2>
          <p className="text-gray-700 leading-7 lg:leading-8 open-sans text-justify text-sm md:text-base ">
            In the execution phase, Supershield ensures that your project moves
            seamlessly from planning to successful completion. Our dedicated
            team manages the implementation of our solutions with precision,
            providing hands-on support and expert oversight throughout the
            process. We focus on delivering high-quality results while adhering
            to project timelines and standards, ensuring that every detail is
            executed flawlessly for optimal performance and durability.
          </p>
        </div>
        <div className="flex justify-center">
          <Image
            src="/Execute.webp"
            alt="Planning Illustration"
            width={470}
            height={400}
            className="object-contain"
          />
        </div>
      </div>

      {/* Cards Section */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            title: "Product Training",
            img: "/Planning1.png",
            desc: "We provide comprehensive product training sessions to ensure that your team is well-equipped with the knowledge and skills necessary for a successful installation.",
          },
          {
            title: "On-site Instruction",
            img: "/Planning2.png",
            desc: "Our experts are available to provide on-site instruction and guidance throughout the installation process to ensure seamless execution.",
          },
          {
            title: "Installation Instructions",
            img: "/Planning5.png",
            desc: "Clear and detailed installation instructions are provided with our products to simplify the process and ensure accuracy and efficiency.",
          },
          {
            title: "Quality Checking",
            img: "/Planning4.png",
            desc: "Our team conducts thorough quality checks during and after installation to ensure our products are installed correctly and meet top standards.",
          },
          {
            title: "Product Performance Certification",
            img: "/Planning3.png",
            desc: "After installation, we provide certification to verify that our products have been installed correctly and are performing as expected.",
          },
        ].map((card, idx) => (
          <div
            key={idx}
            className="bg-white shadow-sm p-6  hover:bg-[#EDEDED] transition duration-300 flex flex-col py-10 lg:py-7"
          >
            <div className="mb-4 flex justify-center">
              <img
                src={card.img}
                alt={card.title}
                className="w-20 h-20 object-contain"
              />
            </div>
            <h3 className="font-semibold leading-8 text-lg md:text-xl mb-2 text-center poppins">
              {card.title}
            </h3>
            <p className="text-gray-700 text-sm md:text-base font-normal open-sans text-justify leading-6 lg:pt-4">
              {card.desc}
            </p>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="mt-20 py-10 px-4 text-center max-w-4xl mx-auto">
        <h3 className="text-2xl md:text-3xl mb-5 poppins font-normal">
          To learn more about our project services and discuss your specific
          needs on your current projects.
        </h3>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/contact">
            <button className="open-sans font-semibold border border-[#c50022] bg-[#c50022] text-white px-6 py-3 text-sm md:text-base hover:bg-white hover:text-[#c50022] transition-all duration-300">
              Contact Us Today!
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
