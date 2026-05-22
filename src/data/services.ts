export interface Service {
  serviceId: string;
  title: string;
  description: string;
  accentColor: string;
}

export const services: Service[] = [
  {
    serviceId: 'personal-development',
    title: 'Personal Development',
    description: 'Discover your strengths, overcome limiting beliefs, and develop the mindset needed to achieve your personal goals.',
    accentColor: 'bg-pastel-purple',
  },
  {
    serviceId: 'career-coaching',
    title: 'Career Coaching',
    description: 'Navigate career transitions, improve leadership skills, and achieve professional goals with strategic guidance.',
    accentColor: 'bg-pastel-blue',
  },
  {
    serviceId: 'mental-health',
    title: 'Mental Health Coaching',
    description: 'One to one, personalized support to help you manage anxiety and/or depression, take control of your thoughts, and enhance your mental well-being. Gain clarity, build emotional resilience, and establish healthy routines for a more balanced and fulfilling life.',
    accentColor: 'bg-pastel-purple',
  },
  {
    serviceId: 'health-wellness',
    title: 'Health & Wellness Coaching',
    description: 'Personalized guidance to help you improve your physical and mental well-being, develop healthier habits, and create lasting lifestyle changes for a more balanced and vibrant life.',
    accentColor: 'bg-pastel-green',
  },
  {
    serviceId: 'corporate-workshops',
    title: 'Corporate Workshops on Health, Well-being, and Work-life Balance',
    description: 'A strategic approach to managing stress for optimal health and well-being, delivered either online or in person to enhance employee performance and workplace culture.',
    accentColor: 'bg-pastel-blue',
  },
  {
    serviceId: 'group-workshops',
    title: 'Corporate Group Workshop',
    description: 'Engaging sessions designed to develop essential skills, improve communication, and embrace change creating a supportive environment that fosters community and accelerates growth.',
    accentColor: 'bg-pastel-yellow',
  },
  {
    serviceId: 'coaching-skills',
    title: 'Leadership Coaching Skills Training',
    description: 'Empowering leaders with a coaching approach to leadership!',
    accentColor: 'bg-pastel-purple',
  },
  {
    serviceId: 'health-pain',
    title: 'Chronic Pain Management',
    description: 'Personalized support to help individuals living with chronic pain develop self-management strategies, unlock their potential, and enhance their well-being by becoming active participants in their own lives.',
    accentColor: 'bg-pastel-green',
  },
  {
    serviceId: 'executive-coaching',
    title: 'Executive Coaching',
    description: "Built around a focus on organisational and professional goals. This includes 'personal' coaching to help individuals with their own development and goals, plus follow-ups to align newly developed skills and anchor learning in real-life situations.",
    accentColor: 'bg-pastel-purple',
  },
  {
    serviceId: 'expatriation-coaching',
    title: 'Expatriation Coaching',
    description: 'A tailored approach to navigating change and the expat life, helping you adapt to new cultures, overcome challenges, and thrive in your international journey.',
    accentColor: 'bg-pastel-yellow',
  },
  {
    serviceId: 'repatriation-coaching',
    title: 'Repatriation Coaching',
    description: 'Support for the often challenging transition back home after living abroad, helping you manage reverse culture shock, rebuild relationships, and reintegrate into your home country with confidence.',
    accentColor: 'bg-pastel-pink',
  },
];
