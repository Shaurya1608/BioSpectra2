'use client';
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Book, ChevronRight, FileText, Search, Library } from 'lucide-react';
import Link from 'next/link';
import SectionTitle from '@/components/ui/SectionTitle';

const Archive = () => {
  const [activeYear, setActiveYear] = useState(2024);
  const [searchQuery, setSearchQuery] = useState('');
  const [yearQuery, setYearQuery] = useState('');

  // Expanded Mock data from 2036 down to 2006 (31 years)
  const archives = useMemo(() => {
    return Array.from({ length: 31 }, (_, i) => {
      const year = 2036 - i;
      const volume = year - 2005; // 2006 represents Volume 1
      const count1 = 12 + (year % 5);
      const count2 = 14 + (year % 4);
      return {
        volume,
        year,
        issues: [
          { number: 2, month: 'September', articleCount: count2 },
          { number: 1, month: 'March', articleCount: count1 },
        ]
      };
    });
  }, []);

  const availableYears = archives.map(a => a.year);

  const filteredYears = useMemo(() => {
    if (!yearQuery) return availableYears;
    return availableYears.filter(year => year.toString().includes(yearQuery));
  }, [yearQuery, availableYears]);

  const activeVolume = useMemo(() => {
    return archives.find(a => a.year === activeYear) || archives[0];
  }, [activeYear, archives]);

  const filteredIssues = useMemo(() => {
    if (!searchQuery) return activeVolume.issues;
    return activeVolume.issues.filter(issue => 
      issue.month.toLowerCase().includes(searchQuery.toLowerCase()) || 
      issue.number.toString().includes(searchQuery)
    );
  }, [searchQuery, activeVolume]);

  return (
    <div className="pt-20 pb-20 bg-[#f7f5ef] min-h-screen relative overflow-hidden">
      {/* Editorial Background Grid */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]" 
        style={{ 
          backgroundImage: `linear-gradient(to right, #1a2e1a 1px, transparent 1px)`,
          backgroundSize: 'clamp(40px, 10vw, 80px) 100%' 
        }}
      />

      <div className="w-full max-w-[1500px] mx-auto px-4 md:px-8 lg:px-12 relative z-10">
        
        {/* Page Header */}
        <div className="mb-12">
          <SectionTitle 
            title="Journal Archive" 
            subtitle="Explore our comprehensive repository of previously published volumes and peer-reviewed biological research."
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-14 w-full">
          
          {/* Left Sidebar: Sticky Year Navigation */}
          <aside className="lg:w-[240px] shrink-0">
            <div className="sticky top-28 bg-white/80 backdrop-blur-md rounded-2xl p-4 border border-[#1a2e1a]/10 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
              <div className="flex items-center justify-between mb-1 text-[#1a2e1a] border-b border-[#1a2e1a]/5 pb-1">
                <div className="flex items-center space-x-2">
                  <h3 className="text-[9px] font-black uppercase tracking-[0.1em] font-sans">Archives Index</h3>
                </div>
              </div>

              {/* Year Search Input */}
              <div className="mb-1.5 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                  <Search size={14} />
                </div>
                <input 
                  type="text" 
                  placeholder="Filter by year..."
                  value={yearQuery}
                  onChange={(e) => setYearQuery(e.target.value)}
                  className="w-full bg-[#f7f5ef]/50 border border-[#1a2e1a]/10 rounded-xl py-2 pl-9 pr-3 text-[13px] focus:outline-none focus:border-[#1a2e1a] focus:ring-0 transition-all placeholder:text-slate-400 font-medium"
                />
              </div>
              
              {/* Scrollable Years List */}
              <div 
                className="flex flex-row lg:flex-col gap-0 overflow-x-auto lg:overflow-y-auto lg:max-h-[300px] pb-2 lg:pb-0 pr-1 custom-scrollbar"
                data-lenis-prevent
              >
                {filteredYears.length > 0 ? (
                  filteredYears.map((year) => {
                    const volObj = archives.find(a => a.year === year);
                    const isActive = activeYear === year;
                    return (
                      <button
                        key={year}
                        onClick={() => { setActiveYear(year); setSearchQuery(''); }}
                        className={`px-3 py-[2px] rounded-lg text-left transition-all whitespace-nowrap flex justify-between items-center group relative overflow-hidden shrink-0
                          ${isActive 
                            ? 'bg-[#1a2e1a] text-white shadow-sm' 
                            : 'bg-transparent text-slate-600 hover:bg-[#1a2e1a]/5 hover:text-[#1a2e1a]'
                          }`}
                      >
                        <div className="flex items-center space-x-2">
                          <span className={`${isActive ? 'font-bold' : 'font-semibold'} font-serif text-[16px]`}>Vol. {volObj?.volume}</span>
                          <span className={`text-[12px] ${isActive ? 'text-white/60' : 'text-slate-400'} font-sans font-bold`}>({year})</span>
                        </div>
                        {isActive && <ChevronRight size={14} className="opacity-70" />}
                      </button>
                    );
                  })
                ) : (
                  <div className="text-center py-6 text-slate-400 text-xs italic font-serif">
                    No results found
                  </div>
                )}
              </div>
            </div>
          </aside>

          {/* Right Content Area: Search & Issues Grid */}
          <main className="lg:w-3/4 flex-grow relative">
            
            {/* Ghost Background Watermark */}
            <div className="absolute top-40 left-1/2 -translate-x-1/2 pointer-events-none select-none z-0">
              <span className="text-[18vw] font-black text-[#1a2e1a]/[0.03] font-serif uppercase tracking-tighter leading-none">
                Vol.{activeVolume.volume}
              </span>
            </div>

            <div className="relative z-10">
              {/* Header Info */}
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 mt-2">
                <div>
                  <div className="flex items-center gap-2 text-[#1a2e1a]/60 font-sans text-[10px] font-bold uppercase tracking-[0.2em] mb-2">
                    <Book size={12} /> Current Selection
                  </div>
                  <h2 className="text-4xl md:text-5xl font-black text-[#0d1a0d] tracking-tight font-serif">
                    Volume {activeVolume.volume}
                    <span className="text-[#1a2e1a]/20 ml-4 font-normal text-3xl">/ {activeVolume.year}</span>
                  </h2>
                </div>

                {/* Inline Search */}
                <div className="w-full md:w-80 bg-white/60 backdrop-blur-md rounded-2xl p-1.5 border border-[#1a2e1a]/10 shadow-sm flex items-center group focus-within:border-[#1a2e1a]/30 transition-all">
                  <div className="p-2 rounded-xl text-[#1a2e1a]/40 group-focus-within:text-[#1a2e1a] transition-colors">
                    <Search size={18} />
                  </div>
                  <input 
                    type="text" 
                    placeholder="Search titles or months..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-transparent border-none focus:outline-none text-slate-800 text-[13px] font-medium placeholder:text-slate-400 pb-0.5"
                  />
                </div>
              </div>

              {/* Issues Grid with Animation */}
              <AnimatePresence mode="wait">
                <motion.div 
                  key={activeYear + searchQuery}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                  {filteredIssues.length > 0 ? (
                    filteredIssues.map((issue, idx) => (
                      <Link 
                        href={`/issue/${activeVolume.volume}/${issue.number}`}
                        key={issue.number}
                        className="group relative bg-white rounded-2xl border border-[#1a2e1a]/5 hover:border-[#1a2e1a]/20 shadow-[0_4px_12px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(26,46,26,0.08)] transition-all duration-500 cursor-pointer overflow-hidden p-4 flex flex-col min-h-[140px]"
                      >
                        {/* Status Label */}
                        <div className="absolute top-0 right-0">
                          <div className="bg-[#1a2e1a]/5 px-3 py-1.5 rounded-bl-xl text-[8px] font-black uppercase tracking-[0.15em] text-[#1a2e1a]/60 group-hover:bg-[#1a2e1a] group-hover:text-white transition-colors duration-300">
                            {issue.month} Release
                          </div>
                        </div>

                        <div className="flex items-start gap-5 mb-6">
                          <div className="bg-[#f7f5ef] text-[#1a2e1a] w-10 h-10 rounded-lg flex items-center justify-center border border-[#1a2e1a]/5 group-hover:bg-[#1a2e1a] group-hover:text-white transition-all duration-500 transform group-hover:rotate-6">
                            <span className="text-lg font-black font-serif">{issue.number}</span>
                          </div>
                          <div className="pt-0.5">
                            <span className="text-[8px] font-bold text-[#1a2e1a]/40 uppercase tracking-[0.2em] mb-0.5 block">Issue Portfolio</span>
                            <h4 className="text-[17px] font-bold text-[#0d1a0d] leading-tight font-serif uppercase tracking-tight">
                              Vol. {activeVolume.volume}, Issue {issue.number}
                            </h4>
                          </div>
                        </div>

                        <div className="flex flex-col gap-1.5 mb-5">
                          <div className="flex items-center text-[11.5px] font-medium text-slate-600">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#1a2e1a]/20 mr-2 shrink-0" />
                            {issue.month} {activeVolume.year} Edition
                          </div>
                          <div className="flex items-center text-[11.5px] font-medium text-slate-600">
                            <FileText size={12} className="mr-2 text-[#1a2e1a]/40" />
                            <span className="text-[#1a2e1a] font-bold mr-1">{issue.articleCount}</span> Peer-Reviewed Papers
                          </div>
                        </div>

                        <div className="mt-auto flex items-center justify-between">
                          <div className="flex items-center gap-2 group/btn">
                            <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#1a2e1a]">Open Archive</span>
                            <div className="w-6 h-[1px] bg-[#1a2e1a]/20 group-hover/btn:w-9 transition-all duration-300" />
                          </div>
                          <div className="bg-[#f7f5ef] p-1.5 rounded-lg group-hover:bg-[#1a2e1a] group-hover:text-white transition-all transform group-hover:translate-x-1">
                            <ChevronRight size={14} />
                          </div>
                        </div>
                      </Link>
                    ))

                  ) : (
                    <div className="col-span-full bg-white/40 backdrop-blur-md p-20 text-center rounded-[2.5rem] border border-[#1a2e1a]/5">
                      <div className="bg-white w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-300 shadow-sm">
                        <Search size={40} />
                      </div>
                      <h3 className="text-2xl font-black text-[#1a2e1a] mb-2 font-serif uppercase tracking-tight">No Matching Issues</h3>
                      <p className="text-slate-500 font-medium italic">We couldn't find any issues matching "{searchQuery}" in this volume.</p>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Archive;
