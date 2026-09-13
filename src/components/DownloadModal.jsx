import React, { useState } from 'react';
import { 
  X, 
  Download, 
  Smartphone, 
  CheckCircle2, 
  ShieldCheck, 
  ExternalLink,
  FileCode,
  Sparkles
} from 'lucide-react';
import GithubIcon from './GithubIcon';
import { APP_CONFIG } from '../data/mockData';

export default function DownloadModal({ isOpen, onClose }) {
  const [downloadStarted, setDownloadStarted] = useState(false);

  if (!isOpen) return null;

  const handleDownloadClick = () => {
    setDownloadStarted(true);
    window.open(APP_CONFIG.apkDownloadUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Dialog */}
      <div className="relative w-full max-w-xl bg-[#0e131d] border border-white/15 rounded-3xl shadow-2xl overflow-hidden z-10 my-auto max-h-[90vh] flex flex-col animate-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="p-4 sm:p-6 bg-gradient-to-r from-red-950/60 via-[#131926] to-[#0e131d] border-b border-white/10 flex items-center justify-between shrink-0">
          <div>
            <div className="flex items-center gap-1.5 mb-1">
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-600/20 border border-red-500/30 px-2 py-0.5 rounded">
                Official Release
              </span>
              <span className="text-[10px] sm:text-xs text-slate-400 font-mono">
                {APP_CONFIG.versionShort}
              </span>
            </div>
            <h3 className="text-lg sm:text-2xl font-black text-white font-heading">
              Download {APP_CONFIG.name}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white bg-white/5 active:bg-white/10 rounded-full transition-colors min-w-[40px] min-h-[40px] flex items-center justify-center"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body (Scrollable) */}
        <div className="p-4 sm:p-6 space-y-4 sm:space-y-6 overflow-y-auto">
          {/* File Card */}
          <div className="p-3.5 sm:p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
            <div className="flex items-center space-x-3 min-w-0">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-red-600/20 border border-red-500/30 flex items-center justify-center text-red-400 shrink-0">
                <Smartphone className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="min-w-0">
                <h4 className="text-xs sm:text-sm font-bold text-white truncate">
                  {APP_CONFIG.packageFileName}
                </h4>
                <div className="text-[11px] sm:text-xs text-slate-400 font-mono mt-0.5">
                  Universal Android APK • {APP_CONFIG.fileSize}
                </div>
              </div>
            </div>
            <span className="text-[10px] sm:text-xs font-mono text-emerald-400 bg-emerald-950/50 border border-emerald-500/30 px-2 py-1 rounded-lg shrink-0 ml-2">
              Build 100
            </span>
          </div>

          {/* Direct Download Action Button */}
          <div>
            <button
              onClick={handleDownloadClick}
              className="w-full min-h-[48px] py-3.5 sm:py-4 rounded-2xl bg-gradient-to-r from-red-600 via-rose-600 to-red-700 active:from-red-500 active:to-rose-500 text-white font-bold text-xs sm:text-base flex items-center justify-center gap-2 shadow-xl shadow-red-600/40 transition-all"
            >
              <Download className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Download Direct APK ({APP_CONFIG.fileSize})</span>
            </button>
            <p className="text-[10px] sm:text-[11px] text-slate-400 text-center mt-2 font-mono">
              Direct GitHub Releases CDN Asset
            </p>
          </div>

          {/* GitHub Release Page alternative button */}
          <div>
            <a
              href={APP_CONFIG.githubReleaseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full min-h-[44px] py-2.5 sm:py-3 rounded-xl bg-white/5 active:bg-white/10 text-slate-200 active:text-white border border-white/10 font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Visit Release Page on GitHub</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            </a>
          </div>

          {/* Quick Notice */}
          <div className="p-3.5 sm:p-4 rounded-2xl bg-black/40 border border-white/5 text-xs text-slate-400 space-y-1.5">
            <div className="flex items-center gap-1.5 text-slate-300 font-semibold">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Android Installation Notice</span>
            </div>
            <p className="text-[11px] leading-relaxed">
              If prompted by Android to allow installation from unknown sources, toggle &quot;Allow from this source&quot; in settings. Build 100 is verified 100% clean and free of telemetry.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-3 sm:p-4 bg-[#0a0d14] border-t border-white/10 flex items-center justify-between text-xs text-slate-400 shrink-0">
          <span className="font-mono text-[11px]">{APP_CONFIG.minimumAndroid}</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg active:bg-white/5 text-slate-300 active:text-white transition-colors min-h-[36px]"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
