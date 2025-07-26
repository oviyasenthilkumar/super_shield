import Breadcrumbs from "../../../components/Breadcrumbs";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import TechnicalDocumentation from "../../../components/TechnicalDocumentation";
import SlipstopHero100 from "../../../components/SlipstopHero100";
import SlipstopApplication100 from "../../../components/SlipstopApplication100";
import SlipstopProducts from "../../../components/SlipstopProducts";
const documents = [
  {
    title: "Technical Datasheet",
    type: "download",
    href: "/tech_document/TDS-V2_SlipStop-100.pdf",
  },
  {
    title: "Safety Datasheet",
    type: "download",
    href: "/tech_document/sds_slipstop100.pdf",
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
const Slipstop100 = () => {
  return (
    <>
      <Header />
      <Breadcrumbs />
      <SlipstopHero100 />
      <SlipstopApplication100 />
      <TechnicalDocumentation documents={documents} />
      <SlipstopProducts />
      <Footer />
    </>
  );
};

export default Slipstop100;
