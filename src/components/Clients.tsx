"use client";

import { motion } from 'motion/react';
import { Section } from './ui/Layout';

const CLIENTS = [
  { name: 'Pertamina', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Logo_Pertamina.png' },
  { name: 'Bank Mandiri', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/ad/Bank_Mandiri_logo_2016.svg' },
  { name: 'Telkom Indonesia', logo: 'https://upload.wikimedia.org/wikipedia/id/c/c5/Logo_Telkom_Indonesia_2013.svg' },
  { name: 'BNI', logo: 'https://upload.wikimedia.org/wikipedia/id/5/55/BNI_logo.svg' },
  { name: 'PLN', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Logo_PLN.png' },
  { name: 'Kementerian Pendidikan', logo: 'https://upload.wikimedia.org/wikipedia/commons/archive/9/97/20211019051528%21Logo_Tut_Wuri_Handayani.png' },
  { name: 'BRI', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/BRI_Logo.svg' },
  { name: 'Indosat', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Indosat_Ooredoo_Hutchison_logo.svg' },
];

export const Clients = () => {
  return (
    <Section id="klien" className="pb-0">
      <div className="mb-16">
        <div className="max-w-4xl">
          <h2 className="text-5xl md:text-8xl font-serif italic font-bold text-primary mb-10 leading-[0.9] tracking-tight">
            Klien <br />
            <span className="not-italic text-gray-200 uppercase tracking-tighter">Kami.</span>
          </h2>
          <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start">
            <div className="w-16 h-[1.5px] bg-accent mt-3 md:mt-4 shrink-0 hidden md:block" />
            <p className="text-primary/70 text-lg md:text-xl leading-relaxed max-w-2xl font-medium">
              Dalam mendukung berbagai kegiatan, BPU UNJ bermitra dengan beberapa perusahaan dan instansi terkemuka untuk memastikan kualitas layanan terbaik bagi seluruh civitas akademika dan klien eksternal.
            </p>
          </div>
        </div>
      </div>

      <div className="relative group">
        <div className="flex overflow-hidden space-x-12 py-10 grayscale hover:grayscale-0 transition-all duration-700">
          <motion.div 
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex space-x-24 shrink-0 items-center pl-12"
          >
            {[...CLIENTS, ...CLIENTS].map((client, i) => (
               <img 
                key={`${client.name}-${i}`}
                src={client.logo} 
                alt={client.name}
                className="h-10 md:h-14 w-auto object-contain opacity-40 hover:opacity-100 transition-opacity"
                referrerPolicy="no-referrer"
              />
            ))}
          </motion.div>
        </div>
        
        {/* Gradients to fade edges */}
        <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-white to-transparent z-10" />
      </div>

      <div className="mt-16 flex justify-center">
        <a href="/klien" className="flex items-center gap-4 text-primary font-black uppercase tracking-[0.3em] text-sm group">
          <span className="w-12 h-px bg-primary/20 group-hover:w-20 group-hover:bg-accent transition-all duration-500" />
          Lihat Semua Mitra
          <span className="w-12 h-px bg-primary/20 group-hover:w-20 group-hover:bg-accent transition-all duration-500" />
        </a>
      </div>
    </Section>
  );
};
