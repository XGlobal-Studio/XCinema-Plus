import React from 'react';
import { 
  Download, 
  Settings, 
  CheckCircle2, 
  ShieldCheck, 
  ExternalLink, 
  Smartphone, 
  HelpCircle,
  FileCode
} from 'lucide-react';
import GithubIcon from './GithubIcon';
import { APP_CONFIG } from '../data/mockData';

export default function InstallGuideSection() {
  const steps = [
    {
      num: "01",
      title: "Download APK from GitHub",
      desc: "Tap the download button to get the official XCinema-Plus-0.0.0-alpha.0-release.apk directly from GitHub Releases.",
      actionLabel: "Direct Download",
      actionUrl: APP_CONFIG.apkDownloadUrl,
      icon: Download
    },
    {
      num: "02",
      title: "Open Downloaded File",
      desc: "Once the 48 MB download completes, open your notification shade or browser downloads folder and tap the APK file.",
      actionLabel: "View Releases",
      actionUrl: APP_CONFIG.githubReleaseUrl,
      icon: FileCode
    },
    {
      num: "03",
      title: "Allow Unknown Sources",
      desc: "If Android asks to allow unknown apps, tap Settings and toggle 'Allow from this source' for your browser or file manager.",
      actionLabel: "Standard Android Step",
      icon: Settings
    },
    {
      num: "04",
      title: "Tap Install & Launch",
      desc: "Return to the installer screen, tap 'Install', and immediately open XCinema Plus to start organizing your media.",
      actionLabel: "100% Free Alpha",
      icon: CheckCircle2
    }
  ];

  return (
    <section id="install" className="py-12 sm:py-20 lg:py-28 relative bg-[#07090e] border-t border-white/5 w-full max-w-full overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 w-full">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-950/60 border border-red-500/40 text-red-400 text-[11px] sm:text-xs font-semibold uppercase tracking-wider mb-3 sm:mb-4">
            <Smartphone className="w-3.5 h-3.5 text-red-400" />
            <span>Installation Guide</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-heading">
            Install on Android in 4 Steps
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm lg:text-base mt-2 sm:mt-3 leading-relaxed max-w-2xl mx-auto">
            Because XCinema Plus is in Public Alpha, it is distributed directly as an APK on GitHub. Follow these quick steps to get started in under a minute.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {steps.map((step, idx) => {
            const IconComp = step.icon;
            return (
              <div 
                key={idx}
                className="glass-panel rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-white/10 flex flex-col justify-between relative group hover:border-red-500/40 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xl sm:text-2xl font-black font-mono text-red-500">
                      {step.num}
                    </span>
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 group-hover:text-red-400 transition-colors">
                      <IconComp className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white font-heading mb-1.5">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5">
                  {step.actionUrl ? (
                    <a
                      href={step.actionUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="min-h-[36px] text-xs font-semibold text-red-400 hover:text-red-300 flex items-center gap-1.5 transition-colors"
                    >
                      <span>{step.actionLabel}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <span className="text-xs font-mono text-slate-500">
                      {step.actionLabel}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Security & Verification Card */}
        <div className="rounded-2xl sm:rounded-3xl p-5 sm:p-8 bg-gradient-to-r from-[#111722] via-[#0d121c] to-[#111722] border border-white/10 flex flex-col md:flex-row items-stretch sm:items-center justify-between gap-4 sm:gap-6">
          <div className="flex items-start space-x-3.5">
            <div className="p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 shrink-0">
              <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-white font-heading">
                Safe &amp; Clean Software Guarantee
              </h4>
              <p className="text-xs text-slate-300 max-w-2xl leading-relaxed mt-1">
                All APK builds are hosted transparently on GitHub Releases. No background analytics trackers, no adware, and zero telemetry.
              </p>
            </div>
          </div>

          <a
            href={APP_CONFIG.githubReleaseUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 min-h-[44px] px-6 py-3 rounded-xl bg-white/5 active:bg-white/10 text-slate-200 active:text-white border border-white/10 text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
            <span>Verify on GitHub Releases</span>
          </a>
        </div>
      </div>
    </section>
  );
}
