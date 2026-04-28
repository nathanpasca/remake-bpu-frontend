"use client";

import { motion } from 'motion/react';
import { Section } from '../../components/ui/Layout';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { ArrowLeft, Mail, Lock, User, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Register() {
  return (
    <main className="min-h-screen bg-white selection:bg-accent selection:text-white flex flex-col">
      <Navbar />
      
      <div className="flex-grow flex items-center justify-center py-24 px-6">
        <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Welcome Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden lg:block space-y-8"
          >
            <h1 className="text-6xl font-serif italic leading-tight text-primary">
              Mulai <br />
              <span className="not-italic text-accent uppercase tracking-tighter">Perjalanan Anda.</span>
            </h1>
            <p className="text-xl text-primary/60 leading-relaxed max-w-md">
              Bergabunglah dengan ekosistem bisnis Universitas Negeri Jakarta dan temukan peluang kolaborasi terbaik.
            </p>
            <div className="pt-8 flex gap-4">
               {[1, 2, 3].map((i) => (
                 <div key={i} className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center">
                   <div className="w-2 h-2 rounded-full bg-accent" />
                 </div>
               ))}
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white border-2 border-primary/5 rounded-[64px] p-8 md:p-16 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl -mr-16 -mt-16" />
            
            <div className="relative z-10">
              <h2 className="text-4xl font-bold text-primary mb-2">Registrasi.</h2>
              <p className="text-primary/50 text-sm mb-12">Silakan isi data diri Anda untuk mendaftar.</p>

              <form className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-primary/40 ml-4">Nama Lengkap</label>
                  <div className="relative">
                    <User className="absolute left-6 top-1/2 -translate-y-1/2 text-primary/20" size={20} />
                    <input 
                      type="text" 
                      placeholder="John Doe"
                      className="w-full bg-gray-50 border-none rounded-full py-5 pl-14 pr-8 text-primary focus:ring-2 focus:ring-accent transition-all outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-primary/40 ml-4">Alamat Email</label>
                  <div className="relative">
                    <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-primary/20" size={20} />
                    <input 
                      type="email" 
                      placeholder="email@universitas.ac.id"
                      className="w-full bg-gray-50 border-none rounded-full py-5 pl-14 pr-8 text-primary focus:ring-2 focus:ring-accent transition-all outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-primary/40 ml-4">Kata Sandi</label>
                  <div className="relative">
                    <Lock className="absolute left-6 top-1/2 -translate-y-1/2 text-primary/20" size={20} />
                    <input 
                      type="password" 
                      placeholder="••••••••"
                      className="w-full bg-gray-50 border-none rounded-full py-5 pl-14 pr-8 text-primary focus:ring-2 focus:ring-accent transition-all outline-none"
                    />
                  </div>
                </div>

                <button className="w-full bg-primary text-white py-5 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-accent transition-all duration-300 flex items-center justify-center gap-3 group mt-8">
                  Daftar Sekarang <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>

              <p className="text-center mt-12 text-sm text-primary/40 leading-relaxed font-medium">
                Sudah memiliki akun? <br />
                <Link href="/login" className="text-accent font-bold hover:underline">Masuk di sini</Link>
              </p>
            </div>
          </motion.div>

        </div>
      </div>

      <Footer />
    </main>
  );
}
