"use client";

import { motion } from 'motion/react';
import { Section } from '../../components/ui/Layout';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { ArrowLeft, Calendar, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const ACTIVITIES = [
  {
    id: 4,
    title: "Pelatihan Manajemen Keuangan Kampus",
    date: "10 Mei 2024",
    category: "Training",
    desc: "Membekali pengelola unit bisnis dengan keterampilan manajemen keuangan yang akuntabel dan modern.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Sinergi BPU UNJ dengan Industri Eksternal",
    date: "2 Mei 2024",
    category: "Partnership",
    desc: "FGD bersama mitra industri untuk mengeksplorasi potensi kerjasama baru di tahun mendatang.",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32f7?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 1,
    title: "Workshop Pengembangan Unit Bisnis Strategis",
    date: "24 April 2024",
    category: "Development",
    desc: "Meningkatkan kapabilitas manajerial unit bisnis di lingkungan UNJ melalui sesi workshop intensif.",
    image: "https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Penandatanganan MoU Kerjasama Fasilitas Kampus",
    date: "18 April 2024",
    category: "Partnership",
    desc: "Memperluas jaringan kerjasama dengan mitra strategis untuk optimalisasi pemanfaatan aset universitas.",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Peluncuran Program Inovasi Keuangan Universitas",
    date: "12 April 2024",
    category: "Innovation",
    desc: "Implementasi sistem keuangan baru untuk mendukung transparansi dan akuntabilitas unit usaha.",
    image: "https://images.unsplash.com/photo-1454165833767-02664ce959d4?q=80&w=1200&auto=format&fit=crop"
  }
];

export default function Kegiatan() {
  return (
    <main className="min-h-screen bg-white selection:bg-accent selection:text-white">
      <Navbar />
      
      {/* Hero Section */}
      <Section className="pt-32 md:pt-48 pb-20 overflow-hidden">
        <div className="max-w-4xl">
          <Link href="/" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-accent mb-12 hover:gap-4 transition-all group">
            <ArrowLeft size={16} /> Kembali ke Beranda
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <h1 className="text-5xl md:text-8xl font-serif italic leading-[1.1] md:leading-[0.9] text-primary mb-12 tracking-tight">
              Kegiatan <br />
              <span className="not-italic font-bold text-gray-200 block mt-4 uppercase tracking-tighter">Kami.</span>
            </h1>
            
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-16 h-[1.5px] bg-accent mt-4 shrink-0 hidden md:block" />
              <p className="text-xl md:text-2xl text-primary/80 leading-relaxed font-medium">
                BPU UNJ mendukung kemandirian finansial universitas dan memberikan kontribusi positif bagi pengembangan UNJ sebagai lembaga pendidikan dan riset yang unggul. Demi terwujudnya hal tersebut, BPU UNJ mengadakan beberapa kegiatan seperti berikut:
              </p>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Activities Grid Section */}
      <Section className="bg-gray-50/50 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {ACTIVITIES.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer flex flex-col bg-white border border-primary/5 rounded-[40px] p-4 hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-[32px] mb-8">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-6 left-6">
                  <span className="px-4 py-2 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-widest text-primary">
                    {item.category}
                  </span>
                </div>
              </div>
              
              <div className="px-4 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-accent text-xs font-bold uppercase tracking-widest mb-4">
                  <Calendar size={14} />
                  {item.date}
                </div>
                
                <h3 className="text-2xl font-bold text-primary mb-4 leading-tight group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-primary/60 text-sm leading-relaxed mb-8 flex-grow">
                  {item.desc}
                </p>
                
                <div className="flex items-center justify-between pb-2 border-b border-primary/5 group-hover:border-accent/40 transition-colors">
                  <span className="text-primary font-bold text-xs uppercase tracking-widest transition-colors group-hover:text-accent">
                    Baca Selengkapnya
                  </span>
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-50 group-hover:bg-accent transition-colors">
                    <ArrowRight size={16} className="text-primary group-hover:text-white transition-colors" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      <Footer />
    </main>
  );
}
