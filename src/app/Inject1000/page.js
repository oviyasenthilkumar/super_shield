import Breadcrumbs from "../../../components/Breadcrumbs";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import TechnicalDocumentation from "../../../components/TechnicalDocumentation";
import InjectProducts from "../../../components/InjectProducts";
import InjectHero from "../../../components/InjectHero";
import InjectApplication from "../../../components/InjectApplication";
const documents = [
  {
    title: "Technical Datasheet",
    type: "download",
    href: "/tech_document/TDS-V2_Inject1000.pdf",
  },
  {
    title: "Safety Datasheet",
    type: "external",
    href: "/ProductCatalogueModal",
  },
  {
    title: "Declaration of Performance",
    type: "external",
    href: "/ProductCatalogueModal",
  },
  {
    title: "Specifications",
    type: "external",
    href: "/ProductCatalogueModal",
  },
  {
    title: "Approvals and Certificates",
    type: "external",
    href: "/ProductCatalogueModal",
  },
];
const details = {
  img: "/inject1000.webp",
  title: "INJECT 1000",
  subtitile: "Hydro-expansive, Flexible, Injectable Polyurethane Resin",
  para: "SUPERSHIELD INJECT 1000 is a semi-flexible polyurethane resin that expands to approximately ten times its initial volume. This solvent-free resin is ideal for sealing both small and large water leaks in concrete or solid masonry through injection. It is also perfect for filling and sealing small cavities, joints, and discontinuities that are subject to movement. In contact with water, SUPERSHIELD INJECT 1000 forms a flexible polyurethane foam. Technically, it is a mono-component product which reacts spontaneously with the water present in the masonry to be sealed. The speed of reaction with just water, however, would be very slow relative to the construction site requirements. It is therefore essential to use an expansion accelerator, sold in combination with the same resin (component B). The polyurethane foam resulting from injection operations, will keep its volume stable once expanded. A good resistance to hydraulic pressure in the water flow after about 1-2 minutes from the time the reaction took place. The formation of CO₂, typical of the polyurethane reaction, will further pressurize the system, thus favoring the penetration of the resin in the cracks and cavities. In a free environment, SUPERSHIELD INJECT 1000 expands to about 10 times its initial volume.",
  Application:
    "INJECT 1000 is specifically designed to stop water infiltration in underground environments. It efficiently fills small cavities, cracks, fissures, and addresses both static and dynamic joints within concrete and solid masonry structures. It is suitable for use on various substrates including concrete, bricks, tuff, mixed masonry, stone masonry, and rock walls.",
};

const Inject1000 = () => {
  return (
    <>
      <Header />
      <Breadcrumbs />
      <InjectHero details={details} />
      <InjectApplication details={details}/>
      <TechnicalDocumentation documents={documents} />
      <InjectProducts />
      <Footer />
    </>
  );
};

export default Inject1000;
