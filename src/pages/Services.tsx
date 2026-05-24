/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { lazy, Suspense } from 'react';
import { motion } from 'motion/react';
import { images } from '../assets/images';
import { siteConfig } from '../data/contactInfo';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import OptimizedImage from '../components/common/OptimizedImage';
import { 
  MessageCircle, 
  Sparkles,
  Phone
} from 'lucide-react';

// Lazy loaded heavy service sections
const ServiceCategoryList = lazy(() => import('../components/services/ServiceCategoryList'));
const ServiceProcess = lazy(() => import('../components/services/ServiceProcess'));

export default function Services() {
  return (
    <div className="pt-20">
      <SEO 
        title="Our Services"
        description="Comprehensive SS work, Thai aluminium, and glass solutions including railing, windows, partitions, and custom fittings in Bangladesh."
      />
      {/* 1. Page Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-brand-navy">
        <div className="absolute inset-0 opacity-10">
          <OptimizedImage 
            src={images.hero.services} 
            alt="Our Services - SS, Thai and Glass Solutions" 
            className="w-full h-full"
            loading="eager"
            fetchPriority="high"
          />
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-gold/5 blur-[120px] rounded-full -translate-x-1/2 translate-y-1/2"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-brand-gold/10 border border-brand-gold/20 rounded-full"
            >
              <Sparkles size={16} className="text-brand-gold" />
              <span className="text-brand-gold text-xs font-bold uppercase tracking-widest">প্রিমিয়াম ডেকোরেশন সলিউশন</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-black text-white leading-tight"
            >
              আমাদের <span className="gold-text">সার্ভিসসমূহ</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-brand-silver text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto"
            >
              বাসা, দোকান, অফিস ও প্রতিষ্ঠানের জন্য SS, Thai Aluminium, Glass এবং Custom Metal Work-এর নির্ভরযোগ্য সমাধান।
            </motion.p>
          </div>
        </div>
      </section>

      <Suspense fallback={<div className="h-96 flex items-center justify-center text-brand-gold/20 italic">Loading services...</div>}>
         <ServiceCategoryList />
         <ServiceProcess />
      </Suspense>

      {/* 4. Final CTA */}
      <section className="py-24 bg-brand-navy">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="premium-gradient rounded-[3rem] p-12 md:p-20 text-center space-y-8 border border-white/10"
          >
            <h2 className="text-4xl md:text-6xl font-black text-white">আপনার কোন সার্ভিস প্রয়োজন?</h2>
            <p className="text-brand-silver text-xl max-w-2xl mx-auto">
              আপনার কাজের ছবি বা মাপ আমাদের হোয়াটসয়্যাপে পাঠান অথবা সরাসরি কল করুন।
            </p>
            <div className="flex flex-wrap justify-center gap-6 pt-6">
              <Link 
                to="/quote" 
                className="px-10 py-5 bg-white text-black font-black rounded-2xl transition-all hover:scale-105 shadow-2xl inline-block text-lg"
              >
                ফ্রি কোটেশন নিন
              </Link>
              <button 
                onClick={() => window.open(`https://wa.me/${siteConfig.whatsapp.replace(/[^0-9]/g, '')}`, '_blank')}
                className="px-10 py-5 bg-[#25D366] text-white font-black rounded-2xl flex items-center gap-3 transition-all hover:scale-105 shadow-2xl text-lg"
              >
                <MessageCircle size={24} />
                WhatsApp করুন
              </button>
            </div>
            <div className="pt-8 flex flex-col items-center gap-4">
              <span className="text-brand-silver uppercase tracking-[0.3em] text-xs">অথবা সরাসরি কল করুন</span>
              <a href={`tel:${siteConfig.phone}`} className="text-brand-gold text-2xl font-black flex items-center gap-3">
                <Phone size={24} />
                {siteConfig.phone}
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
