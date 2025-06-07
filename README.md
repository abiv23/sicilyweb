# 🇮🇹 Sicily Family Adventure - Angular 19 Trip Planning App

A beautiful, dark-themed Angular 19 application for planning a family trip to Sicily, featuring Italian language learning resources and comprehensive travel planning tools.

## ✨ Features

- **🎨 Italian-Inspired Dark Theme**: Elegant dark mode design with colors inspired by the Italian flag and Sicilian landscapes
- **🗺️ Trip Planning**: Detailed 10-day Sicily itinerary with UNESCO sites, luxury experiences, and family-friendly activities
- **🗣️ Italian Language Learning**: Comprehensive guide with resources, pricing, and Sicily-specific cultural tips
- **📱 Responsive Design**: Fully responsive interface optimized for all devices
- **🎢 Interactive Carousel**: Beautiful image carousel showcasing Sicily's attractions
- **🧭 Smart Navigation**: Intuitive navigation with mobile-friendly menu

## 🎨 Design Theme

The application features a sophisticated dark mode design with carefully chosen colors:

- **Italian Flag Colors**: Deep greens, elegant whites, and rich reds
- **Sicilian Landscape**: Sunset oranges, sea blues, olive greens, and wine reds
- **Typography**: Elegant serif fonts (Playfair Display) for headings and clean sans-serif (Inter) for body text
- **Visual Effects**: Glass morphism, backdrop blur effects, and smooth animations

## 🚀 Technology Stack

- **Framework**: Angular 19.2.0
- **UI Components**: Angular Material 19.2.18
- **Styling**: Tailwind CSS 3.4.0 with custom Italian-themed configuration
- **Carousel**: Swiper.js 11.2.8
- **SSR**: Angular Universal with Express server
- **Build Tools**: Angular CLI 19.2.14

## 📋 Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager
- Angular CLI (optional, for additional commands)

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone [repository-url]
   cd sicily-angular-19
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   # or
   ng serve
   ```

4. **Open your browser**
   Navigate to `http://localhost:4200/`

## 📝 Available Scripts

| Script | Description |
|--------|-------------|
| `npm start` | Start development server |
| `npm run build` | Build for production |
| `npm run watch` | Build in watch mode |
| `npm test` | Run unit tests |
| `npm run serve:ssr:sicily-angular-19` | Serve SSR build |

## 📁 Project Structure

```
src/
├── app/
│   ├── components/
│   │   └── header/           # Navigation header component
│   ├── pages/
│   │   ├── home/            # Landing page with carousel
│   │   ├── planning/        # Trip planning details
│   │   └── language/        # Italian learning resources
│   ├── app.component.*      # Root component
│   ├── app.config.*         # Application configuration
│   └── app.routes.ts        # Route definitions
├── styles.css               # Global styles with Italian theme
└── index.html              # Main HTML file
```

## 🎯 Key Components

### 🏠 Home Component
- Interactive Swiper carousel with Sicily images
- Hero section with Italian text
- Feature cards highlighting app sections
- Sicily highlights showcase

### 🗺️ Planning Component
- Trip overview and logistics
- Flight information comparison
- Budget and accommodation details
- Preview of detailed itinerary (coming soon)

### 🗣️ Language Component
- Essential Italian phrases for travelers
- Learning resource recommendations with pricing
- Sicily-specific cultural tips
- 1.5-year learning timeline

### 🧭 Header Component
- Responsive navigation with Italian labels
- Mobile-friendly hamburger menu
- Active route highlighting
- Glass morphism effects

## 🎨 Customization

### Color Scheme
The app uses a custom Tailwind configuration with Italian-inspired colors defined in `tailwind.config.js`:

```javascript
colors: {
  'italian-green': '#1a5f3f',
  'italian-red': '#c41e3a',
  'sicilian-sunset': '#d97706',
  'sicilian-sea': '#0369a1',
  // ... more colors
}
```

### Typography
- **Headings**: Playfair Display (serif) for elegance
- **Body Text**: Inter (sans-serif) for readability
- **Responsive**: Automatically adjusts for mobile devices

## 🌐 Internationalization

The app features bilingual content:
- English for technical information and navigation
- Italian for authentic Sicily experience and cultural immersion

## 📱 Mobile Responsiveness

- Fully responsive design tested on all device sizes
- Mobile-optimized navigation menu
- Touch-friendly interactive elements
- Optimized image loading for mobile connections

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### SSR Build
```bash
ng build --configuration production
npm run serve:ssr:sicily-angular-19
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- **Unsplash**: Beautiful Sicily photography
- **Angular Team**: Amazing framework and tools
- **Tailwind CSS**: Excellent utility-first CSS framework
- **Swiper.js**: Smooth carousel functionality
- **Material Design**: UI component inspiration

## 📞 Support

For questions or support, please open an issue in the repository or contact the development team.

---

**Buon viaggio in Sicilia! 🇮🇹✈️**