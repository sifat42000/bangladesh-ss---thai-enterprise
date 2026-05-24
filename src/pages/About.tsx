/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { 
  Target, 
  History, 
  Users, 
  ShieldCheck, 
  Eye, 
  Heart, 
  Clock, 
  Sparkles, 
  CheckCircle, 
  Phone, 
  ArrowRight,
  MessageSquare,
  Ruler,
  Settings,
  Zap,
  Award
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { images } from '../assets/images';
import { siteConfig } from '../data/contactInfo';
import SEO from '../components/SEO';

export default function About() {
  return (
    <div className="pt-20">
      <SEO 
        title="About Us"
        description="Learn about Bangladesh SS & Thai Enterprise, our decade-long experience, mission, vision, and core values in providing quality SS and aluminium solutions."
      />
      {/* 1. Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-brand-navy">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-brand-gold/10 border border-brand-gold/20 rounded-full"
            >
              <Users size={16} className="text-brand-gold" />
              <span className="text-brand-gold text-xs font-bold uppercase tracking-widest">আপনার বিশ্বস্ত ডেকোরেশন পার্টনার</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-7xl font-black text-white leading-tight"
            >
              আমাদের <span className="gold-text">সম্পর্কে</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-brand-silver text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto"
            >
              মানসম্মত SS, Thai Aluminium ও Glass Work-এর মাধ্যমে আমরা আপনার জায়গাকে করি আরও সুন্দর, নিরাপদ ও ব্যবহারযোগ্য।
            </motion.p>
          </div>
        </div>
      </section>

      {/* 2. Company Story Section */}
      <section className="py-24 bg-brand-slate relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-[3rem] overflow-hidden border border-white/10 shadow-3xl">
                <img 
                  src={images.hero.about} 
                  alt="Company Growth" 
                  className="w-full h-full object-cover aspect-[4/3] hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    e.currentTarget.src = images.placeholders.service;
                  }}
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-brand-gold p-8 rounded-3xl text-black shadow-2xl">
                <p className="text-4xl font-black">১০+</p>
                <p className="font-bold uppercase tracking-widest text-[10px]">বছরের অভিজ্ঞতা</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
                বিশ্বস্ততার সাথে <br/><span className="gold-text">এক দশকের পথচলা</span>
              </h2>
              <p className="text-brand-silver text-lg leading-relaxed">
                বাংলাদেশ এস এস এন্ড থাই এন্টারপ্রাইজ দীর্ঘদিন ধরে বাসা, দোকান, অফিস ও বিভিন্ন প্রতিষ্ঠানের জন্য SS railing, Thai aluminium, glass door, window, partition এবং custom work করে আসছে। আমরা প্রতিটি কাজে মাপ, ডিজাইন, মেটেরিয়াল এবং ফিনিশিংকে সর্বোচ্চ গুরুত্ব দিই।
              </p>
              <p className="text-brand-silver text-lg leading-relaxed">
                আমাদের প্রতিটি প্রজেক্ট আমাদের কাছে বিশেষ। আমরা বিশ্বাস করি, একটি সুন্দর এবং নিরাপদ স্থাপনা আপনার জীবনযাত্রার মান পরিবর্তন করে দিতে পারে। তাই আমরা ক্লান্তিহীনভাবে কাজ করে যাচ্ছি আপনার স্বপ্ন পূরণে।
              </p>
              
              <div className="flex items-center gap-4 pt-4">
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-brand-gold border border-white/10">
                  <ShieldCheck size={24} />
                </div>
                <div>
                   <h4 className="text-white font-bold text-lg">গ্যারান্টিযুক্ত কাজ</h4>
                   <p className="text-brand-silver text-sm">মেটেরিয়াল ও কাজের ১০০% নিশ্চয়তা</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3 & 4. Mission & Vision Section */}
      <section className="py-24 bg-brand-navy">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-brand-slate/30 p-12 rounded-[3rem] border border-white/5 space-y-6 group hover:bg-brand-gold/5 transition-all duration-500"
            >
              <div className="w-16 h-16 bg-brand-gold rounded-2xl flex items-center justify-center text-black shadow-lg shadow-brand-gold/20">
                <Target size={32} />
              </div>
              <h3 className="text-3xl font-black text-white">আমাদের লক্ষ্য</h3>
              <p className="text-brand-silver text-lg leading-relaxed">
                গ্রাহকের প্রয়োজন অনুযায়ী টেকসই, সুন্দর এবং বাজেট-ফ্রেন্ডলি SS ও Thai Aluminium solution প্রদান করা।
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="premium-gradient p-12 rounded-[3rem] border border-white/10 space-y-6"
            >
              <div className="w-16 h-16 bg-brand-gold/20 rounded-2xl flex items-center justify-center text-brand-gold shadow-lg">
                <Eye size={32} />
              </div>
              <h3 className="text-3xl font-black text-white">আমাদের ভিশন</h3>
              <p className="text-brand-silver text-lg leading-relaxed">
                বাংলাদেশে মানসম্মত SS, Thai Aluminium ও Glass Work-এর একটি নির্ভরযোগ্য নাম হয়ে ওঠা।
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. Values Section */}
      <section className="py-24 bg-brand-slate relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <h4 className="text-brand-gold font-bold uppercase tracking-widest text-sm">আমাদের মূলনীতি</h4>
            <h2 className="text-4xl md:text-5xl font-black text-white">কেন আমরা সেরা?</h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
            {[
              { icon: <ShieldCheck size={32} />, title: 'সততা', desc: 'প্রতিটি পদক্ষেপে স্বচ্ছতা' },
              { icon: <Award size={32} />, title: 'মানসম্মত কাজ', desc: 'কোয়ালিটিতে আপোষ নেই' },
              { icon: <Clock size={32} />, title: 'সময়মতো ডেলিভারি', desc: 'নিষ্ঠার সাথে সময় রক্ষা' },
              { icon: <Settings size={32} />, title: 'পরিষ্কার ফিনিশিং', desc: 'সূক্ষ্ম ও নিখুঁত কাজ' },
              { icon: <Heart size={32} />, title: 'গ্রাহক সন্তুষ্টি', desc: 'আমাদের মূল লক্ষ্য' },
            ].map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 bg-brand-navy border border-white/5 rounded-3xl flex flex-col items-center text-center space-y-4 hover:border-brand-gold/50 transition-all group"
              >
                <div className="text-brand-gold transition-transform group-hover:scale-110 duration-300">
                  {value.icon}
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">{value.title}</h4>
                  <p className="text-brand-silver text-[10px] uppercase tracking-widest">{value.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Why Customers Trust Us */}
      <section className="py-24 bg-brand-navy relative overflow-hidden">
         <div className="absolute top-1/2 left-0 w-64 h-64 bg-brand-gold/5 blur-[120px] rounded-full translate-y-[-50%]"></div>
         <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
               <motion.div
                 initial={{ opacity: 0, x: -30 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 className="space-y-8"
               >
                  <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
                    গ্রাহকরা কেন আমাদের <span className="gold-text">আস্থা</span> রাখেন?
                  </h2>
                  <div className="space-y-6 pt-4">
                    {[
                      { icon: <MessageSquare size={20} />, text: 'কাজের আগে সঠিক পরামর্শ ও আইডিয়া প্রদান' },
                      { icon: <Ruler size={20} />, text: 'আপনার জায়গার মাপ অনুযায়ী কাস্টম ডিজাইন' },
                      { icon: <Zap size={20} />, text: 'সবচেয়ে ভালো মেটেরিয়াল নির্বাচন' },
                      { icon: <Sparkles size={20} />, text: 'অভিজ্ঞ ও দক্ষ কারিগর দ্বারা কাজ সম্পন্ন' },
                      { icon: <CheckCircle size={20} />, text: 'কাজ শেষে পুঙ্খানুপুঙ্খ ফিনিশিং চেক' }
                    ].map((point, idx) => (
                      <div key={idx} className="flex items-center gap-4 group">
                        <div className="w-10 h-10 bg-brand-gold/10 rounded-xl flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-black transition-all">
                          {point.icon}
                        </div>
                        <span className="text-brand-silver text-lg font-medium">{point.text}</span>
                      </div>
                    ))}
                  </div>
               </motion.div>

               <motion.div
                 initial={{ opacity: 0, scale: 0.9 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 className="relative"
               >
                  <div className="rounded-[3rem] overflow-hidden border border-white/10 shadow-3xl h-[500px]">
                     <img 
                       src={images.services.ssRailing.hero} 
                       alt="Craftsmanship" 
                       className="w-full h-full object-cover"
                       onError={(e) => {
                         e.currentTarget.src = images.placeholders.service;
                       }}
                     />
                  </div>
                  <div className="absolute top-8 right-8 bg-brand-navy/80 backdrop-blur-xl border border-white/10 p-6 rounded-2xl">
                     <p className="text-brand-gold font-black text-xl italic uppercase">Premium Quality</p>
                  </div>
               </motion.div>
            </div>
         </div>
      </section>

      {/* 7. Final CTA Section */}
      <section className="py-24 bg-brand-slate px-4 md:px-6">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="premium-gradient p-12 md:p-20 rounded-[3rem] relative overflow-hidden text-center border border-white/10 shadow-3xl"
          >
            <div className="relative z-10 space-y-8">
              <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
                আপনার কাজের জন্য <br/>আমাদের সাথে কথা বলুন
              </h2>
              <div className="flex flex-wrap justify-center gap-6 pt-4">
                <a 
                  href={`tel:${siteConfig.phone}`}
                  className="px-10 py-5 bg-white text-black font-black rounded-2xl flex items-center gap-3 text-lg transition-transform hover:scale-105 active:scale-95 shadow-2xl"
                >
                  <Phone size={28} />
                  কল করুন
                </a>
                <Link 
                  to="/quote"
                  className="px-10 py-5 bg-brand-gold text-black font-black rounded-2xl flex items-center gap-3 text-lg transition-transform hover:scale-105 active:scale-95 shadow-2xl"
                >
                  <CheckCircle size={28} />
                  কোটেশন নিন
                </Link>
              </div>
              <p className="text-brand-silver font-bold uppercase tracking-widest text-sm pt-4">আমরা আছি আপনার সেবায় সদা সচেষ্ট</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

