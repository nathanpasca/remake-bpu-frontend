"use client";

import { motion } from 'motion/react';
import { Section } from '../../components/ui/Layout';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { ArrowLeft, FileText, Download, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export default function DasarHukum() {
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
              Dasar <br />
              <span className="not-italic font-bold text-gray-200 block mt-4 uppercase tracking-tighter">Hukum.</span>
            </h1>
          </motion.div>
        </div>
      </Section>

      {/* Content Section */}
      <Section className="pb-32">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Sidebar info */}
            <div className="lg:col-span-4 space-y-8">
              <div className="p-10 bg-gray-50 border border-primary/5 rounded-[48px]">
                <FileText size={40} className="text-accent mb-6" />
                <h3 className="text-2xl font-serif italic font-bold text-primary mb-4">Legal Foundation</h3>
                <p className="text-primary/60 text-sm leading-relaxed">
                  Seluruh operasional Badan Pengelola Usaha Universitas Negeri Jakarta didasarkan pada payung hukum yang sah dan transparan untuk menjamin akuntabilitas pengelolaan.
                </p>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-8">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white border-2 border-primary/5 rounded-[64px] p-8 md:p-16 shadow-sm hover:shadow-xl transition-all duration-700"
              >
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12 border-b border-primary/5 pb-12">
                  <div>
                    <h2 className="text-3xl md:text-5xl font-serif italic font-bold text-primary mb-4">Peraturan Rektor</h2>
                    <p className="text-accent font-bold tracking-[0.2em] text-xs uppercase">Regulation No. 10 / 2020</p>
                  </div>
                  <button className="flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-full font-bold text-sm tracking-widest uppercase hover:bg-accent transition-colors group">
                    Lihat PDF <ExternalLink size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </div>

                <div className="space-y-8">
                  <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center shrink-0">
                      <span className="text-accent font-black text-xl">01</span>
                    </div>
                    <div>
                      <p className="text-xl md:text-2xl text-primary font-medium leading-relaxed">
                        MENGACU PADA <span className="text-accent italic">PASAL 4 PERTOR NO 10</span> TENTANG BPU TAHUN 2020
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-12 p-8 bg-primary/5 rounded-[32px] border border-dashed border-primary/20">
                    <p className="text-sm text-primary/70 leading-relaxed italic">
                      "Peraturan ini menjadi landasan utama bagi BPU UNJ dalam menjalankan fungsinya sebagai pengelola aset dan unit bisnis di lingkungan Universitas Negeri Jakarta, memastikan setiap langkah strategis selaras dengan visi universitas."
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </Section>

      <Footer />
    </main>
  );
}
