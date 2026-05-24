/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Hammer } from 'lucide-react';
import { motion } from 'motion/react';
import { images } from '../assets/images';
import { siteConfig } from '../data/contactInfo';
import OptimizedImage from '../components/common/OptimizedImage';

const navLinks = [
  { name: 'হোম', path: '/' },
  { name: 'আমাদের সম্পর্কে', path: '/about' },
  { name: 'সার্ভিস', path: '/services' },
  { name: 'প্রজেক্ট', path: '/projects' },
  { name: 'যোগাযোগ', path: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-brand-navy/90 backdrop-blur-xl border-b border-white/10 py-3 shadow-2xl' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-4 group">
          <div className="w-12 h-12 bg-gradient-to-br from-brand-gold via-brand-gold-muted to-brand-gold flex items-center justify-center rounded-xl shadow-lg transition-transform group-hover:rotate-12 overflow-hidden">
            <OptimizedImage 
              src={images.logos.main} 
              alt="BSS Thai Logo" 
              className="w-full h-full"
              loading="eager"
            />
          </div>
          <div className="flex flex-col">
            <h1 className="text-brand-gold text-lg md:text-xl font-black tracking-tight leading-tight">
              বাংলাদেশ এস এস <span className="text-white">&</span> থাই
            </h1>
            <div className="flex items-center gap-2">
              <span className="text-[10px] md:text-xs text-brand-silver font-medium uppercase tracking-[0.2em] whitespace-nowrap">
                SS • Thai • Glass • Aluminium Solution
              </span>
            </div>
          </div>
        </Link>

        {/* Desktop Nav - Hidden on mobile */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link, idx) => (
            <motion.div
              key={link.path}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-semibold tracking-wide transition-all duration-300 hover:text-brand-gold relative group ${
                    isActive ? 'text-brand-gold' : 'text-brand-silver'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name}
                    <span className={`absolute -bottom-1 left-0 h-0.5 bg-brand-gold transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                  </>
                )}
              </NavLink>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: navLinks.length * 0.1 }}
          >
            <Link
              to="/quote"
              className="bg-brand-gold text-black px-8 py-3 rounded-full font-bold text-sm uppercase tracking-wider transition-all duration-300 shadow-lg shadow-brand-gold/20 hover:bg-brand-gold-muted hover:scale-105 active:scale-95"
            >
              ফ্রি কোটেশন নিন
            </Link>
          </motion.div>
        </div>
      </div>
    </nav>
  );
}

