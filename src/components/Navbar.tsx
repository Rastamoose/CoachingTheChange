import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { STRIPE_BOOKING_URL } from '../lib/stripe';
import Container from './ui/Container';

const navLinks = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'FAQs', href: '/faq' },
  { label: 'Testimonials', href: '/testimonials' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-white/95'}`}>
      <Container>
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link
            to="/"
            className="font-playfair text-xl md:text-2xl font-bold text-gray-900 tracking-tight"
          >
            Coaching The Change
          </Link>

          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={STRIPE_BOOKING_URL}
              className="bg-pastel-green hover:bg-pastel-green/90 text-gray-800 font-medium px-5 py-2 rounded-full text-sm transition-all duration-200 hover:shadow-md"
            >
              Book a Call
            </a>
          </nav>

          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-gray-900"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </Container>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="block text-base font-medium text-gray-700 hover:text-pastel-green hover:bg-pastel-green/10 rounded-md px-3 py-2 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={STRIPE_BOOKING_URL}
            className="block text-center bg-pastel-green hover:bg-pastel-green/90 text-gray-800 font-medium px-5 py-2.5 rounded-full text-sm transition-all duration-200"
          >
            Book a Call
          </a>
        </div>
      )}
    </header>
  );
}
