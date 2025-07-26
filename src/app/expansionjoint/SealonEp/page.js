import Breadcrumbs from "../../../../components/Breadcrumbs";
import Footer from "../../../../components/Footer";
import Header from "../../../../components/Header";
import SealonEpHero from '../../../../components/SealonEpHero'
import BackdropRodProduct from "../../../../components/BackdropRodProduct";
import SealonProduct from "../../../../components/SealonProduct";
import TechnicalDocumentation from "../../../../components/TechnicalDocumentation";
const documents = [
  {
    title: "Technical Datasheet",
    type: "download",
    href: "/tech_document/TDS-V2_SEALON-EP.pdf",
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

const sealonEp = () => {
  return (
    <div>
      <Header />
      <Breadcrumbs />
      <SealonEpHero />
      <TechnicalDocumentation documents={documents}/>
      <SealonProduct />

      <Footer />
    </div>
  );
};

export default sealonEp;
