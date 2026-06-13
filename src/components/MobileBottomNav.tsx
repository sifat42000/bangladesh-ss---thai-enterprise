/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Home, 
  Info, 
  BriefcaseBusiness, 
  Images, 
  Phone,
  FileText
} from 'lucide-react';
import { motion } from 'motion/react';

const navItems = [
  { label: 'হোম', path: '/', icon: Home },
  { label: 'সম্পর্কে', path: '/about', icon: Info },
  { label: 'সার্ভিস', path: '/services', icon: BriefcaseBusiness },
  { label: 'প্রজেক্ট', path: '/projects', icon: Images },
  { label: 'যোগাযোগ', path: '/contact', icon: Phone },
];

const MobileBottomNav: React.FC = () => {
  return (
    <nav 
      className="md:hidden fixed bottom-0 left-0 right-0 z-[999] bg-brand-navy/95 backdrop-blur-xl border-t border-brand-gold/20 pb-[env(safe-area-inset-bottom)]"
      id="mobile-bottom-nav"
    >
      <div className="flex items-center justify-around h-20 px-2">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => `
              relative flex flex-col items-center justify-center gap-1 w-full h-full transition-all duration-300
              ${isActive ? 'text-brand-gold' : 'text-brand-silver'}
            `}
          >
            {({ isActive }) => (
              <>
                {isActive && (
                  <motion.div 
                    layoutId="activeTab"
                    className="absolute -top-1 w-12 h-1 bg-brand-gold rounded-b-full shadow-[0_0_10px_rgba(212,175,55,0.5)]"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <item.icon size={22} className={isActive ? 'animate-pulse' : ''} />
                <span className="text-[10px] font-bold tracking-tight">{item.label}</span>
              </>
            )}
          </NavLink>
        ))}
        
      </div>
    </nav>
  );
};

export default MobileBottomNav;
