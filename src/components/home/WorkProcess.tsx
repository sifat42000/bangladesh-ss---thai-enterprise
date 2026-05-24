/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { MessageSquare, Search, Settings, Hammer, Check, CheckCircle2 } from 'lucide-react';

const WorkProcess: React.FC = () => {
  return (
    <section className="py-24 bg-brand-slate">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h4 className="text-brand-gold font-bold uppercase tracking-widest text-sm">কার্যপদ্ধতি</h4>
          <h2 className="text-4xl md:text-5xl font-black text-white">কিভাবে আমরা কাজ করি?</h2>
          <p className="text-brand-silver text-lg">আমাদের প্রফেশনাল টিম ধাপে ধাপে আপনার প্রজেক্টটি সম্পন্ন করে।</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 relative">
          <div className="hidden lg:block absolute top-24 left-1/4 right-1/4 h-0.5 bg-brand-gold/20 border-t-2 border-dashed border-brand-gold/30"></div>
          
          {[
            { icon: <MessageSquare size={24} />, title: 'প্রয়োজন শুনি', desc: 'প্রথমে আপনার চাহিদা ও পছন্দগুলো ভালো করে শুনি।' },
            { icon: <Search size={24} />, title: 'মাপ/ছবি দেখি', desc: 'জায়গার সঠিক মাপ এবং ছবি নিয়ে প্রাথমিক প্ল্যান করি।' },
            { icon: <Settings size={24} />, title: 'ডিজাইন সাজেশন', desc: 'আপনার জন্য সেরা ডিজাইন ও মেটেরিয়াল সাজেস্ট করি।' },
            { icon: <CheckCircle2 size={24} />, title: 'কোটেশন দিই', desc: 'সব মিলিয়ে সাশ্রয়ী বাজেটে আমরা ফাইনাল কোটেশন দিই।' },
            { icon: <Hammer size={24} />, title: 'কাজ শুরু করি', desc: 'নির্ভুলভাবে পন্য তৈরি ও কাজের প্রস্তুতি গ্রহণ করি।' },
            { icon: <Check size={24} />, title: 'ফিনিশিং সম্পন্ন', desc: 'ফিটিং ও চমৎকার ফিনিশিং এর মাধ্যমে কাজ শেষ করি।' }
          ].map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative group text-center space-y-6"
            >
              <div className="w-20 h-20 bg-brand-navy rounded-full border-2 border-brand-gold/50 flex items-center justify-center text-brand-gold mx-auto relative z-10 group-hover:bg-brand-gold group-hover:text-black transition-all duration-500 shadow-xl">
                {step.icon}
                <span className="absolute -top-2 -right-2 w-8 h-8 bg-brand-gold text-black rounded-full flex items-center justify-center font-bold text-sm shadow-md">
                  {idx + 1}
                </span>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white group-hover:text-brand-gold transition-colors">{step.title}</h3>
                <p className="text-brand-silver text-sm leading-relaxed max-w-[250px] mx-auto">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
