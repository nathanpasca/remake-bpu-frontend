import { motion } from 'motion/react';
import { Section } from './ui/Layout';

export const Stats = () => {
  const stats = [
    { value: '48+', label: 'Managed Venues', color: 'text-primary' },
    { value: '25k+', label: 'Event Bookings', color: 'text-accent' },
    { value: '98%', label: 'Facility Readiness', color: 'text-primary' },
    { value: 'INSTANT', label: 'Availability Check', color: 'text-accent' },
  ];

  return (
    <Section className="border-y border-gray-100 bg-gray-50/50">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <div className={`text-5xl md:text-7xl font-display font-bold tracking-tighter mb-2 ${stat.color}`}>
              {stat.value}
            </div>
            <div className="text-xs md:text-sm font-bold uppercase tracking-widest text-gray-400">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
