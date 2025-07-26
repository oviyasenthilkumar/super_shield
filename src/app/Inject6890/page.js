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
    href: "/tech_document/TDS-V2_Inject6890.pdf",
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
  img: "/inject6890.webp",
  title: "INJECT 6890",
  subtitile: "Hydro Expansive Polyurethane Injection Resin",
  para: "SUPERSHIELD INJECT 6890 is a polyurethane resin based on MDI (Methylene Diphenyl Diisocyanate). It features a medium viscosity and expands upon contact with water into a flexible foam that does not shrink. SUPERSHIELD Inject 6890 penetrates deeply into joints and cracks, reacting with water to form a flexible, closed-cell foam that accommodates micro-movements. It expands by 800% to 1100% and is resistant to water, weak acids, alkalis, and microorganisms. The resin adheres well to concrete, cement, bricks, mortars, metals, and some plastics. Reaction speed is controlled by 6-10% catalyst, ensuring good cell formation.",
  Application:
    "SUPERSHIELD INJECT 6890 is ideal for sealing and ensuring water tightness in cracks, joints on walls and floors, concrete constructions, and sewer systems.",
};

const Inject6890 = () => {
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

export default Inject6890;
