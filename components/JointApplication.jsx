export default function JointApplication() {
  return (
    <section className="py-12 px-6 md:px-16 text-gray-800">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Applications Section */}
        <div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 poppins text-gray-900 leading-10 tracking-wide ">
            Applications
          </h2>
          <p className="text-sm md:text-base leading-7 open-sans text-gray-700 ">
            Water tanks, Water treatment plants, Sewage treatment plants,
            Swimming pools, Dams and spillways, Reservoirs, Basements,
            Underground car parks, Tunnels, Retaining walls and Below ground
            slabs
          </p>
        </div>

        {/* Features and Benefits Section */}
        <div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 poppins text-gray-900">
            Features and Benefits
          </h2>
          <ul className="list-disc pl-2 space-y-2 text-base md:text-lg leading-8 open-sans text-gray-700 ">
            <li className="flex items-start gap-2">
              <img
                src="/angle-right.png"
                alt="arrow"
                className="w-3 min-w-3 mt-2"
              />
              <div className="text-gray-700 text-base font-normal leading-7 open-sans ">
                Our Jointbelt PVC Waterstops are made from premium compounded
                PVC, ensuring exceptional durability and long-lasting
                performance
              </div>
            </li>
            <li className="flex items-start gap-2  ">
              <img
                src="/angle-right.png"
                alt="arrow"
                className="w-3 min-w-3 mt-2"
              />
              <div className="text-gray-700 text-base font-normal  open-sans ">
                Designed to be placed across and along the joint, they form a
                watertight diaphragm that effectively seals off any potential
                leaks
              </div>
            </li>
            <li className="flex items-start gap-2">
              <img
                src="/angle-right.png"
                alt="arrow"
                className="w-3 min-w-3 mt-2"
              />
              <div className="text-gray-700  text-base font-normal  open-sans ">
                Ability to withstand high hydrostatic head pressures
              </div>
            </li>
            <li className="flex items-start gap-2">
              <img
                src="/angle-right.png"
                alt="arrow"
                className="w-3 min-w-3 mt-2"
              />
              <div className="text-gray-700  text-base font-normal leading-7 open-sans ">
                Suitable for potable water contact
              </div>
            </li>
            <li className="flex items-start gap-2  ">
              <img
                src="/angle-right.png"
                alt="arrow"
                className="w-3 min-w-3 mt-2"
              />
              <div className="text-gray-700  text-base font-normal leading-7 open-sans ">
                Jointbelt PVC waterstops conform to and exceed all major
                international standards
              </div>
            </li>
            <li className="flex items-start gap-2  ">
              <img
                src="/angle-right.png"
                alt="arrow"
                className="w-3 min-w-3 mt-2"
              />
              <div className="text-gray-700  text-base font-normal leading-7 open-sans ">
                A full range of profiles and sizes to suit all types of
                construction requirements
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
