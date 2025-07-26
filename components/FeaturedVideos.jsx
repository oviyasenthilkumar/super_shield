"use client";
import React from "react";

const videos = [
  {
    title: "Supershield Admixplus in action",
    youtubeId: "yL9PEEwYtYQ",
  },
  {
    title: "Watch how DPC Technology works",
    youtubeId: "Pbn4EBQZhyY",
  },
  {
    title: "Multiseal Crystalline Technology",
    youtubeId: "jAbkqx3CgDU",
  },
];

const FeaturedVideos = () => {
  return (
    <section className="w-full bg-white py-12 px-4 md:px-8 lg:px-16 lg:py-16">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-10 mb-10 text-black text-center poppins">
          Supershield Featured
        </h2>

        {/* Video Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {videos.map((video, idx) => (
            <div key={idx} className="flex flex-col items-center justify-start">
              <div className="w-full aspect-video overflow-hidden shadow-md">
                <iframe
                  src={`https://www.youtube.com/embed/${video.youtubeId}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
              <p className="mt-3 text-lg text-left text-black font-normal leading-7 open-sans">
                {video.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedVideos;
