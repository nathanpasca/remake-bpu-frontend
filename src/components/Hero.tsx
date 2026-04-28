import { motion } from 'motion/react';
import { Button, Section } from './ui/Layout';
import { ArrowRight, Box, Camera, Laptop, Music } from 'lucide-react';

export const Hero = () => {
  return (
    <Section className="pt-40 md:pt-56 pb-20 relative min-h-screen flex items-center">
      {/* Decorative background elements */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-accent/20 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 blur-[100px] rounded-full -z-10" />

      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <div className="absolute -left-12 top-0 h-full hidden xl:block">
            <div className="sticky top-40 [writing-mode:vertical-rl] rotate-180 text-[10px] uppercase tracking-[0.4em] font-bold text-primary/30 flex items-center gap-4">
              <span className="w-1 h-12 bg-primary/20" />
              EST. 2026 — CAMPUS INFRASTRUCTURE
            </div>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-serif italic leading-[1.1] md:leading-[0.9] text-primary mb-8 tracking-tight">
            Investing in Potential, <br />
            <span className="not-italic font-bold text-accent block mt-4 text-3xl md:text-6xl uppercase tracking-tighter">Through Business Excellence.</span>
          </h1>

          <p className="text-lg md:text-xl text-primary/70 max-w-lg mb-12 leading-relaxed">
            Mengelola Aset dan Pengembangan Usaha Universitas Negeri Jakarta
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-8">
            <Button variant="secondary" size="lg" className="w-full sm:w-auto">
              Browse Venues
            </Button>
            <div className="text-xs font-bold uppercase tracking-widest text-primary/50">
              Total Facilities:<br />
              <span className="text-accent text-sm">48 Locations</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateY: 10 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative hidden lg:block"
        >
          {/* Rotated Accent Card from Editorial Theme */}
          <div className="absolute -left-12 top-20 bg-accent p-8 w-72 shadow-2xl rotate-6 z-20">
            <div className="text-[10px] font-bold uppercase tracking-widest mb-1 opacity-60">Next Available</div>
            <div className="font-serif text-3xl italic mb-6 text-primary">Sony FX6 Cinema Kit</div>
            <div className="flex justify-between items-center border-t border-primary/10 pt-4">
              <span className="bg-primary/10 px-2 py-1 text-[10px] font-bold rounded uppercase text-primary">Studio 4</span>
              <span className="font-bold text-primary">2:00 PM</span>
            </div>
          </div>

          <div className="relative z-10 grid grid-cols-2 gap-4">
            <FeatureCard
              icon={<Box className="text-accent" size={32} />}
              title="GOR Indoor"
              desc="National Standard Arena"
              className="mt-12 bg-primary text-white border border-white/10"
            />
            <FeatureCard
              icon={<Music className="text-primary" size={32} />}
              title="Aula Latief"
              desc="Grand Ballroom & Hall"
              className="bg-white border border-primary/10"
            />
            <div className="absolute inset-0 bg-primary -z-10 rounded-3xl transform -rotate-1 scale-105 opacity-5" />
          </div>

          {/* Decorative floating shapes */}
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -top-10 -right-10 w-32 h-32 border-[20px] border-accent/20 rounded-full"
          />
        </motion.div>
      </div>
    </Section>
  );
};

const FeatureCard = ({ icon, title, desc, className }: any) => (
  <div className={`p-8 rounded-[32px] shadow-2xl transition-transform hover:-translate-y-2 duration-500 ${className}`}>
    <div className="mb-6">{icon}</div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-sm opacity-70 leading-relaxed font-medium">{desc}</p>
  </div>
);
