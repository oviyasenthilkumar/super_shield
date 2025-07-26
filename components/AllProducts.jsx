"use client";

import React from "react";

const AllProducts = ({ posts = [] }) => {
  return (
    <main className="max-w-7xl mx-auto md:px-0 sm:px-6 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {posts.length === 0 ? (
          <p className="text-center col-span-full text-gray-500">
            No posts found.
          </p>
        ) : (
          posts.map(({ id, posts: postsFields, slug }) => (
            <div
              key={id}
              className="bg-white border border-gray-200 overflow-hidden flex flex-col h-full"
            >
              {/* ACF Post Image */}
              {postsFields?.postImage?.node?.sourceUrl && (
                <img
                  src={postsFields.postImage.node.sourceUrl}
                  alt={postsFields.postImage.node.altText || "Product Image"}
                  className="w-full h-52 object-cover transition duration-300"
                />
              )}

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-lg font-semibold mb-2 poppins">
                  {postsFields?.postTitle}
                </h2>
                <p className="text-base text-gray-600 flex-grow open-sans">
                  {postsFields?.postDescription}
                </p>
              </div>

              {/* View Product Button */}
              {
                <div className="flex justify-center">
                  <a
                    // href={`/products/${slug} || #`}
                    href={`/products/${slug.trim()}`}
                    className="open-sans inline-block font-semibold border border-[#B41424] bg-[#B41424] text-white px-5 py-3 text-sm md:text-base hover:bg-white hover:text-[#B41424] transition-all duration-300 w-full text-center"
                  >
                    View Product
                  </a>
                </div>
              }
            </div>
          ))
        )}
      </div>
    </main>
  );
};

export default AllProducts;
