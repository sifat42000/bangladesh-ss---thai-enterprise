/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Phone, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { siteConfig } from '../data/contactInfo';

export default function FloatingContactButtons() {
  return (
    <div className="fixed bottom-24 md:bottom-6 right-6 z-50 flex flex-col gap-4">
      <motion.a
        href={`https://wa.me/${siteConfig.whatsapp.replace(/[^0-9]/g, '')}`}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-colors"
        aria-label="WhatsApp"
      >
        <MessageCircle size={30} fill="currentColor" />
      </motion.a>
      
      <motion.a
        href={`tel:${siteConfig.phone}`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="flex items-center justify-center w-14 h-14 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors"
        aria-label="Call Us"
      >
        <Phone size={28} fill="currentColor" />
      </motion.a>
    </div>
  );
}
