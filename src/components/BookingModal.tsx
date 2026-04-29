"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  ChevronRight, 
  ChevronLeft, 
  User, 
  Calendar as CalendarIcon, 
  Layout as LayoutIcon, 
  Upload, 
  CheckCircle2, 
  ArrowRight,
  Info,
  Lock,
  Mail,
  Phone,
  FileText,
  Users,
  Clock,
  AlertTriangle
} from 'lucide-react';
import { cn } from '../lib/utils';
import { format, addDays, isSameDay, parseISO, isWithinInterval, addHours } from 'date-fns';
import { EXISTING_BOOKINGS } from '../lib/mock-data';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  facilityName: string;
}

type Step = 1 | 2 | 3 | 4 | 5 | 'success';

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, facilityName }) => {
  const [step, setStep] = useState<Step>(1);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Mock login state
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [formData, setFormData] = useState({
    // Step 1
    fullName: '',
    email: '',
    phone: '',
    // Step 2
    eventName: '',
    slots: [
      {
        date: format(new Date(), 'yyyy-MM-dd'),
        startTime: '08:00',
        endTime: '10:00',
      }
    ],
    participants: '',
    // Step 3
    layout: '',
    // Step 4
    documents: null as File | null,
    // Step 5 (Register password)
    password: '',
    confirmPassword: ''
  });

  const checkAvailability = (date: string, start: string, end: string) => {
    if (!date || !start || !end) return false;
    const bookingDate = parseISO(date);
    const [startH, startM] = start.split(':').map(Number);
    const [endH, endM] = end.split(':').map(Number);
    
    const requestStart = new Date(bookingDate);
    requestStart.setHours(startH, startM);
    
    const requestEnd = new Date(bookingDate);
    requestEnd.setHours(endH, endM);

    return EXISTING_BOOKINGS.some(booking => {
      if (booking.date !== date) return false;
      
      const [bStartH, bStartM] = booking.startTime.split(':').map(Number);
      const [bEndH, bEndM] = booking.endTime.split(':').map(Number);
      
      const bStart = new Date(bookingDate);
      bStart.setHours(bStartH, bStartM);
      
      const bEnd = new Date(bookingDate);
      bEnd.setHours(bEndH, bEndM);

      // Check overlap
      return (
        isWithinInterval(requestStart, { start: bStart, end: addHours(bEnd, -0.01) }) ||
        isWithinInterval(requestEnd, { start: addHours(bStart, 0.01), end: bEnd }) ||
        (requestStart <= bStart && requestEnd >= bEnd)
      );
    });
  };

  const validateStep = (currentStep: Step): boolean => {
    const newErrors: Record<string, string> = {};

    if (currentStep === 1) {
      if (!formData.fullName.trim()) newErrors.fullName = 'Nama lengkap wajib diisi';
      if (!formData.email.trim()) {
        newErrors.email = 'Email wajib diisi';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = 'Format email tidak valid';
      }
      if (!formData.phone.trim()) newErrors.phone = 'Nomor WhatsApp wajib diisi';
    } else if (currentStep === 2) {
      if (!formData.eventName.trim()) newErrors.eventName = 'Nama acara wajib diisi';
      
      formData.slots.forEach((slot, index) => {
        if (!slot.date) newErrors[`date_${index}`] = 'Tanggal wajib diisi';
        if (!slot.startTime) newErrors[`startTime_${index}`] = 'Jam mulai wajib diisi';
        if (!slot.endTime) newErrors[`endTime_${index}`] = 'Jam selesai wajib diisi';
        
        if (slot.startTime && slot.endTime && slot.startTime >= slot.endTime) {
          newErrors[`endTime_${index}`] = 'Jam selesai tidak valid';
        }

        if (slot.date && slot.startTime && slot.endTime && checkAvailability(slot.date, slot.startTime, slot.endTime)) {
          newErrors[`date_${index}`] = 'Jadwal bentrok';
        }
      });

      if (!formData.participants || parseInt(formData.participants) <= 0) {
        newErrors.participants = 'Jumlah peserta harus lebih dari 0';
      }
    } else if (currentStep === 3) {
      if (!formData.layout) newErrors.layout = 'Silakan pilih tata letak ruangan';
    } else if (currentStep === 5) {
      if (!formData.password) {
        newErrors.password = 'Password wajib diisi';
      } else if (formData.password.length < 8) {
        newErrors.password = 'Password minimal 8 karakter';
      }
      if (formData.confirmPassword !== formData.password) {
        newErrors.confirmPassword = 'Konfirmasi password tidak cocok';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const addSlot = () => {
    setFormData({
      ...formData,
      slots: [
        ...formData.slots,
        {
          date: format(new Date(), 'yyyy-MM-dd'),
          startTime: '08:00',
          endTime: '10:00',
        }
      ]
    });
  };

  const removeSlot = (index: number) => {
    if (formData.slots.length <= 1) return;
    const newSlots = [...formData.slots];
    newSlots.splice(index, 1);
    setFormData({ ...formData, slots: newSlots });
  };

  const updateSlot = (index: number, field: keyof typeof formData.slots[0], value: string) => {
    const newSlots = [...formData.slots];
    newSlots[index] = { ...newSlots[index], [field]: value };
    setFormData({ ...formData, slots: newSlots });
    
    // Clear errors for this slot
    const newErrors = { ...errors };
    delete newErrors[`date_${index}`];
    delete newErrors[`startTime_${index}`];
    delete newErrors[`endTime_${index}`];
    setErrors(newErrors);
  };

  const ExistingBookingInHour = (date: string, hour: number) => {
    return EXISTING_BOOKINGS.some(b => {
      if (b.date !== date) return false;
      const startH = parseInt(b.startTime.split(':')[0]);
      const endH = parseInt(b.endTime.split(':')[0]);
      return hour >= startH && hour < endH;
    });
  };

  const isTimeInSelection = (hour: number, start: string, end: string) => {
    if (!start || !end) return false;
    const startH = parseInt(start.split(':')[0]);
    const endH = parseInt(end.split(':')[0]);
    return hour >= startH && hour < endH;
  };

  const handleTimeClick = (slotIndex: number, hour: number) => {
    const slot = formData.slots[slotIndex];
    if (ExistingBookingInHour(slot.date, hour)) return;

    let newStart = slot.startTime;
    let newEnd = slot.endTime;

    const startH = parseInt(slot.startTime.split(':')[0]);
    const endH = parseInt(slot.endTime.split(':')[0]);

    if (hour < startH) {
      newStart = `${hour.toString().padStart(2, '0')}:00`;
    } else if (hour >= endH - 1 && hour >= startH) {
      newEnd = `${(hour + 1).toString().padStart(2, '0')}:00`;
    } else {
      // If clicked inside, reset to that hour as start
      newStart = `${hour.toString().padStart(2, '0')}:00`;
      newEnd = `${(hour + 1).toString().padStart(2, '0')}:00`;
    }

    const newSlots = [...formData.slots];
    newSlots[slotIndex] = { ...slot, startTime: newStart, endTime: newEnd };
    setFormData({ ...formData, slots: newSlots });
  };

  const nextStep = () => {
    if (!validateStep(step)) {
      // Scroll to top of form area if there are errors
      const scrollableDiv = document.querySelector('.overflow-y-auto');
      if (scrollableDiv) scrollableDiv.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const maxStep = isLoggedIn ? 4 : 5;
    if (typeof step === 'number' && step < maxStep) {
      setStep((step + 1) as Step);
    } else if (step === maxStep) {
      if (step === 5) {
        setIsLoggedIn(true);
      }
      setStep('success');
    }
  };

  const prevStep = () => {
    if (typeof step === 'number' && step > 1) setStep((step - 1) as Step);
  };

  if (!isOpen) return null;

  const steps = [
    { id: 1, label: 'Data Diri', icon: User },
    { id: 2, label: 'Detail Acara', icon: CalendarIcon },
    { id: 3, label: 'Pilihan Layout', icon: LayoutIcon },
    { id: 4, label: 'Dokumen', icon: Upload },
    ...(!isLoggedIn ? [{ id: 5, label: 'Aktivasi Akun', icon: Lock }] : [])
  ];


  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
      {/* Backdrop */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-primary/40 backdrop-blur-md"
      />

      {/* Modal */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-4xl bg-white rounded-[40px] shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
      >
        {/* Left Side: Progress & Info */}
        <div className="w-full md:w-80 bg-primary p-8 md:p-12 text-white flex flex-col justify-between relative overflow-hidden shrink-0">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent opacity-10 rounded-full blur-[80px] -mr-32 -mt-32" />
          
          <div className="relative z-10">
            <div className="text-[10px] font-black uppercase tracking-[0.3em] text-accent mb-4">Pemesanan Fasilitas</div>
            <h2 className="text-3xl font-serif italic mb-12">{facilityName}</h2>
            
            {/* Progress Steps */}
            <div className="space-y-6">
              {steps.map((s) => (
                <div key={s.id} className={cn(
                  "flex items-center gap-4 transition-all duration-300",
                  step === s.id ? "opacity-100 translate-x-2" : "opacity-40"
                )}>
                  <div className={cn(
                    "w-10 h-10 rounded-xl flex items-center justify-center border-2 shrink-0",
                    step === s.id ? "border-accent bg-accent text-primary" : "border-white/20"
                  )}>
                    {typeof step === 'number' && step > s.id ? <CheckCircle2 size={18} /> : <s.icon size={18} />}
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-white/40">Langkah 0{s.id}</p>
                    <p className="text-xs font-bold uppercase tracking-wider">{s.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative z-10 pt-12 border-t border-white/10 mt-12 hidden md:block">
            <div className="flex items-start gap-4">
              <Info size={16} className="text-accent shrink-0 mt-1" />
              <p className="text-[10px] leading-relaxed text-white/50 uppercase tracking-wider font-bold">
                Semua data yang Anda masukkan aman dan terverifikasi oleh BPU UNJ.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="flex-1 flex flex-col bg-gray-50/50 overflow-hidden">
          <div className="p-8 pb-0 md:p-12 md:pb-0 flex justify-end shrink-0">
            <button 
              onClick={onClose}
              className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-primary/40 hover:text-primary transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-8 md:p-12 pt-0 md:pt-0 scrollbar-hide">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div 
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div className="mb-10">
                    <h3 className="text-3xl font-serif italic text-primary mb-2">Informasi Kontak</h3>
                    <p className="text-primary/40 text-sm font-bold uppercase tracking-widest">Silakan lengkapi data diri Anda</p>
                  </div>

                  <div className="space-y-4">
                    <InputField 
                      label="Nama Lengkap" 
                      icon={User} 
                      placeholder="Masukkan nama sesuai KTP" 
                      value={formData.fullName}
                      onChange={(e) => {
                        setFormData({...formData, fullName: e.target.value});
                        if (errors.fullName) setErrors({...errors, fullName: ''});
                      }}
                      error={errors.fullName}
                    />
                    <InputField 
                      label="Alamat Email" 
                      icon={Mail} 
                      type="email" 
                      placeholder="contoh@domain.com" 
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({...formData, email: e.target.value});
                        if (errors.email) setErrors({...errors, email: ''});
                      }}
                      error={errors.email}
                    />
                    <InputField 
                      label="Nomor WhatsApp" 
                      icon={Phone} 
                      placeholder="+62 812..." 
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData({...formData, phone: e.target.value});
                        if (errors.phone) setErrors({...errors, phone: ''});
                      }}
                      error={errors.phone}
                    />
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div 
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div className="mb-10">
                    <h3 className="text-3xl font-serif italic text-primary mb-2">Detail Acara & Jadwal</h3>
                    <p className="text-primary/40 text-sm font-bold uppercase tracking-widest">Kapan acara Anda dilaksanakan?</p>
                  </div>
                  <div className="space-y-8">
                    <InputField 
                      label="Nama Acara" 
                      icon={FileText} 
                      placeholder="Contoh: Rapat Koordinasi Tahunan" 
                      value={formData.eventName}
                      onChange={(e) => {
                        setFormData({...formData, eventName: e.target.value});
                        if (errors.eventName) setErrors({...errors, eventName: ''});
                      }}
                      error={errors.eventName}
                    />

                    <div className="space-y-6">
                      <div className="flex justify-between items-center px-4">
                        <label className="text-[10px] font-black uppercase tracking-widest text-primary/40">Daftar Jadwal Pemesanan</label>
                        <button 
                          onClick={addSlot}
                          className="text-[10px] font-black uppercase tracking-widest text-accent hover:text-accent/80 transition-colors flex items-center gap-2 bg-accent/5 px-4 py-2 rounded-full"
                        >
                          + Tambah Jadwal
                        </button>
                      </div>

                      {formData.slots.map((slot, index) => {
                        const slotsOnThisDate = EXISTING_BOOKINGS.filter(b => b.date === slot.date);
                        const hasConflict = checkAvailability(slot.date, slot.startTime, slot.endTime);
                        
                        return (
                          <div key={index} className={cn(
                            "group relative bg-white p-6 rounded-[32px] border transition-all",
                            hasConflict ? "border-red-200 bg-red-50/10 shadow-lg shadow-red-500/5" : "border-primary/5 hover:border-accent/20"
                          )}>
                            <div className="flex justify-between items-center mb-6">
                              <span className="text-[10px] font-black uppercase tracking-widest text-primary/20">Jadwal #{index + 1}</span>
                              {formData.slots.length > 1 && (
                                <button 
                                  onClick={() => removeSlot(index)}
                                  className="text-[10px] font-black uppercase tracking-widest text-red-400 hover:text-red-600 transition-colors"
                                >
                                  Hapus
                                </button>
                              )}
                            </div>

                              <div className="space-y-6">
                                {/* Date Selection */}
                                <div className="relative">
                                  <label className="text-[10px] font-black uppercase tracking-widest text-primary/30 ml-4 mb-3 block">Pilih Tanggal</label>
                                  <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide -mx-4 px-4">
                                    {Array.from({ length: 14 }).map((_, i) => {
                                      const d = addDays(new Date(), i);
                                      const dateStr = format(d, 'yyyy-MM-dd');
                                      const isSelected = slot.date === dateStr;
                                      return (
                                        <button
                                          key={i}
                                          onClick={() => updateSlot(index, 'date', dateStr)}
                                          className={cn(
                                            "flex flex-col items-center justify-center min-w-[70px] h-20 rounded-2xl border transition-all shrink-0",
                                            isSelected 
                                              ? "bg-green-500 border-green-500 text-white shadow-lg shadow-green-500/20" 
                                              : "bg-white border-primary/5 hover:border-primary/10 text-primary/40"
                                          )}
                                        >
                                          <span className="text-[10px] font-black uppercase mb-1">{format(d, 'EEE')}</span>
                                          <span className="text-xl font-bold">{format(d, 'dd')}</span>
                                        </button>
                                      );
                                    })}
                                    <div className="relative shrink-0">
                                      <input 
                                        type="date"
                                        value={slot.date}
                                        onChange={(e) => updateSlot(index, 'date', e.target.value)}
                                        className="opacity-0 absolute inset-0 w-full h-full cursor-pointer"
                                      />
                                      <div className="w-14 h-20 rounded-2xl bg-primary/5 border border-primary/5 flex items-center justify-center text-primary/40">
                                         <CalendarIcon size={20} />
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                {/* Custom Time Picker Grid */}
                                <div className="space-y-4">
                                  <div className="flex justify-between items-center px-4">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-primary/30">Visual Timeline (07:00 - 22:00)</label>
                                    <span className={cn(
                                      "text-[10px] font-bold uppercase py-1 px-3 rounded-full",
                                      hasConflict ? "bg-red-500 text-white" : "bg-green-100 text-green-700"
                                    )}>
                                      {slot.startTime} — {slot.endTime}
                                    </span>
                                  </div>
                                  
                                  <div className="bg-primary/5 p-6 rounded-[32px] relative overflow-hidden shadow-inner">
                                    <div className="flex w-full overflow-x-auto scrollbar-hide py-10 px-4 h-48 relative">
                                      <div className="flex bg-white/80 p-2 rounded-2xl relative min-w-max border border-primary/5">
                                        {/* Hours Grid */}
                                        {Array.from({ length: 16 }).map((_, hIndex) => {
                                          const hour = hIndex + 7;
                                          const hourStr = `${hour.toString().padStart(2, '0')}:00`;
                                          const isBooked = ExistingBookingInHour(slot.date, hour);
                                          const isSelected = isTimeInSelection(hour, slot.startTime, slot.endTime);
                                          const isRangeStart = slot.startTime === hourStr;
                                          const nextHourStr = `${(hour + 1).toString().padStart(2, '0')}:00`;
                                          const isRangeEnd = slot.endTime === nextHourStr;

                                          return (
                                            <div key={hour} className="relative group/time">
                                              {/* Label at the start of the block */}
                                              <div className="absolute -top-8 left-0 -translate-x-1/2 flex flex-col items-center">
                                                <div className="w-[1px] h-3 bg-primary/20 mb-2" />
                                                <span className={cn(
                                                  "text-[10px] font-black tracking-tighter transition-colors",
                                                  isSelected && !isBooked ? "text-green-600 scale-110" : "text-primary/20"
                                                )}>{hourStr}</span>
                                              </div>

                                              {/* The clickable block */}
                                              <button
                                                onClick={() => handleTimeClick(index, hour)}
                                                className={cn(
                                                  "w-20 h-16 transition-all relative",
                                                  isBooked ? "bg-red-100/50 cursor-not-allowed" : "hover:bg-primary/[0.03]",
                                                  isSelected && !isBooked ? "bg-green-500/20" : "border-r border-primary/5 last:border-r-0"
                                                )}
                                              >
                                                {isBooked && (
                                                  <div className="absolute inset-0 bg-red-400/20 flex items-center justify-center">
                                                    <Lock size={14} className="text-red-500 opacity-40 hover:opacity-100 transition-opacity" />
                                                  </div>
                                                )}
                                                {isSelected && !isBooked && (
                                                  <>
                                                    <div className="absolute top-0 inset-x-0 h-1.5 bg-green-500/80" />
                                                    <div className="absolute bottom-0 inset-x-0 h-1.5 bg-green-500/80" />
                                                    {isRangeStart && <div className="absolute left-0 inset-y-0 w-1.5 bg-green-500 rounded-l-full shadow-lg" />}
                                                    {isRangeEnd && <div className="absolute right-0 inset-y-0 w-1.5 bg-green-500 rounded-r-full shadow-lg" />}
                                                  </>
                                                )}
                                              </button>

                                              {/* Special case: Handle the very last label (23:00) */}
                                              {hIndex === 15 && (
                                                <div className="absolute -top-8 right-0 translate-x-1/2 flex flex-col items-center">
                                                  <div className="w-[1px] h-3 bg-primary/20 mb-2" />
                                                  <span className="text-[10px] font-black tracking-tighter text-primary/20 text-center">23:00</span>
                                                </div>
                                              )}
                                            </div>
                                          );
                                        })}
                                      </div>
                                    </div>
                                  </div>
                                  <p className="text-[8px] font-medium text-primary/40 px-4">
                                    * Blok <span className="text-red-400 font-bold">Merah</span> sudah terisi. Klik pada jam yang tersedia untuk menentukan rentang waktu.
                                  </p>
                                </div>
                              </div>

                            {hasConflict && (
                              <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white shadow-lg animate-bounce">
                                <AlertTriangle size={12} />
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>

                    <InputField 
                      label="Jumlah Peserta" 
                      icon={Users} 
                      type="number" 
                      placeholder="10-20 orang" 
                      value={formData.participants}
                      onChange={(e) => {
                        setFormData({...formData, participants: e.target.value});
                        if (errors.participants) setErrors({...errors, participants: ''});
                      }}
                      error={errors.participants}
                    />
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div 
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div className="mb-10">
                    <h3 className="text-3xl font-serif italic text-primary mb-2">Tata Letak</h3>
                    <p className="text-primary/40 text-sm font-bold uppercase tracking-widest">Bagaimana konfigurasi ruang yang diinginkan?</p>
                  </div>

                  {errors.layout && (
                    <div className="bg-red-50 text-red-500 px-6 py-4 rounded-2xl text-xs font-bold uppercase tracking-widest flex items-center gap-3 mb-4 animate-pulse">
                      <Info size={16} /> {errors.layout}
                    </div>
                  )}

                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { id: 'theater', label: 'Theater', icon: '🎭' },
                      { id: 'classroom', label: 'Classroom', icon: '🏫' },
                      { id: 'boardroom', label: 'Boardroom', icon: '💼' },
                      { id: 'u-shape', label: 'U-Shape', icon: '🧲' }
                    ].map((layout) => (
                      <button
                        key={layout.id}
                        onClick={() => {
                          setFormData({...formData, layout: layout.id});
                          if (errors.layout) setErrors({...errors, layout: ''});
                        }}
                        className={cn(
                          "p-6 rounded-3xl border-2 transition-all text-left",
                          formData.layout === layout.id 
                            ? "border-accent bg-white shadow-xl shadow-accent/10" 
                            : errors.layout ? "border-red-100 bg-white/50" : "border-primary/5 bg-white/50 hover:bg-white hover:border-primary/10"
                        )}
                      >
                        <span className="text-2xl mb-3 block">{layout.icon}</span>
                        <span className="font-bold text-primary block">{layout.label}</span>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {step === 4 && (
                <motion.div 
                  key="step4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div className="mb-10">
                    <h3 className="text-3xl font-serif italic text-primary mb-2">Dokumen Pendukung</h3>
                    <p className="text-primary/40 text-sm font-bold uppercase tracking-widest">Unggah file pendukung (Opsional)</p>
                  </div>

                  <div className="border-2 border-dashed border-primary/10 rounded-[32px] p-12 text-center hover:border-accent group transition-all bg-white cursor-pointer relative overflow-hidden">
                    <input 
                      type="file" 
                      className="absolute inset-0 opacity-0 cursor-pointer" 
                      onChange={(e) => setFormData({...formData, documents: e.target.files ? e.target.files[0] : null})}
                    />
                    <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                      <Upload size={32} className="text-accent" />
                    </div>
                    <p className="text-lg font-bold text-primary mb-2">
                      {formData.documents ? formData.documents.name : "Pilih File atau Seret ke Sini"}
                    </p>
                    <p className="text-primary/40 text-sm">PDF, DOCX, atau Gambar (Maks. 5MB)</p>
                  </div>
                </motion.div>
              )}

              {step === 5 && !isLoggedIn && (
                <motion.div 
                  key="step5"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div className="mb-10 text-center">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 text-accent">
                      <Lock size={32} />
                    </div>
                    <h3 className="text-3xl font-serif italic text-primary mb-2">Satu Langkah Lagi</h3>
                    <p className="text-primary/40 text-sm font-bold uppercase tracking-widest">Silakan daftarkan password untuk akun Anda</p>
                  </div>

                  <p className="text-sm text-primary/60 bg-white p-6 rounded-3xl border border-primary/5 text-center">
                    Berdasarkan data Anda, akun akan didaftarkan dengan email: <strong className="text-primary">{formData.email || "(Email belum diisi)"}</strong>
                  </p>

                  <div className="space-y-4">
                    <InputField 
                      label="Password" 
                      icon={Lock} 
                      type="password" 
                      placeholder="Min. 8 karakter" 
                      value={formData.password}
                      onChange={(e) => {
                        setFormData({...formData, password: e.target.value});
                        if (errors.password) setErrors({...errors, password: ''});
                      }}
                      error={errors.password}
                    />
                    <InputField 
                      label="Konfirmasi Password" 
                      icon={Lock} 
                      type="password" 
                      placeholder="Ketik ulang password" 
                      value={formData.confirmPassword}
                      onChange={(e) => {
                        setFormData({...formData, confirmPassword: e.target.value});
                        if (errors.confirmPassword) setErrors({...errors, confirmPassword: ''});
                      }}
                      error={errors.confirmPassword}
                    />
                  </div>
                </motion.div>
              )}

              {step === 'success' && (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-green-200">
                    <CheckCircle2 size={48} className="text-white" />
                  </div>
                  <h3 className="text-4xl font-serif italic text-primary mb-4">Pemesanan Terkirim!</h3>
                  <p className="text-primary/60 max-w-sm mx-auto mb-12">
                    Terima kasih telah melakukan pemesanan. Tim kami akan segera verifikasi data Anda dan menghubungi via WhatsApp.
                  </p>
                  <button 
                    onClick={onClose}
                    className="bg-primary text-white px-12 py-5 rounded-full font-bold uppercase tracking-widest text-xs hover:shadow-2xl transition-all"
                  >
                    Tutup Halaman
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {!step.toString().includes('success') && (
            <div className="p-8 md:p-12 border-t border-primary/5 flex justify-between items-center bg-white/50 shrink-0">
              {typeof step === 'number' && step > 1 ? (
                <button 
                  onClick={prevStep}
                  className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-primary/40 hover:text-primary transition-all"
                >
                  <ChevronLeft size={16} /> Sebelumnya
                </button>
              ) : <div></div>}
              
              <button 
                onClick={nextStep}
                className="bg-primary text-white px-12 py-5 rounded-full font-bold uppercase tracking-widest text-xs hover:shadow-xl transition-all shadow-lg flex items-center gap-3 group"
              >
                {step === (isLoggedIn ? 4 : 5) ? "Pesan & Selesaikan" : "Lanjutkan"} <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

const InputField: React.FC<{
  label: string;
  icon: React.ElementType;
  placeholder?: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}> = ({ label, icon: Icon, placeholder, type = 'text', value, onChange, error }) => (
  <div className="space-y-1.5 flex-1">
    <div className="flex justify-between items-center px-4">
      <label className="text-[10px] font-black uppercase tracking-widest text-primary/40">{label}</label>
      {error && <span className="text-[10px] font-bold uppercase tracking-widest text-red-500 animate-pulse">{error}</span>}
    </div>
    <div className="relative group">
      <div className={cn(
        "absolute left-4 top-1/2 -translate-y-1/2 transition-colors",
        error ? "text-red-300" : "text-primary/20 group-focus-within:text-accent"
      )}>
        <Icon size={18} />
      </div>
      <input 
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={cn(
          "w-full h-16 bg-white border rounded-3xl pl-12 pr-6 text-sm font-bold placeholder:text-primary/20 transition-all focus:ring-4 focus:outline-none",
          error 
            ? "border-red-200 focus:border-red-300 focus:ring-red-500/10" 
            : "border-primary/5 focus:border-accent focus:ring-accent/10"
        )}
      />
    </div>
  </div>
);
