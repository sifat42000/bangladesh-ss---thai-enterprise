/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { images } from '../../assets/images';
import { projects } from '../../data/projects';
import OptimizedImage from '../common/OptimizedImage';

const FeaturedProjects: React.FC = () => {
  return (
    <section className="py-24 bg-brand-navy">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-6 mb-16 text-center md:text-left">
          <div className="max-w-2xl space-y-4 w-full md:w-auto">
            <h4 className="text-brand-gold font-bold uppercase tracking-widest text-sm">প্রজেক্ট গ্যালারি</h4>
            <h2 className="text-4xl md:text-5xl font-black text-white">আমাদের সফল কিছু কাজ</h2>
          </div>
          <Link to="/projects" className="text-brand-gold font-bold border-b-2 border-brand-gold pb-1 hover:text-white hover:border-white transition-all mb-2 self-center md:self-auto">
            সবগুলো প্রজেক্ট দেখুন
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden mb-6">
                <OptimizedImage 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full"
                  fallback={images.placeholders.project}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                <div className="absolute bottom-6 left-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="bg-brand-gold text-black text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter mb-2 inline-block italic">
                    View Project
                  </span>
                </div>
              </div>
              <div className="px-2">
                <span className="text-brand-gold text-xs font-bold uppercase tracking-widest block mb-2">{project.category}</span>
                <h3 className="text-xl font-bold text-white group-hover:text-brand-gold transition-colors">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
