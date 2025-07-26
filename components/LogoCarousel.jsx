export default function LogoCarousel() {
  return (
    <div className="py-10 md:py-8 bg-white  px-6 md:px-14">
      <div className="max-w-7xl mx-auto">
        <div className=" mb-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl  font-semibold poppins leading-10 text-black text-left tracking-wide">
            Collaborations and Certifications
          </h2>
        </div>
        <div className="max-w-7xl py-6 ">
          <div className="flex flex-col md:flex-row justify-start items-center gap-y-8 md:gap-0 border-[1px] border-[#ececec]  py-4 leading-9 px-5 md:px-0">
            {/* Left side logos */}
            <div className="flex flex-wrap justify-between md:justify-around items-center gap-3 w-full md:w-1/2">
              <img
                src="/client1.png"
                alt="Politecnico di Torino"
                className="h-10 lg:h-15 object-contain"
              />
              <img
                src="/client2.png"
                alt="Kingston University"
                className="h-10 lg:h-15 object-contain"
              />
              <img
                src="/client3.png"
                alt="IIT"
                className="h-10 lg:h-15 object-contain"
              />
              <img
                src="/client8.png"
                alt="USGBC"
                className="h-10 lg:h-15 object-contain"
              />
            </div>

            {/* Vertical divider (hidden on mobile) */}
            <div className="hidden md:block w-px h-16 bg-[#ececec] mx-6 leading-7"></div>

            {/* Right side logos */}
            <div className="flex flex-wrap justify-between md:justify-around items-center gap-3 w-full md:w-1/2 leading-9">
              <img
                src="/client5.png"
                alt="Bureau Veritas"
                className="h-10 lg:h-15 object-contain"
              />
              <img
                src="/client6.png"
                alt="CE"
                className="h-10 lg:h-15 object-contain"
              />
              <img
                src="/client7.png"
                alt="ISO"
                className="h-10 lg:h-15 object-contain"
              />
              <img
                src="/client4.png"
                alt="ASTM"
                className="h-10 lg:h-15 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
