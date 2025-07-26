export default function ShieldSection() {
  return (
    <section className="bg-[#f7f7f7] text-black py-16">
      <div className="max-w-7xl mx-auto ">
        <div className="flex flex-col lg:flex-row  ">
          {/* Left content */}
          <div className="lg:w-3/4 md:px-10 lg:pr-10 lg:p-0 py-18 p-4">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold poppins leading-10 text-left tracking-wide">
              <span className="text-[#c50022] font-semibold">SHIELD </span>
              <span>Consortium</span>
            </h1>

            <h2 className="text-xl md:text-2xl mt-4 md:mt-3 font-medium text-left sm:leading-7 md:leading-8 lg:leading-9 poppins">
              Advancing the Future of Self-Healing Concrete
            </h2>

            <p className="mt-6 max-w-3xl text-sm md:text-base leading-7 text-justify font-normal text-gray-700 open-sans">
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
              className="mt-6 text-[#c50022] font-semibold text-sm md:text-base  uppercase tracking-wide open-sans flex items-center "
            >
              <img
                src="/angle-right.png"
                alt="arrow"
                width={12}
                className=" inline mr-2"
              />{" "}
              Know More
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
        <div className="flex flex-col mx-auto gap-4 px-3 py-9 items-center justify-around ">
          <h3 className="text-lg font-semibold font-poppins uppercase">
            Our Mission In Alignment With
          </h3>
          <div className="flex flex-wrap w-full justify-center pt-3 gap-y-5 md:gap-y-0">
            <img src="/partner1.png" alt="logo1" className="h-12 pr-10" />
            <img src="/partner2.png" alt="logo2" className="h-12 pr-10" />
            <img src="/partner3.png" alt="logo3" className="h-12 pr-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
