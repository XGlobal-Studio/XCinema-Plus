import React from 'react';
import { 
  Sparkles, 
  Terminal, 
  ShieldCheck, 
  CheckCircle2, 
  Download, 
  GitCommit, 
  FileCode
} from 'lucide-react';
import GithubIcon from './GithubIcon';
import { APP_CONFIG, ALPHA_SPECS } from '../data/mockData';

export default function AlphaHubSection() {
  return (
    <section id="alpha" className="py-12 sm:py-20 lg:py-28 relative bg-[#090c13] border-t border-white/5 overflow-hidden w-full max-w-full">
      {/* Background ambient light - strictly contained */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-96 h-72 sm:h-96 bg-red-900/15 blur-[80px] sm:blur-[120px] pointer-events-none rounded-full"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 w-full">
        {/* Release Banner */}
        <div className="rounded-2xl sm:rounded-3xl p-5 sm:p-8 bg-gradient-to-b from-[#111722] to-[#0a0e16] border border-red-500/30 shadow-2xl relative overflow-hidden mb-8 sm:mb-12 w-full">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5 sm:gap-6 pb-6 sm:pb-8 border-b border-white/10 w-full">
            <div className="w-full lg:w-auto min-w-0">
              <div className="flex flex-wrap items-center gap-2 mb-2 sm:mb-3">
                <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-red-600/30 border border-red-500/50 text-red-400 text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping"></span>
                  Active Release
                </span>
                <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 text-[10px] sm:text-xs font-mono">
                  Build #{APP_CONFIG.buildNumber}
                </span>
                <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-[10px] sm:text-xs font-mono">
                  GitHub Verified
                </span>
              </div>

              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading tracking-tight">
                {APP_CONFIG.version}
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm mt-2 max-w-xl leading-relaxed">
                The inaugural public testing release of {APP_CONFIG.name}. Built to benchmark the personal media discovery and video playback engine.
              </p>
            </div>

            <div className="w-full lg:w-auto shrink-0 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3">
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
                <GithubIcon className="w-4 h-4" />
                <span>Release on GitHub</span>
              </a>
            </div>
          </div>

          {/* Release Highlights */}
          <div className="pt-6 sm:pt-8 w-full">
            <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-400 font-mono mb-4 sm:mb-6 flex items-center gap-2">
              <GitCommit className="w-4 h-4 text-red-400" />
              <span>Milestones in Build {APP_CONFIG.buildNumber}</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 w-full">
              {ALPHA_SPECS.notes.map((note, idx) => (
                <div 
                  key={idx}
                  className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white/5 border border-white/5 flex items-start gap-2.5 sm:gap-3"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-300 leading-relaxed">
                    {note}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Specs Footer */}
          <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 text-xs font-mono text-slate-400 w-full">
            <div>
              <span className="text-slate-500 block text-[10px] uppercase">Package File</span>
              <span className="text-slate-200 font-bold truncate block">{APP_CONFIG.packageFileName}</span>
            </div>
            <div>
              <span className="text-slate-500 block text-[10px] uppercase">Architecture</span>
              <span className="text-slate-200">Universal Android APK</span>
            </div>
            <div>
              <span className="text-slate-500 block text-[10px] uppercase">Compatibility</span>
              <span className="text-emerald-400 font-bold">{APP_CONFIG.minimumAndroid}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
