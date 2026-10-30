import React, { useState } from 'react';
import { ArrowUpRight, Zap, Sparkles, Headphones, Globe, Menu, X, Award, Box } from 'lucide-react';

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-[#0c0f12] text-white font-sans min-h-screen relative overflow-hidden flex flex-col justify-between selection:bg-[#00d084] selection:text-black">
      
      {/* Background Dark Architectural Texture / Gradient Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#132220] via-[#0c0f12] to-[#0c0f12] opacity-80 pointer-events-none" />
      
      {/* Abstract Grid Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-gradient-to-b from-[#00d084]/15 via-transparent to-transparent blur-[100px] pointer-events-none" />

      {/* --- HEADER / NAVBAR --- */}
      <header className="relative z-50 bg-[#0c0f12]/90 backdrop-blur-md border-b border-white/10 sticky top-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-[#00d084] flex items-center justify-center shadow-lg shadow-[#00d084]/30">
              <Box className="w-6 h-6 text-black fill-black" />
            </div>
            <span className="text-2xl font-bold tracking-tight text-white">Bexon</span>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-10 text-sm font-medium text-gray-300">
            <a href="#demos" className="hover:text-[#00d084] transition-colors">Demos</a>
            <a href="#inner-pages" className="hover:text-[#00d084] transition-colors">Inner Pages</a>
            <a href="#features" className="hover:text-[#00d084] transition-colors">Features</a>
            <a href="#testimonials" className="hover:text-[#00d084] transition-colors">Testimonials</a>
          </nav>

          {/* Right Envato Buy Button */}
          <div className="hidden md:flex items-center">
            <a 
              href="https://themeforest.net" 
              target="_blank" 
              rel="noreferrer"
              className="bg-white hover:bg-gray-100 text-black font-semibold text-xs px-5 py-2.5 rounded-full flex items-center gap-2 transition-all shadow-md"
            >
              <span>Buy now on</span>
              <span className="font-extrabold text-[#7aa93c] text-sm">envato</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-gray-300 hover:text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#11151a] border-b border-white/10 px-6 py-5 flex flex-col gap-4">
            <a href="#demos" className="text-gray-300 hover:text-[#00d084]" onClick={() => setMobileMenuOpen(false)}>Demos</a>
            <a href="#inner-pages" className="text-gray-300 hover:text-[#00d084]" onClick={() => setMobileMenuOpen(false)}>Inner Pages</a>
            <a href="#features" className="text-gray-300 hover:text-[#00d084]" onClick={() => setMobileMenuOpen(false)}>Features</a>
            <a href="#testimonials" className="text-gray-300 hover:text-[#00d084]" onClick={() => setMobileMenuOpen(false)}>Testimonials</a>
            <a 
              href="https://themeforest.net" 
              target="_blank" 
              rel="noreferrer"
              className="bg-white text-black font-semibold text-xs px-5 py-2.5 rounded-full flex items-center justify-center gap-2 mt-2"
            >
              <span>Buy now on</span>
              <span className="font-extrabold text-[#7aa93c] text-sm">envato</span>
            </a>
          </div>
        )}
      </header>

      {/* --- HERO MAIN CONTENT WITH SIDE MOCKUPS --- */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 pt-12 pb-8 flex-1 flex flex-col justify-center items-center w-full">
        
        {/* Left Floating Mockup (Visible on lg screens like reference video) */}
        <div className="hidden xl:block absolute left-4 top-1/2 -translate-y-1/2 w-80 rounded-2xl border border-white/10 bg-[#12181f]/90 p-3 shadow-2xl backdrop-blur-md -rotate-6 pointer-events-none">
          <div className="flex items-center gap-2 mb-2 pb-2 border-b border-white/10">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
          </div>
          <img 
            src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80" 
            alt="Left Preview" 
            className="rounded-lg w-full h-44 object-cover opacity-90"
          />
        </div>

        {/* Right Floating Mockup (Visible on lg screens like reference video) */}
        <div className="hidden xl:block absolute right-4 top-1/2 -translate-y-1/2 w-80 rounded-2xl border border-white/10 bg-[#12181f]/90 p-3 shadow-2xl backdrop-blur-md rotate-6 pointer-events-none">
          <div className="flex items-center gap-2 mb-2 pb-2 border-b border-white/10">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
          </div>
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80" 
            alt="Right Preview" 
            className="rounded-lg w-full h-44 object-cover opacity-90"
          />
        </div>

        {/* Center Content */}
        <div className="text-center max-w-3xl mx-auto z-20">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00d084]/40 bg-[#00d084]/10 text-[#00d084] text-xs font-semibold uppercase tracking-wider mb-6 shadow-sm">
            <Award className="w-3.5 h-3.5" />
            <span>RECOGNIZED FOR EXCELLENCE</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.15] text-white">
            Prestige Corporate Business <br />
            <span className="text-white">HTML Template</span>
          </h1>

          {/* Call To Action Button */}
          <div className="mt-8">
            <a
              href="#demos"
              className="inline-flex items-center gap-3 bg-[#00d084] hover:bg-[#00b874] text-black font-bold text-sm px-8 py-4 rounded-full transition-all duration-300 shadow-xl shadow-[#00d084]/30 hover:scale-105"
            >
              <span>Explore Demos</span>
              <span className="w-6 h-6 rounded-full bg-black/15 flex items-center justify-center">
                <ArrowUpRight className="w-4 h-4 text-black" />
              </span>
            </a>
          </div>

        </div>
      </div>

      {/* --- HERO FEATURES STRIP --- */}
      <section className="relative z-20 border-t border-b border-white/10 bg-[#0c0f12] py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            
            <div className="flex items-center gap-4 pt-4 sm:pt-0 sm:px-4 first:pt-0">
              <div className="w-11 h-11 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-[#00d084] shrink-0">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Fast load</h4>
                <p className="text-xs text-gray-400">performance</p>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-4 sm:pt-0 sm:px-4">
              <div className="w-11 h-11 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-[#00d084] shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Fresh & clean</h4>
                <p className="text-xs text-gray-400">design</p>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-4 sm:pt-0 sm:px-4">
              <div className="w-11 h-11 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-[#00d084] shrink-0">
                <Headphones className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Quick & friendly</h4>
                <p className="text-xs text-gray-400">support</p>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-4 sm:pt-0 sm:px-4">
              <div className="w-11 h-11 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-[#00d084] shrink-0">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">RTL Language</h4>
                <p className="text-xs text-gray-400">Support</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- RUNNING MARQUEE BANNER AT BOTTOM --- */}
      <div className="bg-[#00d084] text-black py-3 overflow-hidden whitespace-nowrap font-bold text-sm tracking-wide">
        <div className="inline-flex items-center gap-8 animate-marquee">
          <span>Success And Impact</span>
          <Box className="w-4 h-4 fill-black" />
          <span>Founders And Vision</span>
          <Box className="w-4 h-4 fill-black" />
          <span>Growth And Impact</span>
          <Box className="w-4 h-4 fill-black" />
          <span>Team And Values</span>
          <Box className="w-4 h-4 fill-black" />
          <span>Innovation And Future</span>
          <Box className="w-4 h-4 fill-black" />
          <span>Success And Impact</span>
          <Box className="w-4 h-4 fill-black" />
          <span>Founders And Vision</span>
        </div>
      </div>

    </div>
  );
}