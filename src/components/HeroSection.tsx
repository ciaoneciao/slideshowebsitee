'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-dark">
      {/* Clean Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/banner.jpeg"
          alt="65lanta Studio"
          fill
          className="object-cover object-center opacity-25"
          priority
          quality={90}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/60 via-dark/40 to-dark/80" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-6xl px-6">
        {/* Main Title */}
        <motion.h1 
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-off-white mb-8 tracking-tight leading-none"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          65LANTA
        </motion.h1>

        {/* Subtitle Tags */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="px-6 py-3 bg-glitch-green/20 text-glitch-green border border-glitch-green/30 rounded-full font-bold text-sm md:text-base uppercase tracking-wider">
            🎧 AUDIO ENGINEER
          </span>
          <span className="px-6 py-3 bg-glitch-magenta/20 text-glitch-magenta border border-glitch-magenta/30 rounded-full font-bold text-sm md:text-base uppercase tracking-wider">
            🎚️ MIX & MASTERING
          </span>
          <span className="px-6 py-3 bg-glitch-cyan/20 text-glitch-cyan border border-glitch-cyan/30 rounded-full font-bold text-sm md:text-base uppercase tracking-wider">
            🔊 SOUND DESIGN
          </span>
        </motion.div>

        {/* Grammy Badge */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-500/20 to-yellow-400/20 border border-amber-400/40 rounded-full text-amber-400 font-semibold">
            🏆 GRAMMY NOMINATED PRODUCER
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.a
            href="#latest-drops"
            className="px-8 py-4 bg-glitch-green text-dark font-bold text-lg rounded-lg hover:bg-glitch-green/90 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-glitch-green/30"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            🎵 LISTEN TO LATEST DROPS
          </motion.a>
          <motion.a
            href="#subscribe"
            className="px-8 py-4 border-2 border-off-white text-off-white font-bold text-lg rounded-lg hover:bg-off-white hover:text-dark transition-all duration-300 transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            💎 GET PREMIUM BEATS
          </motion.a>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-2 h-20 bg-gradient-to-b from-glitch-green to-transparent opacity-60 hidden md:block" />
      <div className="absolute bottom-1/4 right-10 w-2 h-16 bg-gradient-to-t from-glitch-magenta to-transparent opacity-60 hidden md:block" />
      
      {/* Scroll Hint */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 text-center"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="text-steel text-xs uppercase tracking-wider mb-2">Scroll for more</div>
        <div className="w-1 h-6 bg-gradient-to-b from-glitch-green to-transparent rounded-full mx-auto" />
      </motion.div>
    </section>
  );
} 