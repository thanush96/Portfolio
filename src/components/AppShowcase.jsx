import { useState } from "react";
import styles, { layout } from "../style";
import { iosApps } from "../constants";

const AppCard = ({ app, index }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showAllScreenshots, setShowAllScreenshots] = useState(false);

  const displayedScreenshots = showAllScreenshots
    ? app.screenshots
    : app.screenshots.slice(0, 4);

  return (
    <div
      className="flex flex-col p-3 xs:p-4 sm:p-5 md:p-6 rounded-[12px] sm:rounded-[16px] bg-gradient-to-br from-[#1a1a2e] to-[#0f0f1e] border border-[#33bbcf]/20 hover:border-[#5ce1e6]/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(92,225,230,0.3)]"
    >
      {/* App Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-2 xs:mb-3 sm:mb-4">
        <div className="flex items-center mb-2 sm:mb-0 w-full sm:w-auto">
          {app.icon && (
            <div className="w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 rounded-[10px] sm:rounded-[12px] overflow-hidden mr-2 xs:mr-3 shadow-lg border-2 border-[#33bbcf]/30">
              <img
                src={app.icon}
                alt={app.name}
                className="w-full h-full object-cover"
              />
            </div>
          )}
          <div className="flex-1">
            <h3 className="font-poppins font-semibold text-white text-[14px] xs:text-[15px] sm:text-[17px] leading-[20px] xs:leading-[22px] sm:leading-[26px]">
              {app.name}
            </h3>
            <p className="font-poppins font-normal text-dimWhite text-[10px] xs:text-[11px] sm:text-[13px] mt-0.5">
              {app.platform}
            </p>
          </div>
        </div>
        {app.appStoreLink && (
          <a
            href={app.appStoreLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#5ce1e6] hover:text-white text-[11px] xs:text-[12px] sm:text-[14px] font-poppins font-medium transition-colors duration-200 flex items-center whitespace-nowrap"
          >
            View App
            <svg
              className="w-3 h-3 sm:w-4 sm:h-4 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        )}
      </div>

      {/* App Description */}
      <p className="font-poppins font-normal text-dimWhite text-[12px] xs:text-[13px] sm:text-[15px] leading-[18px] xs:leading-[20px] sm:leading-[24px] mb-2 xs:mb-3">
        {app.description}
      </p>

      {/* Technology Tags */}
      {app.technology && app.technology.length > 0 && (
        <div className="flex flex-wrap gap-1 xs:gap-1.5 sm:gap-2 mb-2 xs:mb-3">
          {app.technology.map((tech, i) => (
            <span
              key={i}
              className="px-1.5 xs:px-2 sm:px-3 py-0.5 xs:py-1 bg-[#33bbcf]/10 border border-[#33bbcf]/30 rounded-full text-[#5ce1e6] text-[9px] xs:text-[10px] sm:text-[12px] font-poppins"
            >
              {tech}
            </span>
          ))}
        </div>
      )}

      {/* Screenshots Grid */}
      <div className="mt-1.5 xs:mt-2">
        <div className="flex items-center justify-between mb-2">
          <h4 className="font-poppins font-medium text-white text-[12px] xs:text-[13px] sm:text-[14px]">
            Screenshots
          </h4>
          {app.screenshots.length > 4 && (
            <button
              onClick={() => setShowAllScreenshots(!showAllScreenshots)}
              className="hidden sm:block text-[#5ce1e6] hover:text-white text-[10px] xs:text-[11px] sm:text-[12px] font-poppins font-medium transition-colors duration-200"
            >
              {showAllScreenshots
                ? "Show Less"
                : `View All (${app.screenshots.length})`}
            </button>
          )}
        </div>

        {/* Mobile: Horizontal Scroll */}
        <div className="flex sm:hidden gap-2 overflow-x-auto pb-2 scrollbar-hide snap-x snap-mandatory">
          {app.screenshots.map((screenshot, i) => (
            <div
              key={i}
              className="relative group cursor-pointer rounded-[8px] overflow-hidden border border-[#33bbcf]/20 active:border-[#5ce1e6] transition-all duration-300 flex-shrink-0 w-[120px] h-[260px] snap-center"
              onClick={() => setSelectedImage(screenshot)}
            >
              <img
                src={screenshot}
                alt={`${app.name} screenshot ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Desktop: Grid */}
        <div className="hidden sm:grid grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-3 md:gap-3.5">
          {displayedScreenshots.map((screenshot, i) => (
            <div
              key={i}
              className="relative group cursor-pointer rounded-[10px] sm:rounded-[12px] overflow-hidden border border-[#33bbcf]/20 hover:border-[#5ce1e6]/50 active:border-[#5ce1e6] transition-all duration-300 hover:shadow-[0_0_15px_rgba(92,225,230,0.4)] aspect-[9/19]"
              onClick={() => setSelectedImage(screenshot)}
            >
              <img
                src={screenshot}
                alt={`${app.name} screenshot ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                <svg
                  className="w-8 h-8 sm:w-10 sm:h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* Modal for Full-Size Image */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-[200] flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-[90%] max-h-[90vh] flex items-center justify-center">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-8 xs:-top-10 right-0 text-white hover:text-[#5ce1e6] transition-colors duration-200 p-2 active:scale-95"
            >
              <svg
                className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <img
              src={selectedImage}
              alt="Full size screenshot"
              className="max-w-full max-h-[85vh] object-contain rounded-[12px] border-2 border-[#5ce1e6]/50 shadow-[0_0_40px_rgba(92,225,230,0.5)]"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
};

const AppShowcase = () => {
  return (
    <section
      id="apps"
      className={`${layout.section} mt-6 sm:mt-8 mb-6 sm:mb-8`}
    >
      
      {/* Section Header */}
      {/* <div className="mb-6 sm:mb-8 md:mb-10 min-w-[180px] sm:min-w-[200px] flex flex-col items-center justify-center text-center">
        <h2 className={`font-poppins font-semibold text-white text-[24px] xs:text-[28px] sm:text-[36px] md:text-[40px] lg:text-[48px] leading-[32px] xs:leading-[36px] sm:leading-[46px] md:leading-[52px] lg:leading-[60px]`}>
          Apps
          <span className="text-gradient"> Apps  </span>
        </h2>
        <p
          className={`font-poppins font-normal text-dimWhite text-[13px] xs:text-[14px] sm:text-[15px] md:text-[16px] leading-[20px] xs:leading-[22px] sm:leading-[24px] md:leading-[26px] mt-2 xs:mt-3 sm:mt-4 text-center sm:text-left max-w-[600px] mx-auto sm:mx-0`}
        >
          Mobile applications built with modern technologies
        </p>
      </div> */}

      {/* Apps Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 xs:gap-4 sm:gap-5 md:gap-6">
        {iosApps.map((app, index) => (
          <AppCard key={app.id} app={app} index={index} />
        ))}
      </div>
    </section>
  );
};

export default AppShowcase;
