import React from 'react';
import { 
  Film, 
  Download, 
  ExternalLink, 
  ShieldCheck, 
  Lock, 
  FileText 
} from 'lucide-react';
import GithubIcon from './GithubIcon';
import { APP_CONFIG } from '../data/mockData';

export default function Footer({ onOpenPrivacy, onOpenTerms }) {
  return (
    <footer className="bg-[#05070a] border-t border-white/10 pt-12 sm:pt-16 pb-28 sm:pb-12 text-slate-400 text-xs w-full max-w-full overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 pb-10 sm:pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="sm:col-span-2 space-y-3 sm:space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-red-600 to-rose-700 flex items-center justify-center shadow-lg shadow-red-600/30">
                <Film className="w-5 h-5 text-white" />
              </div>
              <div className="flex items-center space-x-1.5">
                <span className="text-xl font-extrabold tracking-tight text-white font-heading">
                  XCINEMA
                </span>
                <span className="text-xs font-black uppercase tracking-wider bg-red-600 text-white px-1.5 py-0.5 rounded">
                  PLUS
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Your personal entertainment organizer and hardware-accelerated media player for Android. Discover trending titles, organize your collections, and view rich metadata.
            </p>

            <div className="flex items-center gap-2 pt-1 sm:pt-2">
              <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 font-mono text-[11px] text-red-400">
                {APP_CONFIG.version}
              </span>
              <span className="px-2.5 py-1 rounded-md bg-emerald-950/60 border border-emerald-500/30 font-mono text-[11px] text-emerald-400">
                Build 100
              </span>
            </div>
          </div>

          {/* Column 1: Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-heading mb-3 sm:mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              <li><a href="#hero" className="hover:text-white transition-colors block py-0.5">Overview</a></li>
              <li><a href="#screenshots" className="hover:text-white transition-colors block py-0.5">App Screenshots</a></li>
              <li><a href="#features" className="hover:text-white transition-colors block py-0.5">Key Features</a></li>
              <li><a href="#install" className="hover:text-white transition-colors block py-0.5">How to Install</a></li>
              <li><a href="#alpha" className="hover:text-white transition-colors block py-0.5">Alpha Build 100</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors block py-0.5">Frequently Asked Questions</a></li>
            </ul>
          </div>

          {/* Column 2: Downloads & GitHub */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-heading mb-3 sm:mb-4">
              Releases &amp; Code
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a 
                  href={APP_CONFIG.apkDownloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white text-red-400 font-semibold transition-colors flex items-center gap-1.5 py-0.5"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download APK (Build 100)</span>
                </a>
              </li>
              <li>
                <a 
                  href={APP_CONFIG.githubReleaseUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5 py-0.5"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub Release Tag</span>
                </a>
              </li>
              <li>
                <a 
                  href={APP_CONFIG.githubRepoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5 py-0.5"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>GitHub Repository</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal & Meta Ads Policies */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-heading mb-3 sm:mb-4">
              Policy &amp; Compliance
            </h4>
            <ul className="space-y-2.5">
              <li>
                <button 
                  onClick={() => onOpenPrivacy()} 
                  className="hover:text-white transition-colors text-left flex items-center gap-1.5 py-0.5"
                >
                  <Lock className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Privacy Policy</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onOpenTerms()} 
                  className="hover:text-white transition-colors text-left flex items-center gap-1.5 py-0.5"
                >
                  <FileText className="w-3.5 h-3.5 text-slate-300" />
                  <span>Terms of Service</span>
                </button>
              </li>
              <li>
                <span className="text-slate-500 block pt-1 text-[11px]">
                  Meta Advertising Policy Compliant
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="pt-6 sm:pt-8 flex flex-col md:flex-row items-start sm:items-center justify-between gap-3 text-[11px] text-slate-500">
          <p className="max-w-2xl leading-relaxed">
            <strong>Disclaimer:</strong> {APP_CONFIG.name} is a personal media organization and player application for Android. {APP_CONFIG.name} does not host, provide, or broadcast copyrighted media content. All title metadata and artwork are powered by open public APIs for informational and cataloging purposes.
          </p>

          <div className="flex items-center space-x-3 shrink-0 font-mono text-[10px] sm:text-xs">
            <span>© {new Date().getFullYear()} {APP_CONFIG.name}.</span>
            <span className="text-red-400 font-bold">{APP_CONFIG.versionShort}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
