'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

interface Partner {
  name: string;
  logo: string;
  category: string;
}

const partners: Partner[] = [
  { name: 'Antelope Audio', logo: '/logos/Antelope.png', category: 'Hardware' },
  { name: 'Dutch & Dutch', logo: '/logos/Copy-of-DD-600.png', category: 'Monitors' },
  { name: 'Baton', logo: '/logos/baton_logoAsset 1@2x.png', category: 'Hardware' },
  { name: 'Acustica Audio', logo: '/logos/Logo_Acustica (1).png', category: 'Plugins' },
  { name: 'McDSP', logo: '/logos/mcdsp_typeonly_black.jpg', category: 'Plugins' },
  { name: 'Waves', logo: '/logos/WAVES LOGO.png', category: 'Plugins' },
  { name: 'Auto-Tune', logo: '/logos/autotune.png', category: 'Plugins' },
  { name: 'XLN Audio', logo: '/logos/XLN.png', category: 'Plugins' },
  { name: 'Native Instruments', logo: '/logos/native_instruments.png', category: 'Software' },
  { name: 'iZotope', logo: '/logos/IZotope_logo.png', category: 'Plugins' },
  { name: 'Plugin Alliance', logo: '/logos/plugin-alliance-logo-preview.png', category: 'Plugins' },
  { name: 'Sonnox', logo: '/logos/Sonnox-Hero.png', category: 'Plugins' },
  { name: 'D.W. Fearn', logo: '/logos/D.W.+Fearn_Hazelrigg+Industries+Logo.jpg', category: 'Hardware' },
  { name: 'Flock Audio', logo: '/logos/FLOCK.png', category: 'Hardware' },
  { name: 'Bettermaker', logo: '/logos/Bettermaker_3Black.jpeg', category: 'Hardware' },
  { name: 'Avid', logo: '/logos/Avid_logo_purple_2017.svg.png', category: 'Software' },
  { name: 'Bulldog CPU', logo: '/logos/Bulldog-CPUw.png', category: 'Hardware' },
];

export default function PartnersSection() {
  return (
    <section id="partners" className="py-12 bg-ash">
      <div className="section-padding container-width">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl sm:text-6xl font-bold mb-4">
            <span className="gradient-accent">PARTNERS</span>
          </h2>
          <p className="text-silver text-lg max-w-2xl mx-auto">
            Cutting-edge tools and trusted partnerships that power world-class production
          </p>
        </motion.div>

        {/* Partners Carousel */}
        <div className="relative overflow-hidden">
          <motion.div 
            className="flex gap-4"
            animate={{
              x: [0, -1200],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {/* Duplicate partners for seamless loop */}
            {[...partners, ...partners].map((partner, index) => (
              <motion.div
                key={`${partner.name}-${index}`}
                className="group flex-shrink-0"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                {/* Partner Card */}
                <div className="relative w-28 h-28 bg-dark border border-steel/20 p-3 flex items-center justify-center hover:border-glitch-green/50 transition-all duration-300 hover:bg-charcoal rounded-lg">
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    width={64}
                    height={64}
                    className="object-contain group-hover:scale-110 transition-transform duration-300 filter grayscale group-hover:grayscale-0 max-w-full max-h-full"
                    sizes="100px"
                  />

                  {/* Hover Overlay with Info */}
                  <div className="absolute inset-0 bg-dark/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-2">
                    <div className="text-center">
                      <div className="text-off-white font-semibold text-xs mb-1">
                        {partner.name}
                      </div>
                      <div className="text-glitch-green text-xs uppercase tracking-wider">
                        {partner.category}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-silver text-sm max-w-3xl mx-auto">
            Professional audio engineering requires the finest tools. These partnerships represent 
            years of collaboration with industry-leading manufacturers, ensuring every production 
            meets the highest standards of sonic excellence.
          </p>
        </motion.div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              x: [-100, 100, -100],
              opacity: [0, 0.1, 0]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'linear'
            }}
            className="absolute top-1/4 -left-20 w-40 h-40 bg-glitch-green/5 blur-3xl rounded-full"
          />
          <motion.div
            animate={{
              x: [100, -100, 100],
              opacity: [0, 0.1, 0]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'linear',
              delay: 2
            }}
            className="absolute bottom-1/4 -right-20 w-60 h-60 bg-glitch-cyan/5 blur-3xl rounded-full"
          />
        </div>
      </div>
    </section>
  );
} 