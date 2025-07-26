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
    href: "/tech_document/TDS-V2_PUMPCLEANER.pdf",
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
  img: "/pump-cleaner.webp",
  title: "PUMP CLEANER",
  subtitile:
    "Cleaning agent for specific interventions with water-reactive resins",
  para: "Supershield PUMP CLEANER is a specialized cleaning agent designed for use with injection equipment involved in stopping water infiltration in buildings. This oily rinsing detergent features low toxicity and a high solvent capacity, making it effective for cleaning non-hardened polyurethanes. It is specifically formulated to clean and lubricate the internal hydraulic circuits of both manual and electric pumping systems, ensuring efficient operation and maintenance of injection equipment.",
  Application:
    "PUMP CLEANER is specifically designed for cleaning equipment used for water-reactive polyurethane injections in masonry. It effectively removes non-hardened polyurethane residues, ensuring that injection equipment is maintained in optimal condition for future use.",
};

const Pumpcleaner = () => {
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

export default Pumpcleaner;
