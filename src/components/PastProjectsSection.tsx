'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Award, Music } from 'lucide-react';

interface PastProject {
  id: string;
  artist: string;
  image: string;
  category: string;
  description?: string;
  isHighlight?: boolean;
}

const pastProjects: PastProject[] = [
  {
    id: 'thug',
    artist: 'Young Thug',
    image: '/projects/thug .jpg',
    category: 'Mix & Master',
    description: 'Grammy-winning collaboration',
    isHighlight: true
  },
  {
    id: 'keed',
    artist: 'Lil Keed',
    image: '/projects/keed.png',
    category: 'Production',
    description: 'YSL Records collaboration',
    isHighlight: true
  },
  {
    id: 'doechii',
    artist: 'Doechii',
    image: '/projects/doechii.png',
    category: 'Mix & Master',
    description: 'Rising star production'
  },
  {
    id: 'gotit',
    artist: 'Lil Got It',
    image: '/projects/gotit 2.png',
    category: 'Production',
    description: 'Atlanta sound engineering'
  },
  {
    id: 'ayzha',
    artist: 'Ayzha',
    image: '/projects/ayzha.png',
    category: 'Mix & Master',
    description: 'Contemporary R&B production'
  },
  {
    id: 'cheater',
    artist: 'Cheater',
    image: '/projects/cheater.png',
    category: 'Sound Design',
    description: 'Experimental production'
  },
  {
    id: 'golddisk',
    artist: 'Gold Certification',
    image: '/projects/golddisk.JPG',
    category: 'Achievement',
    description: 'RIAA Gold certification',
    isHighlight: true
  }
];

export default function PastProjectsSection() {
  return (
    <section id="past-projects" className="py-16 bg-charcoal">
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
            <span className="gradient-accent">PAST PROJECTS</span>
          </h2>
          <p className="text-silver text-lg max-w-2xl mx-auto">
            A legacy of collaborations with chart-topping artists and industry legends. 
            Each project represents a commitment to sonic excellence.
          </p>
        </motion.div>

        {/* Projects Carousel */}
        <div className="relative">
          <motion.div 
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
            drag="x"
            dragConstraints={{ left: -800, right: 0 }}
          >
            {pastProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: 'easeOut'
                }}
                className={`group relative flex-shrink-0 ${project.isHighlight ? 'w-80' : 'w-60'}`}
                whileHover={{ scale: 1.05 }}
              >
                {/* Project Card */}
                <div className={`relative overflow-hidden bg-ash border border-steel/30 hover:border-glitch-green/50 transition-all duration-300 ${project.isHighlight ? 'aspect-[4/3]' : 'aspect-square'}`}>
                {/* Image */}
                <Image
                  src={project.image}
                  alt={`${project.artist} collaboration`}
                  fill
                  className="project-image group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/60 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                {/* Highlight Badge */}
                {project.isHighlight && (
                  <div className="absolute top-4 left-4 flex items-center gap-2 bg-glitch-green/90 text-dark px-3 py-1 text-xs font-bold uppercase tracking-wider">
                    <Award size={12} />
                    Featured
                  </div>
                )}

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-off-white font-bold text-xl mb-2">
                      {project.artist}
                    </h3>
                    
                    <div className="flex items-center gap-2 mb-2">
                      <Music size={14} className="text-glitch-cyan" />
                      <span className="text-glitch-cyan text-sm font-medium">
                        {project.category}
                      </span>
                    </div>

                    {project.description && (
                      <p className="text-silver text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                        {project.description}
                      </p>
                    )}
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-glitch-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-screen" />
              </div>
                          </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center"
        >
          <div className="space-y-2">
            <div className="text-4xl font-bold gradient-accent">100+</div>
            <div className="text-silver">Projects Complete</div>
          </div>
          
          <div className="space-y-2">
            <div className="text-4xl font-bold gradient-accent">50M+</div>
            <div className="text-silver">Streams Generated</div>
          </div>
          
          <div className="space-y-2">
            <div className="text-4xl font-bold gradient-accent">15+</div>
            <div className="text-silver">Chart Positions</div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-silver text-lg mb-6">
            Ready to create your next hit? Let&apos;s collaborate.
          </p>
          <button className="btn-secondary hover-glitch">
            Start Your Project
          </button>
        </motion.div>
      </div>
    </section>
  );
} 