"use client";

import { motion } from 'motion/react';
import { Section } from '../../../components/ui/Layout';
import { Navbar } from '../../../components/Navbar';
import { Footer } from '../../../components/Footer';
import { ArrowLeft, Calendar, User, Tag, Share2 } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

const ACTIVITIES = [
  {
    id: 4,
    title: "Pelatihan Manajemen Keuangan Kampus",
    date: "10 Mei 2024",
    category: "Training",
    author: "Tim BPU UNJ",
    desc: "Membekali pengelola unit bisnis dengan keterampilan manajemen keuangan yang akuntabel dan modern.",
    content: "Badan Pengelola Usaha (BPU) Universitas Negeri Jakarta menyelenggarakan pelatihan intensif mengenai manajemen keuangan bagi seluruh pengelola unit bisnis di lingkungan kampus. Pelatihan ini bertujuan untuk meningkatkan transparansi dan akuntabilitas dalam pengelolaan dana usaha universitas. Materi pelatihan mencakup penyusunan anggaran, pelaporan keuangan berbasis digital, hingga strategi penghematan operasional tanpa mengurangi kualitas layanan.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Sinergi BPU UNJ dengan Industri Eksternal",
    date: "2 Mei 2024",
    category: "Partnership",
    author: "Humas UNJ",
    desc: "FGD bersama mitra industri untuk mengeksplorasi potensi kerjasama baru di tahun mendatang.",
    content: "Dalam upaya memperluas jaringan bisnis, BPU UNJ mengadakan Focus Group Discussion (FGD) dengan berbagai pimpinan industri terkemuka. Pertemuan ini membahas peluang kolaborasi strategis, mulai dari penyediaan fasilitas riset bersama hingga program inkubasi startup mahasiswa. Sinergi ini diharapkan dapat menciptakan aliran pendapatan baru yang berkelanjutan bagi universitas.",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32f7?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 1,
    title: "Workshop Pengembangan Unit Bisnis Strategis",
    date: "24 April 2024",
    category: "Development",
    author: "Tim BPU UNJ",
    desc: "Meningkatkan kapabilitas manajerial unit bisnis di lingkungan UNJ melalui sesi workshop intensif.",
    content: "Workshop ini diikuti oleh lebih dari 30 unit bisnis yang berada di bawah naungan UNJ. Fokus utama acara adalah bagaimana mengoptimalkan aset yang ada untuk mencapai profitabilitas maksimal. Peserta diajarkan metode Business Model Canvas (BMC) yang disesuaikan dengan konteks lembaga pendidikan tinggi.",
    image: "https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Penandatanganan MoU Kerjasama Fasilitas Kampus",
    date: "18 April 2024",
    category: "Partnership",
    author: "Legal UNJ",
    desc: "Memperluas jaringan kerjasama dengan mitra strategis untuk optimalisasi pemanfaatan aset universitas.",
    content: "Penandatanganan Memorandum of Understanding (MoU) ini menandai babak baru dalam pemanfaatan fasilitas kampus oleh pihak ketiga. Kerjasama ini mencakup penyewaan ruang serbaguna, pemanfaatan laboratorium untuk sertifikasi profesional, dan kerjasama branding di area strategis kampus.",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Peluncuran Program Inovasi Keuangan Universitas",
    date: "12 April 2024",
    category: "Innovation",
    author: "Direktur BPU",
    desc: "Implementasi sistem keuangan baru untuk mendukung transparansi dan akuntabilitas unit usaha.",
    content: "Sistem Manajemen Keuangan Terintegrasi (SMKT) resmi diluncurkan hari ini. Sistem berbasis cloud ini memungkinkan pemantauan real-time terhadap performa finansial setiap unit bisnis. Inovasi ini merupakan langkah besar BPU UNJ menuju transformasi digital yang menyeluruh.",
    image: "https://images.unsplash.com/photo-1454165833767-02664ce959d4?q=80&w=1200&auto=format&fit=crop"
  }
];

export default function ActivityDetail() {
  const params = useParams();
  const id = Number(params.id);
  
  const activity = ACTIVITIES.find(a => a.id === id) || ACTIVITIES[0];

  return (
    <main className="min-h-screen bg-white selection:bg-accent selection:text-white">
      <Navbar />
      
      {/* Hero Section */}
      <Section className="pt-32 md:pt-48 pb-10">
        <div className="max-w-4xl">
          <Link 
            href="/kegiatan" 
            className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-accent mb-12 hover:gap-4 transition-all group"
          >
            <ArrowLeft size={16} /> Kembali ke Kegiatan
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="px-4 py-1.5 bg-accent/10 rounded-full text-[10px] font-bold uppercase tracking-widest text-accent">
                {activity.category}
              </span>
              <div className="w-1.5 h-1.5 rounded-full bg-primary/20" />
              <div className="flex items-center gap-2 text-primary/40 text-[10px] font-black uppercase tracking-widest">
                <Calendar size={14} />
                {activity.date}
              </div>
            </div>
            
            <h1 className="text-4xl md:text-7xl font-serif italic text-primary leading-tight tracking-tight mb-12">
              {activity.title}
            </h1>
          </motion.div>
        </div>
      </Section>

      {/* Featured Image */}
      <Section className="pb-20">
         <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="aspect-[21/9] rounded-[48px] overflow-hidden border-8 border-primary/5 shadow-2xl relative"
          >
            <img 
              src={activity.image} 
              alt={activity.title}
              className="w-full h-full object-cover"
            />
          </motion.div>
      </Section>

      {/* Content Section */}
      <Section className="pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Metadata Sidebar */}
          <div className="lg:col-span-4 space-y-12">
            <div className="p-8 bg-gray-50 border border-primary/5 rounded-[40px] space-y-8">
              <div className="space-y-4">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/40">Ditulis Oleh</p>
                <div className="flex items-center gap-4 text-primary font-bold">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                    <User size={18} className="text-accent" />
                  </div>
                  {activity.author}
                </div>
              </div>
              
              <div className="space-y-4">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/40">Kategori</p>
                <div className="flex items-center gap-4 text-primary font-bold">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                    <Tag size={18} className="text-accent" />
                  </div>
                  {activity.category}
                </div>
              </div>

              <div className="pt-8 border-t border-primary/5">
                <button className="w-full flex items-center justify-center gap-3 bg-white border border-primary/10 text-primary font-bold py-4 rounded-full hover:bg-primary hover:text-white transition-all group">
                   Bagikan <Share2 size={18} className="group-hover:rotate-12 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          {/* Article Content */}
          <div className="lg:col-span-8">
            <div className="prose prose-xl prose-primary max-w-none">
              <p className="text-xl md:text-2xl text-primary font-serif italic leading-relaxed mb-10 border-l-4 border-accent pl-8">
                {activity.desc}
              </p>
              
              <div className="space-y-8 text-primary/70 text-lg leading-relaxed">
                <p>{activity.content}</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
                <p>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. Nulla facilisi etiam dignissim diam quis enim lobortis scelerisque.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Footer />
    </main>
  );
}
