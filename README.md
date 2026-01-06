# ErrorZero Digital - Premium Digital Agency Website

A premium, animated digital agency website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion. Features smooth page transitions, scroll reveal animations, magnetic buttons, and an elegant fullscreen circular menu.

## 🚀 Tech Stack

- **Next.js 14+** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**
- **next/font** (Inter font family)
- **next/image** (Optimized images)

## 📦 Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Project Structure

```
├── app/
│   ├── about/
│   │   └── page.tsx          # About page
│   ├── contact/
│   │   └── page.tsx          # Contact page with form
│   ├── services/
│   │   └── page.tsx          # Services listing page
│   ├── work/
│   │   └── page.tsx          # Portfolio/work showcase
│   ├── globals.css           # Global styles, Tailwind, noise overlay
│   ├── layout.tsx            # Root layout with fonts and metadata
│   └── page.tsx              # Home page
├── components/
│   ├── CircleMenuButton.tsx  # Fixed circular menu button with glow
│   ├── Container.tsx         # Max-width container component
│   ├── Footer.tsx            # Site footer with contact info
│   ├── MagneticButton.tsx    # Magnetic button with cursor follow
│   ├── OverlayMenu.tsx       # Fullscreen overlay menu
│   ├── PageTransitionProvider.tsx # Page transition wrapper
│   ├── SectionReveal.tsx     # Scroll reveal animation wrapper
│   ├── SiteShell.tsx         # Main layout wrapper
│   └── TransitionLayer.tsx   # Page transition wipe layer
├── public/
│   └── brand/
│       ├── logo.jpg          # ErrorZero logo
│       └── hero-bg.jpg        # Hero background image
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── README.md
```

## 🎨 Features

### Navigation
- **Circular Menu Button**: Fixed top-right button with subtle glow that expands into a fullscreen overlay
- **Fullscreen Overlay Menu**: Animated circle expansion from button position with staggered menu items
- **Keyboard Support**: ESC key closes menu, focus trap inside menu, focus management
- **Click Outside**: Clicking outside the menu closes it
- **Body Scroll Lock**: Prevents scrolling when menu is open

### Page Transitions
- Smooth wipe transitions between routes using TransitionLayer
- Fade and slide animations for page content
- No jarring layout shifts
- Works seamlessly across all pages

### Scroll Reveal Animations
- Sections fade in and translate up on scroll
- Uses Intersection Observer via Framer Motion's `useInView` hook
- Staggered delays for sequential reveals
- Parallax effect on hero background

### Micro-Interactions
- **Magnetic Buttons**: Primary CTAs follow cursor subtly
- **Card Tilt**: Cards tilt on hover with 3D perspective
- **Link Underlines**: Animated underline on hover
- **Hover States**: Smooth scale, translate, and glow effects

### Design System
- **Theme**: Dark premium theme (#0a0a0a) with cyan/blue highlights (#00d4ff, #06b6d4) and minimal orange accents
- **Typography**: Large, bold headlines with tight tracking, readable body text
- **Spacing**: Generous whitespace throughout
- **Borders**: Subtle 1px borders with glass panels (backdrop-blur)
- **Noise Overlay**: CSS grain/noise texture across the entire site
- **Colors**: White text on dark background with opacity variations

## 🎭 Animation Details

### Menu Overlay
- Circle button scales and transforms into fullscreen overlay
- Expansion animation from button position (top-right)
- Background fades in with backdrop blur
- Menu items animate in sequentially with stagger effect
- Smooth exit animations when closing

### Page Transitions
- TransitionLayer wipes across screen (dark panel with blur)
- Old page fades/slides out
- New page fades/slides in
- Duration: 0.6s with custom easing curve

### Scroll Reveal
- Opacity: 0 → 1
- Y translation: 50px → 0
- Duration: 0.8s with custom easing
- Triggers when element enters viewport (100px margin)

### Micro-Interactions
- **Magnetic Buttons**: Subtle cursor follow (max 30px distance, 0.3 strength)
- **Card Tilt**: Perspective(1000px) with rotateX(2deg) rotateY(-2deg) translateY(-4px)
- **Hover Effects**: Scale 1.05, translateY(-2px), soft shadows

## 📄 Pages

- **Home**: Hero with background image, services preview, marquee strip, work showcase, process, CTA
- **Services**: Detailed service listings with deliverables and turnaround times
- **Work**: Portfolio grid with category filtering and featured case
- **About**: Mission, approach, values, and "Why ErrorZero" section
- **Contact**: Contact form with client-side validation and direct contact cards (WhatsApp, Email, Facebook)

## 📞 Contact Information

- **Email**: errorzorodigital@gmail.com
- **WhatsApp**: 0705278929 (wa.me link)
- **Facebook**: https://web.facebook.com/share/p/1C3zHvYNUy/

## ♿ Accessibility

- Keyboard navigable menu
- Focus visible states on all interactive elements
- ARIA labels on menu button
- Semantic HTML structure
- Proper heading hierarchy
- Focus trap in overlay menu

## 🚢 Build & Deploy

```bash
# Build for production
npm run build

# Start production server
npm start
```

## 📝 Notes

- Brand assets (logo.jpg, hero-bg.jpg) must be placed in `public/brand/`
- Contact form shows success toast but doesn't actually send emails (no backend)
- All animations are optimized for performance
- Noise overlay uses CSS SVG filter for grain texture
- Sticky section on Home page (Services preview) for premium feel

## 📄 License

This project is created for ErrorZero Digital.
