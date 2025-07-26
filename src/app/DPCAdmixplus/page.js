
import Breadcrumbs from "../../../components/Breadcrumbs";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import DPCAdmixplusHero from "../../../components/DpcAdmixplusHero"
import DPCAdmixplusApplication from '../../../components/DPCAdmixplusApplication'
import RelatedProductsPage from "../../../components/RelatedProduct";
import TechnicalDocumentation from "../../../components/TechnicalDocumentation";
const documents = [
  {
    title: "Technical Datasheet",
    type: "download",
    href: "/tech_document/TDS_Supershield_DPCAdmixplus.pdf",
  },
  {
    title: "Safety Datasheet",
    type: "download",
    href: "/tech_document/sds_admixplus.pdf",
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
const DPCAdmixplus = () => {
  return (
    <div>
      <Header/>
      <Breadcrumbs/>
      <DPCAdmixplusHero />
      <DPCAdmixplusApplication/>
      <TechnicalDocumentation documents={documents}/>
      <RelatedProductsPage />
      <Footer/>
    </div>
  );
};

export default DPCAdmixplus;
