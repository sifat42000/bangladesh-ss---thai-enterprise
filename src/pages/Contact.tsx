/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, Facebook, ArrowRight, Camera, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { siteConfig } from '../data/contactInfo';
import SEO from '../components/SEO';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent("হ্যালো, আমি আপনাদের সার্ভিসের বিষয়ে জানতে চাই। আমার প্রজেক্ট নিয়ে কথা বলতে চাই।");
    window.open(`https://wa.me/${siteConfig.whatsapp.replace(/[^0-9]/g, '')}?text=${message}`, '_blank');
  };

  return (
    <div className="pt-20">
      <SEO 
        title="Contact Us"
        description="Contact Bangladesh SS & Thai Enterprise for high-quality SS and Thai aluminium work. Reach us via phone, WhatsApp, or visit our office."
      />
      {/* 1. Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-brand-navy">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6 max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-7xl font-black text-white leading-tight">
              যোগাযোগ <span className="gold-text">করুন</span>
            </h1>
            <p className="text-brand-silver text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto">
              আপনার কাজের ধরন, জায়গার মাপ বা ছবি পাঠান — আমরা দ্রুত পরামর্শ ও কোটেশন জানাবো।
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Contact Info Cards */}
      <section className="py-12 bg-brand-navy">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { icon: Phone, title: 'ফোন', value: siteConfig.phone, color: 'bg-blue-500/10 text-blue-500' },
              { icon: MessageCircle, title: 'WhatsApp', value: siteConfig.whatsapp, color: 'bg-green-500/10 text-green-500' },
              { icon: MapPin, title: 'ঠিকানা', value: siteConfig.address, color: 'bg-red-500/10 text-red-500' },
              { icon: Facebook, title: 'Facebook', value: siteConfig.facebook, color: 'bg-blue-600/10 text-blue-600' },
              { icon: Clock, title: 'সময়সূচি', value: siteConfig.openingHours, color: 'bg-purple-500/10 text-purple-500' }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-brand-slate/20 border border-white/5 rounded-[2.5rem] flex flex-col items-center text-center gap-4 hover:bg-brand-slate transition-all duration-300 h-full shadow-lg"
              >
                <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center shrink-0 shadow-lg`}>
                  <item.icon size={28} />
                </div>
                <div>
                  <h3 className="font-black text-white text-lg mb-1">{item.title}</h3>
                  <p className="text-brand-silver font-medium text-sm leading-relaxed">{item.value}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Contact Form & 4. Quick Quote Prompt */}
      <section className="py-24 bg-brand-slate relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Form */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 bg-brand-navy p-8 md:p-16 rounded-[3rem] border border-white/10 relative overflow-hidden shadow-3xl min-h-[600px] flex flex-col justify-center"
            >
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-10"
                  >
                    <div>
                      <h2 className="text-3xl font-black text-white mb-2">বার্তা পাঠান</h2>
                      <p className="text-brand-silver">নিচের ফর্মটি পূরণ করুন, আমরা দ্রুত উত্তর দেব।</p>
                    </div>
                    
                    <form onSubmit={handleSubmit} className="space-y-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-3">
                          <label className="text-xs font-black uppercase tracking-widest text-brand-gold pl-2">নাম</label>
                          <input required type="text" placeholder="আপনার নাম লিখুন" className="w-full bg-brand-slate/30 border border-white/10 rounded-2xl p-5 focus:ring-2 focus:ring-brand-gold focus:outline-none transition-all text-white" />
                        </div>
                        <div className="space-y-3">
                          <label className="text-xs font-black uppercase tracking-widest text-brand-gold pl-2">মোবাইল নাম্বার</label>
                          <input required type="tel" placeholder="০১৭০০-০০০০০০" className="w-full bg-brand-slate/30 border border-white/10 rounded-2xl p-5 focus:ring-2 focus:ring-brand-gold focus:outline-none transition-all text-white" />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-3">
                          <label className="text-xs font-black uppercase tracking-widest text-brand-gold pl-2">কাজের ধরন</label>
                          <select className="w-full bg-brand-slate/30 border border-white/10 rounded-2xl p-5 focus:ring-2 focus:ring-brand-gold focus:outline-none transition-all text-white appearance-none md:appearance-auto">
                            <option className="bg-brand-navy">এস এস কাজ (SS Work)</option>
                            <option className="bg-brand-navy">থাই অ্যালুমিনিয়াম (Thai Aluminium)</option>
                            <option className="bg-brand-navy">গ্লাস সলিউশন (Glass Solution)</option>
                            <option className="bg-brand-navy">অন্যান্য (Others)</option>
                          </select>
                        </div>
                        <div className="space-y-3">
                          <label className="text-xs font-black uppercase tracking-widest text-brand-gold pl-2">ঠিকানা / এলাকা</label>
                          <input required type="text" placeholder="যেমন: উত্তরা, ঢাকা" className="w-full bg-brand-slate/30 border border-white/10 rounded-2xl p-5 focus:ring-2 focus:ring-brand-gold focus:outline-none transition-all text-white" />
                        </div>
                      </div>

                      <div className="space-y-3">
                        <label className="text-xs font-black uppercase tracking-widest text-brand-gold pl-2">আপনার প্রয়োজন লিখুন</label>
                        <textarea required placeholder="কাজের বিস্তারিত বিবরণ এখানে লিখুন..." rows={5} className="w-full bg-brand-slate/30 border border-white/10 rounded-2xl p-5 focus:ring-2 focus:ring-brand-gold focus:outline-none transition-all text-white resize-none"></textarea>
                      </div>

                      <motion.button 
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        className="w-full bg-brand-gold text-black text-lg font-black py-5 rounded-2xl hover:bg-white transition-all shadow-xl shadow-brand-gold/20 flex items-center justify-center gap-3"
                      >
                        বার্তা পাঠান <Send size={24} />
                      </motion.button>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center space-y-8"
                  >
                    <div className="w-24 h-24 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto shadow-2xl">
                      <CheckCircle2 size={56} />
                    </div>
                    <div>
                      <h2 className="text-4xl font-black text-white mb-4">ধন্যবাদ!</h2>
                      <p className="text-brand-silver text-xl leading-relaxed">আপনার বার্তাটি আমরা পেয়েছি। আমাদের একজন প্রতিনিধি খুব শীঘ্রই আপনার সাথে যোগাযোগ করবে।</p>
                    </div>
                    <button 
                      onClick={() => setSubmitted(false)}
                      className="px-8 py-3 bg-white/10 text-brand-gold rounded-full font-bold hover:bg-white/20 transition-all border border-brand-gold/20"
                    >
                      আরেকটি বার্তা পাঠান
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Quote Prompt */}
            <div className="lg:col-span-5 space-y-8">
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-brand-gold p-12 rounded-[3.5rem] text-black shadow-3xl relative overflow-hidden flex flex-col justify-between min-h-[400px]"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                
                <div className="space-y-6">
                  <div className="w-16 h-16 bg-black/10 rounded-2xl flex items-center justify-center">
                    <Camera size={32} />
                  </div>
                  <h3 className="text-3xl font-black leading-tight">দ্রুত কোটেশন পেতে চান?</h3>
                  <p className="font-bold text-lg leading-relaxed opacity-90">
                    আপনার জায়গার ছবি, মাপ এবং কী ধরনের কাজ চান তা আমাদের WhatsApp-এ পাঠান। আমরা আপনার ডিজাইন এবং আনুমানিক খরচ সম্পর্কে তাৎক্ষণিক ধারণা দেব।
                  </p>
                </div>
                
                <button 
                  onClick={handleWhatsApp}
                  className="w-full bg-black text-white font-black py-5 rounded-2xl flex items-center justify-center gap-3 hover:bg-brand-navy transition-all group mt-8 shadow-xl"
                >
                  <MessageCircle size={24} />
                  WhatsApp-এ তথ্য পাঠান
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>

              <div className="bg-brand-navy/60 backdrop-blur-md p-8 rounded-[2rem] border border-white/5 space-y-4">
                <h4 className="text-white font-bold text-xl">অফিসের ঠিকানা</h4>
                <div className="flex items-start gap-4 text-brand-silver">
                   <MapPin size={24} className="text-brand-gold shrink-0" />
                   <p className="font-medium">{siteConfig.address}</p>
                </div>
                <div className="pt-4 border-t border-white/5">
                  <p className="text-xs text-brand-gray uppercase tracking-widest font-black">{siteConfig.openingHours} পর্যন্ত খোলা</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Google Map Placeholder */}
      <section className="py-24 bg-brand-navy">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-white">আমাদের অবস্থান</h2>
          </div>
          <div className="rounded-[4rem] overflow-hidden bg-brand-slate/20 border border-white/5 h-[600px] relative">
            <div className="absolute inset-0 flex items-center justify-center text-center">
               <div className="space-y-6 p-8">
                 <div className="w-20 h-20 bg-brand-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin size={40} className="text-brand-gold" />
                 </div>
                 <h3 className="text-4xl font-black text-white">গুগল ম্যাপ লোকেশন</h3>
                 <p className="text-brand-silver text-xl max-w-md mx-auto">খুব শীঘ্রই এখানে আমাদের অফিসের লাইভ লোকেশন ম্যাপ যুক্ত করা হবে।</p>
                 <div className="pt-8">
                   <button className="bg-white text-black px-12 py-5 rounded-2xl font-black shadow-2xl hover:scale-105 transition-transform">
                      Google Maps-এ দেখুন
                   </button>
                 </div>
               </div>
            </div>
            {/* Stylized placeholder grid */}
            <div className="w-full h-full opacity-5 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:40px_40px]"></div>
          </div>
        </div>
      </section>

      {/* 6. Final CTA */}
      <section className="py-24 bg-brand-slate">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="premium-gradient rounded-[4rem] p-12 md:p-24 text-center space-y-10 border border-white/10 shadow-3xl"
          >
            <h2 className="text-4xl md:text-7xl font-black text-white">আজই কথা বলুন</h2>
            <p className="text-brand-silver text-2xl max-w-2xl mx-auto leading-relaxed">
              আপনার কাজের সঠিক সমাধান পেতে বিশেষজ্ঞের পরামর্শ নিন। আমাদের টিম আপনার প্রজেক্টের জন্য সেরা আউটপুট দিতে প্রস্তুত।
            </p>
            <div className="flex justify-center pt-8">
               <a 
                 href={`tel:${siteConfig.phone}`}
                 className="px-12 py-6 bg-white text-black font-black rounded-[2rem] flex items-center gap-4 text-2xl transition-all hover:scale-105 shadow-3xl group"
               >
                 <Phone size={36} className="text-brand-gold" />
                 সরাসরি কল দিন
                 <ArrowRight size={24} className="opacity-30 group-hover:opacity-100 group-hover:translate-x-2 transition-all" />
               </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}


