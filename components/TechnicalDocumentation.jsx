"use client";

import { Download, ExternalLink, Play } from "lucide-react";

export default function TechnicalDocumentation({ documents }) {
  return (
    <div className="max-w-7xl mx-auto px-12 lg:px-0 py-16">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 poppins">
        Technical Documentation
      </h2>
      <ul className="divide-y  border-gray-200">
        {documents.map((doc, idx) => (
          <li
            key={idx}
            className="flex items-center justify-between py-4 gap-4"
          >
            <div className="flex items-center gap-3">
              <Play className="text-[#c50022] w-4 h-4 shrink-0" />
              <span className="text-gray-800 text-sm md:text-base open-sans">
                {doc.title}
              </span>
            </div>
            <div>
              {doc.type === "download" ? (
                <a
                  href={doc.href}
                  download
                  rel="noopener noreferrer"
                  className="text-[#c50022]"
                >
                  <Download className="w-4 h-4" />
                </a>
              ) : (
                <a
                  href={doc.href}
                  rel="noopener noreferrer"
                  className="text-[#c50022]"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
