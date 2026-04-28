"use client";

import { motion } from 'motion/react';
import { Section } from '../../../../components/ui/Layout';
import { Navbar } from '../../../../components/Navbar';
import { Footer } from '../../../../components/Footer';
import { ArrowLeft, Users, Clock, Calendar, Info } from 'lucide-react';
import Link from 'next/link';

export default function RuangFairPlayPage() {
  return (
    <main className="min-h-screen bg-white selection:bg-accent selection:text-white">
      <Navbar />
      
      {/* Hero Section */}
      <Section className="pt-32 md:pt-48 pb-20">
        <div className="max-w-4xl">
          <Link href="/gor-unj/lantai-01" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-accent mb-12 hover:gap-4 transition-all group">
            <ArrowLeft size={16} /> Kembali ke Lantai 01
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-8xl font-serif italic text-primary leading-tight mb-8 tracking-tight">
              Ruang <br />
              <span className="not-italic font-bold text-accent uppercase tracking-tighter">Fair Play.</span>
            </h1>
            
            <div className="flex flex-wrap gap-8 items-center border-t border-b border-primary/5 py-8 mb-12">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center text-accent">
                  <Users size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-primary/40">Kapasitas</p>
                  <p className="font-bold text-primary">10 – 20 Orang</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center text-accent">
                  <Clock size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-primary/40">Durasi Sewa</p>
                  <p className="font-bold text-primary">4 / 8 Jam</p>
                </div>
              </div>
            </div>

            <p className="text-xl md:text-2xl text-primary/70 leading-relaxed font-medium">
              Dirancang sebagai ruang serbaguna untuk rapat, pertemuan, dan acara lainnya. Dengan suasana nyaman dan fasilitas modern, ruang ini cocok untuk diskusi kelompok, presentasi, serta kegiatan kolaboratif lainnya.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Content Section */}
      <Section className="pb-32 bg-gray-50/50">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start max-w-7xl mx-auto">
          
          {/* Left Side - Visual Placeholder & Description */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:col-span-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="h-[400px] md:h-full rounded-[48px] overflow-hidden border-8 border-white shadow-2xl relative group">
                <img 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop" 
                  alt="Ruang Rapat 1" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors" />
              </div>
              <div className="h-[400px] rounded-[48px] overflow-hidden border-8 border-white shadow-2xl relative group">
                <img 
                  src="https://images.unsplash.com/photo-1517502884422-41eaead166d4?q=80&w=800&auto=format&fit=crop" 
                  alt="Ruang Rapat 2" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors" />
              </div>
            </div>

            <div className="bg-white p-12 rounded-[64px] shadow-2xl relative overflow-hidden mb-16">
              <div className="absolute top-0 right-0 w-96 h-96 bg-accent opacity-5 rounded-full blur-[100px] -mr-48 -mt-48" />
              <div className="relative z-10">
                 <h2 className="text-3xl font-serif italic text-primary mb-8">Tentang Ruangan</h2>
                 <div className="prose prose-xl max-w-none text-primary/60 leading-relaxed">
                   <p>
                     Mendukung terciptanya lingkungan yang kondusif bagi produktivitas dan kerjasama, Ruang Fair Play dilengkapi dengan infrastruktur pendukung pertemuan yang esensial. Pengaturan kursi yang fleksibel memungkinkan ruangan ini beradaptasi dengan berbagai jenis agenda pertemuan Anda.
                   </p>
                 </div>
              </div>
            </div>
          </motion.div>

          {/* Pricing Table */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="lg:col-span-7"
          >
            <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-accent mb-8">Tarif Sewa dan Penggunaan Layanan</h3>
            <div className="bg-primary rounded-[48px] overflow-hidden shadow-2xl">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-white/5 border-b border-white/10">
                    <th className="px-10 py-6 text-white text-xs font-black uppercase tracking-widest">Durasi</th>
                    <th className="px-10 py-6 text-white text-xs font-black uppercase tracking-widest">Kategori</th>
                    <th className="px-10 py-6 text-white text-xs font-black uppercase tracking-widest text-right">Harga</th>
                  </tr>
                </thead>
                <tbody className="text-white/80">
                  <tr className="border-b border-white/5">
                    <td rowSpan={2} className="px-10 py-8 font-bold border-r border-white/5">4 Jam</td>
                    <td className="px-10 py-4 font-medium italic">Internal</td>
                    <td className="px-10 py-4 font-bold text-accent text-right">Rp. 280.000</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="px-10 py-4 font-medium italic">Eksternal</td>
                    <td className="px-10 py-4 font-bold text-accent text-right">Rp. 450.000</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td rowSpan={2} className="px-10 py-8 font-bold border-r border-white/5">8 Jam</td>
                    <td className="px-10 py-4 font-medium italic">Internal</td>
                    <td className="px-10 py-4 font-bold text-accent text-right">Rp. 550.000</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="px-10 py-4 font-medium italic">Eksternal</td>
                    <td className="px-10 py-4 font-bold text-accent text-right">Rp. 810.000</td>
                  </tr>
                </tbody>
              </table>
              <div className="bg-white/5 p-6 flex items-center justify-center gap-3">
                <Info size={16} className="text-accent" />
                <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest">*Harga Dapat Berubah Sewaktu-Waktu</p>
              </div>
            </div>
          </motion.div>

          {/* Booking Info */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:col-span-5"
          >
            <div className="bg-accent p-12 rounded-[48px] text-primary h-full flex flex-col justify-between">
              <div>
                <Calendar size={48} className="mb-8 opacity-20" />
                <h4 className="text-3xl font-serif italic font-bold mb-4">Pemesanan Mudah & Cepat.</h4>
                <p className="font-medium leading-relaxed mb-12">
                  Pastikan ketersediaan ruangan untuk jadwal Anda. Tim kami siap membantu proses reservasi dan persiapan teknis.
                </p>
              </div>
              <div className="space-y-4">
                <p className="text-[10px] font-black uppercase tracking-widest opacity-40">Klik Tombol Dibawah untuk Melihat Jadwal dan Pemesanan</p>
                <Link href="/kontak" className="block w-full bg-primary text-white py-5 rounded-full text-center font-bold uppercase tracking-widest text-xs hover:shadow-2xl transition-all">
                  Lihat Jadwal & Pesan
                </Link>
              </div>
            </div>
          </motion.div>

        </div>
      </Section>

      <Footer />
    </main>
  );
}
