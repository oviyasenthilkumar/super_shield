export default function ShieldSection() {
  return (
    <section className="bg-white text-black">
      <div className="max-w-7xl mx-auto gap-x-10">
        <div className="flex flex-col lg:flex-row max-w-7xl mx-auto gap-x-10">
          {/* Left content */}
          <div className="lg:w-3/4 p-4 lg:pr-10 lg:p-0 py-8 ">
            <h1 className="text-3xl md:text-4xl font-semibold font-poppins text-left">
              <span className="text-[#c50022] font-extrabold">SHIELD</span>{" "}
              <span>Consortium</span>
            </h1>

            <h2 className="text-xl md:text-2xl mt-4 md:mt-6 font-medium text-left font-poppins">
              Advancing the Future of Self-Healing Concrete
            </h2>

            <p className="mt-6 max-w-3xl text-sm md:text-base leading-7 md:leading-8 text-justify font-normal text-[#333] open-sans">
              The <strong>SHIELD Consortium</strong>, a key initiative of
              Leaselife Holdings through its SHIELD of Concrete Innovation
              Centre, is committed to pioneering research and development in
              self-healing, sustainable, and climate-resilient concrete
              technologies.
              <br />
              At the forefront of innovation, SHIELD of Concrete has developed a
              suite of advanced SHIELD adaptive crystalline technologies
              designed to enhance durability, sustainability, and adaptability
              in extreme environmental conditions. These research-backed
              solutions not only extend infrastructure lifespan and reduce
              maintenance needs but also play a vital role in the global shift
              toward climate-resilient and low-carbon construction.
              <br />
              We invite universities, research institutes, government bodies,
              national research agencies, and certification organizations to
              collaborate in evaluating, validating, and expanding SHIELD
              technologies in their respective fields—driving the transformation
              of the construction industry toward a more durable, efficient, and
              sustainable future.
            </p>

            <a
              href="#"
              className="mt-6 inline-block text-[#c50022] font-bold uppercase tracking-wide open-sans"
            >
              Know More &rarr;
            </a>

            {/* Mission Logos */}
          </div>

          {/* Right image */}
          <div className="lg:w-2/3 relative">
            <img
              src="/card.jpeg"
              alt="Molecules visual"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <div className="flex flex-wrap gap-4 pb-10 items-center justify-around">
          <span className="text-xs font-semibold font-poppins uppercase">
            Our Mission In
            <br /> Alignment With
          </span>
          <img src="/partner1.png" alt="logo1" className="h-10" />
          <img src="/partner2.png" alt="logo2" className="h-10" />
          <img src="/partner3.png" alt="logo3" className="h-10" />
        </div>
      </div>
    </section>
  );
}
