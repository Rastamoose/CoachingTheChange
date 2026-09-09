import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { services } from '../data/services';
import Container from './ui/Container';

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-gray-50 border-t border-gray-100">
      <Container>
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How I Can Help You
          </h2>
          <p className="text-gray-600 text-base max-w-2xl mx-auto">
            Tailored coaching solutions to help you overcome challenges and achieve your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.serviceId}
              className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col overflow-hidden"
            >
              <div className={`${service.accentColor} h-1.5 w-full`} />
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-playfair font-bold text-gray-900 text-xl mb-3 leading-snug">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-base leading-relaxed flex-1">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/services" className="inline-flex items-center justify-center bg-pastel-green hover:bg-pastel-green/80 text-gray-900 font-medium px-5 py-2.5 rounded-full transition-all duration-300 group">
            View All Programs
            <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
