
import AboutHero from "../../../components/AboutHero";
import Breadcrumbs from "../../../components/Breadcrumbs";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import CrystalsparyHero from "../../../components/Crystalspary";
import CrystalSprayApplication from '../../../components/CrystalSprayApplication'

import RelatedProductsPage from "../../../components/RelatedProduct";
import TechnicalDocumentation from "../../../components/TechnicalDocumentation";
const documents = [
  {
    title: "Technical Datasheet",
    type: "download",
    href: "/tech_document/TDS-V2_CrystalSpray.pdf",
  },
  {
    title: "Safety Datasheet",
    type: "download",
    href: "/tech_document/sds_crystalspray.pdf",
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
const Crystalspary = () => {
  return (
    <div>
      <Header />
      <Breadcrumbs />
      <CrystalsparyHero />
      <CrystalSprayApplication />
      <TechnicalDocumentation documents={documents} />
      <RelatedProductsPage />

      <Footer />
    </div>
  );
};

export default Crystalspary;
