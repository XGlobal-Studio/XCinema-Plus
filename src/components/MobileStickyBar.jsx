import React, { useState, useEffect } from 'react';
import { Download, Film, X } from 'lucide-react';
import { APP_CONFIG } from '../data/mockData';

export default function MobileStickyBar({ onOpenDownload }) {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show only when scrolled past 320px
      if (window.scrollY > 320 && !dismissed) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [dismissed]);

  if (!visible || dismissed) return null;

  return (
    <aside aria-label="Quick download bar" className="sm:hidden fixed bottom-0 inset-x-0 z-40 p-3 bg-[#0a0d14]/95 backdrop-blur-xl border-t border-white/10 shadow-[0_-10px_30px_rgba(0,0,0,0.8)] animate-in slide-in-from-bottom duration-300">
      <div className="flex items-center justify-between gap-3">
        {/* App info */}
        <div className="flex items-center space-x-2.5 min-w-0">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-red-600 to-rose-700 flex items-center justify-center shrink-0 shadow-md shadow-red-600/30">
            <Film className="w-4 h-4 text-white" />
          </div>
          <div className="truncate">
            <div className="text-xs font-bold text-white truncate">
              {APP_CONFIG.name}
            </div>
            <div className="text-[10px] text-red-400 font-mono">
              {APP_CONFIG.versionShort} (Build 100)
            </div>
          </div>
        </div>

        {/* Action Button & Dismiss */}
        <div className="flex items-center space-x-2 shrink-0">
          <a
            href={APP_CONFIG.apkDownloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 active:from-red-500 active:to-rose-500 text-white font-bold text-xs flex items-center gap-1.5 shadow-lg shadow-red-600/30"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download APK</span>
          </a>

          <button
            onClick={() => setDismissed(true)}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg bg-white/5 active:bg-white/10"
            aria-label="Dismiss bottom bar"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </aside>
  );
}
