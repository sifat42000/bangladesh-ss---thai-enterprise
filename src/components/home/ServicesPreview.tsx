/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { services } from '../../data/services';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const ServicesPreview: React.FC = () => {
  return (
    <section className="py-24 bg-brand-navy relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <motion.h4 initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} className="text-brand-gold font-bold uppercase tracking-[0.3em] text-sm">আমাদের সেবাসমূহ</motion.h4>
          <motion.h2 initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} className="text-4xl md:text-5xl font-black text-white">কি কি কাজ আমরা করি?</motion.h2>
          <motion.p initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay:0.1}} className="text-brand-silver text-lg">আপনার স্থাপত্যকে সুন্দর করতে আমরা দিচ্ছি আধুনিক সব সলিউশন।</motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.filter(s => (s as any).isFeatured).map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="group relative overflow-hidden bg-brand-slate/20 border border-white/5 p-1 rounded-[2.5rem] hover:bg-brand-slate transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-gold/5"
            >
              <div className="p-8 space-y-6">
                <div className="w-16 h-16 bg-brand-gold/10 rounded-2xl flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-black transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <service.icon size={32} />
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-white group-hover:text-brand-gold transition-colors">{service.title}</h3>
                  <p className="text-brand-silver text-sm leading-relaxed">{service.shortDescription}</p>
                </div>
                <Link 
                  to={`/services/${service.slug}`}
                  className="inline-flex items-center gap-2 text-brand-gold font-bold text-sm uppercase tracking-wider group/link"
                >
                  বিস্তারিত দেখুন
                  <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPreview;
