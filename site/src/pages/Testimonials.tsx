import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { STRIPE_BOOKING_URL } from '../lib/stripe';
import { testimonials, CATEGORIES, type TestimonialCategory } from '../data/testimonials';
import PageLayout from '../components/ui/PageLayout';
import Container from '../components/ui/Container';
import TestimonialCard from '../components/ui/TestimonialCard';

export default function TestimonialsPage() {
  const [activeCategory, setActiveCategory] = useState<TestimonialCategory | 'all'>('all');

  const filtered =
    activeCategory === 'all'
      ? testimonials
      : testimonials.filter((t) => t.category === activeCategory);

  return (
    <PageLayout>
      {/* Hero */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 text-center">
        <Container size="lg">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Success Stories
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Discover how our coaching services have made a meaningful impact in the lives of our
            clients. From personal development to health management, expatriation support to
            corporate coaching, these testimonials reflect the transformative power of our coaching
            partnership.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href={STRIPE_BOOKING_URL} className="btn-primary group">
              Book a Consultation
              <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a href="/services" className="btn-outline">
              Explore Our Services
            </a>
          </div>
        </Container>
      </section>

      {/* Filtered grid */}
      <section className="bg-gradient-mint py-16 px-4 sm:px-6 lg:px-8">
        <Container>
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-5 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                activeCategory === 'all' ? 'bg-gray-900 text-white' : 'bg-transparent text-gray-700 hover:text-gray-900'
              }`}
            >
              All Testimonials
            </button>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat ? 'bg-gray-900 text-white' : 'bg-transparent text-gray-700 hover:text-gray-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filtered.map((t, i) => (
              <TestimonialCard key={i} {...t} />
            ))}
          </div>
        </Container>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 text-center">
        <Container size="sm">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Life?
          </h2>
          <p className="text-gray-600 mb-8">
            Join our clients in experiencing the profound impact of personalized coaching. We're
            here to support your journey toward achieving your goals and creating lasting change.
          </p>
          <a href={STRIPE_BOOKING_URL} className="btn-primary group">
            Book a Consultation
            <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </Container>
      </section>
    </PageLayout>
  );
}
