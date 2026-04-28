import { motion } from 'motion/react';
import { Section, Button } from './ui/Layout';
import { Layers, Zap, Globe, Smartphone, Bell, HardDrive, ShieldCheck, Clock } from 'lucide-react';

export const Features = () => {
  return (
    <Section className="relative">
      <div className="grid lg:grid-cols-2 gap-24 items-center">
        <div>
          <div className="inline-block px-4 py-1 border border-accent text-primary text-[10px] font-bold uppercase tracking-[0.4em] mb-8">
            INSTITUTIONAL HUB
          </div>
          <h2 className="text-5xl md:text-8xl font-serif italic leading-[0.9] text-primary mb-12 tracking-tight">
            Intelligent <br />
            <span className="not-italic font-bold text-gray-200">Management.</span>
          </h2>

          <div className="grid sm:grid-cols-2 gap-12">
            <Feature icon={<Zap size={20} />} title="Seamless Booking" desc="Frictionless reservation flow designed for academic events." />
            <Feature icon={<ShieldCheck size={20} />} title="Overlap Control" desc="Automated systems preventing scheduling conflicts." />
            <Feature icon={<Clock size={20} />} title="Real-time Status" desc="Live dashboard of facility occupancy and maintenance." />
            <Feature icon={<Smartphone size={20} />} title="Mobile Access" desc="Manage bookings and entry permissions from your device." />
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-primary/5 rounded-2xl transform rotate-1" />
          <div className="relative p-8 md:p-12 bg-white border border-primary/10 shadow-2xl">
            <div className="space-y-6">
              <div className="flex items-center gap-6 p-6 bg-primary text-white">
                <div className="w-14 h-14 bg-accent flex items-center justify-center text-primary">
                  <Globe size={28} />
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-xs mb-1">Transit Network</h4>
                  <p className="font-serif italic text-xl">Cross-Campus Logistics</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 bg-gray-50 border border-primary/5">
                  <span className="text-[10px] font-mono opacity-40">NODE_01</span>
                  <h5 className="font-bold text-primary mt-2 uppercase text-xs">Active Storage</h5>
                </div>
                <div className="p-6 bg-gray-50 border border-primary/5">
                  <span className="text-[10px] font-mono opacity-40">NODE_12</span>
                  <h5 className="font-bold text-primary mt-2 uppercase text-xs">Edge Delivery</h5>
                </div>
              </div>

              <div className="p-8 border-2 border-dashed border-primary/20 text-center">
                <div className="text-[10px] font-bold text-accent mb-4 tracking-[0.3em] uppercase">Coming Fall 2026</div>
                <h3 className="text-2xl font-serif italic text-primary mb-2">Predictive Health</h3>
                <p className="text-xs text-primary/50 uppercase font-bold">AI Fault Detection</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

const Feature = ({ icon, title, desc }: any) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="flex flex-col gap-4 group"
  >
    <div className="w-10 h-10 bg-primary text-accent flex items-center justify-center group-hover:shadow-[4px_4px_0px_0px_rgba(255,199,44,1)] transition-all">
      {icon}
    </div>
    <h3 className="text-lg font-bold text-primary uppercase tracking-tight">{title}</h3>
    <p className="text-sm text-primary/60 leading-relaxed font-medium">{desc}</p>
    <div className="w-8 h-[2px] bg-accent/20 group-hover:w-full transition-all duration-300" />
  </motion.div>
);
