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
    href: "/tech_document/TDS-V2_INJECTPACKER.pdf",
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
  img: "/inject-connector.webp",
  title: "INJECT CONNECTOR",
  subtitile:
    "Flat-head Connecting element between the pumping tube and the flat head injections",
  para: "The Supershield Injector Connector is the essential connection element between flat head injectors and the pumping tubes of either manual or electric pumps used to block water infiltration by injections of water-reactive polyurethane resins.",
  Application:
    "The Connector is primarily used to stop the infiltration of pressurized water in buildings through targeted injections of hydro-expansive polyurethane resins.",
};

const Injectconnector = () => {
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

export default Injectconnector;
