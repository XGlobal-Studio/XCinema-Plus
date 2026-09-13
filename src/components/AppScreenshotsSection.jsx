import React, { useState } from 'react';
import { 
  Sparkles, 
  Smartphone, 
  Download, 
  CheckCircle2, 
  ExternalLink, 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  X 
} from 'lucide-react';
import { APP_SCREENSHOTS, APP_CONFIG } from '../data/mockData';

export default function AppScreenshotsSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [lightboxImg, setLightboxImg] = useState(null);

  const activeScreen = APP_SCREENSHOTS[activeIdx];

  const handlePrev = () => {
    setActiveIdx((prev) => (prev === 0 ? APP_SCREENSHOTS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev === APP_SCREENSHOTS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="screenshots" className="py-12 sm:py-20 lg:py-28 relative bg-[#07090e] border-t border-b border-white/5 overflow-hidden w-full max-w-full">
      {/* Ambient background glow - safe centered */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-96 h-72 sm:h-96 bg-red-600/10 blur-[90px] pointer-events-none rounded-full"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 w-full">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/60 border border-red-500/40 text-red-400 text-[11px] sm:text-xs font-semibold uppercase tracking-wider mb-3">
            <Smartphone className="w-3.5 h-3.5 text-red-400" />
            <span>App Interface Showcase</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
            A Glimpse Inside XCinema Plus
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm lg:text-base mt-2 leading-relaxed max-w-xl mx-auto">
            Experience an intuitive, distraction-free interface crafted specifically for fast navigation, smooth searching, and effortless watchlist organization.
          </p>
        </div>

        {/* Tab Controls (Safe horizontal touch scroll without negative margins) */}
        <div className="w-full max-w-full overflow-x-auto pb-2 scrollbar-none flex items-center justify-start sm:justify-center gap-2 mb-8 px-1">
          {APP_SCREENSHOTS.map((screen, idx) => (
            <button
              key={screen.id}
              onClick={() => setActiveIdx(idx)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap flex items-center gap-1.5 shrink-0 ${
                activeIdx === idx
                  ? 'bg-red-600 text-white shadow-md shadow-red-600/30'
                  : 'bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/5'
              }`}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${activeIdx === idx ? 'bg-white' : 'bg-slate-500'}`}></span>
              <span>{screen.tag}</span>
            </button>
          ))}
        </div>

        {/* Interactive Device Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto mb-12 w-full">
          {/* Smartphone Frame */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center w-full">
            <div className="relative w-[250px] sm:w-[290px] max-w-[85vw] aspect-[9/19.5] rounded-[38px] sm:rounded-[44px] p-2.5 sm:p-3 bg-gradient-to-b from-[#2a3245] via-[#121620] to-[#0a0d14] shadow-[0_20px_50px_rgba(0,0,0,0.8)] border-[3px] sm:border-[4px] border-[#364055]">
              {/* Phone speaker notch */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-4 bg-black rounded-full z-20 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-[#111] border border-white/10"></div>
              </div>

              {/* Screen Display Container */}
              <div className="relative w-full h-full rounded-[30px] sm:rounded-[36px] overflow-hidden bg-black shadow-inner">
                <img
                  src={activeScreen.image}
                  alt={activeScreen.title}
                  className="w-full h-full object-cover object-top transition-all duration-300"
                />

                {/* Fullscreen zoom trigger icon */}
                <button
                  onClick={() => setLightboxImg(activeScreen.image)}
                  className="absolute bottom-3 right-3 p-2 rounded-full bg-black/75 text-white border border-white/20 backdrop-blur-md"
                  title="View Fullscreen"
                  aria-label="View Fullscreen Screenshot"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Mobile Quick Carousel Controls */}
            <div className="flex items-center justify-between w-[250px] sm:w-[290px] mt-4 px-2">
              <button
                onClick={handlePrev}
                className="p-2 rounded-xl bg-white/5 active:bg-white/15 text-slate-300 hover:text-white border border-white/10 transition-colors flex items-center gap-1 text-xs font-semibold"
                aria-label="Previous screenshot"
              >
                <ChevronLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Prev</span>
              </button>

              <span className="text-xs font-mono text-slate-400">
                {activeIdx + 1} / {APP_SCREENSHOTS.length}
              </span>

              <button
                onClick={handleNext}
                className="p-2 rounded-xl bg-white/5 active:bg-white/15 text-slate-300 hover:text-white border border-white/10 transition-colors flex items-center gap-1 text-xs font-semibold"
                aria-label="Next screenshot"
              >
                <span className="hidden sm:inline">Next</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Screen Details */}
          <div className="lg:col-span-6 space-y-4 text-left w-full min-w-0">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-red-950/60 border border-red-500/30 text-red-400 text-xs font-mono mb-2">
                <span>SCREEN {activeIdx + 1} OF 4</span>
                <span>•</span>
                <span className="font-semibold">{activeScreen.tag}</span>
              </div>
              <h3 className="text-xl sm:text-3xl font-extrabold text-white font-heading tracking-tight mb-1">
                {activeScreen.title}
              </h3>
              <p className="text-sm sm:text-base font-semibold text-red-400 mb-2">
                {activeScreen.subtitle}
              </p>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                {activeScreen.description}
              </p>
            </div>

            {/* Feature Highlights for Current Screen */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2.5">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-white">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="truncate">{activeScreen.highlight}</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-white">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="truncate">OLED Dark Theme with Native Gestures</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-white">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="truncate">Instant Offline Caching for Fast Loading</span>
              </div>
            </div>

            {/* Mobile Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 w-full">
              <a
                href={APP_CONFIG.apkDownloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto min-h-[44px] px-6 py-3 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 active:from-red-500 active:to-rose-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md shadow-red-600/30 transition-all"
              >
                <Download className="w-4 h-4" />
                <span>Download APK ({APP_CONFIG.fileSize})</span>
              </a>

              <a
                href={APP_CONFIG.githubReleaseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto min-h-[44px] px-5 py-3 rounded-xl bg-white/5 active:bg-white/10 text-slate-300 active:text-white border border-white/10 text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Release on GitHub</span>
              </a>
            </div>
          </div>
        </div>

        {/* 4-Card Gallery Strip (Strict width containment) */}
        <div className="mt-8 sm:mt-12 w-full">
          <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-4 text-center">
            Tap Any Screenshot to Inspect:
          </h4>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4 w-full">
            {APP_SCREENSHOTS.map((screen, idx) => (
              <div
                key={screen.id}
                onClick={() => setActiveIdx(idx)}
                className={`cursor-pointer rounded-xl sm:rounded-2xl p-2 sm:p-2.5 border transition-all duration-200 flex flex-col ${
                  activeIdx === idx
                    ? 'bg-red-950/40 border-red-500 shadow-md shadow-red-950/50'
                    : 'bg-white/5 border-white/10 active:border-white/20 active:bg-white/10'
                }`}
              >
                <div className="relative aspect-[9/16] rounded-lg sm:rounded-xl overflow-hidden mb-1.5 bg-black">
                  <img
                    src={screen.image}
                    alt={screen.title}
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                  />
                  <span className="absolute top-1.5 left-1.5 px-1.5 py-0.5 rounded text-[9px] font-mono font-bold bg-black/80 text-white">
                    0{idx + 1}
                  </span>
                </div>
                <div className="text-[11px] sm:text-xs font-bold text-white truncate">
                  {screen.title}
                </div>
                <div className="text-[10px] text-slate-400 truncate">
                  {screen.tag}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxImg && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col items-center justify-between p-4 animate-in fade-in"
          onClick={() => setLightboxImg(null)}
        >
          <div className="w-full flex justify-end">
            <button
              onClick={() => setLightboxImg(null)}
              className="p-2 rounded-full bg-white/10 text-white active:bg-white/20"
              aria-label="Close image"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex items-center justify-center flex-1 max-h-[80vh] w-full">
            <img 
              src={lightboxImg} 
              alt="App Screenshot Full View" 
              className="max-h-[75vh] w-auto max-w-full rounded-2xl shadow-2xl border border-white/20 object-contain"
            />
          </div>

          <button 
            onClick={() => setLightboxImg(null)}
            className="w-full max-w-xs py-3 rounded-xl bg-white/10 active:bg-white/20 text-white text-xs font-semibold"
          >
            Close Fullscreen
          </button>
        </div>
      )}
    </section>
  );
}
