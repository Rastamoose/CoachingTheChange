import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import TestimonialsPage from './pages/Testimonials';
import PricingPage from './pages/Pricing';
import ServicesPage from './pages/Services';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/testimonials" element={<TestimonialsPage />} />
      <Route path="/pricing" element={<PricingPage />} />
    </Routes>
  );
}
