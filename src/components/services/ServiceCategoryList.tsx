/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { serviceCategories } from '../../data/services';

const ServiceCategoryList: React.FC = () => {
  return (
    <div className="space-y-32 py-24 bg-brand-navy">
      {serviceCategories.map((category, catIdx) => (
        <section key={category.id} id={category.id} className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16 border-b border-white/5 pb-8"
          >
            <div className="space-y-4">
              <span className="text-brand-gold font-black text-6xl opacity-10 absolute -translate-y-12">0{catIdx + 1}</span>
              <h4 className="text-brand-gold font-bold uppercase tracking-widest text-sm relative">{category.title}</h4>
              <h2 className="text-3xl md:text-5xl font-black text-white">{category.bnTitle}</h2>
            </div>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.05 }
              }
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {category.services.map((service, idx) => (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="group bg-brand-slate/20 border border-white/5 p-1 rounded-[2.5rem] hover:bg-brand-slate transition-all duration-500 hover:border-brand-gold/30 hover:-translate-y-2"
              >
                <div className="p-8 space-y-6">
                  <div className="w-14 h-14 bg-brand-navy rounded-2xl flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-black transition-all duration-300 group-hover:scale-110">
                    <category.icon size={28} />
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-brand-gold transition-colors">{service.bnTitle}</h3>
                    <p className="text-brand-silver text-sm leading-relaxed">{service.shortDescription}</p>
                  </div>

                  <div className="pt-4 border-t border-white/5">
                    <Link 
                      to={`/services/${service.slug}`} 
                      className="inline-flex items-center gap-2 font-bold text-xs uppercase tracking-widest text-brand-gold hover:text-white transition-colors"
                    >
                      কাজের ছবি দেখুন
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>
      ))}
    </div>
  );
};

export default ServiceCategoryList;
