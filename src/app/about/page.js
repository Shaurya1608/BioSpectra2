'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Award, BookOpen, Calendar, ShieldCheck, MapPin } from 'lucide-react';

// Assets from public directory
const madhaviImg = '/assets/madhavi.jpg';
const award1Img = '/assets/award2.jpg';
const award2Img = '/assets/award2(2).jpg';
const award3Img = '/assets/award1.jpg';

const About = () => {
  return (
    <div className="pt-24 pb-20 bg-[#f7f5ef] min-h-screen relative overflow-hidden text-slate-900">
      {/* Editorial Background Grid */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]" 
        style={{ 
          backgroundImage: `linear-gradient(to right, #1a2e1a 1px, transparent 1px)`,
          backgroundSize: 'clamp(40px, 10vw, 80px) 100%' 
        }}
      />

      <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">
        
        {/* Founders Tribute Header */}
        <div className="max-w-4xl mx-auto flex flex-col items-center mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <div className="flex items-center justify-center gap-3 text-[#1a2e1a]/60 font-sans text-xs font-bold uppercase tracking-[0.3em] mb-4">
              <span className="w-12 h-[1px] bg-[#1a2e1a]/20"></span>
              A Legacy of Academic Excellence
              <span className="w-12 h-[1px] bg-[#1a2e1a]/20"></span>
            </div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-black text-[#0d1a0d] tracking-tight font-serif lowercase leading-tight">
              Madhavi – Shyam <br/>
              <span className="italic font-normal serif opacity-80">Educational Trust</span>
            </h1>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="relative flex flex-col items-center"
          >
            {/* Elegant Image Frame */}
            <div className="relative bg-transparent shadow-[0_20px_50px_rgba(26,46,26,0.1)] rounded-xl border border-[#1a2e1a]/5 overflow-hidden group">
              <div className="absolute inset-0 border-[6px] border-[#1a2e1a]/5 pointer-events-none z-10"></div>
              <Image 
                src={madhaviImg} 
                alt="Founders: Prof. (Dr.) Mahendra Prasad & Mrs. Pali Vasudha" 
                width={400} 
                height={260} 
                className="relative z-0 rounded-lg h-[180px] md:h-[240px] w-auto object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700" 
              />
            </div>
            
            <div className="mt-5 text-center">
              <h3 className="text-[#1a2e1a] font-serif text-base italic font-medium mb-1">
                Prof. (Dr.) Mahendra Prasad & Mrs. Pali Vasudha
              </h3>
              <p className="text-[#1a2e1a]/40 font-sans text-[10px] font-black uppercase tracking-[0.3em]">
                Founders & Visionaries
              </p>
            </div>
          </motion.div>
        </div>

        {/* Narrative Section */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16 px-4 md:px-0">
          <div className="lg:col-span-9 flex flex-col justify-start">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-sm rounded-[2rem] p-6 md:p-10 border border-[#1a2e1a]/5 shadow-[0_4px_30px_rgba(0,0,0,0.02)]"
            >
              <h2 className="text-2xl font-black text-[#0d1a0d] font-serif mb-6 flex items-center gap-3 tracking-tight">
                <BookOpen className="text-[#1a2e1a]/30" size={24} />
                Our Foundation Story
              </h2>
              
              <div className="prose prose-slate prose-sm md:prose-base font-serif text-[#0d1a0d]/80 leading-relaxed text-justify first-letter:text-5xl first-letter:font-black first-letter:text-[#1a2e1a] first-letter:mr-3 first-letter:float-left">
                <p className="mb-6">
                  Established on the 30th of November, 2005, the <b>Madhavi – Shyam Educational Trust (MSET)</b> was founded under the visionary leadership of Late Prof. (Dr.) Mahendra Prasad, a distinguished Professor of Zoology at Ranchi University, and Mrs. Pali Vasudha, a retired Senior Officer of the BSNL.
                </p>
                <p className="mb-6">
                  Born from a profound desire to honor their parents, the Trust has become a multidimensional beacon of excellence in the biological sciences. Since its inception in the heart of Ranchi, Jharkhand, it has catalyzed a global movement of research and academic inquiry. In 2008, the Trust expanded its reach with the creation of the <b>International Consortium of Contemporary Biologists (ICCB)</b>, which has since hosted seven prestigious international conferences across major Indian cities, uniting brilliant minds from around the world.
                </p>
                <p>
                  Beyond its academic rigor, the Trust remains deeply committed to social responsibility—providing scholarships, financial aid, and free education to underprivileged children. It stands today as a living memorial to the parents of its founders, dedicated to the creator, the guru, and the tireless pursuit of biological truth.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-3 space-y-6">
            {/* Milestone Cards */}
            {[
              { year: '2005', label: 'Inception', desc: 'Trust founded in Ranchi by Prof. Mahendra Prasad.' },
              { year: '2006', label: 'Journal Launch', desc: 'First issue of Biospectra was officially published.' },
              { year: '2008', label: 'The Consortium', desc: 'ICCB was created to host global conferences.' }
            ].map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/40 border border-[#1a2e1a]/10 rounded-xl p-5 hover:bg-[#1a2e1a] hover:text-white transition-all duration-300 group"
              >
                <Calendar className="mb-2.5 text-[#1a2e1a]/40 group-hover:text-white/40" size={18} />
                <div className="text-xl font-black font-serif mb-0.5">{m.year}</div>
                <div className="text-[10px] font-black uppercase tracking-wider mb-1.5 opacity-60 group-hover:opacity-100">{m.label}</div>
                <p className="text-[11px] font-medium opacity-60 group-hover:opacity-80 leading-relaxed">{m.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Credentials Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-[#1a2e1a] text-[#f7f5ef] rounded-[2rem] p-6 mb-16 flex flex-col md:flex-row items-center justify-center gap-8 text-center"
        >
          <div className="flex flex-col items-center px-4">
            <ShieldCheck size={28} className="mb-2 text-white/40" />
            <div className="text-[9px] uppercase font-black tracking-[0.2em] opacity-40 mb-1">Registration Authority</div>
            <div className="text-xs font-bold font-serif italic tracking-wide">Regn No: 20560/IV-1815/2005</div>
          </div>
          <div className="hidden md:block w-[1px] h-10 bg-white/10"></div>
          <div className="flex flex-col items-center px-4">
            <BookOpen size={28} className="mb-2 text-white/40" />
            <div className="text-[9px] uppercase font-black tracking-[0.2em] opacity-40 mb-1">Official Publication</div>
            <div className="text-xs font-bold font-serif italic tracking-wide">BIOSPECTRA : ISSN-0973-7057</div>
          </div>
        </motion.div>

        {/* Awards Gallery */}
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center mb-8">
            <Award className="text-[#1a2e1a]/20 mb-2" size={28} />
            <h2 className="text-xl font-black text-[#0d1a0d] font-serif tracking-tight text-center">
              Moments of Recognition
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[award1Img, award2Img, award3Img].map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="group relative"
              >
                <div className="bg-transparent shadow-[0_10px_40px_rgba(0,0,0,0.06)] rounded-2xl transform hover:-translate-y-2 hover:rotate-1 transition-all duration-500 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none"></div>
                  <div className="relative rounded-xl overflow-hidden aspect-[4/5]">
                    <Image 
                      src={src} 
                      alt={`Historical Award Moment ${i+1}`} 
                      fill 
                      className="object-cover group-hover:scale-105 transition-transform duration-700 grayscale-[0.3] group-hover:grayscale-0" 
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>

      {/* Footer Decoration */}
      <div className="mt-32 border-t border-[#1a2e1a]/10 pt-10 pb-20 text-center">
        <div className="flex justify-center items-center gap-4 text-[#1a2e1a]/20 mb-4">
          <BookOpen size={16} />
          <div className="w-1.5 h-1.5 rounded-full bg-current"></div>
          <ShieldCheck size={16} />
          <div className="w-1.5 h-1.5 rounded-full bg-current"></div>
          <Award size={16} />
        </div>
        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#1a2e1a]/40">
          Biological Research · Education · Legacy
        </p>
      </div>
    </div>
  );
};

export default About;

