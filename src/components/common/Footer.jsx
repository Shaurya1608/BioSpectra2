'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Github, FileText } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0d1a0d] text-[#d1d5d1] relative overflow-hidden">
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#1a7a3a]" />
      
      {/* Subtle organic texture or pattern could go here */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/natural-paper.png")' }} />

      <div className="container mx-auto px-6 pt-20 pb-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          {/* ── BRAND BLOCK ── */}
          <div className="md:col-span-4 space-y-8">
            <Link href="/" className="flex items-start gap-4 group">
              <div className="shrink-0 w-16 h-16 bg-white/5 backdrop-blur-sm rounded-2xl p-2.5 border border-white/10 group-hover:border-emerald-500/30 transition-colors duration-500">
                <Image
                  src="/assets/mset-logo-png-removebg-preview.png"
                  alt="MSET Logo"
                  width={64}
                  height={64}
                  className="object-contain w-full h-auto"
                />
              </div>
              <div className="flex flex-col pt-1">
                <span className="font-serif text-white font-extrabold text-xl leading-tight tracking-tight group-hover:text-emerald-400 transition-colors duration-300">
                  BIOSPECTRA
                </span>
                <span className="text-[10px] uppercase font-sans font-bold tracking-[0.08em] text-[#8a9a8a] mt-1 leading-tight">
                  International Journal of Life Sciences
                </span>
              </div>
            </Link>
            
            <p className="font-sans text-[13.5px] leading-relaxed opacity-80 max-w-sm">
              An innovative, refereed, biannual research journal dedicated to the advancement of biological sciences, published under the aegis of Madhawi-Shyam Educational Trust.
            </p>

            <div className="flex space-x-5">
              {[Facebook, Twitter, Linkedin, Github].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:border-emerald-500/40 hover:text-emerald-400 hover:bg-emerald-500/5 transition-all duration-300">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* ── NAVIGATION ── */}
          <div className="md:col-span-2">
            <h3 className="text-white font-serif font-bold text-lg mb-8 tracking-wide">Journal</h3>
            <ul className="space-y-4 font-sans text-[14px]">
              <li><Link href="/" className="hover:text-emerald-400 hover:translate-x-1 inline-block transition-all duration-300">Home</Link></li>
              <li><Link href="/archive" className="hover:text-emerald-400 hover:translate-x-1 inline-block transition-all duration-300">Current Issue</Link></li>
              <li><Link href="/archive" className="hover:text-emerald-400 hover:translate-x-1 inline-block transition-all duration-300">Archive</Link></li>
              <li><Link href="/submit" className="hover:text-emerald-400 hover:translate-x-1 inline-block transition-all duration-300">Submission</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-white font-serif font-bold text-lg mb-8 tracking-wide">Resources</h3>
            <ul className="space-y-4 font-sans text-[14px]">
              <li><Link href="/about" className="hover:text-emerald-400 hover:translate-x-1 inline-block transition-all duration-300">About MSET</Link></li>
              <li><Link href="/editorial" className="hover:text-emerald-400 hover:translate-x-1 inline-block transition-all duration-300">Editorial Board</Link></li>
              <li><Link href="/guidelines" className="hover:text-emerald-400 hover:translate-x-1 inline-block transition-all duration-300">Author Guidelines</Link></li>
              <li><Link href="/gallery" className="hover:text-emerald-400 hover:translate-x-1 inline-block transition-all duration-300">Scientific Gallery</Link></li>
            </ul>
          </div>

          {/* ── CONTACT ── */}
          <div className="md:col-span-4">
            <h3 className="text-white font-serif font-bold text-lg mb-8 tracking-wide">Get in Touch</h3>
            <ul className="space-y-5 font-sans text-[13.5px]">
              <li className="flex items-start space-x-4 group">
                <div className="w-8 h-8 shrink-0 flex items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                  <MapPin size={16} />
                </div>
                <span className="leading-snug opacity-90 group-hover:opacity-100 transition-opacity">Madhawi-Shyam Educational Trust, Ranchi, Jharkhand, India.</span>
              </li>
              <li className="flex items-center space-x-4 group">
                <div className="w-8 h-8 shrink-0 flex items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                  <Phone size={16} />
                </div>
                <span className="opacity-90 group-hover:opacity-100 transition-opacity">+91 94313 89253</span>
              </li>
              <li className="flex items-center space-x-4 group">
                <div className="w-8 h-8 shrink-0 flex items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                  <Mail size={16} />
                </div>
                <span className="opacity-90 group-hover:opacity-100 transition-opacity underline-offset-4 group-hover:underline">biospectra@yahoo.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* ── BOTTOM BAR ── */}
        <div className="pt-10 border-t border-white/5 flex flex-col lg:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center lg:items-start gap-2">
            <p className="font-sans text-[11px] tracking-wider uppercase font-bold opacity-60">
              © {new Date().getFullYear()} Biospectra Journal. All Rights Reserved.
            </p>
            <p className="font-sans text-[9px] tracking-[0.15em] uppercase opacity-40 font-bold">
              Reg. No. 20560/IV-1815/2005
            </p>
          </div>
          <div className="flex items-center gap-8">
            <p className="font-sans text-[10px] tracking-wide opacity-50 font-medium italic">
              Design & Development by Madhawi-Shyam Educational Trust
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
