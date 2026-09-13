import React from 'react';
import { 
  Zap, 
  Search, 
  Bookmark, 
  Film, 
  Palette, 
  ShieldCheck, 
  Sparkles
} from 'lucide-react';
import { CORE_FEATURES, APP_CONFIG } from '../data/mockData';

export default function FeaturesSection() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'zap': return Zap;
      case 'compass': return Search;
      case 'bookmark': return Bookmark;
      case 'film': return Film;
      case 'palette': return Palette;
      case 'shield': return ShieldCheck;
      default: return Sparkles;
    }
  };

  return (
    <section id="features" className="py-12 sm:py-20 lg:py-28 relative bg-[#090c13] w-full max-w-full overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 w-full">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-950/60 border border-red-500/40 text-red-400 text-[11px] sm:text-xs font-semibold uppercase tracking-wider mb-3 sm:mb-4">
            <Sparkles className="w-3.5 h-3.5 text-red-400" />
            <span>Built for Mobile</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-heading">
            Powerful Features. Zero Distractions.
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm lg:text-base mt-2 sm:mt-3 leading-relaxed max-w-2xl mx-auto">
            Every feature in XCinema Plus is engineered from the ground up to give you an uncluttered, responsive, and deeply enjoyable media tracking experience on Android.
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {CORE_FEATURES.map((feature, idx) => {
            const IconComp = getIcon(feature.icon);
            return (
              <div
                key={idx}
                className="glass-panel rounded-2xl sm:rounded-3xl p-5 sm:p-7 border border-white/10 hover:border-red-500/40 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4 sm:mb-5">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-red-600/20 group-hover:text-red-400 group-hover:border-red-500/40 transition-all">
                      <IconComp className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <span className="text-[10px] sm:text-[11px] font-mono px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
                      {feature.badge}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white font-heading mb-2 group-hover:text-red-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className="mt-5 pt-3.5 border-t border-white/5 flex items-center justify-between text-[11px] sm:text-xs text-slate-400 font-mono">
                  <span>XCinema Core</span>
                  <span className="text-emerald-400">Build 100 Verified</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Architecture Callout */}
        <div className="mt-10 sm:mt-16 p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-red-950/40 via-[#101522] to-red-950/40 border border-red-500/30 flex flex-col md:flex-row items-stretch sm:items-center justify-between gap-5 sm:gap-6">
          <div className="space-y-1.5">
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-red-400">
              Modern Android Architecture
            </span>
            <h4 className="text-lg sm:text-2xl font-bold text-white font-heading">
              Pure Native Performance with Low Memory Footprint
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
              Runs smoothly on budget smartphones and flagship Android tablets alike with hardware-accelerated video decoding.
            </p>
          </div>

          <a
            href={APP_CONFIG.apkDownloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 min-h-[44px] px-6 py-3 rounded-xl bg-red-600 active:bg-red-500 text-white text-xs sm:text-sm font-bold shadow-lg shadow-red-600/30 flex items-center justify-center transition-all"
          >
            Download {APP_CONFIG.versionShort}
          </a>
        </div>
      </div>
    </section>
  );
}
