"use client";

import { motion } from 'motion/react';
import { Section } from './ui/Layout';
import { ArrowRight, Calendar } from 'lucide-react';

const ACTIVITIES = [
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

export const Activities = () => {
  return (
    <Section id="kegiatan" className="bg-gray-50/50">
      <div className="mb-20">
        <div className="max-w-4xl">
          <h2 className="text-5xl md:text-8xl font-serif italic font-bold text-primary mb-10 leading-[0.9] tracking-tight">
            Kegiatan <br />
            <span className="not-italic text-gray-200 uppercase tracking-tighter">Kami.</span>
          </h2>
          <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start">
            <div className="w-16 h-[1.5px] bg-accent mt-3 md:mt-4 shrink-0 hidden md:block" />
            <p className="text-primary/70 text-lg md:text-xl leading-relaxed max-w-2xl font-medium">
              BPU UNJ mendukung kemandirian finansial universitas dan memberikan kontribusi positif bagi pengembangan UNJ sebagai lembaga pendidikan dan riset yang unggul. Demi terwujudnya hal tersebut, BPU UNJ mengadakan beberapa kegiatan seperti berikut:
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {ACTIVITIES.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group cursor-pointer"
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
            
            <div className="flex items-center gap-2 text-accent text-xs font-bold uppercase tracking-widest mb-4">
              <Calendar size={14} />
              {item.date}
            </div>
            
            <h3 className="text-2xl font-bold text-primary mb-4 leading-tight group-hover:text-accent transition-colors">
              {item.title}
            </h3>
            
            <p className="text-primary/60 text-sm leading-relaxed mb-6">
              {item.desc}
            </p>
            
            <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest group-hover:gap-4 transition-all uppercase">
              Baca Selengkapnya
              <ArrowRight size={16} className="text-accent" />
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-20 flex justify-center">
        <a href="/kegiatan" className="flex items-center gap-4 text-primary font-black uppercase tracking-[0.3em] text-sm group">
          <span className="w-12 h-px bg-primary/20 group-hover:w-20 group-hover:bg-accent transition-all duration-500" />
          Lihat Semua Kegiatan
          <span className="w-12 h-px bg-primary/20 group-hover:w-20 group-hover:bg-accent transition-all duration-500" />
        </a>
      </div>
    </Section>
  );
};
