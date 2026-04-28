"use client";

import { ShoppingBag, Menu, X, ArrowRight, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from './ui/Layout';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navLinks = [
    { name: 'Beranda', href: '/' },
    { 
      name: 'Profil', 
      items: [
        { name: 'Tentang Kami', href: '/tentang-kami' },
        { name: 'Visi dan Misi', href: '/visi-dan-misi' },
        { name: 'Dasar Hukum', href: '/dasar-hukum' },
        { name: 'Sambutan Kepala BPU UNJ', href: '/sambutan-kepala' },
        { name: 'Struktur Organisasi', href: '#' },
      ]
    },
    { 
      name: 'Unit Bisnis', 
      href: '#',
      items: [
        { name: 'Pusat Bahasa UNJ', href: '#' },
        { name: 'Pusat Layanan Psikologi dan Bimbingan Konseling UNJ', href: '#' },
        { name: 'Pusat Teknologi, Informasi, dan Komunikasi UNJ', href: '#' },
        { name: 'Pusat Perpustakaan dan Kearsipan UNJ', href: '#' },
        { name: 'Poliklinik dan Layanan Kesehatan UNJ', href: '#' },
        { 
          name: 'Gedung Olahraga (GOR) UNJ', 
          href: '/gor-unj',
          subItems: [
            { name: 'Lantai 01 GOR UNJ', href: '/gor-unj/lantai-01' },
            { name: 'Lantai 02 GOR UNJ', href: '#' },
            { name: 'Aula dan Outdoor GOR UNJ', href: '#' },
            { name: 'Tambahan GOR UNJ', href: '#' },
          ]
        },
        { name: 'Arena Lapangan Olahraga UNJ', href: '#' },
        { 
          name: 'Area Terbuka, Ruang Potensial, dan Aula', 
          href: '/area-terbuka',
          subItems: [
            { name: 'Area Terbuka', href: '#' },
            { name: 'Ruang Potensial', href: '#' },
            { name: 'Aula', href: '#' },
            { name: 'Penggunaan Lahan', href: '#' },
          ]
        },
        { name: 'UNJ Press', href: '#' },
        { name: 'Lahan Kantin', href: '#' },
        { 
          name: 'Hunian', 
          href: '/hunian',
          subItems: [
            { name: 'Guest House', href: '#' },
            { name: 'Asrama', href: '#' },
            { name: 'UTC Hotel by Naraya', href: '#' },
          ]
        },
        { name: 'Laboratorium Fakultas/Prodi', href: '#' },
        { name: 'Kepakaran', href: '#' },
      ] 
    },
    { name: 'Kegiatan', href: '/kegiatan' },
    { name: 'Klien', href: '/klien' },
    { name: 'Kontak Kami', href: '/kontak' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b border-primary/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5 md:px-10 lg:px-12 xl:px-16">
        <div className="flex items-center">
          <div className="flex items-center gap-5 md:gap-8">
            <img 
              src="https://unj.ac.id/wp-content/uploads/2025/02/UNJ-LOGO-512-PX-1.png" 
              alt="UNJ Logo" 
              className="h-12 md:h-14 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
            <div className="w-px h-8 bg-primary/10 hidden md:block" />
            <img 
              src="/bpu_logo.png" 
              alt="BPU Logo" 
              className="h-8 md:h-10 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-8 xl:gap-10">
          {navLinks.map((link) => (
            <div 
              key={link.name} 
              className="relative group"
              onMouseEnter={() => link.items && setActiveDropdown(link.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <a
                href={link.href || '#'}
                className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-primary/60 hover:text-primary transition-colors py-2"
              >
                {link.name}
                {link.items && <ChevronDown size={12} className={`transition-transform duration-300 ${activeDropdown === link.name ? 'rotate-180' : ''}`} />}
              </a>

              {link.items && (
                <div className={`absolute top-full left-0 pt-2 transition-all duration-200 ${activeDropdown === link.name ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-2 pointer-events-none'}`}>
                  <div className={`bg-white border border-primary/10 shadow-2xl p-6 ${link.name === 'Unit Bisnis' ? 'min-w-[640px] grid grid-cols-2 gap-x-8' : 'min-w-[280px]'}`}>
                    {link.items.map((subItem: any) => (
                      <div key={subItem.name} className="mb-4 last:mb-0">
                        <a
                          href={subItem.href}
                          className="block py-2 text-[11px] font-black text-primary/80 hover:text-accent transition-all uppercase tracking-widest border-b border-primary/5 mb-2"
                        >
                          {subItem.name}
                        </a>
                        {subItem.subItems && (
                          <div className="pl-4 space-y-1">
                            {subItem.subItems.map((nested: any) => (
                              <a
                                key={nested.name}
                                href={nested.href}
                                className="block py-1 text-[10px] font-bold text-primary/40 hover:text-accent transition-all uppercase tracking-tighter"
                              >
                                — {nested.name}
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a href="/login">
            <Button size="sm" className="px-8 font-bold tracking-wider">
              LOGIN PORTAL
            </Button>
          </a>
        </div>

        <button className="lg:hidden text-primary" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full bg-white border-b border-primary/10 overflow-hidden lg:hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.items ? (
                    <div className="space-y-3">
                      <div className="text-xs font-black uppercase tracking-widest text-primary/40 pb-2 border-b border-primary/5">
                        {link.name}
                      </div>
                      <div className="pl-4 flex flex-col gap-4">
                        {link.items.map((subItem: any) => (
                          <div key={subItem.name} className="space-y-2">
                            <a
                              href={subItem.href}
                              className="text-sm font-bold text-primary block"
                              onClick={() => !subItem.subItems && setIsOpen(false)}
                            >
                              {subItem.name}
                            </a>
                            {subItem.subItems && (
                              <div className="pl-4 border-l border-primary/5 flex flex-col gap-2">
                                {subItem.subItems.map((nested: any) => (
                                  <a
                                    key={nested.name}
                                    href={nested.href}
                                    className="text-xs font-medium text-primary/60"
                                    onClick={() => setIsOpen(false)}
                                  >
                                    {nested.name}
                                  </a>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <a
                      href={link.href}
                      className="text-lg font-bold text-primary block py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </a>
                  )}
                </div>
              ))}
              <div className="pt-6">
                <a href="/login" className="block">
                  <Button className="w-full font-bold">LOGIN PORTAL</Button>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
