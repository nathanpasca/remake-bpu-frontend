"use client";

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { format, addDays, parseISO } from 'date-fns';
import { cn } from '../lib/utils';
import { EXISTING_BOOKINGS } from '../lib/mock-data';
import { Calendar as CalendarIcon, Info, Lock } from 'lucide-react';

export const ScheduleViewer = () => {
  const [selectedDate, setSelectedDate] = useState(format(new Date(), 'yyyy-MM-dd'));

  const ExistingBookingInHour = (date: string, hour: number) => {
    return EXISTING_BOOKINGS.some(b => {
      if (b.date !== date) return false;
      const startH = parseInt(b.startTime.split(':')[0]);
      const endH = parseInt(b.endTime.split(':')[0]);
      return hour >= startH && hour < endH;
    });
  };

  return (
    <div className="space-y-8">
      {/* Date Picker */}
      <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide -mx-4 px-4 h-24 items-center">
        {Array.from({ length: 14 }).map((_, i) => {
          const d = addDays(new Date(), i);
          const dateStr = format(d, 'yyyy-MM-dd');
          const isSelected = selectedDate === dateStr;
          return (
            <button
              key={i}
              onClick={() => setSelectedDate(dateStr)}
              className={cn(
                "flex flex-col items-center justify-center min-w-[80px] h-20 rounded-3xl border transition-all shrink-0",
                isSelected 
                  ? "bg-primary border-primary text-white shadow-xl shadow-primary/20 scale-105" 
                  : "bg-white border-primary/5 hover:border-primary/10 text-primary/40"
              )}
            >
              <span className="text-[10px] font-black uppercase mb-1">{format(d, 'EEE')}</span>
              <span className="text-xl font-bold">{format(d, 'dd')}</span>
            </button>
          );
        })}
      </div>

      {/* Visual Timeline */}
      <div className="bg-white p-8 md:p-12 rounded-[64px] shadow-2xl relative overflow-hidden border border-primary/5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-500 opacity-5 rounded-full blur-[100px] -mr-48 -mt-48" />
        
        <div className="relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
            <div>
              <h3 className="text-2xl font-serif italic text-primary mb-1">Visual Timeline</h3>
              <p className="text-[10px] font-black uppercase tracking-widest text-primary/30">Ketersediaan Ruangan pada {format(parseISO(selectedDate), 'dd MMMM yyyy')}</p>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-100 rounded-sm border border-red-200" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary/40">Terisi</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-gray-50 rounded-sm border border-primary/5" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary/40">Tersedia</span>
              </div>
            </div>
          </div>

          <div className="bg-primary/5 p-4 md:p-12 rounded-[40px] relative overflow-hidden">
            <div className="flex w-full overflow-x-auto scrollbar-hide py-14 px-4 h-64 relative">
              <div className="flex bg-white p-3 rounded-3xl relative min-w-max border border-primary/5 shadow-inner">
                {Array.from({ length: 16 }).map((_, hIndex) => {
                  const hour = hIndex + 7;
                  const hourStr = `${hour.toString().padStart(2, '0')}:00`;
                  const isBooked = ExistingBookingInHour(selectedDate, hour);

                  return (
                    <div key={hour} className="relative">
                      {/* Label */}
                      <div className="absolute -top-10 left-0 -translate-x-1/2 flex flex-col items-center">
                        <div className="w-[1px] h-4 bg-primary/20 mb-2" />
                        <span className="text-[11px] font-black tracking-tight text-primary/40">{hourStr}</span>
                      </div>

                      {/* Block */}
                      <div className={cn(
                        "w-32 h-24 transition-all relative border-r border-primary/5 last:border-r-0 flex items-center justify-center",
                        isBooked ? "bg-red-500/5 shadow-inner" : "bg-transparent hover:bg-primary/[0.02]"
                      )}>
                        {isBooked ? (
                          <div className="flex flex-col items-center gap-2">
                            <div className="p-2 bg-red-100 rounded-lg text-red-500">
                              <Lock size={18} />
                            </div>
                            <span className="text-[10px] font-black text-red-500/60 uppercase tracking-widest">Terisi</span>
                          </div>
                        ) : (
                          <div className="flex flex-col items-center gap-2 opacity-20 group-hover:opacity-100 transition-opacity">
                             <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                             <span className="text-[8px] font-bold text-primary/40 uppercase tracking-tighter">Kosong</span>
                          </div>
                        )}
                      </div>

                      {/* Last Label */}
                      {hIndex === 15 && (
                        <div className="absolute -top-10 right-0 translate-x-1/2 flex flex-col items-center">
                          <div className="w-[1px] h-4 bg-primary/20 mb-2" />
                          <span className="text-[11px] font-black tracking-tight text-primary/40">23:00</span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="mt-8 flex items-start gap-4 p-6 bg-accent/5 rounded-3xl border border-accent/10">
            <Info size={20} className="text-accent shrink-0 mt-1" />
            <p className="text-xs leading-relaxed text-primary/60 font-medium">
              Data di atas menunjukkan ketersediaan waktu secara real-time. Bagian berwarna merah menandakan waktu yang sudah dipesan oleh pengguna lain. Silakan pilih waktu diluar jam tersebut untuk pemesanan Anda.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
