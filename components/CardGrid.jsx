"use client";
import { useQuery } from "@apollo/client";
import { GET_ALL_RESOURCES } from "../src/lib/queries";
import { useState, useEffect } from "react";

export default function CardGrid({ activeTab, filters, setFilters }) {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const CARDS_PER_PAGE = 9;
  useEffect(() => {
    setCurrentPage(1);
  }, [filters, activeTab]);

  const { data, loading, error } = useQuery(GET_ALL_RESOURCES);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading resources</p>;

  const openModal = (videoSrc) => {
    setSelectedVideo(videoSrc);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedVideo(null);
  };

  const allCards = data?.posts?.nodes || [];
  console.log(allCards);
  const normalize = (value) =>
    typeof value === "string"
      ? value.toLowerCase().trim()
      : Array.isArray(value)
      ? value.map((v) => String(v).toLowerCase().trim())
      : value !== null && value !== undefined
      ? String(value).toLowerCase().trim()
      : "";

  const tabMap = {
    documents: "document",
    videos: "video",
    faqs: "faq",
  };
  const normalizedTab =
    tabMap[activeTab.toLowerCase()] || activeTab.toLowerCase();

  const filteredCards = allCards.filter((resource) => {
    const res = resource.resources;
    const hasMatchingCategory =
      Array.isArray(res?.category) &&
      res.category.some((cat) => normalize(cat) === normalizedTab);

    const resourceTypeArray = res?.filters?.resourcetypecheckbox || [];
    const productCategoryArray = res?.filters?.productcategorycheckbox || [];
    const productArray = res?.filters?.productcheckbox || [];

    const matchType =
      !filters["Resource Type"] ||
      resourceTypeArray
        .map(normalize)
        .includes(normalize(filters["Resource Type"]));

    const matchCategory =
      !filters["Product Category"] ||
      productCategoryArray
        .map(normalize)
        .includes(normalize(filters["Product Category"]));

    const matchProduct =
      !filters["Product Filter"] ||
      productArray
        .map(normalize)
        .includes(normalize(filters["Product Filter"]));

    return hasMatchingCategory && matchType && matchCategory && matchProduct;
  });

  const extractFileNameFromUri = (uri) => {
    if (!uri) return null;
    const segments = uri.split("/").filter(Boolean);
    const last = segments[segments.length - 1];
    return `/document/${last.toUpperCase()}.pdf`;
  };

  const handleShare = (url) => {
    if (!url) return;
    if (navigator.share) {
      navigator.share({ title: "Check this out!", url }).catch(console.error);
    } else {
      navigator.clipboard.writeText(url);
      alert("Link copied to clipboard!");
    }
  };

  const activeFilters = Object.entries(filters).filter(
    ([_, value]) => typeof value === "string" && value.trim() !== ""
  );
  const tabSpecificCards = filteredCards.filter((item) =>
    item.resources?.category?.some((cat) => normalize(cat) === normalizedTab)
  );
  const totalPages = Math.ceil(tabSpecificCards.length / CARDS_PER_PAGE);
  const reversedCards = [...tabSpecificCards].reverse();
  const paginatedCards = reversedCards.slice(
    (currentPage - 1) * CARDS_PER_PAGE,
    currentPage * CARDS_PER_PAGE
  );

  // const paginatedCards = tabSpecificCards.slice(
  //   (currentPage - 1) * CARDS_PER_PAGE,
  //   currentPage * CARDS_PER_PAGE
  // );
  return (
    <>
      {/* Active Filters */}
      {activeFilters.length > 0 && (
        <div className="col-span-full mb-4 p-4 rounded text-sm flex flex-wrap gap-4">
          {activeFilters.map(([key, value]) => (
            <span
              key={key}
              className="bg-[#c50022] text-white px-3 py-1 rounded-full flex items-center gap-2"
            >
              {key.replace(/([A-Z])/g, " $1")}: {value}
              <button
                className="ml-1 text-white hover:text-gray-300"
                onClick={() =>
                  setFilters((prev) => ({
                    ...prev,
                    [key]: "",
                  }))
                }
              >
                ✕
              </button>
            </span>
          ))}
        </div>
      )}

      {/* Grid: Documents & Videos */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  gap-6">
        {filteredCards.length === 0 ? (
          <p className="text-gray-500 col-span-full">No resources found.</p>
        ) : (
          paginatedCards.flatMap((item, idx) => {
            const res = item.resources;
            const categories = res?.category || [];
            const matching = categories.filter(
              (cat) => normalize(cat) === normalizedTab
            );
            if (matching.length === 0) return [];

            return matching.map((categoryType, i) => {
              if (normalize(categoryType) === "faq") return null; // handled separately

              const fileUri = res?.downloadFile?.node?.uri;
              const fullDownloadUrl = extractFileNameFromUri(fileUri);
              const thumbnailUrl =
                res?.downloadFile?.node?.mediaDetails?.sizes?.find(
                  (s) => s.name === "thumbnail"
                )?.sourceUrl ||
                res?.downloadFile?.node?.mediaDetails?.sizes?.find(
                  (s) => s.name === "medium"
                )?.sourceUrl ||
                res?.downloadFile?.node?.sourceUrl;

              const videoUri = res?.videoUrl?.node?.uri;
              const extractFilename = (uri) => {
                if (!uri) return null;
                const parts = uri.split("/").filter(Boolean);
                const name = parts[parts.length - 1];
                return `/video/${name}.mp4`;
              };
              const videoSrc = extractFilename(videoUri);

              return (
                <div
                  key={`${idx}-${i}`}
                  className=" p-4 w-full shadow-sm bg-[#f7f7f7]"
                >
                  {/* Document */}
                  {normalize(categoryType) === "document" && (
                    <>
                      {thumbnailUrl && (
                        <img
                          src={thumbnailUrl}
                          alt="PDF Preview"
                          className="mb-2 w-full h-40 object-contain"
                        />
                      )}
                      <h4 className="font-semibold mb-1 mt-3 poppins text-[#c50022] leading-8">
                        {res?.title}
                      </h4>
                      <p className="mb-2 text-sm md:text-base  leading-6 text-gray-700 open-sans">
                        {res?.description}
                      </p>
                    </>
                  )}

                  {/* Video */}
                  {normalize(categoryType) === "video" && videoUri && (
                    <>
                      <div
                        className="relative w-full h-40 bg-black cursor-pointer flex items-center justify-center"
                        onClick={() => openModal(videoSrc)}
                      >
                        <svg
                          className="w-10 h-10 text-white z-10"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M6 4l12 6-12 6V4z" />
                        </svg>
                      </div>
                      <h4 className="font-semibold mb-1 mt-2 poppins leading-8 text-[#c50022]">
                        {res?.title}
                      </h4>
                      <p className="mb-2 text-sm md:text-base  leading-6 text-gray-700 open-sans">
                        {res?.description}
                      </p>
                    </>
                  )}

                  {/* Actions */}
                  <div className="flex justify-end gap-4 text-sm mt-auto">
                    {normalize(categoryType) === "document" &&
                      fullDownloadUrl && (
                        <a
                          href={fullDownloadUrl}
                          download
                          className="text-[#c50022] hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src="/downloads.png"
                            alt="download icon"
                            className="w-4 h-4"
                          />
                        </a>
                      )}
                    {(normalize(categoryType) === "document" ||
                      normalize(categoryType) === "video") &&
                      res?.shareUrl && (
                        <button
                          onClick={() => handleShare(res.shareUrl)}
                          className="text-[#c50022] hover:underline"
                        >
                          <img
                            src="/share.png"
                            alt="share icon"
                            className="w-3 h-3"
                          />
                        </button>
                      )}
                  </div>
                </div>
              );
            });
          })
        )}
      </div>

      {/* Full Width FAQs */}
      {normalizedTab === "faq" &&
        paginatedCards.map((item, idx) => {
          const res = item.resources;
          const categories = res?.category || [];
          const matchingFaq = categories.find(
            (cat) => normalize(cat) === "faq"
          );
          if (!matchingFaq) return null;

          return (
            <div key={`faq-${idx}`} className="w-full bg-white p-6 mt-6 ">
              {/* <h4 className="font-semibold text-lg mb-4 poppins leading-8 text-[#c50022]">
                {res?.title}
              </h4> */}
              <div className="space-y-4">
                {Object.entries(res?.faq || {})
                  .filter(([key]) => key.startsWith("question"))
                  .map(([questionKey, questionValue], idx) => {
                    const answerKey = questionKey.replace("question", "answer");
                    const answerValue = res?.faq?.[answerKey];
                    const isOpen = openFaqIndex === idx;

                    return (
                      questionValue && (
                        <div
                          key={idx}
                          className="border rounded overflow-hidden bg-[#f7f7f7]"
                        >
                          <div
                            className="cursor-pointer px-4 py-3 bg-gray-200 flex justify-between items-center text-sm md:text-base font-medium text-gray-900 poppins"
                            onClick={() =>
                              setOpenFaqIndex((prev) =>
                                prev === idx ? null : idx
                              )
                            }
                          >
                            {questionValue}
                            <span className="ml-2 text-[#c50022]">
                              {isOpen ? "−" : "+"}
                            </span>
                          </div>

                          {isOpen && (
                            <div className="px-4 py-3 text-gray-700 text-sm leading-relaxed bg-white border-t open-sans">
                              {answerValue}
                            </div>
                          )}
                        </div>
                      )
                    );
                  })}
              </div>
            </div>
          );
        })}

      {/* Video Modal */}
      {showModal && selectedVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={closeModal}
          />
          <div className="relative z-50 w-full max-w-4xl px-4">
            <button
              className="absolute -top-12 -right-8 text-white text-2xl bg-black/70 rounded-full w-10 h-10 flex items-center justify-center hover:bg-black"
              onClick={closeModal}
            >
              ✕
            </button>
            <video
              controls
              autoPlay
              className="w-full h-auto rounded shadow-lg"
              src={selectedVideo}
              type={`video/${selectedVideo.split(".").pop()}`}
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-8">
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
            className="text-sm bg-white text-[#c50022] disabled:opacity-50 p-2 cursor-pointer"
          >
            <span className="text-xl ">{`<`}</span>{" "}
          </button>

          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 rounded text-sm ${
                currentPage === i + 1
                  ? "bg-[#c50022] text-white"
                  : "bg-white text-[#c50022] border"
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="text-sm bg-white text-[#c50022] disabled:opacity-50 p-2 cursor-pointer"
          >
            <span className="text-lg ml-1">{`>`}</span>
          </button>
        </div>
      )}
    </>
  );
}
