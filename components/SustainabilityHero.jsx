import Image from "next/image";

export default function SustainabilityHero() {
  return (
    <>
      <section className="relative w-full h-[50vh] md:h-[60vh] lg:h-[68vh]">
        <Image
          src="/sustainability-hero.webp"
          alt="City background"
          fill
          className="object-cover"
          priority
        />

        {/* Centered Text Overlay */}
        <div className="relative mx-auto z-10 max-w-7xl w-full px-6 md:px-12 text-white text-left flex items-center justify-start h-full">
          <div className=" rounded-lg  ">
            <h1 className="text-3xl md:text-7xl font-bold leading-tight poppins text-white">
              Sustainability with SHIELD
            </h1>
          </div>
        </div>

        <div className="absolute bottom-0 w-full h-6 md:h-10 z-10">
          <Image
            src="/gradient-color.webp"
            alt="gradient"
            fill
            className="object-cover"
            priority
          />
        </div>
        {/* Optional gradient or overlay */}
        <div className="absolute inset-0 bg-black/18 z-5" />
      </section>
    </>
  );
}
