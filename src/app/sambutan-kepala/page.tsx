"use client";

import { motion } from 'motion/react';
import { Section } from '../../components/ui/Layout';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { ArrowLeft, Quote } from 'lucide-react';
import Link from 'next/link';

export default function SambutanKepala() {
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
              Sambutan <br />
              <span className="not-italic font-bold text-gray-200 block mt-4 uppercase tracking-tighter">Kepala BPU.</span>
            </h1>
          </motion.div>
        </div>
      </Section>

      {/* Content Section */}
      <Section className="pb-32">
        <div className="max-w-4xl mx-auto space-y-20">
          
          {/* Photo Section */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[16/9] md:aspect-[21/9] rounded-[64px] overflow-hidden bg-gray-100 border-8 border-primary/5 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1200&auto=format&fit=crop" 
                alt="Dr. Widya Parimita, SE., M.P.A" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </motion.div>

          {/* Text Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="relative text-center">
              <Quote size={80} className="text-accent/10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10" />
              <p className="text-2xl md:text-4xl text-primary leading-relaxed font-serif italic max-w-3xl mx-auto">
                "Sebagai Kepala Badan Pengelola Usaha di Universitas, saya ingin menyampaikan salam hangat kepada seluruh civitas akademika dan mitra kerja Universitas Negeri Jakarta."
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-primary/70 text-lg leading-relaxed">
              <div className="space-y-6">
                <p>
                  Badan Pengelola Usaha berkomitmen untuk terus meningkatkan kualitas layanan dan berkontribusi dalam mendukung keberhasilan Universitas Negeri Jakarta sebagai lembaga pendidikan dan riset yang unggul. Dalam menjalankan tugas, kami akan terus berupaya untuk memastikan efisiensi, transparansi, dan akuntabilitas dalam pengelolaan sumber daya yang kami miliki.
                </p>
                <p>
                  Kami juga akan terus membuka diri terhadap inovasi dan kemitraan yang dapat memperkuat ekosistem universitas serta memberikan dampak positif bagi masyarakat. Kami mengundang semua pihak untuk berkolaborasi dengan kami dalam menciptakan lingkungan yang kondusif untuk pengembangan ilmu pengetahuan, teknologi, dan inovasi.
                </p>
              </div>
              <div className="space-y-6">
                <p>
                  Bersama-sama, mari kita terus berusaha untuk mencapai prestasi yang lebih gemilang dan memberikan manfaat yang nyata bagi bangsa dan negara. Akhir kata, kami mengucapkan terima kasih atas kunjungan dan dukungan Anda. 
                </p>
                <p>
                  Melalui website ini, Anda dapat menemukan informasi lengkap tentang berbagai program dan layanan yang kami tawarkan, berita terbaru, serta kesempatan untuk berkolaborasi dengan kami. Selamat menjelajahi situs kami, semoga informasi yang kami sajikan dapat memberikan manfaat bagi Anda.
                </p>
              </div>
            </div>

            <div className="pt-16 border-t border-primary/5 mt-16 text-center">
              <p className="text-accent font-bold tracking-[0.2em] text-xs uppercase mb-6">Salam Hangat,</p>
              <h3 className="text-3xl md:text-5xl font-serif italic font-bold text-primary mb-2">
                Dr. Widya Parimita, SE., M.P.A
              </h3>
              <p className="text-primary/50 font-bold uppercase tracking-widest text-sm">
                Kepala Badan Pengelola Usaha <br /> Universitas Negeri Jakarta
              </p>
            </div>
          </motion.div>
        </div>
      </Section>

      <Footer />
    </main>
  );
}
