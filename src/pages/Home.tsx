/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { lazy, Suspense } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Shield, 
  MessageCircle, 
  Hammer, 
  Phone,
  Settings
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { images } from '../assets/images';
import { siteConfig } from '../data/contactInfo';
import { statistics } from '../data/whyChooseUs';
import SEO from '../components/SEO';
import OptimizedImage from '../components/common/OptimizedImage';

// Lazy loaded components for lower sections to optimize initial bundle and load
const TrustBadges = lazy(() => import('../components/home/TrustBadges'));
const ServicesPreview = lazy(() => import('../components/home/ServicesPreview'));
const WhyChooseUsSection = lazy(() => import('../components/home/WhyChooseUsSection'));
const FeaturedProjects = lazy(() => import('../components/home/FeaturedProjects'));
const WorkProcess = lazy(() => import('../components/home/WorkProcess'));

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function Home() {
  return (
    <div className="pt-20">
      <SEO 
        title="Home"
        description="বাংলাদেশ এস এস এন্ড থাই এন্টারপ্রাইজ - Premium SS railing, Thai aluminium, and glass solutions in Bangladesh. Quality work at the best price."
      />
      {/* 1. Hero Section - Immediate Loading for LCP optimization */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden py-20 px-4 md:px-6">
        {/* Background effects */}
        <div className="absolute top-0 left-0 w-full h-full -z-10 bg-brand-navy">
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-brand-gold/10 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-brand-gold/5 blur-[120px] rounded-full"></div>
        </div>

        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 bg-brand-gold/10 border border-brand-gold/20 rounded-full">
              <span className="w-2 h-2 bg-brand-gold rounded-full animate-pulse"></span>
              <span className="text-brand-gold text-xs font-bold uppercase tracking-widest">সেরা এস এস ও থাই অ্যালুমিনিয়াম সলিউশন</span>
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl xl:text-7xl font-black text-white leading-[1.1] tracking-tight">
              আপনার বাসা, দোকান ও প্রতিষ্ঠানের জন্য <span className="text-brand-gold text-glow">প্রিমিয়াম</span> SS, Thai Aluminium ও <span className="gold-text">Glass Solution</span>
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-brand-silver text-lg md:text-xl leading-relaxed max-w-xl">
              মানসম্মত মেটেরিয়াল, নিখুঁত ফিনিশিং এবং অভিজ্ঞ কারিগরের মাধ্যমে আমরা তৈরি করি টেকসই ও সুন্দর কাজ। আমরাই দিচ্ছি ডেকোরেশনের নির্ভরযোগ্য গ্যারান্টি।
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
              <Link 
                to="/projects" 
                className="px-8 py-5 border-2 border-white/10 hover:border-brand-gold text-white font-bold rounded-2xl transition-all text-base md:text-lg group flex items-center gap-2 hover:bg-white/5"
              >
                আমাদের কাজ দেখুন
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <button 
                onClick={() => window.open(`https://wa.me/${siteConfig.whatsapp.replace(/[^0-9]/g, '')}`, '_blank')}
                className="px-8 py-5 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold rounded-2xl transition-all flex items-center gap-3 text-base md:text-lg shadow-xl shadow-green-500/10 hover:-translate-y-1"
              >
                <MessageCircle size={24} />
                WhatsApp করুন
              </button>
            </motion.div>

            {/* Hero Stats */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-10 border-t border-white/5">
              {statistics.map((stat, idx) => (
                <div key={idx} className="space-y-1 group">
                  <div className="text-2xl font-black text-brand-gold group-hover:scale-110 transition-transform origin-left">{stat.value}</div>
                  <div className="text-[10px] text-brand-silver uppercase tracking-widest leading-tight">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Hero Visual Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl aspect-[4/5] md:aspect-square">
              <OptimizedImage 
                src={images.hero.home} 
                alt="SS Railing Solution - মেটাল ডেকোরেশন কাজ" 
                className="w-full h-full"
                loading="eager"
                fetchPriority="high"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-transparent pointer-events-none"></div>
              
              {/* Floating trust card */}
              <div className="absolute bottom-8 left-8 right-8 bg-brand-navy/80 backdrop-blur-xl border border-white/10 p-6 rounded-3xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center text-black">
                    <Shield size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold">১০ বছরের বিশ্বস্ততা</h4>
                    <p className="text-brand-silver text-xs">আমরা আপনার আস্থার মর্যাদা রাখি</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Background decorative square */}
            <div className="absolute -top-10 -right-10 w-40 h-40 border-8 border-brand-gold/20 rounded-full -z-10 animate-spin-slow"></div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-brand-gold/30 blur-2xl rounded-full -z-10"></div>
          </motion.div>
        </div>
      </section>

      {/* Heavy sections are lazy-loaded to improve TTI and initial load performance */}
      <Suspense fallback={<div className="h-40 flex items-center justify-center text-brand-gold/20 italic">Loading segment...</div>}>
        <TrustBadges />
        <ServicesPreview />
        <WhyChooseUsSection />
        <FeaturedProjects />
        <WorkProcess />
      </Suspense>

      {/* Final CTA Section */}
      <section className="py-24 bg-brand-navy px-4 md:px-6">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-brand-gold p-12 md:p-20 rounded-[3rem] relative overflow-hidden group text-center"
          >
             {/* Decorative patterns */}
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Settings size={200} className="animate-spin-slow" />
            </div>
            <div className="absolute bottom-0 left-0 p-4 opacity-10">
              <Hammer size={200} />
            </div>

            <div className="relative z-10 space-y-8">
              <h2 className="text-4xl md:text-6xl font-black text-black leading-tight">
                আপনার কাজের ছবি বা ম্যাপ পাঠান — আমরা দ্রুত খরচ জানিয়ে দেব
              </h2>
              <div className="flex flex-wrap justify-center gap-6 pt-4">
                <button 
                  onClick={() => window.open(`https://wa.me/${siteConfig.whatsapp.replace(/[^0-9]/g, '')}`, '_blank')}
                  className="px-10 py-5 bg-black text-white font-black rounded-2xl flex items-center gap-3 text-lg transition-transform hover:scale-105 active:scale-95 shadow-2xl"
                >
                  <MessageCircle size={28} />
                  WhatsApp এ ছবি পাঠান
                </button>
                <a 
                  href={`tel:${siteConfig.phone}`}
                  className="px-10 py-5 bg-white text-black font-black rounded-2xl flex items-center gap-3 text-lg transition-transform hover:scale-105 active:scale-95 shadow-2xl"
                >
                  <Phone size={28} />
                  কল করুন
                </a>
              </div>
              <p className="text-black/60 font-bold uppercase tracking-widest text-sm pt-4">আরেকটি কাজ সফল করার পথে আমরা আপনার সাথে আছি</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
