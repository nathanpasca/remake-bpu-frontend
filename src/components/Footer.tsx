import { Instagram, Twitter, Github, Linkedin, ShoppingBag, ArrowUpRight } from 'lucide-react';
import { Button } from './ui/Layout';

export const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-24 pb-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-accent flex items-center justify-center font-bold text-primary text-xl">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/id/0/02/Logo_Universitas_Negeri_Jakarta.png" 
                  alt="UNJ Logo" 
                  className="w-8 h-8 object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-display font-bold tracking-tighter text-white uppercase leading-tight">BPU UNJ</span>
                <span className="text-[10px] font-bold text-white/50 uppercase tracking-widest leading-none">Badan Pengelola Usaha</span>
              </div>
            </div>
            <p className="text-xl text-white/60 max-w-md leading-relaxed mb-10">
              Transforming university assets into centers of professional excellence. Managed by BPU Universitas Negeri Jakarta.
            </p>
            <div className="flex gap-4">
              <SocialIcon icon={<Instagram size={20} />} />
              <SocialIcon icon={<Twitter size={20} />} />
              <SocialIcon icon={<Github size={20} />} />
              <SocialIcon icon={<Linkedin size={20} />} />
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-8 uppercase tracking-widest text-accent">Navigation</h4>
            <ul className="space-y-4">
              <FooterLink>Available Assets</FooterLink>
              <FooterLink>Research Labs</FooterLink>
              <FooterLink>Facility Map</FooterLink>
              <FooterLink>Logistics API</FooterLink>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-8 uppercase tracking-widest text-accent">Contact</h4>
            <ul className="space-y-4">
              <FooterLink>Support Center</FooterLink>
              <FooterLink>Campus Security</FooterLink>
              <FooterLink>Admin Portal</FooterLink>
              <FooterLink>Lost & Found</FooterLink>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-white/40 text-sm font-medium">
            © 2026 UniReserve Systems. Part of the Campus Excellence Initiative.
          </div>
          <div className="flex gap-8 text-white/40 text-sm font-medium">
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-accent transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ icon }: any) => (
  <a
    href="#"
    className="w-12 h-12 rounded-2xl border border-white/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-all duration-300"
  >
    {icon}
  </a>
);

const FooterLink = ({ children }: any) => (
  <li>
    <a href="#" className="text-white/60 hover:text-white flex items-center gap-2 group transition-colors">
      {children}
      <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all -translate-y-1" />
    </a>
  </li>
);
