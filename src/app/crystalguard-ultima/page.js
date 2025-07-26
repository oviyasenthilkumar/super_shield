
import AboutHero from "../../../components/AboutHero";
import Breadcrumbs from "../../../components/Breadcrumbs";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import CrystalguardUltra from "../../../components/CrystalguardUltraHero"
import CrystalguardApplication from '../../../components/CrystalguardApplication'

import RelatedProductsPage from "../../../components/RelatedProduct";
import TechnicalDocumentation from "../../../components/TechnicalDocumentation";
const documents = [
  {
    title: "Technical Datasheet",
    type: "download",
    href: "/tech_document/TDS-V2_CRYSTALGUARDULTIMA.pdf",
  },
  {
    title: "Safety Datasheet",
    type: "download",
    href: "/tech_document/sds_crystalguardultima.pdf",
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

const CrystalgardUltima = () => {
  return (
    <div>
      <Header/>
      <Breadcrumbs/>
      <CrystalguardUltra />
      <CrystalguardApplication/>
      <TechnicalDocumentation documents={documents}/>
      <RelatedProductsPage />
      <Footer/>
    </div>
  );
};

export default CrystalgardUltima;
