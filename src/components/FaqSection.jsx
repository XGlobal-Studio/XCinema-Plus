import React, { useState } from 'react';
import { 
  ChevronDown, 
  HelpCircle, 
  MessageSquare
} from 'lucide-react';
import { FAQ_ITEMS } from '../data/mockData';

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState(0);

  const toggle = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-12 sm:py-20 lg:py-28 relative bg-[#07090e] border-t border-white/5 w-full max-w-full overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 w-full">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-950/60 border border-red-500/40 text-red-400 text-[11px] sm:text-xs font-semibold uppercase tracking-wider mb-3 sm:mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-red-400" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-heading">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm lg:text-base mt-2 sm:mt-3 leading-relaxed max-w-xl mx-auto">
            Everything you need to know about XCinema Plus and the Version 0.0.0-alpha.0 (100) testing release.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="glass-panel rounded-2xl border border-white/10 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-4 sm:p-6 text-left flex items-center justify-between gap-3 focus:outline-none min-h-[52px]"
                  aria-expanded={isOpen}
                >
                  <span className="text-xs sm:text-base font-bold text-white font-heading leading-snug">
                    {item.q}
                  </span>
                  <div className={`p-1.5 rounded-full bg-white/5 text-slate-300 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-red-400 bg-red-950/40' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 pt-3 sm:pt-4 animate-in slide-in-from-top-1 duration-200">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Extra Help Callout */}
        <div className="mt-10 sm:mt-12 text-center p-5 sm:p-6 rounded-2xl bg-white/5 border border-white/5">
          <p className="text-xs sm:text-sm text-slate-300">
            Have a different question or encountered an issue during Alpha testing?
          </p>
          <div className="mt-3.5 flex items-center justify-center">
            <a
              href="https://github.com/XGlobal-Studio/XCinema-Plus/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[44px] px-5 py-2.5 rounded-xl bg-white/10 active:bg-white/20 text-white text-xs font-semibold flex items-center gap-2 transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-red-400" />
              <span>Report Issue on GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
