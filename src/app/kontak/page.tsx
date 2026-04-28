"use client";

import { motion } from 'motion/react';
import { Section } from '../../components/ui/Layout';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { ArrowLeft, Mail, Phone, MapPin, Send, MessageSquare, Globe, Clock } from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
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
              Kontak <br />
              <span className="not-italic font-bold text-accent block mt-4 uppercase tracking-tighter">Kami.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-primary/80 leading-relaxed font-medium max-w-2xl">
              Kami siap mendengarkan kebutuhan Anda. Silakan hubungi tim kami untuk konsultasi, kerjasama, atau informasi lebih lanjut.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Main Content */}
      <Section className="pb-32 bg-gray-50/50">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start max-w-7xl mx-auto">
          
          {/* Left Side - Info Cards */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
              <ContactCard 
                icon={<MapPin className="text-accent" />}
                title="Lokasi"
                desc="Gedung Sertifikasi Guru Lt. 9, Kampus A UNJ, Jl. Rawamangun Muka, Jakarta Timur"
              />
              <ContactCard 
                icon={<Phone className="text-accent" />}
                title="Telepon"
                desc="+62 21 489 0013"
              />
              <ContactCard 
                icon={<Mail className="text-accent" />}
                title="Email Support"
                desc="bpu@unj.ac.id"
              />
               <ContactCard 
                icon={<Clock className="text-accent" />}
                title="Jam Operasional"
                desc="Senin - Jumat: 08:00 - 16:00 WIB"
              />
            </div>

            <div className="p-10 bg-primary rounded-[48px] text-white overflow-hidden relative group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent opacity-20 rounded-full blur-3xl -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-1000" />
              <Globe className="mb-6 opacity-20" size={48} />
              <h4 className="text-2xl font-serif italic mb-4">Butuh Respon Cepat?</h4>
              <p className="text-white/70 mb-8 leading-relaxed">
                Tim administrasi kami akan menanggapi permohonan Anda dalam waktu kurang dari 24 jam kerja.
              </p>
              <button className="bg-accent text-primary px-8 py-4 rounded-full font-bold text-xs uppercase tracking-widest hover:shadow-xl transition-all">
                Hubungi via WhatsApp
              </button>
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-white border-2 border-primary/5 rounded-[64px] p-8 md:p-16 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl -mr-16 -mt-16" />
            
            <div className="relative z-10 space-y-12">
              <div className="flex gap-4 items-center">
                <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-white">
                  <MessageSquare size={20} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary">Kirim Pesan</h3>
                  <p className="text-primary/40 text-sm">Isi formulir di bawah ini dengan lengkap.</p>
                </div>
              </div>

              <form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-primary/40 ml-4">Nama Lengkap</label>
                  <input 
                    type="text" 
                    placeholder="Contoh: John Doe"
                    className="w-full bg-gray-50 border-none rounded-[20px] py-5 px-8 text-primary focus:ring-2 focus:ring-accent transition-all outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-primary/40 ml-4">Alamat Email</label>
                  <input 
                    type="email" 
                    placeholder="email@anda.com"
                    className="w-full bg-gray-50 border-none rounded-[20px] py-5 px-8 text-primary focus:ring-2 focus:ring-accent transition-all outline-none"
                  />
                </div>

                <div className="col-span-full space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-primary/40 ml-4">Subjek Pesan</label>
                  <select className="w-full bg-gray-50 border-none rounded-[20px] py-5 px-8 text-primary focus:ring-2 focus:ring-accent transition-all outline-none appearance-none">
                    <option>Sewa Fasilitas</option>
                    <option>Kerjasama Strategis</option>
                    <option>Informasi Umum</option>
                    <option>Lainnya</option>
                  </select>
                </div>
                
                <div className="col-span-full space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-primary/40 ml-4">Pesan Anda</label>
                  <textarea 
                    rows={5}
                    placeholder="Tuliskan pesan Anda secara detail..."
                    className="w-full bg-gray-50 border-none rounded-[32px] py-6 px-8 text-primary focus:ring-2 focus:ring-accent transition-all outline-none resize-none"
                  />
                </div>

                <div className="col-span-full pt-4">
                  <button className="w-full bg-primary text-white py-6 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-accent transition-all duration-300 flex items-center justify-center gap-4 group shadow-xl shadow-primary/20">
                    Kirim Pesan <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </div>
              </form>
            </div>
          </motion.div>

        </div>
      </Section>

      {/* Map Placeholder */}
      <Section className="py-24">
        <div className="w-full h-[500px] bg-gray-100 rounded-[64px] border-8 border-primary/5 overflow-hidden flex items-center justify-center relative grayscale">
           <MapPin size={48} className="text-primary/20 absolute z-0" />
           <p className="relative z-10 text-primary/40 font-bold uppercase tracking-widest text-xs">Peta Lokasi Kampus A UNJ</p>
           {/* In a real scenario, you'd embed a Google Map here */}
           <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center opacity-20" />
        </div>
      </Section>

      <Footer />
    </main>
  );
}

const ContactCard = ({ icon, title, desc }: any) => (
  <div className="bg-white p-8 rounded-[40px] border border-primary/5 hover:border-accent/30 hover:shadow-xl transition-all duration-500 group">
    <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors">
      {icon}
    </div>
    <p className="text-[10px] font-black uppercase tracking-widest text-primary/30 mb-2">{title}</p>
    <p className="text-primary font-bold leading-relaxed">{desc}</p>
  </div>
);
