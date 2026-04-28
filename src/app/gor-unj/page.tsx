"use client";

import { motion } from 'motion/react';
import { Section } from '../../components/ui/Layout';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { ArrowLeft, Box } from 'lucide-react';
import Link from 'next/link';

export default function GORPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Section className="pt-32 md:pt-48 pb-20">
        <div className="max-w-4xl">
          <Link href="/" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-accent mb-12 hover:gap-4 transition-all group">
            <ArrowLeft size={16} /> Kembali ke Beranda
          </Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl md:text-8xl font-serif italic text-primary leading-tight mb-8">
              Gedung <span className="not-italic font-bold text-accent">Olahraga (GOR) UNJ.</span>
            </h1>
            <p className="text-xl text-primary/60 leading-relaxed max-w-2xl">
              Fasilitas olahraga terpadu berstandar nasional untuk berbagai kegiatan atletik, turnamen, dan acara universitas.
            </p>
          </motion.div>
        </div>
      </Section>

      <Section className="pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {['Lantai 01 GOR UNJ', 'Lantai 02 GOR UNJ', 'Aula dan Outdoor GOR UNJ', 'Tambahan GOR UNJ'].map((item) => (
            <div key={item} className="p-12 bg-gray-50 rounded-[48px] border border-primary/5 hover:border-accent/30 transition-all group">
              <Box className="text-accent mb-6" size={40} />
              <h3 className="text-2xl font-bold text-primary mb-4">{item}</h3>
              <p className="text-primary/40 text-sm mb-8">Fasilitas pendukung kegiatan olahraga dan serbaguna di lingkungan GOR UNJ.</p>
              <button className="text-[10px] font-black uppercase tracking-widest text-accent border-b border-accent/20 pb-1 hover:border-accent transition-all">Lihat Detail</button>
            </div>
          ))}
        </div>
      </Section>
      <Footer />
    </main>
  );
}
