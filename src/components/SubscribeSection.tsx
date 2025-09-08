'use client';

import { motion } from 'framer-motion';
import { Send, Music, Zap, ExternalLink } from 'lucide-react';

export default function SubscribeSection() {
  return (
    <section id="subscribe" className="py-20 bg-dark relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 digital-noise opacity-30" />
      
      <div className="section-padding container-width relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-5xl sm:text-6xl font-bold mb-6">
              <span className="gradient-accent">SUBSCRIBE TO</span>
              <br />
              <span className="text-off-white">SEND BEATS</span>
            </h2>
            <p className="text-silver text-lg max-w-2xl mx-auto leading-relaxed">
              Get exclusive access to premium beats and production services. 
              Connect directly with 65lanta for custom productions and collaborations.
            </p>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid md:grid-cols-3 gap-8 mb-12"
          >
            <div className="flex flex-col items-center text-center p-6 bg-charcoal border border-steel/30 hover:border-glitch-green/50 transition-colors duration-300">
              <div className="p-3 bg-glitch-green/10 text-glitch-green mb-4 rounded-full">
                <Music size={24} />
              </div>
              <h3 className="text-off-white font-semibold mb-2">Premium Beats</h3>
              <p className="text-silver text-sm">
                Access to exclusive, high-quality instrumentals crafted by Grammy-nominated producer 65lanta
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-charcoal border border-steel/30 hover:border-glitch-cyan/50 transition-colors duration-300">
              <div className="p-3 bg-glitch-cyan/10 text-glitch-cyan mb-4 rounded-full">
                <Zap size={24} />
              </div>
              <h3 className="text-off-white font-semibold mb-2">Fast Delivery</h3>
              <p className="text-silver text-sm">
                Quick turnaround times with professional-grade production quality and industry-standard formats
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-charcoal border border-steel/30 hover:border-glitch-magenta/50 transition-colors duration-300">
              <div className="p-3 bg-glitch-magenta/10 text-glitch-magenta mb-4 rounded-full">
                <Send size={24} />
              </div>
              <h3 className="text-off-white font-semibold mb-2">Direct Access</h3>
              <p className="text-silver text-sm">
                Direct communication channel for custom requests, collaborations, and exclusive opportunities
              </p>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a
              href="https://whop.com/subscribe-to-send-beats/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-glitch-green to-glitch-cyan text-dark px-8 py-4 font-bold text-lg uppercase tracking-wider hover:shadow-2xl hover:shadow-glitch-green/30 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <Send size={24} />
              Subscribe Now
              <ExternalLink size={20} />
            </a>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 text-steel text-sm"
          >
            <p>Join hundreds of artists already using 65lanta&apos;s exclusive beat service</p>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity,
            ease: 'linear'
          }}
          className="absolute top-20 left-10 w-16 h-16 border border-glitch-green/20 rotate-45"
        />
        
        <motion.div
          animate={{ 
            rotate: [360, 0],
            scale: [1, 0.9, 1]
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity,
            ease: 'linear'
          }}
          className="absolute bottom-20 right-10 w-12 h-12 border border-glitch-cyan/20"
        />

        <motion.div
          animate={{ 
            y: [-20, 20, -20],
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="absolute top-1/2 left-20 w-2 h-2 bg-glitch-magenta rounded-full"
        />
      </div>
    </section>
  );
} 