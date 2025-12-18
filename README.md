# 🚀 Portfolio - Thanushkanth Pathmanathan

[![React](https://img.shields.io/badge/React-18.2.0-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-3.0.0-646CFF.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.1.6-38B2AC.svg)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

> A modern, responsive portfolio website showcasing my professional experience, technical skills, and mobile applications built with React, Vite, and Tailwind CSS.

## ✨ Features

- 🎨 **Modern UI/UX** - Clean, professional design with gradient effects and smooth animations
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop viewing
- ⚡ **Fast Performance** - Built with Vite for lightning-fast development and build times
- 🎯 **Interactive Showcase** - Dynamic app showcase with screenshot galleries
- 🌙 **Dark Theme** - Elegant dark color scheme with cyan accent colors
- 📸 **Image Modal** - Click screenshots to view full-size images
- 🔄 **Smooth Scrolling** - Horizontal scrollable screenshot galleries on mobile
- 💼 **Professional Sections**:
  - Hero section with introduction
  - Technical skills showcase
  - Work experience timeline
  - Mobile app portfolio with screenshots
  - Contact section
  - Responsive footer

## 🛠️ Tech Stack

### Frontend
- **React 18.2.0** - UI library
- **Vite 3.0.0** - Build tool and dev server
- **Tailwind CSS 3.1.6** - Utility-first CSS framework
- **PostCSS & Autoprefixer** - CSS processing

### Tools & Libraries
- **ES6+ JavaScript** - Modern JavaScript features
- **React Hooks** - State management (useState)
- **CSS Gradients** - Modern gradient backgrounds
- **SVG Icons** - Scalable vector graphics

## 📦 Installation

### Prerequisites
- Node.js >= 20.x
- npm or yarn

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/thanush96/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 📂 Project Structure

```
Portfolio/
├── public/
│   └── apps/                  # App screenshots
│       ├── CeyGO/
│       ├── aMusicBible/
│       └── velto/
├── src/
│   ├── assets/                # Images, icons, and static files
│   ├── components/            # React components
│   │   ├── AppShowcase.jsx    # iOS app portfolio showcase
│   │   ├── Experience.jsx     # Work experience section
│   │   ├── Footer.jsx         # Footer component
│   │   ├── GetInTouch.jsx     # Contact CTA section
│   │   ├── Hero.jsx           # Hero/landing section
│   │   ├── Navbar.jsx         # Navigation bar
│   │   └── Skills.jsx         # Technical skills grid
│   ├── constants/             # App data and configuration
│   │   └── index.js           # Experience, skills, apps data
│   ├── App.jsx                # Main app component
│   ├── main.jsx               # App entry point
│   ├── index.css              # Global styles
│   └── style.js               # Tailwind utility classes
├── index.html
├── package.json
├── tailwind.config.cjs        # Tailwind configuration
├── postcss.config.cjs         # PostCSS configuration
└── vite.config.js             # Vite configuration
```

## 🎨 Customization

### Update Personal Information

Edit the data in `src/constants/index.js`:

```javascript
// Work Experience
export const features = [
  {
    id: "1",
    icon: companyLogo,
    title: "YOUR POSITION | COMPANY NAME",
    duration: "YYYY - YYYY",
    content: [
      {
        title: "Project Name",
        description: "Project description...",
        technology: ["Tech1", "Tech2", "Tech3"],
      },
    ],
  },
];

// iOS Apps
export const iosApps = [
  {
    id: "app-1",
    name: "Your App Name",
    platform: "iOS & Android",
    description: "App description...",
    appStoreLink: "https://apps.apple.com/...",
    technology: ["Flutter", "Firebase", "etc"],
    screenshots: [
      "/apps/yourapp/screenshot1.png",
      "/apps/yourapp/screenshot2.png",
    ],
  },
];
```

### Update Skills

Modify the `skills` array in `src/constants/index.js`:

```javascript
export const skills = [
  {
    id: "skill-1",
    logo: yourLogo,
    name: "Skill Name",
  },
];
```

### Styling

- **Colors**: Update in `tailwind.config.cjs`
- **Fonts**: Modify in `index.html` and `tailwind.config.cjs`
- **Global Styles**: Edit `src/index.css`

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project to [Vercel](https://vercel.com)
3. Deploy automatically

### Netlify

1. Push to GitHub
2. Connect repository to [Netlify](https://netlify.com)
3. Deploy

### Manual Build

```bash
npm run build
```

Upload the `dist` folder to your hosting provider.

## 📱 Responsive Breakpoints

```javascript
screens: {
  xs: "480px",
  ss: "620px",
  sm: "768px",
  md: "1060px",
  lg: "1200px",
  xl: "1700px",
}
```

## 🎯 Features in Detail

### App Showcase
- **Mobile**: Horizontal scrolling with snap points
- **Desktop**: Responsive grid layout (3-4 columns)
- **Modal**: Click screenshots for full-size view
- **Interactive**: Hover effects and smooth transitions

### Skills Section
- Compact grid layout (3-7 columns)
- Professional gradient cards
- Hover effects with glow
- Technology icons with labels

### Experience Timeline
- Company logos and duration
- Project details with technologies
- Gradient card backgrounds
- Smooth hover animations

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Thanushkanth Pathmanathan**
- Full Stack Developer
- 5+ Years Experience
- GitHub: [@thanush96](https://github.com/thanush96)
- Portfolio: [Live Demo](https://portfoliodhanush.vercel.app)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/thanush96/Portfolio/issues).

## ⭐ Show your support

Give a ⭐️ if you like this project!

---

**Built with ❤️ using React + Vite + Tailwind CSS**