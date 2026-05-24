/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight } from 'lucide-react';
import { images } from '../../assets/images';
import OptimizedImage from '../common/OptimizedImage';

interface Project {
  id: number;
  title: string;
  category: string;
  filter: string;
  location: string;
  description: string;
  image: string;
}

interface ProjectGridProps {
  projects: Project[];
}

const ProjectGrid: React.FC<ProjectGridProps> = ({ projects }) => {
  const safeProjects = Array.isArray(projects) ? projects : [];

  return (
    <section className="py-24 bg-brand-navy min-h-[600px]">
      <div className="container mx-auto px-4 md:px-6">
        {safeProjects.length === 0 ? (
          <div className="rounded-[3rem] border border-white/10 bg-brand-slate/20 p-16 text-center text-brand-silver">
            <p className="text-xl font-semibold text-white mb-3">কোনও প্রজেক্ট পাওয়া যায়নি</p>
            <p>অনুগ্রহ করে পরে আবার চেষ্টা করুন অথবা আমাদের সাথে যোগাযোগ করুন।</p>
          </div>
        ) : (
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {safeProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group relative bg-brand-slate/20 rounded-[2.5rem] overflow-hidden border border-white/5 flex flex-col h-full hover:border-brand-gold/30 transition-colors"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <OptimizedImage 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full"
                      fallback={images.placeholders.project}
                    />
                    <div className="absolute top-4 left-4 z-10">
                      <span className="bg-brand-navy/80 backdrop-blur-md text-brand-gold px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border border-brand-gold/30">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-8 space-y-6 flex flex-col flex-grow">
                    <div className="space-y-4 flex-grow">
                      <div className="flex items-center gap-2 text-brand-gold">
                        <MapPin size={14} />
                        <span className="text-[10px] font-bold uppercase tracking-widest text-brand-silver">{project.location}</span>
                      </div>
                      <h3 className="text-2xl font-black text-white group-hover:text-brand-gold transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-brand-silver text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="pt-6 border-t border-white/5">
                      <Link 
                        to="/contact" 
                        className="w-full py-4 bg-brand-navy border border-white/5 rounded-2xl flex items-center justify-center gap-3 text-white font-bold hover:bg-brand-gold hover:text-black transition-all group/btn"
                      >
                        এ ধরনের কাজ চাই
                        <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ProjectGrid;
