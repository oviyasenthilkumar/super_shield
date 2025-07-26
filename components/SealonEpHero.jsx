import Image from "next/image";

export default function SealonEPHero() {
  return (
    <section className="bg-white px-6 py-12 md:px-16 text-gray-800">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-10">
          {/* Product Image */}
          <div className="w-full md:w-[40%] mx-auto">
            <Image
              src="/SEALON EPHero.png"
              alt="Supershield Sealon EP"
              width={350}
              height={350}
              className="object-contain"
            />
          </div>

          {/* Product Details */}
          <div className="w-full md:w-[60%] space-y-3">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#c50022] leading-8 lg:leading-10 poppins">
              Supershield <span className="text-gray-900">SEALON EP</span>
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-800 poppins leading-7 lg:leading-9">
              Epoxy–polyurethane, Two–component, Thixotropic, Elastomeric
              sealant
            </h2>
            <p className="text-gray-700 open-sans leading-7 text-sm md:text-base font-normal">
              SEALON EP is an Epoxy-polyurethane two-component Elastomeric and
              thixotropic sealant, for joints subject to traffic.
            </p>
          </div>
        </div>

        {/* Application Section */}
        <div className="bg-[#EDEDED] p-8 md:p-10 ">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 poppins">
            Applications
          </h3>
          <p className="text-gray-800 open-sans leading-7 text-sm md:text-base font-normal">
            SEALON EP is suitable for both horizontal and vertical sealing of
            joints in expansion areas and industrial flooring, capable of
            withstanding medium to heavy traffic loads. Additionally, it offers
            resistance to contact with hydrocarbons, including gasoline and
            diesel.
          </p>
        </div>
      </div>
    </section>
  );
}
