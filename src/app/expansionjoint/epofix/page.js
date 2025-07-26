import Breadcrumbs from "../../../../components/Breadcrumbs";
import Footer from "../../../../components/Footer";
import Header from "../../../../components/Header";
import TBE from '../../../../components/TBE'
import FlexstripProduct from "../../../../components/FlexstripProducts";
import FlexstripHero from '../../../../components/FlexstripHero'
import EPOFix from "../../../../components/EPOFix";
import TechnicalDocumentation from "../../../../components/TechnicalDocumentation";
const documents = [
  {
    title: "Technical Datasheet",
    type: "download",
    href: "/tech_document/TDS-V2_EPOFIX.pdf",
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
const epofix = () => {
  return (
    <div>
      <Header/>
       <Breadcrumbs/>
      <EPOFix/>
      <TechnicalDocumentation documents={documents}/>
{/*      
      <TBE /> */}
      {/* <FlexstripProduct /> */}
      <Footer/>
    </div>
  );
};

export default epofix;
