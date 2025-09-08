# 65LANTA - Official Website

Modern, high-performance website for **65lanta** (Boyan "65" Stanchev), Grammy-nominated producer and audio engineer.

## 🎵 About

Professional portfolio and landing page for 65lanta, featuring:
- **Grammy-nominated producer & engineer**
- **Founder of OctoGvng collective**
- **Atlanta-based audio powerhouse**
- **Precision. Passion. Innovation.**

## 🚀 Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations
- **Lucide React** - Modern icons

## 🎨 Design Features

- **Dark theme** with glitch/digital aesthetics
- **Mobile-first responsive design**
- **Optimized performance** (Lighthouse 90+)
- **SEO optimized** with structured data
- **Smooth animations** without distraction
- **Professional typography** with Geist fonts

## 📱 Sections

### 🎯 Hero Section
- Impact banner with 65lanta branding
- Professional tagline and credentials
- Animated glitch effects

### 🎵 Latest Drops
- **8 HANDS IN** - 65LANTA × OctoGvng × BSlime
- **DEDICATION 6.5** - Solo project
- **SCAM CITY LANTA** - Latest release
- Clickable artwork links to streaming platforms

### 👤 About
- Professional biography
- Grammy nomination highlight
- Atlanta base and OctoGvng founder
- Animated waveform visualization

### 🤝 Partners
- Industry-leading audio tool partnerships
- Hardware, plugins, and software
- Interactive logo grid with hover effects

### 📧 Subscribe to Send Beats
- Direct access to exclusive beats service
- Professional collaboration opportunities
- Whop integration for subscriptions

### 🎸 Past Projects
- Young Thug (Grammy-winning collaboration)
- Lil Keed (YSL Records)
- Doechii, Lil Got It, Ayzha, and more
- Achievement highlights and certifications

### 🔗 Connect
- SoundCloud, Twitch, Instagram
- Twitter/X, Facebook, TikTok
- Mixed & Mastered portfolio
- Direct contact options

## 🖼️ Asset Organization

```
public/
├── images/          # Hero banners and main images
│   └── banner.jpeg
├── projects/        # Album artwork and project images
│   ├── 8HandsIn - Artwork.jpg
│   ├── DEDICATION 65 ART.JPG
│   ├── Scam city lanta.JPG
│   └── [other project images]
└── logos/           # Partner brand logos
    ├── Antelope.png
    ├── WAVES LOGO.png
    └── [other partner logos]
```

## 🛠️ Development

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
npm install
```

### Development Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
npm run start
```

### Linting
```bash
npm run lint
```

## 🎯 Performance Optimizations

- **Image optimization** with Next.js Image component
- **Lazy loading** for all images and components
- **Code splitting** with dynamic imports
- **Minimal JavaScript bundle** size
- **Mobile-first responsive design**
- **Smooth scroll behavior**
- **Efficient animations** with Framer Motion

## 📊 SEO Features

- **Structured metadata** for all pages
- **Open Graph** tags for social sharing
- **Twitter Card** optimization
- **Semantic HTML** structure
- **Performance optimized** (Core Web Vitals)
- **Accessibility compliant**

## 🎵 External Links

- **SoundCloud**: https://soundcloud.com/65lanta
- **Twitch**: https://www.twitch.tv/65lanta  
- **Instagram**: https://www.instagram.com/65lanta
- **Twitter/X**: https://x.com/65lanta
- **Subscribe Service**: https://whop.com/subscribe-to-send-beats/

## 🏗️ Customization

### Adding New Projects
1. Add image to `public/projects/`
2. Update `latestProjects` array in `LatestDrops.tsx`
3. Add streaming/purchase links

### Adding Partners
1. Add logo to `public/logos/`  
2. Update `partners` array in `PartnersSection.tsx`
3. Include category and name

### Styling Modifications
- Color palette: `tailwind.config.ts`
- Animations: `globals.css` and component files
- Typography: Geist fonts configured in `layout.tsx`

## 🎨 Brand Colors

```css
--dark: #0a0a0a
--charcoal: #1a1a1a  
--ash: #2a2a2a
--steel: #3a3a3a
--silver: #6a6a6a
--off-white: #f5f5f0
--glitch-green: #00ff41
--glitch-magenta: #ff0099
--glitch-cyan: #00d4ff
```

## 📄 License

© 2024 65lanta. All rights reserved.

---

**Precision. Passion. Innovation.**  
*Grammy-nominated producer & audio engineer from Atlanta, GA*
