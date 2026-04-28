"use client";

import { motion } from 'motion/react';
import { Section } from '../../components/ui/Layout';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { ArrowLeft, BookOpen, Shield, Target } from 'lucide-react';
import Link from 'next/link';

export default function TentangKami() {
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
              Leveraging Asset, <br />
              <span className="not-italic font-bold text-gray-200 block mt-4 uppercase tracking-tighter">Creating Value.</span>
            </h1>
            
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-16 h-[1.5px] bg-accent mt-4 shrink-0 hidden md:block" />
              <p className="text-xl md:text-2xl text-primary/80 leading-relaxed font-medium">
                Badan Pengelola Usaha (BPU) Universitas Negeri Jakarta (UNJ) adalah sebuah entitas di bawah naungan UNJ yang bertanggung jawab atas pengembangan dan pengelolaan unit usaha guna mengoptimalkan perolehan sumber-sumber dana UNJ.
              </p>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Content Section */}
      <Section className="bg-gray-50/50 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif italic text-primary">Sejarah & Dasar Pembentukan</h2>
              <p className="text-lg text-primary/70 leading-relaxed">
                BPU UNJ dibentuk berdasarkan <span className="font-bold text-primary italic">Peraturan Rektor Universitas Negeri Jakarta Nomor 10 Tahun 2020</span> tanggal 3 Agustus 2020 tentang Badan Pengelola Usaha Universitas Negeri Jakarta.
              </p>
              <p className="text-lg text-primary/70 leading-relaxed">
                Sebagai motor penggerak ekonomi universitas, BPU Universitas Negeri Jakarta mengusung tagline <span className="font-bold text-accent italic">“Leveraging Asset, Creating Value”</span> yang mencerminkan komitmen kami untuk memberikan nilai tambah pada setiap aset yang kami kelola.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-8 bg-white border border-primary/5 rounded-[32px] hover:shadow-xl transition-shadow">
                <Target size={32} className="text-accent mb-6" />
                <h3 className="text-xl font-bold text-primary mb-2">Visi Strategis</h3>
                <p className="text-sm text-primary/60">Menjadi pusat keunggulan bisnis berbasis pendidikan dan riset.</p>
              </div>
              <div className="p-8 bg-white border border-primary/5 rounded-[32px] hover:shadow-xl transition-shadow">
                <Shield size={32} className="text-accent mb-6" />
                <h3 className="text-xl font-bold text-primary mb-2">Integritas</h3>
                <p className="text-sm text-primary/60">Mengedepankan transparansi dalam setiap pengelolaan unit usaha.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-[64px] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop" 
                alt="BPU Office" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-accent text-white p-12 rounded-[48px] hidden md:block">
              <BookOpen size={48} className="mb-6 opacity-40" />
              <p className="text-3xl font-serif italic leading-none">Established</p>
              <p className="text-6xl font-black mt-2">2020</p>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Tagline Banner */}
      <Section className="py-32">
        <div className="bg-primary text-white p-16 md:p-32 rounded-[64px] text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 bg-accent/20 rounded-full blur-[120px] -ml-48 -mt-48" />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <p className="text-accent font-bold uppercase tracking-[0.5em] text-xs mb-8">Our Motto</p>
            <h2 className="text-5xl md:text-8xl font-serif italic mb-0 leading-[0.8]">
              Leveraging Asset
            </h2>
            <div className="text-white/20 text-3xl md:text-4xl font-black my-4 uppercase tracking-[0.5em]">
              &
            </div>
            <h2 className="text-5xl md:text-8xl font-serif italic mb-0 leading-[0.8] text-white">
              Creating Value
            </h2>
          </motion.div>
        </div>
      </Section>

      <Footer />
    </main>
  );
}
