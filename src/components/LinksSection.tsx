'use client';

import { motion } from 'framer-motion';
import { 
  ExternalLink, 
  Instagram, 
  Facebook, 
  Youtube,
  Twitch,
  Music,
  Hash
} from 'lucide-react';

interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
  color: string;
  description: string;
}

const socialLinks: SocialLink[] = [
  {
    name: 'SoundCloud',
    url: 'https://soundcloud.com/65lanta',
    icon: <Music size={24} />,
    color: 'text-orange-500',
    description: 'Latest tracks and exclusive content'
  },
  {
    name: 'Twitch',
    url: 'https://www.twitch.tv/65lanta',
    icon: <Twitch size={24} />,
    color: 'text-purple-500',
    description: 'Live production sessions and beats'
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/65lanta',
    icon: <Instagram size={24} />,
    color: 'text-pink-500',
    description: 'Behind the scenes and studio life'
  },
  {
    name: 'X (Twitter)',
    url: 'https://x.com/65lanta',
    icon: <Hash size={24} />,
    color: 'text-blue-400',
    description: 'Industry updates and announcements'
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/profile.php?id=61558679065311',
    icon: <Facebook size={24} />,
    color: 'text-blue-600',
    description: 'Community and fan interactions'
  },
  {
    name: 'Mixed & Mastered',
    url: 'https://soundcloud.com/65lanta/sets/mixed-and-mastered',
    icon: <Music size={24} />,
    color: 'text-glitch-green',
    description: 'Portfolio of mixed and mastered tracks'
  },
  {
    name: 'TikTok',
    url: 'https://www.tiktok.com/@65lanta',
    icon: <Youtube size={24} />,
    color: 'text-red-500',
    description: 'Quick beats and production tips'
  }
];

export default function LinksSection() {
  return (
    <section id="links" className="py-20 bg-dark">
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
            <span className="gradient-accent">CONNECT</span>
          </h2>
          <p className="text-silver text-lg max-w-2xl mx-auto">
            Follow the journey across all platforms. From live sessions to exclusive drops, 
            stay connected with the latest from 65lanta.
          </p>
        </motion.div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.05,
                ease: 'easeOut'
              }}
              className="group block p-6 bg-charcoal border border-steel/30 hover:border-glitch-green/50 transition-all duration-300 hover:bg-ash"
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 bg-dark rounded-lg ${link.color} group-hover:scale-110 transition-transform duration-300`}>
                  {link.icon}
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-off-white font-semibold text-lg">
                      {link.name}
                    </h3>
                    <ExternalLink size={16} className="text-silver group-hover:text-glitch-green transition-colors duration-300" />
                  </div>
                  
                  <p className="text-silver text-sm leading-relaxed group-hover:text-off-white transition-colors duration-300">
                    {link.description}
                  </p>
                </div>
              </div>
              
              {/* Hover Effect Line */}
              <div className="w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-glitch-green to-glitch-cyan transition-all duration-300 mt-4" />
            </motion.a>
          ))}
        </div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center bg-charcoal border border-steel/20 p-8"
        >
          <h3 className="text-2xl font-bold text-off-white mb-4">
            Ready to Work Together?
          </h3>
          <p className="text-silver mb-6 max-w-2xl mx-auto">
            For bookings, collaborations, and custom production inquiries, 
            reach out through any of the channels above or use the subscription service 
            for direct access to exclusive beats and priority communication.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://whop.com/subscribe-to-send-beats/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Book Session
            </a>
            <a 
              href="https://soundcloud.com/65lanta"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Listen to Portfolio
            </a>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16 pt-8 border-t border-steel/20"
        >
          <p className="text-steel text-sm mb-4">
            © 2024 65lanta. Grammy-nominated producer & audio engineer.
          </p>
          <p className="text-steel text-xs">
            Precision. Passion. Innovation. | Atlanta, GA | Founded OctoGvng 2020
          </p>
        </motion.div>
      </div>
    </section>
  );
} 