import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageLayout from '../components/ui/PageLayout';
import Container from '../components/ui/Container';
import { MEDIA_BASE } from '../lib/config';

const certifications = [
  { src: `${MEDIA_BASE}/cert-bps.png`, alt: 'British Psychological Society', label: 'BPS Member' },
  { src: `${MEDIA_BASE}/cert-nbchwc.png`, alt: 'NBC-HWC Certification', label: 'NBC-HWC Certified' },
  { src: `${MEDIA_BASE}/cert-hca.png`, alt: 'Health Coach Association', label: 'HCA Approved Member' },
  { src: `${MEDIA_BASE}/cert-painbc.png`, alt: 'Pain BC Certification', label: 'Pain BC Certified' },
];

export default function About() {
  return (
    <PageLayout>
      {/* My Personal Journey */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-white">
        <Container size="xl">
          <h1 className="font-playfair text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-12">
            My Personal Journey
          </h1>

          <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-16">
            <div className="w-full lg:w-1/2 overflow-hidden rounded-3xl shadow-lg">
              <img
                src={`${MEDIA_BASE}/about-halima.png`}
                alt="Halima standing by a beautiful mountain lake"
                className="w-full h-[400px] sm:h-[500px] lg:h-[620px] object-cover object-center"
              />
            </div>

            <div className="w-full lg:w-1/2 space-y-5 text-center">
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Life is a journey of constant change, challenges, and growth and I know this from firsthand experience. Having worked in the IT and financial industries, I understand the weight of burnout, the overwhelming pressure of juggling multiple roles, and the constant push to do more.
              </p>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                I've been there caught in the cycle of trying to keep up, sacrificing my own well-being, and losing sight of what truly mattered. I've faced anxiety and depression, and my physical health suffered too. The pressure of life had taken its toll on every aspect of me, and at times, it felt like everything was out of control.
              </p>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                But I found my way out. With the right support, the right tools, and determination, I pulled myself out of that deep hole. That struggle taught me the importance of support, accountability, self-compassion, and making lasting, positive changes.
              </p>
              <div className="pt-4 flex justify-center">
                <Link
                  to="/services"
                  className="pastel-button bg-pastel-blue hover:bg-pastel-blue/90 text-gray-800 group hover:scale-105"
                >
                  Start Your Journey
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* My Coaching Philosophy */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <Container size="xl">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
            <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-8">
              My Coaching Philosophy
            </h2>

            <div className="space-y-5 max-w-4xl mx-auto text-center">
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                I know what it feels like to carry the weight of life's demands constantly feeling as though there's never enough time, energy, or resources to juggle everything. It's easy to fall into the trap of thinking that if you just give a little more, work a little harder, and sacrifice a little bit more of yourself, things will get better. But the truth is, that constant pushing only leads to exhaustion, burnout, and the feeling of never quite being enough.
              </p>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                In those moments, the fear of failing takes hold, and you begin to lose sight of who you truly are and what truly matters. We put others' needs above our own, neglecting our health, happiness, and well-being. We build walls to protect ourselves, telling ourselves it's easier to just push through, even when we're empty inside.
              </p>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                But we deserve to be happy. We deserve to be fulfilled. We deserve to be healthy not just physically, but mentally and emotionally too. Life doesn't have to be a constant cycle of giving and never receiving.
              </p>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                I believe that true success comes from independence not just physically, but the emotional and mental independence to stand strong in your truth, set boundaries, and honor your needs. The kind of success where you don't rely on external validation, but on the strength and confidence that comes from within.
              </p>

              <blockquote className="border-l-4 border-pastel-purple pl-6 italic text-lg md:text-xl text-gray-700 my-6 text-left">
                "Visualise it like a tree in the wind to thrive, we must be flexible, adapting to challenges rather than resisting them. If we remain rigid, we risk breaking under pressure. Embracing change fosters resilience and strength."
              </blockquote>

              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Coaching is not about making you dependent on someone else's advice or guidance. It's about empowering you to discover your own inner strength, to unlock your potential, and to learn the skills you need to coach yourself. With these skills, you will continue to make lasting progress long after our sessions end.
              </p>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                This isn't about a quick fix it's about building a foundation of lasting change that will carry you through every phase of life. It's about learning to trust yourself again, to believe in your own abilities, and to embrace the journey of becoming the best version of yourself.
              </p>
              <p className="text-base sm:text-lg font-medium text-gray-800 leading-relaxed">
                You are worthy of that transformation. You are worthy of thriving not just surviving. And I am here to walk beside you, to help you take that first step toward the life you deserve. Because you don't have to do this alone. Let's begin this journey together.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Professional Certifications */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <Container size="lg">
          <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 text-center mb-10">
            Professional Certifications
          </h2>

          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16 mb-10">
            {certifications.map(({ src, alt, label }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-2 transition-transform duration-300 hover:scale-105 [&_img]:hover:scale-100"
              >
                <img src={src} alt={alt} className="h-20 sm:h-24 md:h-28 object-contain" />
                <p className="text-xs sm:text-sm text-gray-600 text-center">{label}</p>
              </div>
            ))}
          </div>

          {/* ICG — centered alone below */}
          <div className="flex flex-col items-center gap-2 mt-4 transition-transform duration-300 hover:scale-105 [&_img]:hover:scale-100">
            <img
              src={`${MEDIA_BASE}/cert-icg.png`}
              alt="International Coaching Group"
              className="h-20 sm:h-24 md:h-28 object-contain"
            />
            <p className="text-xs sm:text-sm text-gray-600 text-center">ICG Member</p>
          </div>

          {/* Academic Qualifications */}
          <div className="mt-14 text-center">
            <h3 className="font-playfair text-xl sm:text-2xl font-bold text-gray-800 mb-6">
              Academic Qualifications
            </h3>
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              {['BA (Hons)', 'MSc', 'PgDip'].map((q) => (
                <span
                  key={q}
                  className="border border-gray-300 rounded-full px-5 py-2 text-sm text-gray-700 font-medium"
                >
                  {q}
                </span>
              ))}
            </div>
            <p className="text-sm sm:text-base text-gray-600 max-w-xl mx-auto leading-relaxed">
              As a certified professional coach, I maintain the highest standards of practice, continuing education, and ethical guidelines to ensure you receive expert guidance on your journey.
            </p>
          </div>
        </Container>
      </section>
    </PageLayout>
  );
}
