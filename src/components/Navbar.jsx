import React, { useState, useEffect } from 'react';
import { 
  Film, 
  Download, 
  Menu, 
  X, 
  Sparkles, 
  Smartphone,
  ExternalLink
} from 'lucide-react';
import GithubIcon from './GithubIcon';
import { APP_CONFIG } from '../data/mockData';

export default function Navbar({ onOpenDownload }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Overview', href: '#hero' },
    { label: 'App Screenshots', href: '#screenshots' },
    { label: 'Key Features', href: '#features' },
    { label: 'How to Install', href: '#install' },
    { label: 'Alpha Build 100', href: '#alpha' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <>
      {/* Top Notification Announcement Bar */}
      <aside aria-label="Alpha release announcement" className="bg-gradient-to-r from-red-950/90 via-neutral-900 to-red-950/90 border-b border-red-900/30 text-[11px] sm:text-xs text-slate-300 py-1.5 px-3 sm:px-4 w-full max-w-full overflow-hidden">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-2 min-w-0">
          <div className="flex items-center space-x-2 truncate min-w-0">
            <span className="flex h-2 w-2 relative shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            <span className="font-semibold text-white tracking-wide uppercase text-[9px] sm:text-[10px] bg-red-600/30 text-red-300 border border-red-500/40 px-1.5 py-0.5 rounded-full shrink-0">
              Alpha Live
            </span>
            <span className="truncate text-slate-300">
              <strong>{APP_CONFIG.name}</strong> {APP_CONFIG.versionShort}
            </span>
          </div>

          <div className="flex items-center shrink-0">
            <a 
              href={APP_CONFIG.githubReleaseUrl}
              target="_blank"
              rel="noopener noreferrer" 
              className="text-red-400 hover:text-red-300 font-medium underline underline-offset-2 transition-colors flex items-center gap-1 text-[11px] sm:text-xs"
            >
              <span>GitHub</span>
              <ExternalLink className="w-3 h-3 text-red-400" />
            </a>
          </div>
        </div>
      </aside>

      {/* Main Sticky Navigation */}
      <header 
        className={`sticky top-0 z-40 transition-all duration-300 w-full max-w-full overflow-hidden ${
          isScrolled 
            ? 'bg-[#07090e]/95 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/60 py-2.5 sm:py-3' 
            : 'bg-transparent py-3 sm:py-4'
        }`}
      >
        <div className="max-w-6xl mx-auto px-3 sm:px-6 w-full">
          <div className="flex items-center justify-between min-w-0 gap-2">
            {/* Logo */}
            <a href="#" className="flex items-center space-x-2.5 sm:space-x-3 group">
              <div className="relative">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center shadow-lg shadow-red-600/30 group-hover:shadow-red-600/60 transition-all duration-300">
                  <Film className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 bg-black rounded-full p-0.5 border border-red-500/50">
                  <div className="bg-red-500 w-1.5 h-1.5 rounded-full"></div>
                </div>
              </div>

              <div className="flex flex-col">
                <div className="flex items-center space-x-1 sm:space-x-1.5">
                  <span className="text-lg sm:text-xl font-extrabold tracking-tight text-white font-heading">
                    XCINEMA
                  </span>
                  <span className="text-[10px] sm:text-xs font-black uppercase tracking-wider bg-gradient-to-r from-red-500 to-rose-600 text-white px-1 sm:px-1.5 py-0.2 sm:py-0.5 rounded shadow-sm">
                    PLUS
                  </span>
                </div>
                <span className="text-[9px] sm:text-[10px] text-slate-400 font-mono tracking-wider">
                  v0.0.0-alpha.0 (100)
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2 bg-slate-900/50 p-1.5 rounded-full border border-white/10 backdrop-blur-md">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-3.5 py-1.5 text-xs font-medium text-slate-300 hover:text-white hover:bg-white/10 rounded-full transition-all duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Right Action Buttons (Desktop) */}
            <div className="hidden sm:flex items-center space-x-3">
              <a
                href={APP_CONFIG.githubRepoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors"
                title="View GitHub Repository"
                aria-label="GitHub Repository"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href={APP_CONFIG.apkDownloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-gradient-to-r from-red-600 via-rose-600 to-red-700 rounded-xl hover:from-red-500 hover:to-rose-600 transition-all duration-300 shadow-lg shadow-red-600/30 hover:shadow-red-600/50 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Download className="w-4 h-4" />
                <span>Download APK</span>
                <span className="text-[10px] font-mono opacity-80 border-l border-white/20 pl-1.5">
                  b100
                </span>
              </a>
            </div>

            {/* Mobile Header Buttons */}
            <div className="flex sm:hidden items-center space-x-2">
              <a
                href={APP_CONFIG.apkDownloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 bg-gradient-to-r from-red-600 to-rose-600 text-white font-bold text-xs rounded-xl shadow-md flex items-center gap-1.5 active:scale-95 transition-transform"
                aria-label="Download APK"
              >
                <Download className="w-3.5 h-3.5" />
                <span>APK</span>
              </a>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-300 active:text-white bg-white/5 border border-white/10 rounded-xl transition-colors min-w-[40px] min-h-[40px] flex items-center justify-center"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Full-Screen Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="sm:hidden fixed inset-x-0 top-[53px] bottom-0 bg-[#07090e]/98 backdrop-blur-2xl border-t border-white/10 z-50 p-5 flex flex-col justify-between overflow-y-auto animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-2">
              <div className="text-[10px] font-mono uppercase tracking-widest text-slate-500 px-3 pb-1">
                Navigation
              </div>
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3.5 text-base font-semibold text-slate-200 active:text-white active:bg-white/10 rounded-2xl transition-colors flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <span className="text-slate-600 text-xs font-mono">→</span>
                </a>
              ))}
            </div>

            <div className="pt-6 border-t border-white/10 space-y-3">
              <a
                href={APP_CONFIG.githubReleaseUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between text-xs text-slate-300 bg-white/5 p-3.5 rounded-2xl border border-white/10 active:bg-white/10"
              >
                <div className="flex items-center gap-2.5">
                  <GithubIcon className="w-4 h-4 text-slate-300" />
                  <span>GitHub Release Tag</span>
                </div>
                <span className="text-red-400 font-mono font-semibold">{APP_CONFIG.versionShort}</span>
              </a>

              <a
                href={APP_CONFIG.apkDownloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3.5 px-4 rounded-2xl bg-gradient-to-r from-red-600 to-rose-600 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-red-600/40 min-h-[48px]"
              >
                <Download className="w-4 h-4" />
                <span>Download APK ({APP_CONFIG.versionShort})</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
