import Breadcrumbs from "../../../components/Breadcrumbs";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import TechnicalDocumentation from "../../../components/TechnicalDocumentation";
import SlipstopHero200 from "../../../components/SlipstopHero200";
import SlipstopApplication100 from "../../../components/SlipstopApplication100";
import SlipstopProducts from "../../../components/SlipstopProducts";
const documents = [
  {
    title: "Technical Datasheet",
    type: "download",
    href: "/tech_document/TDS-V2_SlipStop-200.pdf",
  },
  {
    title: "Safety Datasheet",
    type: "download",
    href: "/tech_document/sds_slipstop200.pdf",
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
const Slipstop200 = () => {
  return (
    <div>
      <Header />
      <Breadcrumbs />
      <SlipstopHero200 />
      <SlipstopApplication100 />
      <TechnicalDocumentation documents={documents} />
      <SlipstopProducts />
      <Footer />
    </div>
  );
};

export default Slipstop200;
