import Breadcrumbs from "../../../components/Breadcrumbs";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import ThermokoteHero100 from "../../../components/ThermokoteHero100";
import ThermokoteApplication100 from "../../../components/ThermokoteApplication100";
import TechnicalDocumentation from "../../../components/TechnicalDocumentation";
import ThermokoteProducts from "../../../components/ThermokoteProducts";
const documents = [
  {
    title: "Technical Datasheet",
    type: "external",
    href: "/ProductCatalogueModal",
  },
  {
    title: "Safety Datasheet",
    type: "download",
    href: "/tech_document/sds_thermokote100.pdf",
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
const Thermokote100 = () => {
  return (
    <div>
      <Header />
      <Breadcrumbs />
      <ThermokoteHero100 />
      <ThermokoteApplication100 />
      <TechnicalDocumentation documents={documents} />
      <ThermokoteProducts />
      <Footer />
    </div>
  );
};

export default Thermokote100;
