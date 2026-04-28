"use client";

import { motion } from 'motion/react';
import { Section } from '../../components/ui/Layout';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

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

export default function Klien() {
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
            className="mb-12"
          >
            <h1 className="text-5xl md:text-8xl font-serif italic leading-[1.1] md:leading-[0.9] text-primary mb-12 tracking-tight">
              Klien <br />
              <span className="not-italic font-bold text-gray-200 block mt-4 uppercase tracking-tighter">Kami.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-primary/80 leading-relaxed font-medium">
              Dalam mendukung berbagai kegiatan, BPU UNJ bermitra dengan beberapa perusahaan berikut:
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Clients Section */}
      <Section className="py-24 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-12 gap-y-16">
            {CLIENTS.map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center justify-center space-y-6 group p-8 rounded-[40px] bg-white border border-primary/5 hover:border-accent/30 hover:shadow-2xl transition-all duration-500"
              >
                <div className="h-24 md:h-32 flex items-center justify-center p-4">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-h-full max-w-full object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="text-primary font-bold text-sm md:text-base text-center group-hover:text-accent transition-colors">
                  {client.name}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      <Footer />
    </main>
  );
}
