/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';

const Loading: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[9999] bg-brand-navy flex flex-col items-center justify-center gap-6">
      <div className="relative">
        {/* Animated Rings */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-20 h-20 rounded-full border-4 border-white/5 border-t-brand-gold shadow-[0_0_20px_rgba(212,175,55,0.3)]"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          className="absolute inset-2 rounded-full border-4 border-white/5 border-b-brand-gold/50 shadow-inner"
        />
      </div>

      <div className="flex flex-col items-center gap-2">
        <motion.h2 
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
          className="text-brand-gold text-2xl font-black tracking-widest uppercase"
        >
          লোড হচ্ছে...
        </motion.h2>
        <p className="text-brand-silver text-[10px] uppercase tracking-[0.3em] font-bold">
          বাংলাদেশ এস এস এন্ড থাই এন্টারপ্রাইজ
        </p>
      </div>

      {/* Decorative pulse background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-gold/5 blur-[120px] rounded-full animate-pulse" />
      </div>
    </div>
  );
};

export default Loading;
