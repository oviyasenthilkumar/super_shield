
import AboutHero from "../../../components/AboutHero";
import Breadcrumbs from "../../../components/Breadcrumbs";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import CrystalmixUltraHero from "../../../components/CrystalmixUltraHero"

import RelatedProductsPage from "../../../components/RelatedProduct";
import CrystalmixUltraApplications from "../../../components/CrystalmixUltraApplication";
import TechnicalDocumentation from "../../../components/TechnicalDocumentation";
const documents = [
  {
    title: "Technical Datasheet",
    type: "download",
    href: "/tech_document/TDS-V2_CRYSTALMIXULTRA.pdf",
  },
  {
    title: "Safety Datasheet",
    type: "download",
    href: "/tech_document/sds_crystalmixultra.pdf",
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
const CrystalmixUltra = () => {
  return (
    <div>
      <Header />
      <Breadcrumbs />
      <CrystalmixUltraHero />
      <CrystalmixUltraApplications />
      <TechnicalDocumentation documents={documents}/>
      <RelatedProductsPage />
      <Footer />
    </div>
  );
};

export default CrystalmixUltra;
