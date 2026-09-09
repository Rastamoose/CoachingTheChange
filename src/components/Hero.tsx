import { Globe, ArrowRight } from 'lucide-react';
import Container from './ui/Container';

export default function Hero() {
  return (
    <section className="pt-16 md:pt-20 flex-1 flex items-center bg-gradient-to-b from-pastel-peach/30 to-white">
      <Container className="py-12 md:py-20">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">

          <div className="flex-1 animate-slide-up">
            <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
              Unlock Your Potential &amp; Achieve Lasting Change
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-6 max-w-2xl">
              Transform Your Life with Personalized Coaching
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              <span className="inline-flex items-center gap-1.5 bg-white/80 border border-gray-200 rounded-full px-3 py-1.5 shadow-sm">
                <span className="font-bold text-base text-emerald-600">1500+</span>
                <span className="text-sm text-gray-500">Clients Coached</span>
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/80 border border-gray-200 rounded-full px-3 py-1.5 shadow-sm">
                <span className="font-bold text-base text-blue-500">15+</span>
                <span className="text-sm text-gray-500">Years Experience</span>
              </span>
            </div>

            <div className="flex items-center mb-8 bg-pastel-purple/10 p-3 sm:p-4 rounded-lg text-sm sm:text-base">
              <Globe className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-pastel-purple flex-shrink-0" />
              <span className="text-gray-800">
                Unlocking potential, shifting mindsets, and creating real, lasting change.
              </span>
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="inline-flex items-center justify-center bg-pastel-green hover:bg-pastel-green/80 text-gray-900 font-medium px-5 py-2.5 rounded-full transition-all duration-300 group">
                Book Your Consultation
                <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center bg-transparent border border-pastel-green text-gray-800 hover:bg-pastel-green/10 font-medium px-5 py-2.5 rounded-full transition-all duration-300 hover:scale-105"
              >
                Learn More
              </a>
            </div>
          </div>

          <div className="flex-1 w-full md:max-w-none animate-fade-in">
            <div className="relative max-w-[340px] mx-auto">
              <div className="rounded-2xl overflow-hidden shadow-xl aspect-[3/4]">
                <img
                  src="/Halima2a.png"
                  alt="Coach Halima"
                  className="object-cover object-center w-full h-full [transition-duration:700ms]"
                  loading="eager"
                  width={600}
                  height={800}
                />
              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
