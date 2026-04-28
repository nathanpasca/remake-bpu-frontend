import { motion } from 'motion/react';
import { Section, Button } from './ui/Layout';
import { ArrowRight } from 'lucide-react';

const ASSETS = [
  {
    id: 1,
    category: "GOR (Gedung Olahraga)",
    name: "GOR Indoor UNJ Kampus B",
    description: "Multipurpose sports complex suitable for national tournaments and large-scale university events.",
    capacity: "3,000 Pax",
    layout: "Tribune & Arena",
    status: "Available",
    imageUrl: "https://images.unsplash.com/photo-1574629810360-7efbb1925536?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 2,
    category: "Asrama Mahasiswa",
    name: "Asrama Mahasiswa Kampus A",
    description: "Comfortable and secure residential facility equipped with study lounges and high-speed internet.",
    capacity: "2 Persons / Room",
    layout: "Standard Twin Bed",
    status: "Limited",
    imageUrl: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 3,
    category: "Ruang Sidang & Aula",
    name: "Aula Latief Hendraningrat",
    description: "Prestigious multipurpose hall perfect for graduations, international seminars, and banquets.",
    capacity: "800 Pax",
    layout: "Theater / Banquet",
    status: "Available",
    imageUrl: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 4,
    category: "Area Terbuka",
    name: "Plaza Terbuka UNJ",
    description: "Spacious open-air plaza designed for outdoor exhibitions, cultural festivals, and student gatherings.",
    capacity: "1,500 Pax",
    layout: "Open Space",
    status: "Available",
    imageUrl: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=1000&auto=format&fit=crop"
  }
];

export const AssetGrid = () => {
  return (
    <Section id="assets">
      <div className="mb-20">
        <div className="max-w-4xl">
          <h2 className="text-5xl md:text-8xl font-serif italic font-bold text-primary mb-10 leading-[0.9] tracking-tight">
            Unit Bisnis <br />
            <span className="not-italic text-gray-200 uppercase tracking-tighter">Kami.</span>
          </h2>
          <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start">
            <div className="w-16 h-[1.5px] bg-accent mt-3 md:mt-4 shrink-0 hidden md:block" />
            <p className="text-primary/70 text-lg md:text-xl leading-relaxed max-w-2xl font-medium">
              Badan Pengelola Usaha (BPU) UNJ memiliki peran penting dalam mengelola dan mengembangkan unit-unit usaha di lingkungan Universitas Negeri Jakarta. Tujuan utama BPU UNJ adalah untuk meningkatkan kemandirian finansial universitas dan memberikan kontribusi positif bagi civitas akademika. Berikut adalah beberapa unit bisnis BPU UNJ:
            </p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-0 border border-primary/10">
        {ASSETS.map((asset, i) => (
          <motion.div
            key={asset.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className={`group p-8 border-primary/10 ${i % 2 === 0 ? 'md:border-r' : ''} border-b hover:bg-primary/5 transition-colors`}
          >
            <div className="relative aspect-video overflow-hidden mb-8 bg-gray-50 border border-primary/5">
              <img
                src={asset.imageUrl}
                alt={asset.name}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4">
                <span className={`px-3 py-1 text-[10px] font-bold uppercase tracking-widest ${asset.status === 'Available' ? 'bg-primary text-white' : 'bg-accent text-primary'}`}>
                  {asset.status}
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div>
                <span className="text-[10px] font-bold text-accent uppercase tracking-widest">{asset.category}</span>
                <h3 className="text-3xl font-serif italic text-primary pr-8 mt-2">{asset.name}</h3>
                <p className="text-sm text-primary/60 mt-4 leading-relaxed font-medium line-clamp-2">{asset.description}</p>
              </div>

              <div className="grid grid-cols-2 gap-8 border-t border-primary/5 pt-8">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-primary/30 font-bold mb-2">Capacity</p>
                  <p className="font-bold text-primary tracking-tight">{asset.capacity}</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-primary/30 font-bold mb-2">Layout</p>
                  <p className="font-bold text-primary tracking-tight">{asset.layout}</p>
                </div>
              </div>

              <div className="flex justify-between items-center opacity-40 group-hover:opacity-100 transition-opacity mt-2">
                <span className="text-xs font-mono uppercase tracking-widest">Inquiry Details</span>
                <ArrowRight size={16} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-24 p-12 md:p-20 bg-primary rounded-[48px] text-white flex flex-col md:flex-row items-center justify-between gap-12 overflow-hidden relative"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[120px] -mr-48 -mt-48" />
        <div className="max-w-xl relative z-10">
          <h3 className="text-4xl md:text-6xl font-serif italic mb-6 leading-tight">
            Lihat Semua <br /> <span className="not-italic text-accent">Unit Bisnis Kami.</span>
          </h3>
          <p className="text-white/60 text-lg leading-relaxed">
            Temukan berbagai unit bisnis lainnya yang kami kelola untuk mendukung kebutuhan Anda di lingkungan UNJ.
          </p>
        </div>
        <Button size="lg" className="px-12 py-8 text-lg font-bold group bg-white text-primary hover:bg-accent hover:text-primary transition-all relative z-10 w-full md:w-auto">
          Eksplor Sekarang
          <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
        </Button>
      </motion.div>
    </Section>
  );
};
