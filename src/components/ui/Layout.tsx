import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { motion, HTMLMotionProps } from 'motion/react';

interface ButtonProps extends HTMLMotionProps<'button'> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
}

export const Button = ({ variant = 'primary', size = 'md', children, className, ...props }: ButtonProps) => {
  const variants = {
    primary: 'bg-primary text-white hover:bg-primary/95 shadow-[8px_8px_0px_0px_rgba(255,199,44,0.3)]',
    secondary: 'bg-accent text-primary hover:bg-accent/90 font-bold uppercase tracking-tighter',
    outline: 'border border-primary text-primary hover:bg-primary/5 uppercase tracking-widest text-xs font-bold',
    ghost: 'hover:bg-primary/10 text-primary uppercase tracking-widest text-xs font-bold',
  };

  const sizes = {
    sm: 'px-6 py-2 text-[10px]',
    md: 'px-8 py-4 text-sm font-bold',
    lg: 'px-10 py-5 text-lg font-bold tracking-tight',
  };

  return (
    <motion.button
      whileHover={{ y: -2, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        'rounded-full transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:pointer-events-none',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export const Section = ({ children, className, id }: { children: ReactNode, className?: string, id?: string }) => {
  return (
    <section id={id} className={cn('py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto w-full overflow-hidden', className)}>
      {children}
    </section>
  );
};
