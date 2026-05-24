/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Check, Wrench } from 'lucide-react';
import { images } from '../../assets/images';
import OptimizedImage from '../common/OptimizedImage';

const ServiceProcess: React.FC = () => {
  return (
    <section className="py-24 bg-brand-slate">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h4 className="text-brand-gold font-bold uppercase tracking-widest text-sm">কিভাবে আমরা আপনার কাজ করি?</h4>
            <h2 className="text-4xl md:text-5xl font-black text-white">নিখুঁত কাজের <span className="gold-text">গ্যারান্টি</span></h2>
            <p className="text-brand-silver text-lg">প্রতিটি কাজ আমরা প্রফেশনাল লেভেলে সম্পন্ন করি। আমাদের কাজের প্রতিটি ধাপ নিখুঁত ফিনিশিং নিশ্চিত করে।</p>
            
            <div className="space-y-6">
              {[
                { title: 'সঠিক মাপ অনুযায়ী কাজ', desc: 'আমরা লেজার মিটার দিয়ে নিখুঁত মাপ নিই যাতে কোনো গ্যাপ না থাকে।' },
                { title: 'সেরা মেটেরিয়াল নির্বাচন', desc: 'আমরা সরাসরি জিপিএইচ, বিএসআরএম বা প্রিমিয়াম গ্রেড এস এস ব্যবহার করি।' },
                { title: 'ডিজাইন সাজেশন', desc: 'আপনার জায়গার জন্য কোনটি সেরা দেখাবে সেই পরামর্শ আমরা দিই।' },
                { title: 'ফিটিং ও চমৎকার ফিনিশিং', desc: ' দক্ষ কারিগর দিয়ে দাগহীন এবং মসৃণ ফিনিশিং নিশ্চিত করি।' },
                { title: 'কাজ শেষে পুঙ্খানুপুঙ্খ চেকিং', desc: 'হ্যান্ডওভার করার আগে প্রতিটি স্ক্রু এবং জয়েন্ট চেক করি।' }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6 group">
                  <div className="shrink-0 w-12 h-12 rounded-2xl bg-brand-navy border border-brand-gold/30 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-black transition-all">
                    <Check size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">{item.title}</h4>
                    <p className="text-brand-silver text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[3rem] overflow-hidden border border-white/10 shadow-3xl aspect-square">
              <OptimizedImage 
                src={images.services.glassDoor.hero} 
                alt="Quality SS and Thai Work - নিখুঁত কোয়ালিটি কাজ" 
                className="w-full h-full"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-brand-gold p-10 rounded-[2rem] text-black shadow-2xl hidden md:block">
              <Wrench size={40} className="mb-4" />
              <p className="text-2xl font-black">১০০%</p>
              <p className="font-bold uppercase tracking-widest text-[10px]">কোয়ালিটি গ্যারান্টি</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceProcess;
