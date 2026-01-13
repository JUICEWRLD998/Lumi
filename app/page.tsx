import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Offers from './components/offers';
import Experts from './components/experts';
import Products from './components/products'; 
import Application from './components/application';
import Testimonials from './components/testimonials';
import Blog from './components/blog';
import Footer from './components/footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <AboutUs />
      <Offers />
      <Experts />
      <Products />
      <Application />
      <Testimonials />
      <Blog />
      <Footer />
    </main>
  );
}

