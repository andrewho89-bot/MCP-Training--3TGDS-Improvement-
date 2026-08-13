import React, { useState } from 'react';
import { Language, ServiceItem, ChannelItem } from './types';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProvideSection } from './components/ProvideSection';
import { ServicesSection } from './components/ServicesSection';
import { ChannelsSection } from './components/ChannelsSection';
import { ManagementSection } from './components/ManagementSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

// Modals
import { AboutModal } from './components/modals/AboutModal';
import { NewsModal } from './components/modals/NewsModal';
import { SupplierInviteModal } from './components/modals/SupplierInviteModal';
import { ProductServicesModal } from './components/modals/ProductServicesModal';
import { ManagementModal } from './components/modals/ManagementModal';
import { ChannelDetailModal } from './components/modals/ChannelDetailModal';
import { ServiceDetailModal } from './components/modals/ServiceDetailModal';

export function App() {
  const [currentLang, setCurrentLang] = useState<Language>('en');
  const [activeModal, setActiveModal] = useState<'about' | 'news' | 'supplier' | 'products' | 'team' | null>(null);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [selectedChannel, setSelectedChannel] = useState<ChannelItem | null>(null);

  return (
    <div className="min-h-screen bg-white text-slate-800 selection:bg-blue-100 selection:text-blue-900 font-sans antialiased">
      {/* Navigation Bar */}
      <Navbar
        currentLang={currentLang}
        onLanguageChange={setCurrentLang}
        onOpenModal={(modal) => setActiveModal(modal)}
      />

      {/* Main Page Sections */}
      <main>
        {/* Hero Section */}
        <HeroSection
          currentLang={currentLang}
          onOpenModal={(modal) => setActiveModal(modal)}
        />

        {/* 3T GDS Provide Section */}
        <ProvideSection
          currentLang={currentLang}
          onOpenModal={(modal) => setActiveModal(modal)}
        />

        {/* Our Services Section */}
        <ServicesSection
          currentLang={currentLang}
          onSelectService={(service) => setSelectedService(service)}
        />

        {/* Global Distribution Channels Section */}
        <ChannelsSection
          currentLang={currentLang}
          onSelectChannel={(channel) => setSelectedChannel(channel)}
          onOpenSupplierModal={() => setActiveModal('supplier')}
        />

        {/* Executive Management Team Section */}
        <ManagementSection currentLang={currentLang} />

        {/* Contact Us Section */}
        <ContactSection
          currentLang={currentLang}
          onOpenSupplierModal={() => setActiveModal('supplier')}
        />
      </main>

      {/* Footer */}
      <Footer
        currentLang={currentLang}
        onOpenModal={(modal) => setActiveModal(modal)}
      />

      {/* Modals */}
      {activeModal === 'about' && (
        <AboutModal currentLang={currentLang} onClose={() => setActiveModal(null)} />
      )}

      {activeModal === 'news' && (
        <NewsModal currentLang={currentLang} onClose={() => setActiveModal(null)} />
      )}

      {activeModal === 'supplier' && (
        <SupplierInviteModal currentLang={currentLang} onClose={() => setActiveModal(null)} />
      )}

      {activeModal === 'products' && (
        <ProductServicesModal currentLang={currentLang} onClose={() => setActiveModal(null)} />
      )}

      {activeModal === 'team' && (
        <ManagementModal currentLang={currentLang} onClose={() => setActiveModal(null)} />
      )}

      {selectedService && (
        <ServiceDetailModal
          service={selectedService}
          currentLang={currentLang}
          onClose={() => setSelectedService(null)}
          onOpenSupplierModal={() => {
            setSelectedService(null);
            setActiveModal('supplier');
          }}
        />
      )}

      {selectedChannel && (
        <ChannelDetailModal
          channel={selectedChannel}
          currentLang={currentLang}
          onClose={() => setSelectedChannel(null)}
          onOpenSupplierModal={() => {
            setSelectedChannel(null);
            setActiveModal('supplier');
          }}
        />
      )}
    </div>
  );
}

export default App;
