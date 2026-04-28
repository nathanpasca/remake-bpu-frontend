"use client";

import { motion } from 'motion/react';
import { Section } from '../../components/ui/Layout';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { 
  ArrowLeft, 
  Target, 
  Rocket, 
  Users, 
  TrendingUp, 
  Leaf, 
  ShieldCheck, 
  GraduationCap 
} from 'lucide-react';
import Link from 'next/link';

const MISSIONS = [
  {
    icon: <Leaf size={32} className="text-accent" />,
    title: "Kontribusi Sosial dan Lingkungan",
    desc: "Membangun usaha yang tidak hanya berorientasi pada profit, tetapi juga memberikan dampak positif bagi masyarakat dan lingkungan sekitar melalui program-program sosial dan keberlanjutan."
  },
  {
    icon: <TrendingUp size={32} className="text-accent" />,
    title: "Optimalisasi Aset",
    desc: "Mengelola dan mengoptimalkan aset Universitas Negeri Jakarta dengan efektif dan efisien untuk meningkatkan pendapatan dan mendukung kegiatan akademik."
  },
  {
    icon: <Users size={32} className="text-accent" />,
    title: "Kolaborasi Strategis",
    desc: "Membina kemitraan strategis dengan berbagai pihak, baik dari sektor industri, pemerintah, maupun komunitas, untuk menciptakan sinergi yang menguntungkan dan berkelanjutan."
  },
  {
    icon: <Rocket size={32} className="text-accent" />,
    title: "Inovasi dan Kewirausahaan",
    desc: "Mendorong dan mendukung inovasi serta pengembangan kewirausahaan di lingkungan universitas melalui program-program bisnis yang kreatif dan berdaya saing tinggi."
  },
  {
    icon: <GraduationCap size={32} className="text-accent" />,
    title: "Pengembangan Sumber Daya Manusia",
    desc: "Meningkatkan kompetensi dan kapasitas sumber daya manusia di lingkungan universitas dalam bidang pengelolaan usaha dan kewirausahaan melalui pelatihan, workshop, dan program pengembangan lainnya."
  },
  {
    icon: <ShieldCheck size={32} className="text-accent" />,
    title: "Transparansi dan Akuntabilitas",
    desc: "Menerapkan prinsip transparansi dan akuntabilitas dalam setiap kegiatan pengelolaan usaha untuk memastikan tata kelola yang baik dan dapat dipertanggungjawabkan."
  }
];

export default function VisiMisi() {
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
              Visi & <br />
              <span className="not-italic font-bold text-gray-200 block mt-4 uppercase tracking-tighter">Misi Kami.</span>
            </h1>
          </motion.div>
        </div>
      </Section>

      {/* Vision Section */}
      <Section className="py-12">
        <div className="bg-primary text-white py-16 rounded-[48px] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[100px] -mr-32 -mt-32" />
          <div className="relative z-10 max-w-2xl mx-auto text-center px-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-6 text-primary">
                <Target size={24} />
              </div>
              <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-accent mb-4">Our Vision</h2>
              <p className="text-xl md:text-3xl font-serif italic leading-relaxed text-white/90">
                "Menjadi pionir dalam inovasi pengelolaan aset dan pengembangan usaha melalui kontribusi signifikan terhadap pendanaan Universitas Negeri Jakarta untuk menciptakan nilai tambah yang berkelanjutan, serta mendukung tri dharma pendidikan."
              </p>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Mission Section */}
      <Section className="py-32">
        <div className="mb-20">
          <div className="max-w-4xl">
            <h2 className="text-4xl md:text-6xl font-serif italic font-bold text-primary mb-10 leading-[0.9] tracking-tight">
              Misi <br />
              <span className="not-italic text-gray-200 uppercase tracking-tighter">Strategis.</span>
            </h2>
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-16 h-[1.5px] bg-accent mt-4 shrink-0 hidden md:block" />
              <p className="text-xl text-primary/70 leading-relaxed font-medium">
                Langkah-langkah strategis yang kami ambil untuk mewujudkan visi dan memberikan dampak nyata bagi universitas.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MISSIONS.map((misi, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 bg-gray-50 border border-primary/5 rounded-[48px] hover:bg-white hover:shadow-2xl hover:border-accent/20 transition-all duration-500 group"
            >
              <div className="mb-8 p-4 bg-white rounded-3xl w-fit group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                {misi.icon}
              </div>
              <h3 className="text-xl font-bold text-primary mb-4 leading-tight">
                {misi.title}
              </h3>
              <p className="text-primary/60 text-sm leading-relaxed">
                {misi.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Footer />
    </main>
  );
}
