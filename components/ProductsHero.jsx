import Image from "next/image";

export default function ProductsHero() {
  return (
    <>
      <section className="relative w-full h-[50vh] md:h-[60vh] lg:h-[68vh]">
        <Image
          src="/dpc-crystalline-products.webp"
          alt="City background"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute bottom-0 w-full h-6 md:h-10 z-10">
          <Image
            src="/gradient-color.webp"
            alt="gradient"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>
    </>
  );
}
