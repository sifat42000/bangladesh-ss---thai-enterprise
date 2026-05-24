/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Ruler, Shield, Home, Building, Calculator, CheckCircle2, MapPin, ArrowRight, Camera, MessageCircle, Sparkles, Send, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { siteConfig } from '../data/contactInfo';
import SEO from '../components/SEO';

const steps = [
  { id: 1, title: 'প্রজেক্ট বাছাই', icon: Home },
  { id: 2, title: 'মাপ ও বিবরণ', icon: Ruler },
  { id: 3, title: 'যোগাযোগ', icon: Calculator },
];

export default function Quote() {
  const [currentStep, setCurrentStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const handleNext = () => setCurrentStep(prev => prev + 1);
  const handlePrev = () => setCurrentStep(prev => prev - 1);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent("হ্যালো, আমি একটি কোটেশন রিকোয়েস্ট করেছি। আরও দ্রুত পর্যালোচনার জন্য প্রজেক্টের ছবি পাঠাচ্ছি।");
    window.open(`https://wa.me/${siteConfig.whatsapp.replace(/[^0-9]/g, '')}?text=${message}`, '_blank');
  };

  if (submitted) {
    return (
      <div className="pt-40 pb-24 text-center bg-brand-navy min-h-screen">
        <SEO title="Request Success" />
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="max-w-2xl mx-auto bg-brand-slate p-12 md:p-20 rounded-[4rem] shadow-3xl border border-white/10"
          >
            <div className="w-24 h-24 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-10 shadow-lg">
              <CheckCircle2 size={56} />
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">সাবমিট হয়েছে!</h2>
            <p className="text-brand-silver mb-10 text-xl leading-relaxed">আপনার কোটেশন রিকোয়েস্ট সফলভাবে আমরা পেয়েছি। আমাদের একজন প্রতিনিধি খুব শীঘ্রই আপনার সাথে যোগাযোগ করবে।</p>
            
            <div className="flex flex-col gap-4">
              <button 
                onClick={handleWhatsApp}
                className="bg-[#25D366] text-white px-12 py-5 rounded-2xl font-black hover:scale-105 transition-all shadow-xl text-lg flex items-center justify-center gap-3"
              >
                <MessageCircle size={24} />
                WhatsApp-এ ছবি পাঠান
              </button>
              <button 
                onClick={() => window.location.href = '/'}
                className="text-brand-silver hover:text-white transition-colors py-4 font-bold"
              >
                হোম পেজে ফিরে যান
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 bg-brand-navy min-h-screen">
      <SEO 
        title="Get a Quote"
        description="Get a free quote for your SS railing, Thai aluminium window, or glass door project in Bangladesh. Quick and easy 3-step process."
      />
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden border-b border-white/5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-6xl font-black text-white">ফ্রি কোটেশন <span className="gold-text">নিন</span></h1>
            <p className="text-brand-silver text-xl max-w-3xl mx-auto">
              আপনার কাজের ধরন, মাপ এবং ছবি দিলে আমরা দ্রুত আনুমানিক খরচ জানাতে পারবো।
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-7xl mx-auto">
          
          {/* Main Form (Left) */}
          <div className="lg:col-span-8">
            {/* Stepper */}
            <div className="flex justify-between items-center mb-16 max-w-xl mx-auto relative">
               <div className="absolute top-1/2 left-0 w-full h-1 bg-white/5 -translate-y-1/2 z-0 rounded-full"></div>
               <motion.div 
                 className="absolute top-1/2 left-0 h-1 bg-brand-gold -translate-y-1/2 z-0 rounded-full transition-all duration-500"
                 style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
               ></motion.div>

               {steps.map((step) => (
                 <div key={step.id} className="relative z-10 flex flex-col items-center">
                    <div className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center font-bold transition-all duration-500 shadow-xl ${
                      currentStep >= step.id ? 'bg-brand-gold text-black scale-110' : 'bg-brand-slate text-brand-silver border-2 border-white/5'
                    }`}>
                      <step.icon size={20} />
                    </div>
                    <span className={`text-[9px] md:text-[10px] uppercase font-black mt-4 tracking-[0.1em] md:tracking-[0.2em] ${
                      currentStep >= step.id ? 'text-brand-gold' : 'text-brand-silver'
                    }`}>
                      {step.title}
                    </span>
                 </div>
               ))}
            </div>

            {/* Form Content */}
            <div className="bg-brand-slate/30 p-8 md:p-12 rounded-[3.5rem] shadow-3xl border border-white/10 relative overflow-hidden mb-12">
               <div className="absolute top-0 left-0 w-64 h-64 bg-brand-gold/5 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
               
               <form onSubmit={handleSubmit} className="relative z-10">
                  <AnimatePresence mode="wait">
                    {currentStep === 1 && (
                      <motion.div 
                        key="step1"
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -30 }}
                        className="space-y-10"
                      >
                         <div className="space-y-4">
                          <h3 className="text-3xl font-black text-white">কি ধরণের কাজ এবং কোথায়?</h3>
                          <p className="text-brand-silver">আপনার প্রজেক্টের প্রাথমিক ধরণ নির্বাচন করুন।</p>
                         </div>

                         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-3">
                              <label className="text-xs font-black uppercase tracking-widest text-brand-gold pl-2">কাজের ধরন</label>
                              <div className="relative">
                                <select className="w-full bg-brand-navy border border-white/10 rounded-2xl p-5 focus:ring-2 focus:ring-brand-gold focus:outline-none transition-all text-white appearance-none cursor-pointer shadow-inner">
                                  <option className="bg-brand-navy">SS Railing</option>
                                  <option className="bg-brand-navy">Balcony Railing</option>
                                  <option className="bg-brand-navy">Thai Window</option>
                                  <option className="bg-brand-navy">Glass Door</option>
                                  <option className="bg-brand-navy">Office Partition</option>
                                  <option className="bg-brand-navy">Shop Front</option>
                                  <option className="bg-brand-navy">Custom Work</option>
                                </select>
                                <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-brand-silver">
                                  <ArrowRight size={18} className="rotate-90" />
                                </div>
                              </div>
                            </div>

                            <div className="space-y-3">
                              <label className="text-xs font-black uppercase tracking-widest text-brand-gold pl-2">জায়গার ধরন</label>
                              <div className="relative">
                                <select className="w-full bg-brand-navy border border-white/10 rounded-2xl p-5 focus:ring-2 focus:ring-brand-gold focus:outline-none transition-all text-white appearance-none cursor-pointer shadow-inner">
                                  <option className="bg-brand-navy">বাসা</option>
                                  <option className="bg-brand-navy">দোকান</option>
                                  <option className="bg-brand-navy">অফিস</option>
                                  <option className="bg-brand-navy">শোরুম</option>
                                  <option className="bg-brand-navy">প্রতিষ্ঠান</option>
                                </select>
                                <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-brand-silver">
                                  <ArrowRight size={18} className="rotate-90" />
                                </div>
                              </div>
                            </div>
                         </div>
                      </motion.div>
                    )}

                    {currentStep === 2 && (
                      <motion.div 
                        key="step2"
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -30 }}
                        className="space-y-10"
                      >
                         <h3 className="text-3xl font-black text-white">পরিমাপ ও বিস্তারিত</h3>
                         
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-3">
                               <label className="text-xs font-black uppercase tracking-widest text-brand-gold pl-2">আনুমানিক মাপ (স্কয়ার ফিট)</label>
                               <div className="relative">
                                <input required type="number" placeholder="উদা: ৫০০" className="w-full bg-brand-navy border border-white/10 rounded-2xl p-5 focus:ring-2 focus:ring-brand-gold focus:outline-none transition-all text-white" />
                                <div className="absolute right-5 top-1/2 -translate-y-1/2 text-brand-silver">
                                  <Calculator size={18} />
                                </div>
                               </div>
                            </div>
                            <div className="space-y-3">
                               <label className="text-xs font-black uppercase tracking-widest text-brand-gold pl-2">আপনার এলাকা</label>
                               <div className="relative">
                                <input required type="text" placeholder="যেমন: উত্তরা, ঢাকা" className="w-full bg-brand-navy border border-white/10 rounded-2xl p-5 focus:ring-2 focus:ring-brand-gold focus:outline-none transition-all text-white" />
                                <div className="absolute right-5 top-1/2 -translate-y-1/2 text-brand-silver">
                                  <MapPin size={18} />
                                </div>
                               </div>
                            </div>
                         </div>

                         <div className="space-y-3">
                            <label className="text-xs font-black uppercase tracking-widest text-brand-gold pl-2">কাজ সম্পর্কে বিস্তারিত</label>
                            <textarea rows={4} placeholder="কাজের বিবরণ এবং বিশেষ চাহিদা এখানে লিখুন..." className="w-full bg-brand-navy border border-white/10 rounded-2xl p-5 focus:ring-2 focus:ring-brand-gold focus:outline-none transition-all resize-none text-white"></textarea>
                         </div>

                         <div className="p-6 bg-brand-navy/50 border border-brand-gold/20 rounded-2xl flex items-start gap-4">
                            <div className="w-10 h-10 bg-brand-gold/10 rounded-full flex items-center justify-center shrink-0">
                               <Camera size={20} className="text-brand-gold" />
                            </div>
                            <div className="space-y-1">
                               <p className="text-white font-bold text-sm">ছবি পাঠান</p>
                               <p className="text-brand-silver text-xs">ছবি আপলোড সুবিধা পরে যুক্ত করা হবে। আপাতত WhatsApp এ ছবি পাঠান।</p>
                            </div>
                         </div>
                      </motion.div>
                    )}

                    {currentStep === 3 && (
                      <motion.div 
                        key="step3"
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -30 }}
                        className="space-y-10"
                      >
                         <h3 className="text-3xl font-black text-white">যোগাযোগের তথ্য</h3>
                         
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-3">
                               <label className="text-xs font-black uppercase tracking-widest text-brand-gold pl-2">আপনার নাম</label>
                               <input required type="text" placeholder="পুরো নাম লিখুন" className="w-full bg-brand-navy border border-white/10 rounded-2xl p-5 focus:ring-2 focus:ring-brand-gold focus:outline-none transition-all text-white" />
                            </div>
                            <div className="space-y-3">
                               <label className="text-xs font-black uppercase tracking-widest text-brand-gold pl-2">মোবাইল নাম্বার</label>
                               <input required type="tel" placeholder="০১৭০০-০০০০০০" className="w-full bg-brand-navy border border-white/10 rounded-2xl p-5 focus:ring-2 focus:ring-brand-gold focus:outline-none transition-all text-white" />
                            </div>
                         </div>

                         <div className="p-6 bg-blue-500/5 border border-blue-500/20 rounded-2xl flex items-start gap-4">
                            <div className="w-10 h-10 bg-blue-500/10 rounded-full flex items-center justify-center shrink-0">
                               <Info size={20} className="text-blue-500" />
                            </div>
                            <p className="text-brand-silver text-xs leading-relaxed italic">
                               সাবমিট বাটনে ক্লিক করার পর আমাদের টিম সর্বোচ্চ ২৪ ঘন্টার মধ্যে আপনার সাথে যোগাযোগ করবে।
                            </p>
                         </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="flex justify-between items-center mt-16 pt-10 border-t border-white/10">
                     {currentStep > 1 ? (
                       <button 
                         type="button" 
                         onClick={handlePrev}
                         className="px-8 py-4 text-brand-silver font-black hover:text-white transition-colors uppercase tracking-widest text-xs"
                       >
                         পেছনে ফিরুন
                       </button>
                     ) : <div />}

                     {currentStep < 3 ? (
                       <button 
                         type="button" 
                         onClick={handleNext}
                         className="bg-white text-black px-12 py-5 rounded-2xl font-black hover:scale-105 transition-all shadow-xl flex items-center gap-2 group text-base md:text-lg"
                       >
                         পরবর্তীতে যান
                         <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                       </button>
                     ) : (
                       <button 
                         type="submit"
                         className="bg-brand-gold text-black px-12 py-5 rounded-2xl font-black hover:scale-105 transition-all shadow-xl shadow-brand-gold/20 text-lg uppercase tracking-widest"
                       >
                         সাবমিট করুন
                       </button>
                     )}
                  </div>
               </form>
            </div>
            
            <p className="text-center text-brand-silver text-sm opacity-50">
              * আমরা আপনার তথ্যের সর্বোচ্চ গোপনীয়তা রক্ষা করি।
            </p>
          </div>

          {/* Sidebar (Right) */}
          <div className="lg:col-span-4 space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-brand-slate/40 p-8 md:p-10 rounded-[3rem] border border-white/10 space-y-8"
            >
              <div className="flex items-center gap-4 text-brand-gold">
                <Sparkles size={28} />
                <h3 className="text-2xl font-black text-white">কোটেশন পেতে যা যা লাগবে</h3>
              </div>
              
              <ul className="space-y-6">
                {[
                  { text: 'কাজের জায়গার পরিষ্কার ছবি' },
                  { text: 'আনুমানিক মাপ (লম্বা ও চওড়া)' },
                  { text: 'কী ধরনের ডিজাইন বা মেটেরিয়াল চান' },
                  { text: 'প্রজেক্টের সঠিক লোকেশন' },
                  { text: 'বাজেট ধারণা থাকলে তা উল্লেখ করুন' }
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 group">
                    <div className="w-6 h-6 bg-brand-gold/10 rounded-full flex items-center justify-center shrink-0 mt-1">
                      <div className="w-1.5 h-1.5 bg-brand-gold rounded-full group-hover:scale-150 transition-transform"></div>
                    </div>
                    <span className="text-brand-silver font-medium text-base leading-relaxed group-hover:text-white transition-colors">{item.text}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-8 border-t border-white/5 space-y-6">
                <p className="text-white font-bold opacity-70">কোটেশন কেন গুরুত্বপূর্ণ?</p>
                <p className="text-brand-silver text-sm leading-relaxed">
                   একটি সঠিক কোটেশন আপনাকে কাজের গুণগত মান এবং খরচ সম্পর্কে ১০০% স্বচ্ছ ধারণা দেয়। এতে বাজেট অনুযায়ী কাজ সম্পন্ন করা সহজ হয়।
                </p>
              </div>
            </motion.div>

            <div className="bg-brand-gold p-10 rounded-[3rem] text-black space-y-6 shadow-3xl">
              <h4 className="text-xl font-black">সরাসরি কথা বলতে চান?</h4>
              <p className="font-bold opacity-80 leading-relaxed text-sm">
                ফর্ম পূরণ করতে না চাইলে সরাসরি ফোন দিয়ে আপনার প্রজেক্ট নিয়ে আলোচনা করতে পারেন।
              </p>
              <a 
                href={`tel:${siteConfig.phone}`}
                className="flex items-center gap-4 bg-black text-white p-5 rounded-2xl font-black hover:bg-brand-navy transition-all shadow-xl group"
              >
                <div className="w-10 h-10 bg-brand-gold rounded-xl flex items-center justify-center text-black">
                   <Send size={20} />
                </div>
                {siteConfig.phone}
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

