'use client';

import { motion } from 'framer-motion';
import { Award, MapPin, Users, Headphones, Mic, Zap } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-16 bg-gradient-to-b from-dark to-charcoal overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Big Visual Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-glitch-green via-glitch-cyan to-glitch-magenta mb-6">
            THE PRODUCER
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-glitch-green to-glitch-cyan mx-auto" />
        </motion.div>

        {/* Main Content - Visual Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          
          {/* Card 1 - Grammy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative group"
          >
            <div className="h-64 bg-gradient-to-br from-amber-500/20 to-yellow-400/10 rounded-2xl p-8 border border-amber-400/20 hover:border-amber-400/40 transition-all duration-300 hover:scale-105">
              <div className="flex flex-col items-center text-center h-full justify-center">
                <div className="p-4 bg-amber-500/20 rounded-full mb-4">
                  <Award size={40} className="text-amber-400" />
                </div>
                <h3 className="text-2xl font-bold text-amber-400 mb-2">GRAMMY</h3>
                <p className="text-amber-300 font-semibold">NOMINATED</p>
                <p className="text-amber-200/80 text-sm mt-2">Producer & Engineer</p>
              </div>
            </div>
          </motion.div>

          {/* Card 2 - Atlanta */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative group"
          >
            <div className="h-64 bg-gradient-to-br from-glitch-cyan/20 to-blue-400/10 rounded-2xl p-8 border border-glitch-cyan/20 hover:border-glitch-cyan/40 transition-all duration-300 hover:scale-105">
              <div className="flex flex-col items-center text-center h-full justify-center">
                <div className="p-4 bg-glitch-cyan/20 rounded-full mb-4">
                  <MapPin size={40} className="text-glitch-cyan" />
                </div>
                <h3 className="text-2xl font-bold text-glitch-cyan mb-2">ATLANTA</h3>
                <p className="text-cyan-300 font-semibold">POWERHOUSE</p>
                <p className="text-cyan-200/80 text-sm mt-2">Culture & Creativity</p>
              </div>
            </div>
          </motion.div>

          {/* Card 3 - OctoGvng */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative group"
          >
            <div className="h-64 bg-gradient-to-br from-glitch-magenta/20 to-purple-400/10 rounded-2xl p-8 border border-glitch-magenta/20 hover:border-glitch-magenta/40 transition-all duration-300 hover:scale-105">
              <div className="flex flex-col items-center text-center h-full justify-center">
                <div className="p-4 bg-glitch-magenta/20 rounded-full mb-4">
                  <Users size={40} className="text-glitch-magenta" />
                </div>
                <h3 className="text-2xl font-bold text-glitch-magenta mb-2">OCTOGVNG</h3>
                <p className="text-pink-300 font-semibold">FOUNDER</p>
                <p className="text-pink-200/80 text-sm mt-2">Global Collective</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skills Icons Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center items-center gap-8 mb-16"
        >
          <div className="flex items-center gap-3 px-6 py-3 bg-glitch-green/10 border border-glitch-green/30 rounded-full">
            <Headphones className="text-glitch-green" size={24} />
            <span className="text-glitch-green font-bold">MIX</span>
          </div>
          <div className="flex items-center gap-3 px-6 py-3 bg-glitch-cyan/10 border border-glitch-cyan/30 rounded-full">
            <Mic className="text-glitch-cyan" size={24} />
            <span className="text-glitch-cyan font-bold">MASTER</span>
          </div>
          <div className="flex items-center gap-3 px-6 py-3 bg-glitch-magenta/10 border border-glitch-magenta/30 rounded-full">
            <Zap className="text-glitch-magenta" size={24} />
            <span className="text-glitch-magenta font-bold">DESIGN</span>
          </div>
        </motion.div>

        {/* Simple Quote */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <blockquote className="text-2xl md:text-3xl font-light text-off-white/90 leading-relaxed">
            &ldquo;High-energy records with unmistakable depth. 
            <span className="text-glitch-green font-semibold"> Cutting-edge</span> yet 
            <span className="text-glitch-cyan font-semibold"> timeless</span>.&rdquo;
          </blockquote>
          <div className="mt-6 text-steel font-semibold tracking-wider">
            — BOYAN &ldquo;65&rdquo; STANCHEV
          </div>
        </motion.div>

      </div>
    </section>
  );
} 