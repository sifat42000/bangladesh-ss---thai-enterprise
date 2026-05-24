/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Quote as QuoteIcon } from 'lucide-react';
import { testimonials } from '../../data/testimonials';

const TestimonialSection: React.FC = () => {
  return (
    <section className="py-24 bg-brand-navy relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-brand-gold/5 blur-[120px] rounded-full"></div>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-20 space-y-4">
          <h4 className="text-brand-gold font-bold uppercase tracking-widest text-sm">রিভিউ</h4>
          <h2 className="text-4xl md:text-5xl font-black text-white">গ্রাহকদের মন্তব্য</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-10 bg-brand-slate/40 border border-white/5 rounded-[2.5rem] relative group hover:bg-brand-slate transition-all duration-300"
            >
              <div className="absolute top-8 left-8 text-brand-gold/20 group-hover:text-brand-gold/40 transition-colors">
                <QuoteIcon size={48} />
              </div>
              <div className="relative z-10 space-y-8">
                <p className="text-brand-silver italic text-lg leading-relaxed pt-10">"{t.review}"</p>
                <div className="flex items-center gap-4 border-t border-white/10 pt-8">
                   <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center font-black text-black">
                      {t.name[0]}
                   </div>
                   <div>
                      <h4 className="text-white font-bold">{t.name}</h4>
                      <p className="text-brand-gold text-xs">{t.area}</p>
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
