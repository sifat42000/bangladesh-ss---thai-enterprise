/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { services } from '../data/services'; // Use services instead of detailedServices
import { normalizeSlug } from '../utils/slugUtils'; // Import normalization utility
import { images } from '../assets/images';
import { siteConfig } from '../data/contactInfo';
import SEO from '../components/SEO';
import OptimizedImage from '../components/common/OptimizedImage';
import { 
  ArrowRight, 
  MessageCircle, 
  Phone, 
  CheckCircle2, 
  ArrowLeft,
  Shield,
  Clock,
  Sparkles,
  Zap,
  Info
} from 'lucide-react';

const ServiceDetails: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  // Normalize the slug from params and find matches correctly
  const normalizedRouteSlug = normalizeSlug(slug);
  const service = services.find(s => normalizeSlug(s.slug) === normalizedRouteSlug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!service) {
    return (
      <div className="pt-40 pb-24 text-center bg-brand-navy min-h-screen container mx-auto px-4 flex flex-col items-center justify-center space-y-8">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           className="w-20 h-20 bg-brand-gold/10 rounded-full flex items-center justify-center text-brand-gold mb-4"
        >
          <Info size={40} />
        </motion.div>
        <h2 className="text-3xl md:text-5xl font-black text-white mb-2">দুঃখিত, সার্ভিসটি পাওয়া যায়নি</h2>
        <p className="text-brand-silver max-w-md mx-auto">
          আপনি যে সার্ভিসটি খুঁজছেন তা হয়তো সরানো হয়েছে অথবা লিংকটি ভুল। অনুগ্রহ করে অন্য সার্ভিসগুলো দেখুন।
        </p>
        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <Link 
            to="/services" 
            className="px-8 py-4 bg-brand-gold text-black font-bold rounded-2xl transition-all hover:scale-105 flex items-center gap-2"
          >
            <ArrowLeft size={18} />
            সব সার্ভিস দেখুন
          </Link>
          <Link 
            to="/contact" 
            className="px-8 py-4 bg-white/10 text-white font-bold rounded-2xl border border-white/10 transition-all hover:bg-white/20 flex items-center gap-2"
          >
            <MessageCircle size={18} />
            সরাসরি যোগাযোগ করুন
          </Link>
        </div>
      </div>
    );
  }

  const whatsappMessage = encodeURIComponent(`হ্যালো, আমি আপনাদের ${service.title} সার্ভিসটি সম্পর্কে জানতে চাই।`);

  return (
    <div className="bg-brand-navy min-h-screen">
      <SEO 
        title={service.title}
        description={service.shortDescription}
      />

      {/* 1. Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <OptimizedImage 
            src={service.heroImage} 
            alt={service.title} 
            className="w-full h-full opacity-40"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-linear-to-t from-brand-navy via-brand-navy/60 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <Link 
              to="/services" 
              className="inline-flex items-center gap-2 text-brand-gold bg-brand-gold/10 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-brand-gold hover:text-black transition-all mb-4"
            >
              <ArrowLeft size={16} />
              সব সার্ভিস
            </Link>
            <h1 className="text-4xl md:text-7xl font-black text-white leading-tight uppercase tracking-tight">
              {service.title}
            </h1>
            <p className="text-brand-silver text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              {service.shortDescription}
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Intro & Description */}
      <section className="py-24 border-b border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-12 space-y-8">
              <div className="flex items-center gap-4 text-brand-gold">
                <div className="h-px w-12 bg-brand-gold"></div>
                <span className="font-bold uppercase tracking-widest text-sm">বিস্তারিত তথ্য</span>
              </div>
              <p className="text-brand-silver text-2xl md:text-3xl leading-relaxed font-medium">
                {service.longDescription}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Gallery Section */}
      <section className="py-24 bg-brand-slate/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
            <div className="space-y-4">
              <h4 className="text-brand-gold font-bold uppercase tracking-widest text-sm">গ্যালারি</h4>
              <h2 className="text-3xl md:text-5xl font-black text-white">এই সার্ভিসের <span className="gold-text">কাজের নমুনা</span></h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.galleryImages.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group bento-card bento-card-hover"
              >
                <div className="aspect-video overflow-hidden">
                  <OptimizedImage 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full"
                    fallback={images.placeholders.service}
                  />
                </div>
                <div className="p-8 space-y-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-brand-gold transition-colors">{item.title}</h3>
                  <p className="text-brand-silver text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Features & Usage */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Why Needed */}
            <div className="space-y-12">
              <div className="space-y-4">
                <h4 className="text-brand-gold font-bold uppercase tracking-widest text-sm text-glow">কেন প্রয়োজন?</h4>
                <h2 className="text-3xl md:text-5xl font-black text-white">এই সার্ভিসের গুরুত্ব</h2>
              </div>
              <div className="grid grid-cols-1 gap-6">
                {(service.whyNeeded || service.features).map((item, idx) => (
                  <div key={idx} className="flex gap-6 p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-brand-gold/30 transition-all group">
                    <div className="shrink-0 w-12 h-12 rounded-2xl bg-brand-gold/10 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-black transition-all">
                      <Zap size={24} />
                    </div>
                    <p className="text-white text-lg font-medium self-center">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Where to use & Features */}
            <div className="space-y-12">
               <div className="p-10 rounded-[3rem] bg-brand-slate border border-white/5 space-y-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
                  
                  <div className="space-y-6">
                    <h3 className="text-2xl font-black text-white flex items-center gap-3">
                      <Info className="text-brand-gold" />
                      কোথায় কোথায় ব্যবহার করা যায়?
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {service.uses.map((use, idx) => (
                        <span key={idx} className="px-5 py-3 rounded-2xl bg-brand-gold/10 border border-brand-gold/20 text-brand-gold font-bold text-sm">
                          {use}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-6 pt-6 border-t border-white/10">
                    <h3 className="text-2xl font-black text-white flex items-center gap-3">
                      <Shield className="text-brand-gold" />
                      বিশেষ বৈশিষ্ট্যসমূহ
                    </h3>
                    <ul className="space-y-4">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-brand-silver">
                          <CheckCircle2 size={18} className="text-brand-gold shrink-0 mt-1" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Working Process */}
      <section className="py-24 bg-brand-slate/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16 space-y-4">
            <h4 className="text-brand-gold font-bold uppercase tracking-widest text-sm">কাজের ধাপ</h4>
            <h2 className="text-3xl md:text-5xl font-black text-white">কিভাবে আমরা আপনার <span className="gold-text">কাজটি সম্পন্ন করি?</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {service.process.map((step, idx) => (
              <div key={idx} className="relative group p-8 rounded-3xl bg-white/5 border border-white/5 text-center space-y-4 hover:bg-white/10 transition-all">
                <div className="w-12 h-12 rounded-full bg-brand-gold text-black font-black text-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  {idx + 1}
                </div>
                <p className="text-white font-bold text-lg leading-tight">{step}</p>
                {idx < service.process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 translate-y-[-50%] z-10 text-brand-gold/30">
                    <ArrowRight size={24} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="premium-gradient rounded-[3rem] p-12 md:p-20 text-center space-y-8 border border-white/10 overflow-hidden relative"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
            
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-20 -left-20 w-40 h-40 border border-white/10 rounded-full flex items-center justify-center opacity-20"
            >
              <Sparkles className="text-white" size={40} />
            </motion.div>

            <div className="space-y-4 relative z-10">
              <h2 className="text-4xl md:text-6xl font-black text-white">এই ধরনের কাজ করতে চান?</h2>
              <p className="text-brand-silver text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
                আপনার জায়গার ছবি বা মাপ পাঠালে আমরা দ্রুত আনুমানিক খরচ এবং সঠিক ডিজাইনের পরামর্শ জানাতে পারব। আমরাই দিচ্ছি ডেকোরেশনের নির্ভরযোগ্য গ্যারান্টি।
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-6 pt-10 relative z-10">
              <button 
                onClick={() => window.open(`https://wa.me/${siteConfig.whatsapp.replace(/[^0-9]/g, '')}?text=${whatsappMessage}`, '_blank')}
                className="px-10 py-5 bg-[#25D366] text-white font-black rounded-2xl flex items-center gap-3 transition-all hover:scale-105 shadow-2xl text-lg hover:bg-[#1ebe5d]"
              >
                <MessageCircle size={24} />
                WhatsApp এ ছবি পাঠান
              </button>
              <Link 
                to="/quote" 
                className="px-10 py-5 bg-white text-black font-black rounded-2xl transition-all hover:scale-105 shadow-2xl inline-block text-lg"
              >
                ফ্রি কোটেশন নিন
              </Link>
            </div>

            <div className="pt-10 flex flex-col items-center gap-4 relative z-10">
              <span className="text-brand-silver uppercase tracking-[0.3em] text-xs font-bold">অথবা সরাসরি কল করুন</span>
              <a href={`tel:${siteConfig.phone}`} className="text-brand-gold text-3xl font-black flex items-center gap-4 hover:scale-105 transition-transform">
                <Phone size={32} />
                {siteConfig.phone}
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetails;
