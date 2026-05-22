import { Mail } from 'lucide-react';
import { STRIPE_BOOKING_URL } from '../lib/stripe';
import { individualPlans, corporatePlans } from '../data/pricing';
import PageLayout from '../components/ui/PageLayout';
import Container from '../components/ui/Container';
import CheckListItem from '../components/ui/CheckListItem';

function IndividualPlanCard({ title, price, currency, features }: {
  title: string;
  price: string;
  currency: string;
  features: string[];
}) {
  return (
    <div className="border border-gray-200 rounded-xl p-8 flex flex-col">
      <div className="text-center mb-6">
        <h3 className="font-playfair text-xl font-bold text-gray-900 mb-3">{title}</h3>
        <div className="flex items-baseline justify-center gap-2">
          <span className="font-playfair text-4xl font-bold text-gray-900">{price}</span>
          <span className="text-gray-400 text-sm font-medium">{currency}</span>
        </div>
      </div>
      <ul className="space-y-4 flex-1 mb-8">
        {features.map((f) => <CheckListItem key={f} text={f} align="center" />)}
      </ul>
      <a href={STRIPE_BOOKING_URL} className="btn-primary w-full justify-center">
        Book Now
      </a>
    </div>
  );
}

function CorporatePlanCard({ title, subtitle, features, learnMoreHref }: {
  title: string;
  subtitle: string;
  features: string[];
  learnMoreHref: string;
}) {
  return (
    <div className="border border-gray-200 rounded-xl p-8 flex flex-col">
      <h3 className="font-playfair text-xl font-bold text-gray-900 mb-1">{title}</h3>
      <p className="text-gray-400 text-base mb-3">{subtitle}</p>
      <p className="font-semibold text-gray-900 mb-6">Custom Pricing</p>
      <ul className="space-y-3 flex-1 mb-8">
        {features.map((f) => <CheckListItem key={f} text={f} />)}
      </ul>
      <a href={learnMoreHref} className="btn-outline w-full justify-center">
        Learn More
      </a>
    </div>
  );
}

export default function PricingPage() {
  return (
    <PageLayout>
      {/* Header */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 text-center border-b border-gray-100">
        <Container size="md">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-5">
            Clear Value-Based Pricing
          </h1>
          <p className="text-gray-500 text-lg">
            Invest in your transformation with customized coaching programs designed specifically
            for your personal journey.
          </p>
        </Container>
      </section>

      {/* Consultation */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 text-center border-b border-gray-100">
        <Container size="sm">
          <h2 className="font-playfair text-3xl font-bold text-gray-900 mb-4">
            Start with a Consultation
          </h2>
          <p className="text-gray-500 text-base mb-8">
            Begin your coaching journey with a 1-hour initial consultation to explore how our
            programs can help you achieve your goals.
          </p>
          <a href={STRIPE_BOOKING_URL} className="btn-primary">
            Book Your Call
          </a>
        </Container>
      </section>

      {/* Single sessions */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 text-center border-b border-gray-100">
        <Container size="sm">
          <h2 className="font-playfair text-3xl font-bold text-gray-900 mb-3">
            Single Coaching Sessions
          </h2>
          <p className="text-gray-500 text-base mb-6">
            Individual or single sessions are priced at £245 for 60 minutes.
          </p>
          <p className="text-gray-500 text-base mb-8 leading-relaxed">
            These sessions provide an in-depth analysis of your current circumstances and
            aspirations, leading to a tailored action plan. After the session, we'll recommend a
            program that aligns with your goals. Alternatively, you may choose to continue with
            individual sessions. If you decide to join the full program, the cost of your initial
            session will be credited toward the total program fee.
          </p>
          <a href={STRIPE_BOOKING_URL} className="btn-primary">
            Book Now
          </a>
        </Container>
      </section>

      {/* Individual programs */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <Container size="lg">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl font-bold text-gray-900 mb-4">
              Individual Programs Pricing
            </h2>
            <p className="text-gray-500 text-base mb-4 leading-relaxed">
              Explore our range of individual programs designed to fit your needs. Choose from two
              flexible options: 6 sessions spread over 6-8 weeks, or 12 sessions over 12-14 weeks.
              Throughout this set timeframe, we will work together to help you achieve your specific
              goals.
            </p>
            <p className="text-gray-500 text-base leading-relaxed">
              Both packages are designed to be flexible and adaptable, allowing you to customize
              your experience based on your unique needs and preferences. Whether you're looking to
              make swift changes or are in search of a more comprehensive growth path, our plans are
              equipped to guide you at every step of your journey.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {individualPlans.map((plan) => (
              <IndividualPlanCard key={plan.id} {...plan} />
            ))}
          </div>
        </Container>
      </section>

      {/* Corporate & Group */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
        <Container size="lg">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl font-bold text-gray-900 mb-3">
              Corporate &amp; Group Services
            </h2>
            <p className="text-gray-500 text-base">
              Our corporate workshops are highly customizable to suit your organization's specific
              needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {corporatePlans.map((plan) => (
              <CorporatePlanCard key={plan.id} {...plan} />
            ))}
          </div>
        </Container>
      </section>

      {/* Have Questions */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 text-center border-t border-gray-100">
        <Container size="sm">
          <h2 className="font-playfair text-3xl font-bold text-gray-900 mb-4">Have Questions?</h2>
          <p className="text-gray-500 text-base mb-8 leading-relaxed">
            Our coaching programs are designed to fit your unique needs. If you'd like to discuss
            custom arrangements or have any questions about our pricing, please reach out.
          </p>
          <a href="/#contact" className="btn-primary gap-2">
            <Mail className="w-4 h-4" />
            Contact Us
          </a>
        </Container>
      </section>
    </PageLayout>
  );
}
