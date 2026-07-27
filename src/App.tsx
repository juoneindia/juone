import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesGrid } from './components/ServicesGrid';
import { FAQSection } from './components/FAQSection';
import { PreLaunchBanner } from './components/PreLaunchBanner';
import { Footer } from './components/Footer';
import { ServiceModal } from './components/ServiceModal';
import { Toast } from './components/Toast';
import { SERVICES_DATA, FAQ_DATA } from './data';
import { ServiceItem } from './types';

export default function App() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleSubscribe = (email: string) => {
    setToastMessage(`Success! ${email} has been subscribed for early launch updates.`);
  };

  const handleRequestAccess = (serviceTitle: string) => {
    setToastMessage(`VIP access request received for ${serviceTitle}! We will notify you shortly.`);
  };

  return (
    <div className="bg-[#F8F9FA] font-sans text-slate-800 relative min-h-screen overflow-x-hidden selection:bg-[#008C49]/20 selection:text-[#008C49] flex flex-col">
      
      {/* Ambient Aurora Background Glows */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-40 left-1/4 w-96 h-96 bg-emerald-300/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/3 -right-20 w-[32rem] h-[32rem] bg-teal-200/25 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-emerald-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl" />
      </div>

      {/* Wireframe Grid Mesh */}
      <div className="fixed inset-0 bg-mesh pointer-events-none z-0" />

      {/* Main App Layout */}
      <div className="relative z-10 flex flex-col min-h-screen">
        
        {/* Sticky Header */}
        <Header />

        {/* Hero Section & Countdown Timer */}
        <main className="flex-1">
          <Hero />

          {/* Services Grid Section */}
          <ServicesGrid
            services={SERVICES_DATA}
            onSelectService={(service) => setSelectedService(service)}
          />

          {/* FAQ Accordion Section */}
          <FAQSection faqs={FAQ_DATA} />

          {/* Pre-Launch Email Capture Banner */}
          <PreLaunchBanner onSubscribe={handleSubscribe} />
        </main>

        {/* Compact Footer */}
        <Footer />

      </div>

      {/* Interactive Service Detail Modal */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onRequestAccess={handleRequestAccess}
      />

      {/* Toast Notification */}
      {toastMessage && (
        <Toast
          message={toastMessage}
          onClose={() => setToastMessage(null)}
        />
      )}

    </div>
  );
}
