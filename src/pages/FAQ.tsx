import { useState } from 'react';
import { ChevronDown, Mail } from 'lucide-react';
import PageLayout from '../components/ui/PageLayout';
import Container from '../components/ui/Container';

const faqs = [
  {
    question: 'How do coaching sessions take place?',
    answer:
      'Coaching sessions are conducted via video calls or phone calls, allowing for flexible scheduling regardless of your location. For the best experience, please ensure you have a reliable internet connection and a quiet, private space for our conversations. In-person coaching is available when needed, with travel expenses to be covered by the client.',
  },
  {
    question: 'How long are coaching sessions?',
    answer:
      'Each coaching session is 45-60 mins. The first session includes a comprehensive assessment of your goals, followed by a personalized plan outlining how we will work together to achieve them.',
  },
  {
    question: 'How many sessions will I need?',
    answer:
      "The number of sessions varies based on your goals and circumstances. Most clients see meaningful progress within 6-12 sessions. We'll regularly review your progress and adjust the coaching plan as needed. There's no long-term contract, you can continue for as long as you find the sessions valuable.",
  },
  {
    question: 'Is coaching confidential?',
    answer:
      "Absolutely. All coaching conversations are strictly confidential. The only exceptions would be if required by law or if there's a risk of harm to yourself or others.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex((prev) => (prev === i ? null : i));

  return (
    <PageLayout>
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-white">
        <Container size="md">
          <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 text-center mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-600 text-center leading-relaxed mb-12 max-w-2xl mx-auto">
            Find answers to common questions about coaching sessions, processes, and policies. If
            you don't see your question answered here, please don't hesitate to contact us.
          </p>

          <div className="border border-gray-200 rounded-lg">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div key={i} className={i < faqs.length - 1 ? 'border-b border-gray-200' : ''}>
                  <button
                    onClick={() => toggle(i)}
                    className="w-full flex items-center justify-between px-5 py-4 text-left"
                  >
                    <span className="text-gray-800 pr-6 text-sm sm:text-base">{faq.question}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-gray-400 flex-shrink-0 transition-transform duration-700 ease-in-out ${isOpen ? 'rotate-180' : ''}`}
                    />
                  </button>

                  {/* CSS grid 0fr→1fr gives perfectly proportional smooth expansion */}
                  <div
                    className="grid transition-[grid-template-rows] duration-700 ease-in-out"
                    style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-4 text-gray-500 leading-relaxed text-center text-sm">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-14 flex justify-center">
            <a href="/#contact" className="btn-primary inline-flex items-center gap-2">
              <Mail className="w-4 h-4" />
              Book a Discovery Call
            </a>
          </div>
        </Container>
      </section>
    </PageLayout>
  );
}
