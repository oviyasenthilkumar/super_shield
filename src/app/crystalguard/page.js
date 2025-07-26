
import AboutHero from "../../../components/AboutHero";
import Breadcrumbs from "../../../components/Breadcrumbs";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import Crystalgardhero from "../../../components/CrystalguardHero";
import CrystalguardApplication from '../../../components/CrystalguardApplication'

import RelatedProductsPage from "../../../components/RelatedProduct";
import TechnicalDocumentation from "../../../components/TechnicalDocumentation";
const documents = [
  {
    title: "Technical Datasheet",
    type: "download",
    href: "/tech_document/TDS-V2_CRYSTALGUARD.pdf",
  },
  {
    title: "Safety Datasheet",
    type: "download",
    href: "/tech_document/sds_crystalguard.pdf",
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

const Crystalguard = () => {
  return (
    <div>
      <Header/>
      <Breadcrumbs/>
      <Crystalgardhero />
      <CrystalguardApplication/>
      <TechnicalDocumentation documents={documents}/>
      <RelatedProductsPage />
      <Footer/>
    </div>
  );
};

export default Crystalguard;
