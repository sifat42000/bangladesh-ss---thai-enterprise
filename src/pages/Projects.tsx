/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { projects } from '../data/projects';
import { images } from '../assets/images';
import { siteConfig } from '../data/contactInfo';
import { Camera, MessageCircle, ArrowRight, Sparkles, Image as ImageIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import OptimizedImage from '../components/common/OptimizedImage';
import ProjectGrid from '../components/projects/ProjectGrid';
import BeforeAfterSection from '../components/projects/BeforeAfterSection';
import ErrorBoundary from '../components/ErrorBoundary';

const filters = [
  { id: 'all', label: 'সব কাজ' },
  { id: 'ss-railing', label: 'SS রেলিং' },
  { id: 'thai-window', label: 'থাই জানালা' },
  { id: 'glass-door', label: 'গ্লাস ডোর' },
  { id: 'office-partition', label: 'অফিস পার্টিশন' },
  { id: 'shop-showroom', label: 'দোকান/শোরুম' },
  { id: 'custom-work', label: 'কাস্টম কাজ' },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.filter === activeFilter);

  return (
    <div className="pt-20">
      <SEO 
        title="Our Projects"
        description="View our portfolio of successful SS railing, Thai aluminium window, and glass door projects across Bangladesh."
      />
      {/* 1. Page Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-brand-navy">
        <div className="absolute inset-0 opacity-10">
          <OptimizedImage 
            src={images.hero.projects} 
            alt="Our successful SS and Thai Projects" 
            className="w-full h-full"
            loading="eager"
            fetchPriority="high"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-brand-navy via-transparent to-brand-navy"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6 max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-gold/10 border border-brand-gold/20 rounded-full">
              <ImageIcon size={16} className="text-brand-gold" />
              <span className="text-brand-gold text-xs font-bold uppercase tracking-widest">কাজের গ্যালারি</span>
            </div>
            <h1 className="text-4xl md:text-7xl font-black text-white leading-tight">
              আমাদের <span className="gold-text">সাফল্যের চিত্র</span>
            </h1>
            <p className="text-brand-silver text-xl md:text-2xl leading-relaxed max-w-2xl mx-auto">
              সততা এবং দক্ষতার সাথে সম্পন্ন করা আমাদের উল্লেখযোগ্য কিছু প্রজেক্ট নিচে তুলে ধরা হলো।
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Filter Buttons - Immediate for UX */}
      <section className="py-12 bg-brand-navy bg-brand-navy/90 border-y border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`relative px-6 py-3 rounded-2xl font-bold transition-all text-sm uppercase tracking-wider overflow-hidden group ${
                  activeFilter === filter.id 
                  ? 'text-black' 
                  : 'text-brand-silver bg-white/5 border border-white/10 hover:bg-white/10 hover:text-white'
                }`}
              >
                {activeFilter === filter.id && (
                  <motion.div
                    layoutId="activeFilter"
                    className="absolute inset-0 bg-brand-gold"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{filter.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <ErrorBoundary>
        <ProjectGrid projects={filteredProjects} />
        <BeforeAfterSection />
      </ErrorBoundary>

      {/* 5. CTA Section */}
      <section className="py-24 bg-brand-navy">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="premium-gradient rounded-[3rem] p-12 md:p-20 text-center space-y-10 border border-white/10 shadow-3xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
            
            <div className="relative z-10 space-y-6">
              <Camera size={64} className="mx-auto text-white opacity-20 mb-4" />
              <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">আপনার জায়গার ছবি পাঠান</h2>
              <p className="text-brand-silver text-xl max-w-2xl mx-auto leading-relaxed">
                আপনার বারান্দা, সিঁড়ি বা অফিসের ছবি আমাদের হোয়াটসঅ্যাপে পাঠান। আমরা আপনার ডিজাইন এবং আনুমানিক খরচ সম্পর্কে তাৎক্ষণিক ধারণা দেব।
              </p>
              
              <div className="flex flex-wrap justify-center gap-6 pt-10">
                <button 
                  onClick={() => window.open(`https://wa.me/${siteConfig.whatsapp.replace(/[^0-9]/g, '')}`, '_blank')}
                  className="px-10 py-5 bg-[#25D366] text-white font-black rounded-2xl flex items-center gap-3 transition-all hover:scale-105 shadow-2xl text-lg group"
                >
                  <MessageCircle size={28} />
                  WhatsApp-এ ছবি পাঠান
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <Link 
                  to="/quote" 
                  className="px-10 py-5 bg-white text-black font-black rounded-2xl transition-all hover:scale-105 shadow-2xl text-lg flex items-center gap-3"
                >
                  <Sparkles size={24} className="text-brand-gold" />
                  কোটেশন রিকোয়েস্ট
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
