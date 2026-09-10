import { Routes, Route, useLocation } from 'react-router-dom';
import { useLayoutEffect } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import FAQ from './pages/FAQ';
import TestimonialsPage from './pages/Testimonials';
import PricingPage from './pages/Pricing';
import ServicesPage from './pages/Services';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Legal from './pages/Legal';

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useLayoutEffect(() => {
    if (!hash) window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/testimonials" element={<TestimonialsPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
      <Route path="/terms-of-service" element={<Legal title="Terms of Service" />} />
      <Route path="/cookie-policy" element={<Legal title="Cookie Policy" />} />
      <Route path="/privacy-policy" element={<Legal title="Privacy Policy" />} />
      <Route path="/fulfillment" element={<Legal title="Fulfillment Policy" />} />
    </Routes>
    </>
  );
}
