import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';
import Container from './ui/Container';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'FAQs', href: '/faq' },
  { label: 'Blog', href: '/blog' },
  { label: 'Testimonials', href: '/testimonials' },
];

const legalLinks = [
  { label: 'Terms', href: '/terms-of-service' },
  { label: 'Cookie Policy', href: '/cookie-policy' },
  { label: 'Privacy', href: '/privacy-policy' },
];

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <li>
      <Link
        to={href}
        className="text-gray-400 text-sm hover:text-white transition-colors flex items-center gap-2 group"
      >
        <span className="text-gray-600 group-hover:text-gray-300 transition-colors">›</span>
        {label}
      </Link>
    </li>
  );
}

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-black to-gray-900 text-white pt-12 pb-6">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-gray-700">
          <div className="text-center">
            <h4 className="font-playfair text-lg font-bold mb-4 underline underline-offset-4">
              About Us
            </h4>
            <p className="text-gray-400 text-sm leading-relaxed mb-3">
              Coaching The Change is dedicated to helping individuals transform their lives through
              personalized coaching programs.
            </p>
            <Link to="/about" className="text-gray-300 text-sm hover:text-white transition-colors underline">
              Learn more about us
            </Link>
          </div>

          <div className="text-center">
            <h4 className="font-playfair text-lg font-bold mb-4 underline underline-offset-4">
              Quick Links
            </h4>
            <div className="flex gap-10 justify-center">
              <ul className="space-y-3">
                {quickLinks.map((link) => <FooterLink key={link.href} {...link} />)}
              </ul>
              <ul className="space-y-3">
                {legalLinks.map((link) => <FooterLink key={link.href} {...link} />)}
              </ul>
            </div>
          </div>

          <div className="text-center">
            <h4 className="font-playfair text-lg font-bold mb-4 underline underline-offset-4">
              Contact
            </h4>
            <a
              href="mailto:hello@coachingthechange.com"
              className="inline-flex items-center gap-2 text-gray-400 text-sm hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4" />
              hello@coachingthechange.com
            </a>
          </div>
        </div>

        <div className="pt-6 text-center space-y-2">
          <p className="text-gray-400 text-xs leading-relaxed">
            This website is GDPR compliant. We respect your privacy and protect your personal data.
            See our{' '}
            <Link to="/privacy-policy" className="text-gray-300 hover:text-white underline">Privacy Policy</Link>,{' '}
            <Link to="/terms-of-service" className="text-gray-300 hover:text-white underline">Terms of Service</Link>,{' '}
            <Link to="/cookie-policy" className="text-gray-300 hover:text-white underline">Cookie Policy</Link>,{' '}
            <Link to="/terms-of-service" className="text-gray-300 hover:text-white underline">Returns Policy</Link>{' '}
            and{' '}
            <Link to="/terms-of-service" className="text-gray-300 hover:text-white underline">Disclaimer</Link>.
          </p>
          <p className="text-gray-500 text-xs">© 2026 Coaching The Change. All rights reserved.</p>
          <p className="text-gray-600 text-xs">Made with ❤️ for helping people transform their lives</p>
        </div>
      </Container>
    </footer>
  );
}
