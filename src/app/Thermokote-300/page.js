import Breadcrumbs from "../../../components/Breadcrumbs";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import ThermokoteHero200 from "../../../components/ThermokoteHero200";
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
const Thermokote300 = () => {
  return (
    <div>
      <Header />
      <Breadcrumbs />
      <ThermokoteHero200 />
      <ThermokoteApplication100 />
      <TechnicalDocumentation documents={documents} />
      <ThermokoteProducts />
      <Footer />
    </div>
  );
};

export default Thermokote300;
