// pages/dpc-crystalline-waterproofing.js
import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { ArrowRightIcon } from "@heroicons/react/20/solid";


// WordPress API configuration
const WORDPRESS_API_URL =
  process.env.NEXT_PUBLIC_WORDPRESS_API_URL ||
  "https://your-wordpress-site.com/wp-json/wp/v2";

// Custom hook for WordPress API
const useWordPressData = (endpoint) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${WORDPRESS_API_URL}${endpoint}`);
        if (!response.ok) throw new Error("Failed to fetch data");
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint]);

  return { data, loading, error };
};

// Product Card Component
const ProductCard = ({ product, category }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48 bg-gray-100">
        <Image
          src={product.featured_image || "/api/placeholder/300/200"}
          alt={product.title?.rendered || product.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-gray-800 mb-2 text-sm">
          {product.title?.rendered || product.name}
        </h3>
        <button className="w-full bg-red-700 hover:bg-red-800 text-white py-2 px-4 text-xs font-medium rounded transition-colors duration-200">
          DOWNLOAD DATASHEET
        </button>
      </div>
    </div>
  );
};

// Hero Section Component
const HeroSection = ({ heroData }) => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-6">
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-10">
              {heroData?.title?.rendered ||
                "DPC Crystalline Waterproofing for Concrete"}
            </h1>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-600 leading-relaxed">
                {heroData?.excerpt?.rendered ||
                  `The admixture based on Deep Penetrating Sealant (DPC) Crystalline Technology 
                creates permanent waterproof barrier for concrete applications. Reinforcing reinforcing steel is 
                not corroded and the life of concrete is increased, making it more durable. Available 
                as concrete admixture in powder form. It can be added to concrete mix and is 
                compatible with common types of cement including Portland and Blended cements 
                compliant with relevant IS codes.`}
              </p>
            </div>
            <button className="bg-red-700 hover:bg-red-800 text-white px-8 py-3 rounded font-medium transition-colors duration-200">
              DPC Crystalline Technology  <ArrowRightIcon className="h-5 w-5" />
            </button>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
              <Image
                src={heroData?.featured_media_url || "/api/placeholder/500/400"}
                alt="DPC Crystalline Waterproofing"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Video Section Component
const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="bg-gray-900 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-lg overflow-hidden shadow-2xl">
          <div className="relative h-64 md:h-96 bg-gradient-to-r from-gray-800 to-red-900">
            {!isPlaying ? (
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={() => setIsPlaying(true)}
                  className="bg-red-700 hover:bg-red-800 text-white p-6 rounded-full transition-colors duration-200"
                >
                  <svg
                    className="w-12 h-12 ml-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M8 5v10l8-5-8-5z" />
                  </svg>
                </button>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <h3 className="text-white text-xl font-bold">
                    DPC Crystalline Technology
                  </h3>
                  <p className="text-gray-300 text-sm mt-2">
                    Learn how DPC crystalline technology works
                  </p>
                </div>
              </div>
            ) : (
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/your-video-id?autoplay=1"
                title="DPC Crystalline Technology"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Products Section Component
const ProductsSection = ({ productCategories }) => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">Products</h2>

        {productCategories?.map((category, i) => (
          <div key={i} className="mb-16">
            <h3 className="text-xl font-semibold text-red-700 mb-8 flex items-center">
              <span className="bg-red-700 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm mr-3">
                {i + 1}
              </span>
              {category.categoryTitle}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {category.products.map((product, j) => (
                <ProductCard
                  key={j}
                  product={{
                    name: product.productTitle,
                    featured_image: product.productImage.sourceUrl,
                    datasheet: product.datasheetUrl,
                  }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


// Main Page Component
export default function DPCCrystalline() {
  // WordPress API calls
  const { data: pageData, loading: pageLoading } = useWordPressData(
    "/pages?slug=dpc-crystalline-waterproofing"
  );
  const { data: productsData, loading: productsLoading } = useWordPressData(
    "/posts?categories=waterproofing-products&per_page=20"
  );

  const heroData = pageData?.[0];

  return (
    <>
      <Head>
        <title>
          DPC Crystalline Waterproofing for Concrete | Waterproofing Solutions
        </title>
        <meta
          name="description"
          content="Advanced DPC Crystalline waterproofing technology for concrete applications. Permanent waterproof barrier, increased durability, and corrosion protection."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen">
        {/* Hero Section */}
        <HeroSection heroData={heroData} />

        {/* Video Section */}
        <VideoSection />

        {/* Products Section */}
        <ProductsSection productsData={productsData} />
      </main>
    </>
  );
}

// Optional: Add getStaticProps for better SEO and performance
export async function getStaticProps() {
  const query = `
    query DpcPage {
      pageBy(uri: "dpc-crystalline-waterproofing") {
        title
        dpcPageFields {
          heroTitle
          heroExcerpt
          heroImage { sourceUrl }
          videoUrl
          productCategories {
            categoryTitle
            categorySlug
            products {
              productTitle
              datasheetUrl
              productImage { sourceUrl }
            }
          }
        }
      }
    }
  `;

  try {
    const data = await fetchGraphQL(query);

    return {
      props: {
        pageData: data.pageBy,
      },
      revalidate: 3600,
    };
  } catch (err) {
    return {
      props: {
        pageData: null,
      },
    };
  }
}

