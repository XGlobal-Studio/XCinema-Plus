import React from 'react';
import { X, Lock, FileText } from 'lucide-react';
import { APP_CONFIG } from '../data/mockData';

export default function PrivacyModal({ isOpen, onClose, modalType }) {
  if (!isOpen) return null;

  const isPrivacy = modalType === 'privacy';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl bg-[#0e131d] border border-white/15 rounded-3xl shadow-2xl overflow-hidden z-10 my-auto max-h-[90vh] flex flex-col animate-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="p-4 sm:p-6 bg-gradient-to-r from-red-950/60 via-[#131926] to-[#0e131d] border-b border-white/10 flex items-center justify-between shrink-0">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-red-600/20 border border-red-500/30 flex items-center justify-center text-red-400 shrink-0">
              {isPrivacy ? <Lock className="w-4 h-4 sm:w-5 sm:h-5" /> : <FileText className="w-4 h-4 sm:w-5 sm:h-5" />}
            </div>
            <div>
              <h3 className="text-base sm:text-xl font-bold text-white font-heading">
                {isPrivacy ? "Privacy Policy" : "Terms & Disclaimer"}
              </h3>
              <span className="text-[10px] sm:text-xs text-slate-400 font-mono">
                {APP_CONFIG.name} • Updated September 2026
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white bg-white/5 active:bg-white/10 rounded-full transition-colors min-w-[40px] min-h-[40px] flex items-center justify-center"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-4 sm:p-6 text-xs sm:text-sm text-slate-300 space-y-3.5 sm:space-y-4 overflow-y-auto leading-relaxed">
          {isPrivacy ? (
            <>
              <p>
                <strong>1. Data Collection &amp; Privacy First:</strong> {APP_CONFIG.name} values user privacy above all. The application does not require registration, personal name, phone number, or payment details. No personally identifiable information (PII) is collected, stored, or monetized.
              </p>
              <p>
                <strong>2. Local Storage &amp; Cache:</strong> Your saved watchlists, favorites, and search queries are stored locally on your own device. You can clear this data at any time through Android Application Settings.
              </p>
              <p>
                <strong>3. Third-Party Network Requests:</strong> When searching or viewing titles, the application queries public metadata services solely to retrieve movie descriptions, poster artwork, and cast lists. No user identity is shared.
              </p>
              <p>
                <strong>4. Analytics &amp; Advertising:</strong> The application does not integrate intrusive advertising SDKs, tracking cookies, or behavior profilers.
              </p>
              <p>
                <strong>5. Contact:</strong> For inquiries regarding this Privacy Policy or software security, reach out via the official GitHub repository at <a href={APP_CONFIG.githubRepoUrl} target="_blank" rel="noopener noreferrer" className="text-red-400 underline">{APP_CONFIG.githubRepoUrl}</a>.
              </p>
            </>
          ) : (
            <>
              <p>
                <strong>1. Software License &amp; Nature:</strong> {APP_CONFIG.name} is a standalone personal media management and video playback application designed for Android devices.
              </p>
              <p>
                <strong>2. Content Disclaimer:</strong> {APP_CONFIG.name} does not host, upload, maintain, or broadcast any media files or video streams. The software acts purely as an interface and client application. Users are responsible for providing their own media or content sources.
              </p>
              <p>
                <strong>3. Alpha Testing Terms:</strong> Version {APP_CONFIG.versionShort} is provided &quot;as is&quot; for early public testing and benchmarking. Features may change between alpha builds.
              </p>
              <p>
                <strong>4. Intellectual Property:</strong> All product names, logos, trademarks, and registered trademarks displayed in sample metadata are the property of their respective owners.
              </p>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="p-3 sm:p-4 bg-[#0a0d14] border-t border-white/10 flex items-center justify-between text-xs text-slate-400 shrink-0">
          <span className="font-mono text-[10px] sm:text-xs">Meta Ads Policy Compliant</span>
          <button
            onClick={onClose}
            className="min-h-[36px] px-4 py-1.5 rounded-lg bg-white/10 active:bg-white/20 text-white font-semibold transition-colors"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
}
