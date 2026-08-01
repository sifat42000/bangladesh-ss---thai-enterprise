/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { lazy, Suspense, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingContactButtons from '../components/FloatingContactButtons';
import MobileBottomNav from '../components/MobileBottomNav';
import Loading from '../components/Loading';
import { initMetaPixel, trackPageView } from '../lib/metaPixel';

export default function Layout() {
  const location = useLocation();
  const { pathname, search } = location;

  useEffect(() => {
    initMetaPixel();
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  useEffect(() => {
    trackPageView(pathname, search, document.title);
  }, [pathname, search]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pb-20 md:pb-0">
        <Suspense fallback={<Loading />}>
          <AnimatePresence mode="wait">
            <motion.div
              key={pathname}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </Suspense>
      </main>
      <Footer />
      <FloatingContactButtons />
      <MobileBottomNav />
    </div>
  );
}
