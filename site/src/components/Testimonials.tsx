import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { testimonials } from '../data/testimonials';
import Container from './ui/Container';
import TestimonialCard from './ui/TestimonialCard';

const PER_PAGE = 3;

export default function Testimonials() {
  const totalPages = Math.ceil(testimonials.length / PER_PAGE);
  const [page, setPage] = useState(0);

  const visible = testimonials.slice(page * PER_PAGE, (page + 1) * PER_PAGE);

  return (
    <section className="bg-gradient-mint py-16 sm:py-20 w-full overflow-hidden">
      <Container>
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Success Stories
          </h2>
          <p className="text-gray-700 text-base max-w-2xl mx-auto">
            Hear from clients who have transformed their lives through our coaching partnership.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {visible.map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </div>

        <div className="flex items-center justify-center gap-3">
          <button
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            disabled={page === 0}
            className="w-8 h-8 rounded-full border border-gray-300 bg-white flex items-center justify-center hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
            aria-label="Previous"
          >
            <ChevronLeft className="w-4 h-4 text-gray-600" />
          </button>

          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                i === page ? 'bg-gray-800 w-4' : 'bg-gray-400 hover:bg-gray-600'
              }`}
              aria-label={`Page ${i + 1}`}
            />
          ))}

          <button
            onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
            disabled={page === totalPages - 1}
            className="w-8 h-8 rounded-full border border-gray-300 bg-white flex items-center justify-center hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
            aria-label="Next"
          >
            <ChevronRight className="w-4 h-4 text-gray-600" />
          </button>
        </div>

        <div className="text-center mt-10">
          <Link to="/testimonials" className="btn-ghost-card group">
            View All Testimonials
            <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
