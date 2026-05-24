/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram } from 'lucide-react';
import { images } from '../assets/images';
import { siteConfig } from '../data/contactInfo';
import OptimizedImage from '../components/common/OptimizedImage';

export default function Footer() {
  return (
    <footer className="bg-brand-navy pt-20 pb-10 border-t border-white/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/3"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Brand Intro */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-brand-gold flex items-center justify-center rounded-lg overflow-hidden">
                <OptimizedImage 
                  src={images.logos.main} 
                  alt="BSS Thai Logo" 
                  className="w-full h-full"
                />
              </div>
              <span className="text-xl font-black text-white tracking-tighter">বিএসএস থাই</span>
            </Link>
            <p className="text-brand-silver text-sm leading-relaxed max-w-xs">
              আমরা দিচ্ছি উন্নতমানের এস এস, থাই এলুমিনিয়াম এবং গ্লাস সলিউশন। ১০ বছরেরও বেশি অভিজ্ঞতা এবং শত শত সফল প্রজেক্টের সাথে আমরা আপনার আস্থার ঠিকানা।
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-brand-silver hover:bg-brand-gold hover:text-black transition-all border border-white/10">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-brand-silver hover:bg-brand-gold hover:text-black transition-all border border-white/10">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-6">
            <h3 className="text-white font-bold text-lg border-l-4 border-brand-gold pl-3">প্রয়োজনীয় লিঙ্ক</h3>
            <ul className="space-y-4">
              {['হোম', 'আমাদের সম্পর্কে', 'সার্ভিস', 'প্রজেক্ট', 'যোগাযোগ'].map((item) => {
                const paths: Record<string, string> = {
                  'হোম': '/',
                  'আমাদের সম্পর্কে': '/about',
                  'সার্ভিস': '/services',
                  'প্রজেক্ট': '/projects',
                  'যোগাযোগ': '/contact'
                };
                return (
                  <li key={item}>
                    <Link to={paths[item]} className="text-brand-silver text-sm hover:text-brand-gold transition-colors flex items-center gap-2 group">
                      <div className="w-1.5 h-1.5 bg-brand-gold rounded-full opacity-0 group-hover:opacity-100 transition-all"></div>
                      {item}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="space-y-6">
            <h3 className="text-white font-bold text-lg border-l-4 border-brand-gold pl-3">আমাদের সার্ভিস</h3>
            <ul className="space-y-4">
              {['এস এস গ্রিল ও গেট', 'থাই এলুমিনিয়াম', 'গ্লাস ডোর ও উইন্ডো', 'সিঁড়ির রেলিং', 'অফিস পার্টিশন'].map((service) => (
                <li key={service}>
                  <Link to="/services" className="text-brand-silver text-sm hover:text-brand-gold transition-colors flex items-center gap-2">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="space-y-6">
            <h3 className="text-white font-bold text-lg border-l-4 border-brand-gold pl-3">যোগাযোগ</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <div className="mt-1 text-brand-gold"><MapPin size={18} /></div>
                <p className="text-brand-silver text-sm leading-relaxed">
                  {siteConfig.address}
                </p>
              </li>
              <li className="flex items-center gap-4">
                <div className="text-brand-gold"><Phone size={18} /></div>
                <p className="text-brand-silver text-sm font-medium">
                  {siteConfig.phone}
                </p>
              </li>
              <li className="flex items-center gap-4">
                <div className="text-brand-gold"><Mail size={18} /></div>
                <p className="text-brand-silver text-sm">
                  {siteConfig.email}
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden">
          <p className="text-brand-gray text-[10px] md:text-xs uppercase tracking-[0.2em] font-medium">
            © {new Date().getFullYear()} বাংলাদেশ এস এস এন্ড থাই এন্টারপ্রাইজ | সর্বস্বত্ব সংরক্ষিত
          </p>
          <div className="flex items-center gap-6">
            <span className="text-brand-gray text-[10px] md:text-xs uppercase tracking-[0.2em] font-medium">
              ডিজাইন ও ডেভেলপমেন্ট: ভিশনারি টেক
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
