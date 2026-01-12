import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Offers from './components/offers';
import Experts from './components/experts';
import Products from './components/products'; 


export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <AboutUs />
      <Offers />
      <Experts />
      <Products />
    </main>
  );
}

