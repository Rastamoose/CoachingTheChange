import { useState, useRef, useEffect, useCallback } from 'react';
import { CircleCheck, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { STRIPE_BOOKING_URL } from '../lib/stripe';
import { serviceDetails, type ServiceDetail, type Story, type Benefit } from '../data/serviceDetails';
import SplitBenefitsSection from '../components/ui/SplitBenefitsSection';
import PageLayout from '../components/ui/PageLayout';
import Container from '../components/ui/Container';

interface AccentScheme {
  headerBg: string;
  checkIcon: string;
  lineBg: string;
}

const ACCENT_SCHEMES: Record<string, AccentScheme> = {
  'bg-pastel-purple': { headerBg: 'bg-purple-50',  checkIcon: 'text-purple-400', lineBg: 'bg-purple-300' },
  'bg-pastel-blue':   { headerBg: 'bg-blue-50',    checkIcon: 'text-blue-400',   lineBg: 'bg-blue-300'   },
  'bg-pastel-yellow': { headerBg: 'bg-yellow-50',  checkIcon: 'text-yellow-500', lineBg: 'bg-yellow-400' },
  'bg-pastel-green':  { headerBg: 'bg-green-50',   checkIcon: 'text-green-500',  lineBg: 'bg-green-400'  },
  'bg-pastel-pink':   { headerBg: 'bg-pink-50',    checkIcon: 'text-pink-400',   lineBg: 'bg-pink-300'   },
  'bg-pastel-peach':  { headerBg: 'bg-orange-50',  checkIcon: 'text-orange-400', lineBg: 'bg-orange-300' },
};

function SectionHeading({ title, accent }: { title: string; accent: AccentScheme }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <div className={`w-8 h-0.5 flex-shrink-0 rounded-full ${accent.lineBg}`} />
      <h3 className="font-playfair font-bold text-gray-900 text-lg">{title}</h3>
    </div>
  );
}

function BenefitCard({ title, description, accent }: Benefit & { accent: AccentScheme }) {
  return (
    <div className="border border-gray-200 rounded-xl p-5">
      <div className="flex items-start gap-2 mb-3">
        <CircleCheck className={`w-5 h-5 ${accent.checkIcon} mt-0.5 flex-shrink-0`} />
        <h4 className="font-playfair font-bold text-base text-gray-900">{title}</h4>
      </div>
      <p className="text-gray-500 text-base leading-relaxed pl-7">{description}</p>
    </div>
  );
}


function StoryCard({ story, accent }: { story: Story; accent: AccentScheme }) {
  return (
    <div className="border border-gray-200 rounded-xl p-6">
      <div className="flex items-center gap-2 mb-4">
        <CircleCheck className={`w-5 h-5 ${accent.checkIcon} flex-shrink-0`} />
        <h4 className="font-playfair font-bold text-gray-900">{story.heading}</h4>
      </div>
      <p className="text-gray-600 italic text-base leading-relaxed mb-6">{story.quote}</p>
      <div className="text-right">
        <p className="font-semibold text-gray-900 text-sm">{story.authorName}</p>
        {story.authorTitle && (
          <p className="text-gray-500 text-sm">{story.authorTitle}</p>
        )}
      </div>
    </div>
  );
}

function CtaBanner({ title }: { title: string }) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      <div>
        <h3 className="font-playfair text-lg font-bold text-gray-900 mb-1">{title}</h3>
        <p className="text-gray-500 text-base">Take the first step toward transformation with a personalized consultation.</p>
      </div>
      <a
        href={STRIPE_BOOKING_URL}
        className="flex-shrink-0 inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-700 text-white font-medium px-5 py-2.5 rounded-lg text-sm transition-colors duration-200"
      >
        Book a Call
        <ArrowRight className="w-4 h-4" />
      </a>
    </div>
  );
}

