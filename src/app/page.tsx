"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { Stats } from '../components/Stats';
import { AssetGrid } from '../components/AssetGrid';
import { Activities } from '../components/Activities';
import { PressRelease } from '../components/PressRelease';
import { Clients } from '../components/Clients';
import { Footer } from '../components/Footer';
import { useLenis } from '../hooks/useLenis';
import { motion, useScroll, useSpring } from 'motion/react';

export default function Page() {
  useLenis();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <main className="relative bg-white selection:bg-accent selection:text-primary">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accent origin-left z-[100]"
        style={{ scaleX }}
      />

      <Navbar />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Hero />
        <Stats />

        <div className="space-y-12 mb-32">
          <AssetGrid />
          <Activities />
          <PressRelease />
          <Clients />
        </div>

        <div id="kontak" className="px-6 md:px-12 lg:px-24 mb-40">
          <div className="max-w-7xl mx-auto border-4 border-accent p-16 md:p-24 text-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
            <h2 className="text-4xl md:text-7xl font-serif italic font-bold text-primary mb-8 max-w-4xl mx-auto leading-[0.9] tracking-tight">
              Ingin menjadi bagian <br />
              <span className="not-italic text-gray-200">dari kemajuan UNJ?</span>
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10">
              <button className="px-10 py-5 bg-primary text-white font-bold text-lg hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-primary/20 uppercase tracking-tighter">
                Sewa Fasilitas
              </button>
              <button className="px-10 py-5 border-2 border-primary text-primary font-bold text-lg hover:bg-primary/5 transition-all uppercase tracking-tighter">
                Kontak Kami
              </button>
            </div>
          </div>
        </div>

        <Footer />
      </motion.div>
    </main>
  );
}
