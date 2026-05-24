/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { whyChooseUs } from '../../data/whyChooseUs';

const TrustBadges: React.FC = () => {
  return (
    <section className="py-16 bg-brand-navy/50 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {whyChooseUs.slice(0, 4).map((badge, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-6 md:p-8 bg-brand-slate/30 border border-white/5 rounded-3xl flex flex-col items-center text-center space-y-4 hover:bg-brand-gold/5 transition-colors group"
            >
              <div className="text-brand-gold transition-transform group-hover:scale-110 duration-300">
                <badge.icon size={32} />
              </div>
              <div>
                <h4 className="text-white font-bold md:text-lg mb-1">{badge.title}</h4>
                <p className="text-brand-silver text-[10px] md:text-xs uppercase tracking-widest leading-tight">সেরা কোয়ালিটির নিশ্চয়তা</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
