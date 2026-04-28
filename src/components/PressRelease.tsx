"use client";

import { motion } from 'motion/react';
import { Section } from './ui/Layout';
import { ExternalLink, Quote } from 'lucide-react';

const PRESS_RELEASES = [
  {
    id: 1,
    source: "ANTARA News",
    title: "UNJ Perkuat Kemandirian Finansial Melalui Optimalisasi Aset Kampus",
    date: "15 April 2024",
    link: "#",
    excerpt: "Badan Pengelola Usaha UNJ terus bertransformasi menjadi pilar utama pendukung operasional universitas melalui pengelolaan unit bisnis yang profesional."
  },
  {
    id: 2,
    source: "Metro TV",
    title: "Inovasi Fasilitas Olahraga UNJ Menjadi Barometer Nasional",
    date: "02 April 2024",
    link: "#",
    excerpt: "Fasilitas olahraga yang dikelola BPU UNJ kini dapat diakses oleh masyarakat umum dengan standar pelayanan internasional."
  },
  {
    id: 3,
    source: "Republika",
    title: "BPU UNJ Raih Penghargaan Pengelolaan Aset PTN-BH Terbaik",
    date: "28 Maret 2024",
    link: "#",
    excerpt: "Gubernur memberikan apresiasi atas efisiensi dan transparansi BPU UNJ dalam mengelola aset-aset strategis milik negara."
  }
];

export const PressRelease = () => {
  return (
    <Section id="press" className="overflow-hidden">
      <div className="mb-20">
        <div className="max-w-4xl">
          <h2 className="text-5xl md:text-8xl font-serif italic font-bold text-primary mb-10 leading-[0.9] tracking-tight">
            Publisitas <br />
            <span className="not-italic text-gray-200 uppercase tracking-tighter">Tentang Kami.</span>
          </h2>
          <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start">
            <div className="w-16 h-[1.5px] bg-accent mt-3 md:mt-4 shrink-0 hidden md:block" />
            <p className="text-primary/70 text-lg md:text-xl leading-relaxed max-w-2xl font-medium">
              Informasi terkini mengenai perkembangan dan capaian BPU UNJ yang diliput oleh berbagai media nasional dan eksternal. Kami berkomitmen untuk terus menjaga transparansi dan profesionalisme dalam setiap langkah bisnis kami.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PRESS_RELEASES.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group relative bg-white border border-primary/10 p-10 rounded-[48px] hover:bg-primary transition-all duration-500 overflow-hidden"
          >
            <div className="absolute -top-4 -right-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <Quote size={120} className="text-primary group-hover:text-white" />
            </div>
            
            <div className="relative z-10">
              <div className="text-[10px] font-black uppercase tracking-[0.3em] text-accent mb-6">
                {item.source}
              </div>
              
              <h3 className="text-xl font-bold text-primary group-hover:text-white mb-6 leading-tight transition-colors">
                "{item.title}"
              </h3>
              
              <p className="text-primary/60 group-hover:text-white/60 text-sm leading-relaxed mb-8 transition-colors">
                {item.excerpt}
              </p>
              
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-primary/40 group-hover:text-white/40 uppercase tracking-widest transition-colors">
                  {item.date}
                </span>
                <a 
                  href={item.link} 
                  className="w-10 h-10 rounded-full border border-primary/10 group-hover:border-white/20 flex items-center justify-center text-primary group-hover:text-white hover:bg-accent hover:text-primary transition-all"
                >
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
