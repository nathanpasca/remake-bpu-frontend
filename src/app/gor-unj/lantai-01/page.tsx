"use client";

import { motion } from 'motion/react';
import { Section } from '../../../components/ui/Layout';
import { Navbar } from '../../../components/Navbar';
import { Footer } from '../../../components/Footer';
import { ArrowLeft, Box, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const ROOMS = [
  "Ruang Fair Play",
  "Ruang Fortius",
  "Ruang Citius",
  "Ruang Altius",
  "Ruang Sauna",
  "Ruang Kontras Bed",
  "Ruang Analisis Aquatik",
  "Ruang Angkat Besi",
  "Ruang Terapi Latihan",
  "Ruang Rehab dan Terapi"
];

export default function Lantai01Page() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Header */}
      <Section className="pt-32 md:pt-48 pb-20 overflow-hidden">
        <div className="max-w-4xl">
          <Link href="/gor-unj" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-accent mb-12 hover:gap-4 transition-all group">
            <ArrowLeft size={16} /> Kembali ke GOR UNJ
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-8xl font-serif italic text-primary leading-tight mb-12 tracking-tight">
              Lantai 01 <br />
              <span className="not-italic font-bold text-accent uppercase tracking-tighter">GOR UNJ.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-primary/60 leading-relaxed font-medium max-w-2xl">
              Pusat berbagai fasilitas khusus, ruang terapi, dan area teknis untuk mendukung performa atletik dan kesehatan.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Room Grid */}
      <Section className="pb-32 bg-gray-50/50">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {ROOMS.map((room, i) => (
            <motion.div 
              key={room}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-white rounded-[48px] border border-primary/5 hover:border-accent/30 hover:shadow-2xl transition-all duration-500 group flex flex-col overflow-hidden"
            >
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={`https://picsum.photos/seed/${room.replace(/\s+/g, '-').toLowerCase()}/800/600`} 
                  alt={room}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                />
                <div className="absolute top-6 left-6">
                  <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center text-accent shadow-xl">
                    <Box size={24} />
                  </div>
                </div>
              </div>

              <div className="p-10 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">{room}</h3>
                  <p className="text-primary/40 text-sm leading-relaxed mb-12">
                    Fasilitas berstandar tinggi yang dikelola secara profesional untuk kebutuhan sivitas akademika dan umum.
                  </p>
                </div>
                
                <Link 
                  href={room === "Ruang Fair Play" ? "/gor-unj/lantai-01/ruang-fair-play" : "#"} 
                  className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-primary border-b-2 border-primary/5 pb-2 w-fit group-hover:border-accent group-hover:text-accent transition-all"
                >
                  Selengkapnya <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="py-32">
        <div className="bg-primary rounded-[64px] p-12 md:p-24 text-center text-white relative overflow-hidden group">
           <div className="absolute top-0 right-0 w-96 h-96 bg-accent opacity-10 rounded-full blur-[100px] -mr-48 -mt-48 group-hover:scale-110 transition-transform duration-1000" />
           <h2 className="text-4xl md:text-6xl font-serif italic mb-8 relative z-10">Tarik Perhatian <br/> <span className="not-italic font-bold text-accent">Gunakan Fasilitas Kami.</span></h2>
           <Link href="/kontak" className="inline-block bg-accent text-primary px-12 py-5 rounded-full font-bold uppercase tracking-widest text-sm hover:shadow-2xl transition-all relative z-10">
              Hubungi Kami Sekarang
           </Link>
        </div>
      </Section>

      <Footer />
    </main>
  );
}
