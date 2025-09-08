'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ExternalLink, Play } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  link: string;
  description: string;
  date: string;
}

const latestProjects: Project[] = [
  {
    id: '8handsin',
    title: '8 HANDS IN',
    subtitle: '65LANTA & OCTOGVNG × BSLIME',
    image: '/projects/8HandsIn - Artwork.jpg',
    link: 'https://ffm.to/8handsin',
    description: 'Grammy nominated producer 65lanta and global producer collective OctoGvng release new EP with Young Stoner Life Records artist BSlime.',
    date: 'December 2024'
  },
  {
    id: 'dedication',
    title: 'DEDICATION 6.5',
    subtitle: '65LANTA',
    image: '/projects/DEDICATION 65 ART.JPG',
    link: 'https://soundcloud.com/65lanta/sets/dedication-65?si=221bf09aa4c742cf847bce9d7a091c1c&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
    description: 'Latest installment in the dedication series showcasing precision engineering and innovative sound design.',
    date: 'Recent'
  },
  {
    id: 'scamcity',
    title: 'SCAM CITY LANTA',
    subtitle: '65LANTA',
    image: '/projects/Scam city lanta.JPG',
    link: 'https://ffm.to/scamcitylanta',
    description: 'High-energy production with unmistakable depth, cutting-edge yet timeless sound.',
    date: 'Recent'
  }
];

export default function LatestDrops() {
  return (
    <section id="latest-drops" className="py-16 bg-charcoal">
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
            <span className="gradient-accent">LATEST DROPS</span>
          </h2>
          <p className="text-silver text-lg max-w-2xl mx-auto">
            Recent releases showcasing the evolution of sound engineering and creative production
          </p>
        </motion.div>

        {/* Projects Grid - Responsive and Compact */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {latestProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
              whileHover={{ y: -10 }}
            >
              {/* Project Card */}
              <div className="bg-ash border border-steel/30 overflow-hidden hover:border-glitch-green/50 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-glitch-green/20">
                {/* Image Container - Clickable */}
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block relative aspect-square overflow-hidden"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="project-image group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex items-center gap-2 text-glitch-green">
                      <Play size={24} />
                      <span className="font-semibold">LISTEN NOW</span>
                      <ExternalLink size={20} />
                    </div>
                  </div>
                </a>

                {/* Content */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-off-white mb-1">
                        {project.title}
                      </h3>
                      <p className="text-glitch-cyan text-sm font-medium">
                        {project.subtitle}
                      </p>
                    </div>
                    <span className="text-xs text-steel uppercase tracking-wider">
                      {project.date}
                    </span>
                  </div>
                  
                  <p className="text-silver text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Link Button */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-glitch-green hover:text-glitch-cyan transition-colors duration-300 text-sm font-semibold uppercase tracking-wider"
                  >
                    Stream Now
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info for 8 Hands In */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 bg-dark border border-steel/20 p-8"
        >
          <h3 className="text-2xl font-bold text-glitch-green mb-4">
            8 HANDS IN - FEATURED RELEASE
          </h3>
          <div className="grid md:grid-cols-2 gap-6 text-sm text-silver leading-relaxed">
            <div>
              <p className="mb-4">
                                 <strong className="text-off-white">65LANTA & GLOBAL PRODUCER COLLECTIVE OCTOGVNG</strong> release new EP 
                 &apos;8 HANDS IN&apos; with <strong className="text-off-white">BSLIME</strong> from Young Stoner Life Records.
              </p>
              <p className="mb-4">
                OctoGvng is a global collective of music producers founded in 2020 by Grammy nominated 
                                 producer/engineer, Boyan &quot;65&quot; Stanchev, bringing together artists from diverse backgrounds 
                spanning the globe.
              </p>
            </div>
            <div>
              <h4 className="text-off-white font-semibold mb-2">Tracklist:</h4>
              <ul className="space-y-1 text-xs">
                <li>CONSOLE - @matil1.2.3.4 x @hadrian15</li>
                <li>BACKSTAB (feat. Dono) - @slimekid.eu x @thirtytwobeatz</li>
                <li>GET YO MONEY - @matil1.2.3.4 x @3ddietoo</li>
                <li>LACED UP - @matil1.2.3.4 x @augusttru</li>
                <li>BELIEVE IT - @matil1.2.3.4 x @23dakai x antoine.ble</li>
                <li>LETHAL - @matil1.2.3.4</li>
                <li>CAN&apos;T PROMISE YOU I&apos;M SORRY - @matil1.2.3.4</li>
                <li>SAY - @matil1.2.3.4</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 