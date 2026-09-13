import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AppScreenshotsSection from './components/AppScreenshotsSection';
import FeaturesSection from './components/FeaturesSection';
import InstallGuideSection from './components/InstallGuideSection';
import AlphaHubSection from './components/AlphaHubSection';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import DownloadModal from './components/DownloadModal';
import PrivacyModal from './components/PrivacyModal';
import MobileStickyBar from './components/MobileStickyBar';

export default function App() {
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);
  const [policyModalOpen, setPolicyModalOpen] = useState(false);
  const [policyType, setPolicyType] = useState('privacy'); // 'privacy' | 'terms'

  const handleOpenPrivacy = () => {
    setPolicyType('privacy');
    setPolicyModalOpen(true);
  };

  const handleOpenTerms = () => {
    setPolicyType('terms');
    setPolicyModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 flex flex-col font-sans selection:bg-red-600 selection:text-white w-full max-w-full overflow-x-hidden">
      {/* Navigation */}
      <Navbar onOpenDownload={() => setDownloadModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-grow w-full max-w-full overflow-x-hidden">
        <Hero onOpenDownloadModal={() => setDownloadModalOpen(true)} />
        <AppScreenshotsSection />
        <FeaturesSection />
        <InstallGuideSection />
        <AlphaHubSection />
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer 
        onOpenPrivacy={handleOpenPrivacy}
        onOpenTerms={handleOpenTerms}
      />

      {/* Mobile Sticky Floating CTA Bar */}
      <MobileStickyBar onOpenDownload={() => setDownloadModalOpen(true)} />

      {/* Modals */}
      <DownloadModal
        isOpen={downloadModalOpen}
        onClose={() => setDownloadModalOpen(false)}
      />

      <PrivacyModal
        isOpen={policyModalOpen}
        onClose={() => setPolicyModalOpen(false)}
        modalType={policyType}
      />
    </div>
  );
}
