"use client";

import { motion } from 'motion/react';
import { Section } from '../../components/ui/Layout';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { ArrowLeft, Mail, Lock, LogIn, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Login() {
  return (
    <main className="min-h-screen bg-white selection:bg-accent selection:text-white flex flex-col">
      <Navbar />
      
      <div className="flex-grow flex items-center justify-center py-24 px-6">
        <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Welcome Back Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden lg:block space-y-8"
          >
            <h1 className="text-6xl font-serif italic leading-tight text-primary">
              Selamat <br />
              <span className="not-italic text-accent uppercase tracking-tighter">Datang Kembali.</span>
            </h1>
            <p className="text-xl text-primary/60 leading-relaxed max-w-md">
              Masuk ke akun Anda untuk mengelola aset, memantau kerjasama, dan mendapatkan informasi terbaru seputar unit bisnis UNJ.
            </p>
            <Link href="/" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-accent hover:gap-4 transition-all group">
              <ArrowLeft size={16} /> Kembali ke Beranda
            </Link>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white border-2 border-primary/5 rounded-[64px] p-8 md:p-16 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl -mr-16 -mt-16" />
            
            <div className="relative z-10">
              <h2 className="text-4xl font-bold text-primary mb-2">Login.</h2>
              <p className="text-primary/50 text-sm mb-12">Silakan masuk dengan email dan kata sandi Anda.</p>

              <form className="space-y-6">
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
                  <div className="flex justify-between items-center px-4">
                    <label className="text-[10px] font-black uppercase tracking-widest text-primary/40">Kata Sandi</label>
                    <Link href="#" className="text-[10px] font-bold uppercase tracking-widest text-accent hover:underline">Lupa Sandi?</Link>
                  </div>
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
                  Masuk Sekarang <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>

              <p className="text-center mt-12 text-sm text-primary/40 leading-relaxed font-medium">
                Belum memiliki akun? <br />
                <Link href="/register" className="text-accent font-bold hover:underline">Daftar sekarang</Link>
              </p>
            </div>
          </motion.div>

        </div>
      </div>

      <Footer />
    </main>
  );
}
