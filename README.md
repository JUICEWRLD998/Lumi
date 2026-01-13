# 🌿 Lumi - Organic Skincare Website

A modern, responsive e-commerce website for premium organic skincare products built with Next.js, TypeScript, and Tailwind CSS. Lumi offers high-quality, natural skincare solutions crafted from 100% organic ingredients.

## ✨ Features

- **Hero Section** - Eye-catching landing section with email subscription
- **About Us** - Brand story and mission statement
- **Product Showcase** - Grid display of top-selling skincare products
- **Special Offers** - Highlighted promotional offers and product collections
- **Customer Testimonials** - Real customer reviews with ratings
- **Blog Section** - Educational content about skincare and wellness
- **Responsive Design** - Mobile-first approach with adaptive layouts
- **Smooth Animations** - Framer Motion animations throughout
- **Navigation** - Smooth scrolling navigation with mobile hamburger menu
- **Professional Footer** - Contact information and social media links

## 🚀 Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/) - React framework with server-side rendering
- **Language:** [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **Animations:** [Framer Motion](https://www.framer.com/motion/) - Production-ready animations
- **Icons:** [Lucide React](https://lucide.dev/) - Beautiful, customizable SVG icons
- **Image Optimization:** Next.js Image component for performance

## 📁 Project Structure

```
app/
├── components/
│   ├── AboutUs.tsx          # About section with animations
│   ├── application.tsx      # Application section
│   ├── blog.tsx             # Blog posts showcase
│   ├── experts.tsx          # Expert section
│   ├── Footer.tsx           # Footer with links and contact
│   ├── Hero.tsx             # Landing hero section
│   ├── Navbar.tsx           # Navigation bar with mobile menu
│   ├── offers.tsx           # Special offers section
│   ├── products.tsx         # Product grid
│   └── testimonials.tsx     # Customer testimonials
├── globals.css              # Global styles and smooth scrolling
├── layout.tsx               # Root layout
├── page.tsx                 # Home page
├── README.md                # This file
```

## 🎨 Key Sections

### Navbar
- Responsive navigation with smooth scrolling links
- Mobile hamburger menu with animated dropdown
- Search, user profile, and cart icons
- Animated hover effects on desktop and mobile

### Hero Section
- Large product image with animation
- Email subscription form
- Call-to-action button
- Responsive layout

### Products Section
- Grid layout showcasing 8 top-selling products
- Product image, title, price, and "Add to Cart" button
- Hover animations and smooth transitions
- Responsive grid (2-4 columns based on screen size)

### Testimonials
- Customer reviews with star ratings
- Customer avatars and roles
- Animated entrance effects
- Professional styling

### Blog Section
- Featured blog posts about skincare
- Date, comment count, and description
- Smooth card animations
- Clean, minimal design

### Footer
- Brand information
- Product categories and links
- Contact details (address, phone, email)
- Social media links
- Copyright information

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/JUICEWRLD998/Lumi.git
   cd lumi
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   - Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Dependencies

```json
{
  "next": "^14.0.0",
  "react": "^18.x",
  "react-dom": "^18.x",
  "framer-motion": "^10.x",
  "lucide-react": "^0.x",
  "typescript": "^5.x",
  "tailwindcss": "^3.x"
}
```

## 🎯 Usage

### Running the Development Server
```bash
npm run dev
```

### Building for Production
```bash
npm run build
npm run start
```

### Code Linting
```bash
npm run lint
```

## 🎨 Customization

### Colors
Update the color scheme in component classNames. Current palette:
- Primary Brown: `#5D4B41`
- Cream/Beige: `#F1DECD`
- Light Background: `#F8ECE2`
- Text Dark: `#3a2a1a`

### Fonts
- Playfair: Serif font for headings
- Inter: Sans-serif font for body text

### Animations
Adjust animation timings in Framer Motion variants:
- Duration: `duration: 0.6`
- Delays: `delay: index * 0.1`

## 🔧 Configuration

### Tailwind CSS
Configured in `tailwind.config.ts` with custom colors and fonts.

### TypeScript
Strict mode enabled in `tsconfig.json` for type safety.

### ESLint
Code quality enforced with ESLint configuration in `eslint.config.mjs`.

## 📱 Responsive Design

- **Mobile:** Optimized layouts for phones (< 768px)
- **Tablet:** Medium screen adaptations (768px - 1024px)
- **Desktop:** Full-featured experience (> 1024px)
- **Hamburger Menu:** Active on screens smaller than `lg` (1024px)

## 🌐 Navigation

Smooth scrolling to page sections via anchor links:
- Home: `#home`
- About: `#about`
- Offers: `#offers`
- Products: `#products`
- Testimonials: `#testimonials`
- Blog: `#blog`

## ✏️ Content Management

All content is currently hardcoded in components. To implement dynamic content:
1. Create API endpoints in `app/api/`
2. Fetch data from a CMS or database
3. Replace hardcoded arrays with API calls

## 🚀 Deployment

### Deploy on Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Deploy on Other Platforms
- Netlify
- AWS Amplify
- GitHub Pages (with static export)

## 📄 License

This project is open source and available under the MIT License.

## 👥 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

For support, email [info@lumiskincare.com](mailto:info@lumiskincare.com) or open an issue on GitHub.

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for utility-first styling
- Framer Motion for smooth animations
- Lucide for beautiful icons

---

**Built with ❤️ for healthy, beautiful skin.**
