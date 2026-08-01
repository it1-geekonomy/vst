# VST Group Website

A modern, responsive website for VST Group - "Building Tomorrow on a Century of Trust". This is a Next.js 15 application built with TypeScript, Tailwind CSS, and modern web technologies.

## 🏢 About VST Group

VST Group is a diversified business conglomerate with operations across multiple sectors including:
- **Automotive Franchises** - Premium car dealerships and services
- **Auto Parts** - Automotive parts and components
- **Manufacturing** - Industrial manufacturing solutions
- **Education** - Educational institutions and training programs
- **Corporate Philanthropy** - Social responsibility initiatives

## 🚀 Tech Stack


### Core Technologies
- **Next.js 15.2.1** - React framework with App Router
- **React 18.2.0** - UI library
- **TypeScript 5** - Type-safe JavaScript
- **Tailwind CSS 4** - Utility-first CSS framework

### Key Dependencies
- **Framer Motion 12.10.5** - Animation library
- **Swiper 11.2.10** - Touch slider component
- **React Hook Form 7.56.3** - Form handling
- **React Hot Toast 2.5.2** - Toast notifications
- **Leaflet 1.9.4** - Interactive maps
- **Lucide React 0.488.0** - Icon library
- **Axios 1.8.4** - HTTP client
- **Resend 4.3.0** - Email service

### Development Tools
- **pnpm** - Package manager
- **ESLint** - Code linting
- **Turbopack** - Fast bundler for development

## 📁 Project Structure

```
vst/
├── src/
│   ├── app/                          # Next.js App Router pages
│   │   ├── about-us/                 # About Us page
│   │   ├── auto-parts/               # Auto Parts business page
│   │   ├── automotive-franchises/    # Automotive franchises section
│   │   │   ├── [brand]/              # Dynamic brand pages
│   │   │   └── [slide]/              # Dynamic slide pages
│   │   ├── career/                   # Careers page
│   │   ├── contact-us/               # Contact page
│   │   ├── Corporate-philanthropy/   # CSR page
│   │   ├── education/                # Education business page
│   │   ├── manufacture/              # Manufacturing page
│   │   ├── news-media/               # News and media page
│   │   ├── news-sub/                 # News subscription page
│   │   ├── components/               # Page-specific components
│   │   ├── public/                   # Public assets and components
│   │   │   ├── business-sector-Black/ # Black theme business icons
│   │   │   ├── business-sector-White/ # White theme business icons
│   │   │   ├── careers/              # Career-related assets
│   │   │   ├── common/               # Common components
│   │   │   ├── contact-us/           # Contact page assets
│   │   │   ├── education/            # Education assets
│   │   │   ├── faranchies/           # Franchise assets
│   │   │   ├── hero-section/         # Hero section assets
│   │   │   ├── images/               # Image assets
│   │   │   ├── logos/                # Logo components
│   │   │   ├── making-a-difference/  # CSR assets
│   │   │   ├── news-and-media/       # News assets
│   │   │   ├── tillers/              # Tiller assets
│   │   │   └── vst-auto-parts/       # Auto parts assets
│   │   ├── globals.css               # Global styles
│   │   ├── layout.tsx                # Root layout
│   │   └── page.tsx                  # Homepage
│   ├── components/                   # Reusable components
│   │   ├── automotiveFranchises/     # Automotive franchise components
│   │   ├── ContactUs.tsx             # Contact form component
│   │   ├── Footer.tsx                # Footer component
│   │   ├── Hero.tsx                  # Hero section component
│   │   ├── Navbar.tsx                # Navigation component
│   │   ├── News.tsx                  # News component
│   │   ├── Timeline.tsx              # Timeline component
│   │   └── VideoPlayer.tsx           # Video player component
│   ├── data/                         # Data files
│   │   └── initiatives.ts            # CSR initiatives data
│   ├── styles/                       # Additional styles
│   │   └── initiatives.css           # Initiatives specific styles
│   └── types/                        # TypeScript type definitions
│       └── leaflet.d.ts              # Leaflet type definitions
├── pages/                            # API routes (legacy)
│   └── api/                          # API endpoints
│       ├── contactEmail.ts           # Contact email API
│       └── sendEmail.ts              # Email sending API
├── public/                           # Static assets
│   ├── imagesanime/                  # Animated images
│   ├── Roc-Grotesk/                  # Custom font files
│   ├── CarVideo.mp4                  # Car video
│   ├── ContactUsLogo.mp4             # Contact logo video
│   └── [various assets]              # Other static files
├── package.json                      # Dependencies and scripts
├── tailwind.config.js                # Tailwind configuration
├── next.config.js                    # Next.js configuration
├── tsconfig.json                     # TypeScript configuration
└── postcss.config.mjs                # PostCSS configuration
```

