import Breadcrumbs from "../../../components/Breadcrumbs";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import MultisealAdmixplusHero from "../../../components/MultisealAdmixplusHero";
import MultisealAdmixplusApplication from '../../../components/MultisealAdmixplusApplication';
import MultisealRelatedProduct from "../../../components/MultisealRelatedProduct";
import TechnicalDocumentation from "../../../components/TechnicalDocumentation";
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
const MultisealAdmixplus = () => {
  return (
    <div>
      <Header/>
      <Breadcrumbs/>
      <MultisealAdmixplusHero />
      <MultisealAdmixplusApplication/>
      <TechnicalDocumentation documents={documents}/>
      <MultisealRelatedProduct />
      <Footer/>
    </div>
  );
};

export default MultisealAdmixplus;
