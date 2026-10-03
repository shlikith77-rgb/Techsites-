import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { ServicesSection } from './components/ServicesSection';
import { WhoWeBuildFor } from './components/WhoWeBuildFor';
import { OurWorkSection } from './components/OurWorkSection';
import { WhatsAppShowcase } from './components/WhatsAppShowcase';
import { ProcessSection } from './components/ProcessSection';
import { PricingSection } from './components/PricingSection';
import { ReviewsSection } from './components/ReviewsSection';
import { FounderAbout } from './components/FounderAbout';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { DemoModal } from './components/DemoModal';
import { ProjectModal } from './components/ProjectModal';
import { FloatingActions } from './components/FloatingActions';
import { Project, IndustryCategory, PricingPlan, AutomationPlan } from './types';

export default function App() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [selectedDemoCategory, setSelectedDemoCategory] = useState<string>('Restaurants & Cafés');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedPlanForContact, setSelectedPlanForContact] = useState<string>('Premium 1-Page Website (₹99)');

  const handleOpenDemo = (category?: string) => {
    if (category) {
      setSelectedDemoCategory(category);
    }
    setIsDemoModalOpen(true);
  };

  const handleSelectCategory = (cat: IndustryCategory) => {
    setSelectedDemoCategory(cat.name);
    setIsDemoModalOpen(true);
  };

  const handleSelectPlan = (plan: PricingPlan | AutomationPlan) => {
    setSelectedPlanForContact(`${plan.name} (${plan.price})`);
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreWork = () => {
    const workElem = document.getElementById('work');
    if (workElem) {
      workElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* Sticky Header */}
      <Navbar onOpenDemo={() => handleOpenDemo()} />

      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onOpenDemo={() => handleOpenDemo()}
          onExploreWork={handleExploreWork}
        />

        {/* 2. Trust Strip */}
        <TrustStrip />

        {/* 3. Services Section ("What We Build") */}
        <ServicesSection onOpenDemo={() => handleOpenDemo()} />

        {/* 4. Who We Build For */}
        <WhoWeBuildFor onSelectCategory={handleSelectCategory} />

        {/* 5. Our Work Section ("Selected Work" - 5 Projects) */}
        <OurWorkSection onSelectProject={(p) => setSelectedProject(p)} />

        {/* 6. WhatsApp Business Automation Spotlight */}
        <WhatsAppShowcase />

        {/* 7. Process Section ("How We Build Your Website") */}
        <ProcessSection />

        {/* 8. Pricing Section ("Premium Website Packages" with ₹99 1-Page plan) */}
        <PricingSection onSelectPlan={handleSelectPlan} />

        {/* 9. Reviews Section */}
        <ReviewsSection />

        {/* 10. Founder & Studio Profile (Aarush Kumar, Bengaluru) */}
        <FounderAbout onOpenDemo={() => handleOpenDemo()} />

        {/* 11. Frequently Asked Questions */}
        <FaqSection />

        {/* 12. Contact & Project Request Form */}
        <ContactSection initialService={selectedPlanForContact} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Buttons (WhatsApp + Call) */}
      <FloatingActions onOpenDemo={() => handleOpenDemo()} />

      {/* Interactive Free Demo Request Modal */}
      <DemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
        preselectedCategory={selectedDemoCategory}
      />

      {/* Case Study Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
