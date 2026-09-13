import React from 'react';
import { 
  Download, 
  Sparkles, 
  ShieldCheck, 
  Smartphone, 
  ExternalLink, 
  ChevronRight,
  CheckCircle2,
  Layers,
  Star
} from 'lucide-react';
import GithubIcon from './GithubIcon';
import { APP_CONFIG } from '../data/mockData';

export default function Hero({ onOpenDownloadModal }) {
  return (
    <section id="hero" className="relative pt-4 pb-12 sm:pt-8 sm:pb-20 lg:pt-12 lg:pb-28 overflow-hidden w-full max-w-full">
      {/* Centered ambient glow - strictly bounded to prevent any horizontal overflow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 sm:w-96 lg:w-[600px] h-72 sm:h-96 bg-red-600/15 blur-[80px] sm:blur-[120px] pointer-events-none rounded-full"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 w-full">
        {/* Top Header Content */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          {/* Alpha Release Pill */}
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-red-950/70 border border-red-500/40 text-red-300 text-[11px] sm:text-xs font-medium mb-4 sm:mb-6 backdrop-blur-md shadow-md shadow-red-900/20 max-w-full">
            <span className="flex h-2 w-2 relative shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            <span className="font-bold text-white uppercase font-mono tracking-wide">
              Alpha Live
            </span>
            <span className="text-slate-400">•</span>
            <span className="text-slate-200 truncate">
              {APP_CONFIG.versionShort} (Build {APP_CONFIG.buildNumber})
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight font-heading leading-[1.15] mb-4 sm:mb-6">
            Your Ultimate Cinema &amp;{' '}
            <span className="gradient-text-red">Media Experience</span>{' '}
            on Android
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base lg:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed mb-6 sm:mb-8 font-normal px-1">
            Discover trending titles, organize your personal watchlist, and enjoy ultra-smooth hardware-accelerated video playback. Built for Android smartphones and tablets.
          </p>

          {/* Mobile-Optimized Call to Actions */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8 max-w-md sm:max-w-none mx-auto w-full">
            {/* Primary Direct Download Button */}
            <a
              href={APP_CONFIG.apkDownloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto min-h-[48px] px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl bg-gradient-to-r from-red-600 via-rose-600 to-red-700 active:from-red-500 active:to-rose-500 text-white font-bold text-sm sm:text-base shadow-lg shadow-red-600/30 transition-all flex items-center justify-center gap-2.5 transform active:scale-[0.98]"
            >
              <Download className="w-5 h-5 text-white animate-bounce shrink-0" />
              <span>Download APK ({APP_CONFIG.fileSize})</span>
            </a>

            {/* Secondary GitHub Release Page Button */}
            <a
              href={APP_CONFIG.githubReleaseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto min-h-[48px] px-6 sm:px-7 py-3.5 sm:py-4 rounded-2xl bg-slate-900/90 active:bg-slate-800 text-slate-200 active:text-white font-semibold text-sm sm:text-base border border-white/10 backdrop-blur-md transition-all flex items-center justify-center gap-2"
            >
              <GithubIcon className="w-4 h-4 text-slate-300 shrink-0" />
              <span>View GitHub Release</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            </a>
          </div>

          {/* Trust Badges - Clean 2-column or flex wrap */}
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-center gap-2.5 sm:gap-6 text-[11px] sm:text-xs text-slate-400 max-w-md sm:max-w-none mx-auto">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span className="truncate">GitHub Hosted APK</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span className="truncate">{APP_CONFIG.minimumAndroid}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span className="truncate">Zero Malware</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span className="truncate">Free Public Alpha</span>
            </div>
          </div>
        </div>

        {/* Hero Smartphone Showcase (Contained 100% within viewport, no overflow) */}
        <div className="max-w-md mx-auto relative pt-2 pb-2 w-full flex flex-col items-center">
          {/* Center Phone Frame */}
          <div className="relative z-10 w-[260px] sm:w-[300px] max-w-[85vw] aspect-[9/19.5] rounded-[38px] sm:rounded-[44px] p-2.5 sm:p-3 bg-gradient-to-b from-[#252c3c] via-[#0f121a] to-[#0a0d14] border-[3px] sm:border-[4px] border-[#374158] shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
            {/* Speaker cutout */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-4 bg-black rounded-full z-20 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-[#111] border border-white/10"></div>
            </div>

            {/* Screen Image */}
            <div className="relative w-full h-full rounded-[30px] sm:rounded-[34px] overflow-hidden bg-black shadow-inner">
              <img
                src="./screenshots/Screenshot_20260913-183935.jpg"
                alt="XCinema Plus Home Screen"
                className="w-full h-full object-cover object-top"
                loading="eager"
              />
            </div>
          </div>

          {/* Clean highlight chips directly underneath phone (Never positioned with negative margins) */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-5 w-full px-2">
            <span className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-medium text-slate-300 flex items-center gap-1.5 shadow-sm">
              <Layers className="w-3.5 h-3.5 text-red-400" />
              <span>Dynamic Feeds</span>
            </span>
            <span className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-medium text-slate-300 flex items-center gap-1.5 shadow-sm">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span>IMDb Ratings &amp; Cast</span>
            </span>
          </div>
        </div>

        {/* Feature Spec Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4 max-w-4xl mx-auto mt-8 sm:mt-12 w-full">
          <div className="glass-panel p-3.5 sm:p-4 rounded-2xl text-center border border-white/5">
            <div className="text-lg sm:text-2xl font-black text-white font-heading">4K 60FPS</div>
            <div className="text-[11px] sm:text-xs text-slate-400 mt-0.5">Hardware Playback</div>
          </div>
          <div className="glass-panel p-3.5 sm:p-4 rounded-2xl text-center border border-white/5">
            <div className="text-lg sm:text-2xl font-black text-white font-heading">OLED Dark</div>
            <div className="text-[11px] sm:text-xs text-slate-400 mt-0.5">Minimalist Theme</div>
          </div>
          <div className="glass-panel p-3.5 sm:p-4 rounded-2xl text-center border border-white/5">
            <div className="text-lg sm:text-2xl font-black text-white font-heading">Zero Ads</div>
            <div className="text-[11px] sm:text-xs text-slate-400 mt-0.5">Clean Experience</div>
          </div>
          <div className="glass-panel p-3.5 sm:p-4 rounded-2xl text-center border border-white/5">
            <div className="text-lg sm:text-2xl font-black text-white font-heading">Build 100</div>
            <div className="text-[11px] sm:text-xs text-slate-400 mt-0.5">Public Alpha Release</div>
          </div>
        </div>
      </div>
    </section>
  );
}
