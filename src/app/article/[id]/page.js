'use client';
import React, { useMemo, useEffect, useState } from 'react';
import Link from 'next/link';
import { motion, useScroll, useSpring } from 'framer-motion';
import { 
  Download, Share2, Printer, Calendar, 
  BookOpen, User, ArrowLeft, Copy, 
  Check, Info, FileText, ChevronRight
} from 'lucide-react';
import articlesData from '@/data/articles.json';
import ArticleCard from '@/components/common/ArticleCard';

const ArticleDetail = ({ params }) => {
  const { id } = React.use(params);
  const [mounted, setMounted] = useState(false);
  const [copied, setCopied] = useState(false);

  // Scroll Progress Logic
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  const article = useMemo(() => {
    return articlesData.find(a => a.id === parseInt(id));
  }, [id]);

  const relatedArticles = useMemo(() => {
    if (!article) return [];
    return articlesData
      .filter(a => a.category === article.category && a.id !== article.id)
      .slice(0, 3);
  }, [article]);

  const copyCitation = () => {
    const citation = `${article.authors[0]} et al. (${new Date(article.date).getFullYear()}). "${article.title}". Biospectra (ISSN: 0973-7057), Vol ${article.volume}(${article.issue}).`;
    navigator.clipboard.writeText(citation);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!article) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh] font-sans text-center px-4">
        <h2 className="text-2xl font-serif font-black text-[#0d1a0d] mb-4">Article Not Found</h2>
        <p className="text-[#4a5568] mb-8">The requested publication might have been moved or archived.</p>
        <Link href="/archive" className="flex items-center gap-2 text-emerald-700 font-bold uppercase tracking-widest text-[10px] hover:underline">
          <ArrowLeft size={14} /> Back to Archive
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-[#f7f5ef] min-h-screen selection:bg-emerald-100 selection:text-emerald-900 border-t-[32px] border-white">
      
      {/* ── READING PROGRESS BAR ── */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-emerald-800 z-[100] origin-left"
        style={{ scaleX }}
      />

      <div className="container mx-auto px-6 max-w-[1400px] border-x border-black/[0.03] bg-white min-h-screen shadow-2xl shadow-black/5">
        
        <header className="pt-12 pb-16">
          {/* Back link - Minimal */}
          <Link 
            href="/archive" 
            className="inline-flex items-center gap-2 text-[#6b7280] font-bold text-[9px] uppercase tracking-[0.2em] mb-12 hover:text-[#0d1a0d] transition-colors"
          >
            <ArrowLeft size={13} /> Back to Archive
          </Link>

          {/* Title - Classic Document Alignment (Left) */}
          <div className="max-w-4xl mb-4">
            <h1 className="font-serif text-[#0d1a0d] text-2xl md:text-3xl font-black leading-tight tracking-tight mb-4">
              {article.title}
            </h1>
            <div className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#6b7280] opacity-80">
              {mounted ? new Date(article.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : '...'}
            </div>
          </div>

          <div className="h-[1px] w-full bg-black/5 my-12" />

          {/* Academic Author Block - Centered as per reference */}
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h3 className="font-serif text-lg md:text-xl font-bold text-[#0d1a0d]">
              {article.authors.join(', ')}
            </h3>
            <div className="space-y-1">
              <p className="text-[12px] font-medium text-[#4a5568] italic opacity-90 leading-relaxed">
                International Consortium of Contemporary Biologists (ICCB)
              </p>
              <p className="text-[11px] font-medium text-[#6b7280] italic leading-relaxed">
                Academic Exchange Programs, Educational & Scientific Research Center
              </p>
            </div>
          </div>
        </header>

        {/* ── MANUSCRIPT CONTENT ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 pb-24 border-t border-black/5 pt-12">
          
          {/* Left Column: Article Body */}
          <div className="lg:col-span-8">
            
            {/* Abstract Section - All Caps Header */}
            <section className="mb-16">
              <h2 className="text-[12px] font-black tracking-[0.2em] uppercase text-[#0d1a0d] mb-8">
                Abstract
              </h2>
              <div className="border-y border-black/[0.03] py-8">
                <p className="font-serif text-[15px] md:text-[16px] text-[#2d3748] leading-[1.8] italic font-medium text-justify">
                  {article.abstract}
                </p>
              </div>
            </section>

            {/* Main Publication Content */}
            <section className="mb-20">
              <h2 className="text-[12px] font-black tracking-[0.2em] uppercase text-[#0d1a0d] mb-10">
                Full Publication
              </h2>
              
              <div className="prose prose-emerald max-w-none text-[#4a5568] space-y-8">
                {article.content ? article.content.split('\n').map((para, i) => (
                  <p key={i} className="text-[15px] md:text-[16px] leading-[1.85] font-serif text-justify md:text-left">
                    {para}
                  </p>
                )) : (
                  <div className="bg-[#fbfcfa] border border-black/5 p-10 text-center rounded-sm italic text-[#6b7280] font-serif">
                    "Full digital text representation not currently available for this manuscript."
                  </div>
                )}
                
                <div className="pt-16 mt-20 border-t border-black/5 opacity-80">
                   <h4 className="text-[10px] uppercase font-black tracking-[0.2em] text-[#0d1a0d] mb-6">Editorial Note</h4>
                   <p className="text-[13px] leading-relaxed font-serif italic text-[#4a5568]">
                      References were numbered according to the sequence of the text, arranged serially without alphabetical consideration as per the BIOSPECTRA guidelines. The materials are reviewed by the editorial board members of MSET.
                   </p>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column: Traditional Sidebar */}
          <aside className="lg:col-span-4 lg:sticky lg:top-[80px] space-y-10 group">
            
            {/* Minimalist Tools Panel */}
            <div className="bg-[#fbfcfa] border border-black/5 p-8 shadow-sm">
              <div className="flex items-center gap-4 mb-8">
                 <div className="w-8 h-[2px] bg-emerald-900/10" />
                 <h3 className="text-[10px] uppercase font-black tracking-[0.25em] text-[#0d1a0d]">Manuscript Metadata</h3>
              </div>
              
              <div className="space-y-6">
                <div>
                  <span className="text-[9px] uppercase font-black text-emerald-800/40 tracking-widest block mb-2">DOI Number</span>
                   <p className="text-[12px] font-mono font-bold text-[#4a5568] truncate">{article.doi || 'N/A'}</p>
                </div>
                <div>
                  <span className="text-[9px] uppercase font-black text-emerald-800/40 tracking-widest block mb-1">Journal Index</span>
                   <p className="text-[12px] font-serif font-bold text-[#1a2e1a]">BIOSPECTRA Vol {article.volume}, Issue {article.issue}</p>
                   <p className="text-[10px] font-medium text-[#6b7280] tracking-wider mt-1 uppercase">ISSN: 0973-7057</p>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-black/5 space-y-3">
                <button className="w-full flex items-center justify-between text-[#0d1a0d] hover:bg-[#0d1a0d] hover:text-white transition-all border border-black/10 px-6 py-3.5 font-bold uppercase text-[9px] tracking-widest">
                  Download Manuscript <Download size={14} />
                </button>
                <div className="grid grid-cols-2 gap-3">
                   <button className="flex items-center justify-center gap-2 border border-black/5 hover:bg-black/5 transition-colors py-3 font-bold uppercase text-[9px] tracking-widest">
                      Print <Printer size={13} />
                   </button>
                   <button className="flex items-center justify-center gap-2 border border-black/5 hover:bg-black/5 transition-colors py-3 font-bold uppercase text-[9px] tracking-widest">
                      Share <Share2 size={13} />
                   </button>
                </div>
              </div>
            </div>

            {/* Classic Citation Style */}
            <div className="p-8 border-l-2 border-emerald-800/5 selection:bg-emerald-50 bg-[#fbfcfa]/50">
              <h3 className="text-[9px] uppercase font-black tracking-[0.25em] text-[#0d1a0d] mb-6">Cite this Entry</h3>
              <div className="text-[12px] text-[#4a5568] leading-relaxed font-serif italic mb-6">
                {article.authors[0]} et al. ({mounted ? new Date(article.date).getFullYear() : '....'}). "{article.title}". Biospectra (ISSN: 0973-7057), Vol {article.volume}({article.issue}).
              </div>
              <button 
                onClick={copyCitation}
                className="group flex items-center gap-2 text-emerald-800 font-bold uppercase text-[8px] tracking-[0.2em] hover:text-emerald-500 transition-colors"
              >
                {copied ? (
                  <>Copied to Clipboard <Check size={12} className="text-emerald-500" /></>
                ) : (
                  <>Copy Academic Citation <Copy size={11} className="group-hover:translate-x-0.5 transition-transform" /></>
                )}
              </button>
            </div>
            
            <div className="px-8 space-y-4">
               <div className="flex items-center gap-3 py-3 opacity-60">
                   <Info size={12} />
                   <span className="text-[9px] font-bold uppercase tracking-widest">Peer Reviewed</span>
               </div>
               <div className="flex items-center gap-3 py-3 opacity-60">
                   <Calendar size={12} />
                   <span className="text-[9px] font-bold uppercase tracking-widest">Biannual Publication</span>
               </div>
            </div>
          </aside>
        </div>

        {/* ── DISCOVERY SECTION ── */}
        {relatedArticles.length > 0 && (
          <section className="border-t border-black/5 py-24 bg-[#fbfcfa]">
            <div className="flex flex-col md:flex-row items-baseline justify-between gap-6 mb-16">
              <div>
                <span className="text-emerald-800/40 font-black uppercase text-[9px] tracking-[0.4em] mb-3 block">Scientific Exchange</span>
                <h2 className="font-serif text-2xl font-black text-[#0d1a0d]">Related Publications</h2>
              </div>
              <Link 
                href="/archive" 
                className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-emerald-800 hover:text-emerald-600 transition-colors border-b border-transparent hover:border-emerald-800"
              >
                View Archive <ChevronRight size={14} />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {relatedArticles.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <ArticleCard article={item} />
                </motion.div>
              ))}
            </div>
          </section>
        )}
      </div>

    </div>
  );
};

export default ArticleDetail;


