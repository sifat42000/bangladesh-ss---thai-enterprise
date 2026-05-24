/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { beforeAfterProjects } from '../../data/projects';
import { images } from '../../assets/images';
import OptimizedImage from '../common/OptimizedImage';

const BeforeAfterSection: React.FC = () => {
  return (
    <section className="py-24 bg-brand-slate relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h4 className="text-brand-gold font-bold uppercase tracking-widest text-sm">রূপান্তর</h4>
          <h2 className="text-4xl md:text-5xl font-black text-white">কাজের আগে ও পরে</h2>
          <p className="text-brand-silver text-lg">আমাদের রিভেইশন প্রজেক্টগুলোতে আমরা কীভাবে একটি সাধারণ স্পেসকে লাক্সারি লুকে রূপান্তর করি তা দেখুন।</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {beforeAfterProjects.map((item, idx) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-brand-navy p-6 rounded-[3rem] border border-white/5 space-y-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-square">
                    <OptimizedImage 
                      src={item.before} 
                      alt={`${item.title} - কাজের আগে`} 
                      className="w-full h-full"
                      fallback={images.placeholders.project}
                    />
                    <div className="absolute top-4 left-4 z-10 bg-red-500 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase">Before</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="relative rounded-2xl overflow-hidden border border-brand-gold/30 shadow-2xl aspect-square">
                    <OptimizedImage 
                      src={item.after} 
                      alt={`${item.title} - কাজের পরে`} 
                      className="w-full h-full"
                      fallback={images.placeholders.project}
                    />
                    <div className="absolute top-4 left-4 z-10 bg-green-500 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase">After</div>
                  </div>
                </div>
              </div>
              <div className="px-4 pb-4">
                <h3 className="text-2xl font-black text-white mb-2">{item.title}</h3>
                <p className="text-brand-silver text-sm">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
