import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PageLayout from '../components/ui/PageLayout';
import Hero from '../components/Hero';
import LogoCarousel from '../components/LogoCarousel';
import MeetCoachHalima from '../components/MeetCoachHalima';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';

export default function Home() {
  const { hash } = useLocation();

  useLayoutEffect(() => {
    if (!hash) return;
    const el = document.getElementById(hash.slice(1));
    if (el) el.scrollIntoView({ behavior: 'instant' });
  }, [hash]);

  return (
    <PageLayout>
      <div className="min-h-screen flex flex-col">
        <Hero />
        <LogoCarousel />
      </div>
      <MeetCoachHalima />
      <Services />
      <Testimonials />
      <ContactForm />
    </PageLayout>
  );
}