function ServicePanel({ service }: { service: ServiceDetail }) {
  const Icon = service.icon;
  const accent = ACCENT_SCHEMES[service.iconBg] ?? ACCENT_SCHEMES['bg-pastel-purple'];
  const benefitCols = service.benefitsCols === 3
    ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
    : 'grid-cols-1 sm:grid-cols-2';

  const storyCards = service.stories.length > 0
    ? service.stories.map((s, i) => <StoryCard key={i} story={s} accent={accent} />)
    : null;

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      {/* Header */}
      <div className={`${accent.headerBg} px-4 py-5 sm:px-6 sm:py-6`}>
        <div className="flex items-center gap-4 mb-4">
          <div className={`w-12 h-12 rounded-xl ${service.iconBg} flex items-center justify-center flex-shrink-0`}>
            <Icon className="w-6 h-6 text-gray-700" />
          </div>
          <h2 className="font-playfair text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
            {service.panelTitle}
          </h2>
        </div>
        {service.tagline && (
          <p className="text-gray-600 italic text-base md:text-lg leading-relaxed">
            {service.tagline}
          </p>
        )}
      </div>

      {/* Body */}
      <div className="bg-white px-4 py-6 sm:px-6 space-y-8">

        {/* Subheading + paragraphs */}
        {(service.subheading || service.body.length > 0) && (
          <div className="space-y-4">
            {service.subheading && (
              <h3 className="font-semibold text-gray-900 text-lg">{service.subheading}</h3>
            )}
            {service.body.map((para, i) =>
              para.boxed ? (
                <div key={i} className={`${accent.headerBg} border border-gray-100 rounded-lg p-4`}>
                  <p className="text-gray-600 text-base leading-relaxed">{para.text}</p>
                </div>
              ) : (
                <p key={i} className="text-gray-600 text-base leading-relaxed">{para.text}</p>
              )
            )}
          </div>
        )}

        {/* Customizable note */}
        {service.note && (
          <p className="text-gray-500 text-sm italic">{service.note}</p>
        )}

        {/* 3-col top benefits (Group Workshops) */}
        {service.topBenefits && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {service.topBenefits.map((b, i) => <BenefitCard key={i} {...b} accent={accent} />)}
          </div>
        )}

        {/* Standard benefits grid */}
        {service.benefits && service.benefits.length > 0 && (
          <div>
            {service.benefitsTitle && <SectionHeading title={service.benefitsTitle} accent={accent} />}
            <div className={`grid ${benefitCols} gap-4`}>
              {service.benefits.map((b, i) => <BenefitCard key={i} {...b} accent={accent} />)}
            </div>
          </div>
        )}

        {/* Split benefits section */}
        {service.splitSection && (
          <SplitBenefitsSection section={service.splitSection} accent={accent} />
        )}

        {/* Program components (Leadership Skills) */}
        {service.programComponents && (
          <div>
            <SectionHeading title="Program Components" accent={accent} />
            <div className="space-y-3">
              {service.programComponents.map((comp, i) => (
                <div key={i} className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-1 text-base">{comp.title}</h4>
                  <p className="text-gray-600 text-base leading-relaxed">{comp.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Stories before CTA (Executive Coaching, Leadership Skills) */}
        {service.storyBeforeCta && storyCards && (
          <div className="space-y-4">{storyCards}</div>
        )}

        <CtaBanner title={service.ctaTitle} />

        {/* Stories after CTA (most services) */}
        {!service.storyBeforeCta && storyCards && (
          <div className="space-y-4">{storyCards}</div>
        )}
      </div>
    </div>
  );
}

export default function ServicesPage() {
  const [activeId, setActiveId] = useState('personal-development');
  const active = serviceDetails.find(s => s.id === activeId)!;
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateArrows = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    updateArrows();
    el.addEventListener('scroll', updateArrows);
    window.addEventListener('resize', updateArrows);
    return () => {
      el.removeEventListener('scroll', updateArrows);
      window.removeEventListener('resize', updateArrows);
    };
  }, [updateArrows]);

  const scroll = (dir: 'left' | 'right') => {
    scrollRef.current?.scrollBy({ left: dir === 'left' ? -200 : 200, behavior: 'smooth' });
  };

  return (
    <PageLayout>
      {/* Page header */}
      <section className="pt-32 pb-6">
        <Container size="xl">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Transformative Coaching Programs
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed">
            Explore our comprehensive coaching programs designed to help you achieve your personal and professional goals.
          </p>
        </Container>
      </section>

      {/* Tab bar */}
      <div className="border-b border-gray-200 sticky top-16 md:top-20 bg-white z-40">
        <Container size="xl">
          <div className="relative flex items-center">
            {canScrollLeft && (
              <button
                onClick={() => scroll('left')}
                className="absolute left-0 z-10 flex items-center justify-center w-8 h-full bg-gradient-to-r from-white via-white to-transparent pr-2"
              >
                <ChevronLeft className="w-4 h-4 text-gray-500" />
              </button>
            )}
            <div ref={scrollRef} className="overflow-x-auto no-scrollbar flex-1">
              <div className="flex min-w-max">
                {serviceDetails.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setActiveId(s.id)}
                    className={`whitespace-nowrap px-3 py-4 text-sm font-medium border-b-2 -mb-px transition-colors duration-200 mr-2 ${
                      activeId === s.id
                        ? 'border-gray-900 text-gray-900'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    {s.tabLabel}
                  </button>
                ))}
              </div>
            </div>
            {canScrollRight && (
              <button
                onClick={() => scroll('right')}
                className="absolute right-0 z-10 flex items-center justify-center w-8 h-full bg-gradient-to-l from-white via-white to-transparent pl-2"
              >
                <ChevronRight className="w-4 h-4 text-gray-500" />
              </button>
            )}
          </div>
        </Container>
      </div>

      {/* Panel */}
      <section className="py-10">
        <Container size="xl">
          <ServicePanel service={active} />
        </Container>
      </section>
    </PageLayout>
  );
}
