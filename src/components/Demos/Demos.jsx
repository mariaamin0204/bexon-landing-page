import React, { useState } from 'react';
import { LayoutGrid, ExternalLink, ArrowUpRight, Sparkles } from 'lucide-react';

export default function PrebuiltDemos() {
  const [activeTab, setActiveTab] = useState('All');

  // Demo Homepages List based on Bexon ThemeForest template
  const demos = [
    {
      id: '01',
      title: 'Homepage - 01',
      category: 'Corporate',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
      tag: 'POPULAR'
    },
    {
      id: '02',
      title: 'Homepage - 02',
      category: 'Business',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
      tag: 'NEW'
    },
    {
      id: '03',
      title: 'Homepage - 03',
      category: 'Finance',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
      tag: 'HOT'
    },
    {
      id: '04',
      title: 'Homepage - 04',
      category: 'Agency',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
      tag: ''
    },
    {
      id: '05',
      title: 'Homepage - 05',
      category: 'Consulting',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80',
      tag: 'NEW'
    },
    {
      id: '06',
      title: 'Homepage - 06',
      category: 'Corporate',
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80',
      tag: ''
    },
    {
      id: '07',
      title: 'Homepage - 07',
      category: 'Business',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80',
      tag: ''
    },
    {
      id: '08',
      title: 'Homepage - 08',
      category: 'Startup',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80',
      tag: 'NEW'
    },
    {
      id: '09',
      title: 'Homepage - 09',
      category: 'Finance',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80',
      tag: ''
    },
    {
      id: '10',
      title: 'Homepage - 10',
      category: 'Corporate',
      image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&q=80',
      tag: ''
    },
    {
      id: '11',
      title: 'Homepage - 11',
      category: 'Consulting',
      image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80',
      tag: 'POPULAR'
    },
    {
      id: 'rtl',
      title: 'RTL - Demo',
      category: 'RTL',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80',
      tag: 'RTL SUPPORT'
    }
  ];

  return (
    <section id="demos" className="bg-[#0c0f12] text-white py-24 relative overflow-hidden border-b border-white/10">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00d084]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00d084]/40 bg-[#00d084]/10 text-[#00d084] text-xs font-semibold uppercase tracking-wider mb-4">
            <LayoutGrid className="w-3.5 h-3.5" />
            <span>PRE-BUILT HOMEPAGES</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            Explore <span className="inline-block px-3 py-1 bg-[#00d084] text-black rounded-lg transform -rotate-1">11+</span> ready-to-use websites for Corporate Business
          </h2>
          
          <p className="mt-4 text-gray-400 text-sm sm:text-base">
            Experience a clean, modern design built for business success. Intuitive navigation ensures every decision is effortless.
          </p>
        </div>

        {/* Demo Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {demos.map((demo) => (
            <div 
              key={demo.id} 
              className="group relative bg-[#13171c] rounded-2xl overflow-hidden border border-white/10 hover:border-[#00d084]/60 transition-all duration-300 hover:shadow-2xl hover:shadow-[#00d084]/10 hover:-translate-y-1.5 flex flex-col"
            >
              {/* Image Preview Container */}
              <div className="relative h-64 sm:h-72 overflow-hidden bg-[#181d24]">
                {/* Tag Badge */}
                {demo.tag && (
                  <span className="absolute top-4 left-4 z-20 bg-[#00d084] text-black font-extrabold text-[10px] uppercase tracking-wider px-2.5 py-1 rounded shadow-md">
                    {demo.tag}
                  </span>
                )}

                <img 
                  src={demo.image} 
                  alt={demo.title} 
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Hover Overlay with Button */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-[2px] flex items-center justify-center p-4">
                  <a
                    href="#preview"
                    className="inline-flex items-center gap-2 bg-[#00d084] hover:bg-[#00b874] text-black font-bold text-sm px-6 py-3 rounded-full transition-transform duration-300 hover:scale-105 shadow-xl"
                  >
                    <span>Explore Demo</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-5 flex items-center justify-between border-t border-white/5 bg-[#13171c]">
                <div>
                  <h3 className="font-bold text-base text-white group-hover:text-[#00d084] transition-colors">
                    {demo.title}
                  </h3>
                  <p className="text-xs text-gray-400 mt-0.5">{demo.category} Layout</p>
                </div>
                <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-gray-400 group-hover:text-black group-hover:bg-[#00d084] group-hover:border-[#00d084] transition-all">
                  <ExternalLink className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}

          {/* Coming Soon Cards */}
          {[12, 13, 14].map((num) => (
            <div 
              key={num} 
              className="bg-[#111418] rounded-2xl border border-dashed border-white/15 p-8 flex flex-col items-center justify-center text-center h-[340px] relative overflow-hidden"
            >
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 mb-4">
                <Sparkles className="w-6 h-6 text-[#00d084]" />
              </div>
              <span className="text-[#00d084] font-extrabold text-xs tracking-widest uppercase mb-1">COMING SOON</span>
              <h3 className="text-xl font-bold text-gray-300">Homepage - {num}</h3>
              <p className="text-xs text-gray-500 mt-2 max-w-[200px]">More exciting layouts are currently under development.</p>
            </div>
          ))}
        </div>

        {/* Bottom Callout Button */}
        <div className="mt-16 text-center">
          <a 
            href="https://themeforest.net" 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/15 text-white font-semibold text-sm px-8 py-4 rounded-full transition-all"
          >
            <span>Get Bexon Now & Build Your Dream Site</span>
            <ArrowUpRight className="w-4 h-4 text-[#00d084]" />
          </a>
        </div>

      </div>
    </section>
  );
}