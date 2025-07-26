import { gql } from "@apollo/client";
import client from "@/lib/apollo-client";
import Image from "next/image";
import Link from "next/link";
import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";
import ProductHero from "../../../../components/ProductHero";
import Breadcrumbs from "../../../../components/Breadcrumbs";

export async function generateStaticParams() {
  const { data } = await client.query({
    query: gql`
      query GetAllProductPages {
        pages(where: { status: PUBLISH }) {
          nodes {
            slug
            uri
          }
        }
      }
    `,
  });

  console.log("URIs from WordPress:", data.pages.nodes); // ← DEBUG HERE

  return data.pages.nodes.map((page) => ({
    slug: page.slug,
  }));
}

export default async function ProductPage({ params }) {
  const slug = decodeURIComponent(params.slug);

  function getYouTubeVideoId(url) {
    const regExp = /(?:youtube\.com.*(?:\?|&)v=|youtu\.be\/)([^&\n?#]+)/;
    const match = url.match(regExp);
    return match && match[1] ? match[1] : null;
  }

  const { data } = await client.query({
    query: gql`
      query ProductPageBySlug($slug: ID!) {
        page(id: $slug, idType: URI) {
          products {
            mainTitle
            title
            heroImage {
              node {
                sourceUrl
                altText
                title
              }
            }
            description
            brochure {
              node {
                id
                sourceUrl
              }
            }
            videoUrl
            buttontitle
            button {
              target
              title
              url
            }
            item1 {
              name
              productImageHref1
              productImageHref2
              productImageHref3
              productImageHref4
              productImageHref5
              productImageHref6
              productImageHref7
              productImageHref8
              productImage {
                node {
                  sourceUrl
                  altText
                  title
                }
              }
              productImageTitle
              productImageDescription
              productImage1 {
                node {
                  sourceUrl
                  altText
                  title
                }
              }
              productImageTitle1
              productImageDescription1
              productImage2 {
                node {
                  sourceUrl
                  altText
                  title
                }
              }
              productImageTitle2
              productImageDescription2
              productImage3 {
                node {
                  sourceUrl
                  altText
                  title
                }
              }
              productImageTitle3
              productImageDescription3
              productImage4 {
                node {
                  sourceUrl
                  altText
                  title
                }
              }
              productImageTitle4
              productImageDescription4
              productImage5 {
                node {
                  sourceUrl
                  altText
                  title
                }
              }
              productImageTitle5
              productImageDescription5

              productImage6 {
                node {
                  sourceUrl
                  altText
                  title
                }
              }
              productImageTitle6
              productImageDescription6
              productImage7 {
                node {
                  sourceUrl
                  altText
                  title
                }
              }
              productImageTitle7
              productImageDescription7
            }
            products2 {
              name
              productimagehref

              productImage {
                node {
                  sourceUrl
                  altText
                  title
                }
              }
              productimagehref1
              productImageTitle
              productImageDescription
              productImage1 {
                node {
                  sourceUrl
                  altText
                  title
                }
              }
              productimagehref2
              productImageTitle1
              productImageDescription1
              productImage2 {
                node {
                  sourceUrl
                  altText
                  title
                }
              }
              productImageTitle2
              productImageDescription2
            }
            products3 {
              name
              productimagehref1
              productimagehref2
              productimagehref3
              productImage {
                node {
                  sourceUrl
                  altText
                  title
                }
              }
              name
              productImage {
                node {
                  sourceUrl
                  altText
                  title
                }
              }
              productImageTitle
              productImageDescription
              productImage1 {
                node {
                  sourceUrl
                  altText
                  title
                }
              }
              productImageTitle1
              productImageDescription1
              productImage2 {
                node {
                  sourceUrl
                  altText
                  title
                }
              }
              productImageTitle2
              productImageDescription2
            }
          }
        }
      }
    `,
    variables: { slug },
  });

  const product = data?.page?.products;
  console.log(product);
  if (!product) return <div>Page not found</div>;

  return (
    <>
      <Header />
      <ProductHero
        bg={product?.heroImage?.node?.sourceUrl}
        title={product?.mainTitle}
      />
      <Breadcrumbs />
      <div className="px-4 py-10 max-w-7xl mx-auto space-y-10">
        {product?.title && (
          <div className=" md:flex md:items-start gap-8 bg-[#f7f7f7] p-10 ">
            {/* Title & Description */}
            <div
              className={`${
                product?.brochure?.node?.sourceUrl ? "md:w-[60%]" : "w-full"
              }`}
            >
              <h1 className="text-2xl md:text-3xl lg:text-4xl leading-10 font-semibold mb-4 poppins">
                {product.title}
              </h1>

              <p className="mb-4 text-justify text-sm md:text-base font-normal leading-7 open-sans text-gray-700">
                {product?.description}
              </p>

              {/* Optional Link */}
              {product?.button?.title && product?.button?.url && (
                <div className="mt-4">
                  <Link
                    href={product.button.url}
                    className="open-sans inline-block font-semibold border border-[#B41424] bg-[#B41424] text-white px-5 py-3 text-sm md:text-base hover:bg-white hover:text-[#B41424] transition-all duration-300"
                  >
                    {product.button.title}
                  </Link>
                </div>
              )}
            </div>

            {/* Brochure (Optional Column) */}
            {product.brochure?.node?.sourceUrl && (
              <div className="md:w-1/3 mt-8 md:mt-0 flex flex-col items-center p-6">
                <div className="flex flex-col items-center">
                  <img
                    src={product.brochure.node.sourceUrl}
                    alt="Brochure"
                    className="w-50 max-w-xs shadow-sm"
                  />
                  <a
                    href="/ProductCatalogueModal"
                    //  download
                    className="mt-4 underline-hover open-sans"
                  >
                    Download Brochure
                  </a>
                </div>
              </div>
            )}
          </div>
        )}

        {/* {product?.title && (
         <div className="md:flex md:items-start gap-8 bg-[#f7f7f7] p-10">
          
           <div className="md:w-[60%]">
             <h1 className="text-2xl md:text-3xl lg:text-4xl leading-10 font-semibold mb-4 poppins">
               {product.title}
             </h1>

             <p className="mb-4 text-justify font-normal leading-7 open-sans text-gray-700">
               {product?.description}
             </p>

            
             {product?.button?.title && product?.button?.url && (
               <div className="mt-4">
                 <Link
                   href={product.button.url}
                   className="inline-block font-semibold border border-[#B41424] bg-[#B41424] text-white px-5 py-3 text-sm md:text-base hover:bg-white hover:text-[#B41424] transition-all duration-300"
                 >
                   {product.button.title}
                 </Link>
               </div>
             )}
           </div>


           {product.brochure?.node?.sourceUrl && (
             <div className="md:w-1/3 mt-8 md:mt-0 flex flex-col items-center p-6">
               <div className="flex flex-col items-center">
                 <img
                   src={product.brochure.node.sourceUrl}
                   alt="Brochure"
                   className="w-50 max-w-xs shadow-sm"
                 />
                 <a
                   href={product.brochure.node.sourceUrl}
                   download
                   className="mt-4 underline-hover open-sans"
                 >
                   Download Brochure
                 </a>
               </div>
             </div>
           )}
         </div>
       )} */}

        {/* Video */}
        {product.videoUrl && (
          <div className=" w-full md:w-[50%] aspect-video my-18">
            <iframe
              src={`https://www.youtube.com/embed/${getYouTubeVideoId(
                product.videoUrl
              )}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        )}

        {/* Products Section */}
        <div className="mt-12 ">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold  pb-2 mb-6 poppins leading-10 tracking-wide">
            Products
          </h2>
          {product.item1 && (
            <div className="mb-10">
              <h3 className="text-xl md:text-2xl lg:text-3xl border-l-4 border-[#c50022] pl-4 font-semibold mb-10 poppins leading-8 tracking-wide">
                {product.item1.name}
              </h3>
              <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {[...Array(8)].map((_, i) => {
                  const img = product.item1[`productImage${i || ""}`];
                  const title = product.item1[`productImageTitle${i || ""}`];
                  const desc =
                    product.item1[`productImageDescription${i || ""}`];
                  const href = product.item1[`productImageHref${i + 1}`];

                  if (!img?.node?.sourceUrl && !title && !desc) return null;

                  return (
                    <div
                      key={i}
                      className="group relative overflow-hidden bg-white border transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                      {img?.node?.sourceUrl && (
                        <Image
                          src={img.node.sourceUrl}
                          alt={img.node.altText || ""}
                          width={300}
                          height={300}
                          className="w-full h-full object-contain mb-[32%]"
                        />
                      )}

                      <div className="absolute bottom-0 left-0 w-full bg-[#c50022] max-h-[70px] group-hover:max-h-[300px] transition-all duration-700 ease-in-out overflow-hidden p-4">
                        <h4 className="text-white font-semibold poppins leading-7 tracking-wide text-center flex items-center justify-center">
                          {title}
                        </h4>
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200 mt-2">
                          <p className="text-base text-white open-sans leading-6">
                            {desc}
                          </p>
                          <a
                            href={href}
                            className="mt-4 text-white font-semibold hover:underline w-full text-center cursor-pointer open-sans block"
                          >
                            VIEW MORE
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {product.products2 && (
            <div className="mb-10">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold  border-l-4 border-[#c50022] pl-4 mb-10 poppins leading-8 tracking-wide">
                {product.products2.name}
              </h3>
              <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {[...Array(4)].map((_, i) => {
                  const img = product.products2[`productImage${i || ""}`];
                  const title =
                    product.products2[`productImageTitle${i || ""}`];
                  const desc =
                    product.products2[`productImageDescription${i || ""}`];
                  const href =
                    i === 0
                      ? product.products2.productimagehref
                      : product.products2[`productimagehref${i}`];

                  if (!img?.node?.sourceUrl && !title && !desc) return null;

                  return (
                    <div
                      key={i}
                      className="group relative overflow-hidden bg-white border transition-all duration-500 shadow-md hover:shadow-lg"
                    >
                      {img?.node?.sourceUrl && (
                        <Image
                          src={img.node.sourceUrl}
                          alt={img.node.altText || ""}
                          width={300}
                          height={300}
                          className="w-full h-full object-contain mb-[32%]"
                        />
                      )}

                      <div className="absolute bottom-0 left-0 w-full bg-[#c50022] max-h-[80px] group-hover:max-h-[300px] transition-all duration-700 ease-in-out overflow-hidden p-4">
                        <h4 className="text-white font-semibold poppins leading-7 tracking-wide text-center">
                          {title}
                        </h4>
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200 mt-2">
                          <p className="text-base text-white open-sans leading-6">
                            {desc}
                          </p>
                          <a
                            href={href}
                            className="mt-4 text-white font-semibold hover:underline w-full text-center cursor-pointer open-sans block"
                          >
                            VIEW MORE
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* {product.products3 && (
            <div className="mb-10">
              <h3 className="text-xl md:text-2xl font-semibold mb-10 poppins leading-8 tracking-wide">
                {product.products3.name}
              </h3>
              <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {[
                  {
                    image: product.products3.productImage,
                    title: product.products3.productImageTitle,
                    desc: product.products3.productImageDescription,
                  },
                  {
                    image: product.products3.productImage1,
                    title: product.products3.productImageTitle1,
                    desc: product.products3.productImageDescription1,
                  },
                  {
                    image: product.products3.productImage2,
                    title: product.products3.productImageTitle2,
                    desc: product.products3.productImageDescription2,
                  },
                  {
                    image: product.products3.productImage3,
                    title: product.products3.productImageTitle3,
                    desc: product.products3.productImageDescription3,
                  },
                ].map((item, index) => {
                  const hasContent =
                    item.image?.node?.sourceUrl || item.title || item.desc;
                    const href =
                      product.products3[`productimagehref1${i || ""}`];
                  return (
                    hasContent && (
                      <div
                        key={index}
                        className="group relative overflow-hidden bg-white border transition-all duration-500 shadow-md hover:shadow-lg"
                      >
              
                        {item.image?.node?.sourceUrl && (
                          <Image
                            src={item.image.node.sourceUrl}
                            alt={item.image.node.altText || ""}
                            width={300}
                            height={300}
                            className="w-full h-full object-contain mb-[32%]"
                          />
                        )}

                
                        <div className="absolute bottom-0 left-0 w-full bg-[#c50022] max-h-[80px] group-hover:max-h-[300px] transition-all duration-700 ease-in-out overflow-hidden p-4">
                          <h4 className="text-white font-semibold poppins leading-7 tracking-wide text-center">
                            {item.title}
                          </h4>
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 mt-2">
                            <p className="text-sm text-white open-sans leading-6">
                              {item.desc}
                            </p>
                            <a 
                            href={href} 
                            className="mt-4 text-white font-semibold hover:underline w-full text-center cursor-pointer open-sans">
                              VIEW MORE
                            </a>
                          </div>
                        </div>
                      </div>
                    )
                  );
                })}
              </div>
            </div>
          )} */}
          {product.products3 && (
            <div className="mb-10">
              <h3 className="text-xl md:text-2xl lg:text-3xl border-l-4 border-[#c50022]  pl-4 font-semibold mb-10 poppins leading-8 tracking-wide">
                {product.products3.name}
              </h3>
              <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {[...Array(4)].map((_, i) => {
                  const img = product.products3[`productImage${i || ""}`];
                  const title =
                    product.products3[`productImageTitle${i || ""}`];
                  const desc =
                    product.products3[`productImageDescription${i || ""}`];
                  const href =
                    i === 0
                      ? product.products3.productimagehref1
                      : product.products3[`productimagehref${i + 1}`];

                  if (!img?.node?.sourceUrl && !title && !desc) return null;

                  return (
                    <div
                      key={i}
                      className="group relative overflow-hidden bg-white border transition-all duration-500 shadow-md hover:shadow-lg"
                    >
                      {/* Image */}
                      {img?.node?.sourceUrl && (
                        <Image
                          src={img.node.sourceUrl}
                          alt={img.node.altText || ""}
                          width={300}
                          height={300}
                          className="w-full h-full object-contain mb-[32%]"
                        />
                      )}

                      {/* Hover Slide-Up Section */}
                      <div className="absolute bottom-0 left-0 w-full bg-[#c50022] max-h-[80px] group-hover:max-h-[300px] transition-all duration-700 ease-in-out overflow-hidden p-4">
                        <h4 className="text-white font-semibold poppins leading-7 tracking-wide  text-center">
                          {title}
                        </h4>
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 mt-2">
                          <p className="text-sm text-white open-sans leading-6">
                            {desc}
                          </p>
                          {href && (
                            <a
                              href={href}
                              className="mt-4 text-white font-semibold hover:underline w-full text-center cursor-pointer open-sans block"
                            >
                              VIEW MORE
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
