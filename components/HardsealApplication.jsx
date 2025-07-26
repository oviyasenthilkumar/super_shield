export default function HardsealApplication() {
  return (
    <section className="py-12 px-6 md:px-0 text-gray-800">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Applications Section */}
        <div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 poppins mb-4">
            Applications
          </h2>
          <p className="text-base md:text-md leading-7">
            Treatable materials include concrete, heavyweight concrete block,
            mortar, plaster, stucco, terrazzo, exposed aggregate, and any
            sand-aggregate-cement combination. Applications include warehouses,
            distribution facilities, aviation hangars, manufacturing plants,
            food processing units, distribution buildings, pulp and paper mills,
            or other types of facilities with large exposed concrete floors.
          </p>
        </div>

        {/* Features Section */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 poppins text-gray-900">
            Features
          </h2>
          <ul className="list-disc pl-2  text-base md:text-lg leading-7 open-sans text-gray-700 ">
            <li className="flex items-start gap-2  ">
              <img
                src="/angle-right.png"
                alt="arrow"
                className="w-3 min-w-3 mt-2"
              />
              <div className="text-gray-700 mb-6 text-base font-normal open-sans ">
                Hardens and strengthens within the concrete mass protecting
                against deterioration.
              </div>
            </li>
            <li className="flex items-start gap-2  ">
              <img
                src="/angle-right.png"
                alt="arrow"
                className="w-3 min-w-3 mt-2"
              />
              <div className="text-gray-700 mb-6 text-base font-normal  open-sans ">
                Treated surface resists dust, oils, greases and other surface
                contaminants
              </div>
            </li>
            <li className="flex items-start gap-2  ">
              <img
                src="/angle-right.png"
                alt="arrow"
                className="w-3 min-w-3 mt-2"
              />
              <div className="text-gray-700 mb-6 text-base font-normal  open-sans ">
                Effective curing agent when applied immediately after the
                finishing operation
              </div>
            </li>
            <li className="flex items-start gap-2  ">
              <img
                src="/angle-right.png"
                alt="arrow"
                className="w-3 min-w-3 mt-2"
              />
              <div className="text-gray-700 mb-6 text-base font-normal open-sans ">
                Eliminates dusting and enhances surface bonding of paints
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