## 🎨 Design System

### Typography
- **Primary Font**: Roc Grotesk (custom font family)
- **Secondary Font**: Geist (Google Fonts)
- **Responsive Typography**: Fluid font sizing from 12px to 223px

### Color Scheme
- **Primary**: Black (#000000)
- **Secondary**: Dark Gray (#101010)
- **Accent**: Orange (for highlights and CTAs)

### Responsive Design
- Mobile-first approach
- Fluid typography scaling
- Responsive breakpoints: 300px to 1920px

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm/yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone [repository-url]
   cd vst
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   RESEND_API_KEY=your_resend_api_key
   RECAPTCHA_SITE_KEY=your_recaptcha_site_key
   RECAPTCHA_SECRET_KEY=your_recaptcha_secret_key
   ```

4. **Run the development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Available Scripts

- `pnpm dev` - Start development server with Turbopack
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## 🏗️ Architecture

### App Router Structure
The application uses Next.js 15 App Router with the following structure:
- **Layout**: Global layout with navigation and footer
- **Pages**: Individual route pages
- **Components**: Reusable UI components
- **API Routes**: Server-side API endpoints

### Component Architecture
- **Atomic Design**: Components are organized by complexity
- **Composition**: Components are built using composition patterns
- **Props Interface**: Strongly typed props with TypeScript

### State Management
- **Local State**: React hooks for component state
- **Form State**: React Hook Form for form management
- **Global State**: Context API for shared state (if needed)

## 🎯 Key Features

### Homepage
- Hero section with video background
- Business sectors showcase
- Milestone timeline
- Life at VST section
- Empowering scroll section

### Business Pages
- **Automotive Franchises**: Brand showcase with interactive sliders
- **Auto Parts**: Product catalog and services
- **Manufacturing**: Industrial solutions
- **Education**: Educational programs and institutions
- **Corporate Philanthropy**: CSR initiatives

### Interactive Elements
- **Maps**: Interactive location maps using Leaflet
- **Forms**: Contact forms with validation and reCAPTCHA
- **Sliders**: Touch-enabled sliders with Swiper
- **Animations**: Smooth animations with Framer Motion

### Performance Optimizations
- **Image Optimization**: Next.js Image component
- **Font Optimization**: Next.js font optimization
- **Code Splitting**: Automatic code splitting
- **Turbopack**: Fast development bundling

## 📧 API Endpoints

### Contact Form
- `POST /api/contactEmail` - Handle contact form submissions
- `POST /api/sendEmail` - Send emails via Resend

## 🎨 Styling Guidelines

### CSS Architecture
- **Tailwind CSS**: Utility-first approach
- **Custom CSS**: Component-specific styles when needed
- **Responsive Design**: Mobile-first responsive design

### Component Styling
- Use Tailwind utility classes for styling
- Create custom components for reusable patterns
- Maintain consistent spacing and typography

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Other Platforms alternative of versel
<!-- - **Netlify**: Compatible with Next.js
- **AWS Amplify**: Full-stack deployment
- **Docker**: Containerized deployment -->

## 🤝 Contributing

### Development Workflow
1. Create a feature branch from `main`
2. Make your changes
3. Test thoroughly
4. Submit a pull request

### Code Standards
- Follow TypeScript best practices
- Use ESLint for code quality
- Write meaningful commit messages
- Test on multiple devices and browsers

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Configuration Files

### Next.js Config (`next.config.js`)
- Image optimization settings
- Font optimization
- Custom webpack configuration

### Tailwind Config (`tailwind.config.js`)
- Custom font families
- Responsive typography
- Content paths

### TypeScript Config (`tsconfig.json`)
- Strict type checking
- Path aliases
- Module resolution

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [React Hook Form Documentation](https://react-hook-form.com/)

## 📞 Support

For technical support or questions about the codebase:
- Create an issue in the repository
- Contact the development team
- Check the documentation

## 📄 License

This project is proprietary to VST Group. All rights reserved.

---

**Built with ❤️ for VST Group***
