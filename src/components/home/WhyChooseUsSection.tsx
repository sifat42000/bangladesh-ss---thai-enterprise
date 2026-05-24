/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import { images } from '../../assets/images';

const WhyChooseUsSection: React.FC = () => {
  return (
    <section className="py-24 bg-brand-slate relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-10">
        <div className="grid grid-cols-12 h-full">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="border-r border-white/10 h-full"></div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h4 className="text-brand-gold font-bold uppercase tracking-widest text-sm">কেন আমাদের বেছে নেবেন?</h4>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
              শুধু কাজ নয়, আমরা দিই মাপ অনুযায়ী <span className="gold-text">সুন্দর ডিজাইন</span> ও টেকসই মেটেরিয়াল
            </h2>
            <p className="text-brand-silver text-lg leading-relaxed">
              আপনার কষ্টের টাকার সঠিক মূল্য দিতে আমরা বদ্ধপরিকর। প্রতিটি কাজের শুরু থেকে শেষ পর্যন্ত আমরা সর্বোচ্চ গুরুত্ব দিই।
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                '১০০% নির্ভেজাল মেটেরিয়াল',
                'বাজেট বান্ধব দাম',
                'অপ্রতিরোধ্য স্থায়িত্ব',
                'দ্রুততম ডেলিভারি',
                'আধুনিক লাক্সারি ডিজাইন',
                'নিখুঁত কাজ ও ফিনিশিং'
              ].map((point, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-brand-gold/20 rounded-full flex items-center justify-center text-brand-gold">
                    <Check size={14} />
                  </div>
                  <span className="text-white text-sm font-medium">{point}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4 pt-12">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src={images.services.officePartition.hero} 
                  className="w-full object-cover aspect-square" 
                  alt="Work" 
                  onError={(e) => {
                    e.currentTarget.src = images.placeholders.service;
                  }}
                />
              </div>
              <div className="bg-brand-gold p-8 rounded-3xl text-black">
                <p className="text-4xl font-black">১০০%</p>
                <p className="text-xs font-bold uppercase tracking-tighter">কাস্টমার স্যাটিসফ্যাকশন</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-brand-navy p-8 rounded-3xl text-white border border-white/10">
                <p className="text-4xl font-black text-brand-gold">১০</p>
                <p className="text-xs font-bold uppercase tracking-tighter">বছরের কাজের অভিজ্ঞতা</p>
              </div>
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src={images.services.thaiWindow.hero} 
                  className="w-full object-cover aspect-square" 
                  alt="Work" 
                  onError={(e) => {
                    e.currentTarget.src = images.placeholders.service;
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
