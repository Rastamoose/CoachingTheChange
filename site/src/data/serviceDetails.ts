import {
  Sparkles, Briefcase, HeartPulse, Brain, Leaf,
  Globe, Home, LayoutGrid, Users, GraduationCap, Building2,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface Benefit {
  title: string;
  description: string;
}

export interface Story {
  heading: string;
  quote: string;
  authorName: string;
  authorTitle?: string;
}

export interface SplitItem {
  title: string;
  description: string;
}

export interface SplitSection {
  sectionTitle: string;
  leftLabel: string;
  leftIcon?: LucideIcon;
  leftItems: SplitItem[];
  rightLabel: string;
  rightIcon?: LucideIcon;
  rightItems: SplitItem[];
}

export interface ServiceDetail {
  id: string;
  tabLabel: string;
  icon: LucideIcon;
  iconBg: string;
  panelTitle: string;
  tagline?: string;
  subheading?: string;
  body: Array<{ text: string; boxed?: boolean }>;
  note?: string;
  benefitsTitle?: string;
  benefits?: Benefit[];
  benefitsCols?: 2 | 3;
  topBenefits?: Benefit[];
  splitSection?: SplitSection;
  programComponents?: Benefit[];
  ctaTitle: string;
  stories: Story[];
  storyBeforeCta?: boolean;
}

const WORKSHOP_EMPLOYEE_BENEFITS: SplitItem[] = [
  { title: 'Improved Physical & Mental Well-Being', description: 'Participants learn effective stress management techniques, reducing the risk of burnout, chronic stress, and stress-related illnesses.' },
  { title: 'Stronger Emotional Resilience', description: 'Employees gain practical tools to regulate emotions, manage stress triggers, and maintain mental clarity under pressure.' },
  { title: 'Enhanced Work-Life Balance', description: 'By identifying stressors and implementing coping mechanisms, employees achieve a better balance between professional and personal responsibilities.' },
  { title: 'Greater Job Satisfaction & Motivation', description: 'Feeling valued and supported in managing stress improves overall job satisfaction, motivation, and engagement.' },
  { title: 'Better Workplace Relationships', description: 'Strengthening communication and emotional intelligence fosters trust, collaboration, and a positive work environment.' },
];

const WORKSHOP_ORG_BENEFITS: SplitItem[] = [
  { title: 'Reduced Absenteeism & Sick Leave', description: 'Proactive stress management helps prevent stress-related illnesses, leading to fewer sick days and reduced long-term absences.' },
  { title: 'Lower Employee Turnover & Improved Retention', description: 'By fostering a culture of well-being, employees feel more engaged, valued, and less likely to leave due to burnout or stress.' },
  { title: 'Increased Productivity & Performance', description: 'A workforce that effectively manages stress is more focused, efficient, and high-performing.' },
  { title: 'Enhanced Workplace Culture', description: 'A commitment to employee well-being promotes a positive, high-trust work environment, improving morale and collaboration.' },
  { title: 'Cost Savings on Healthcare & Recruitment', description: 'Investing in stress management reduces costs associated with healthcare claims, lost productivity, and hiring replacements for high turnover.' },
];

export const serviceDetails: ServiceDetail[] = [
  {
    id: 'personal-development',
    tabLabel: 'Personal Development',
    icon: Sparkles,
    iconBg: 'bg-pastel-purple',
    panelTitle: 'Personal Development Program',
    tagline: "Unlock your full potential with Personal Development Coaching, grounded in psychological principles. Together, we'll dive deep to uncover what may be holding you back, whether it's past experiences, limiting beliefs, or negative thought patterns.",
    body: [
      { text: "We'll focus on identifying your unique strengths, reprogramming your mindset, and breaking through the psychological barriers that hinder your progress.", boxed: true },
      { text: "With coaching, you'll have a trusted, non-judgmental space where you can explore your feelings, fears, and challenges with compassion and understanding. Having someone to listen attentively and offer psychological insights is essential for your growth. This supportive, empathetic environment will serve as the foundation for your transformation." },
      { text: "I will guide you every step of the way, helping you develop greater emotional resilience, overcome internal obstacles, and cultivate the confidence you need to pursue your goals. Together, we'll create sustainable change, helping you not just to reach your potential, but to become the best version of yourself. Let's begin your journey toward lasting success and fulfillment!" },
    ],
    benefitsTitle: 'Personal Development Program Benefits',
    benefitsCols: 2,
    benefits: [
      { title: 'Clarity & Self-Discovery', description: 'Gain deep insight into what truly matters to you and align your life accordingly.' },
      { title: 'Emotional Resilience & Confidence', description: 'Overcome fear, self-doubt, and limiting beliefs to step into your power.' },
      { title: 'Mindset Transformation', description: 'Learn to reprogram negative thought patterns and create an empowered mindset.' },
      { title: 'Improved Relationships', description: 'Develop healthier connections with yourself and others.' },
      { title: 'Work-Life Balance & Well-Being', description: 'Learn how to integrate success with mental, emotional, and physical wellness.' },
      { title: 'Goal Achievement & Productivity', description: 'Build momentum and take action with confidence and focus.' },
      { title: 'Sustainable Personal Growth', description: 'Develop lifelong habits that support success and fulfillment.' },
    ],
    ctaTitle: 'Ready to Begin Your Personal Development Coaching Journey?',
    stories: [
      {
        heading: 'Client Transformation Story',
        quote: "Working with my coach over 6 sessions was nothing short of transformative. At first, I wasn't sure what to expect, but the personalized approach really helped me dive deep and understand my goals. I came to realize that my biggest challenge wasn't the goals themselves, but the self-limiting beliefs I was holding onto. Through practical exercises and actionable steps, I was able to shift my mindset and create lasting habits that have already brought about positive changes in my life. The coaching gave me clarity, accountability, and a deep sense of purpose. It was exactly what I needed to break through old patterns and set myself on a path toward real success.",
        authorName: 'Sandra P',
        authorTitle: 'Marketing Manager',
      },
    ],
  },

  {
    id: 'career-coaching',
    tabLabel: 'Career Coaching',
    icon: Briefcase,
    iconBg: 'bg-pastel-blue',
    panelTitle: 'Career Coaching Program',
    tagline: 'Unlock Your Full Potential with Career Coaching. We focus on leadership, career transitions, and professional growth.',
    body: [
      { text: "Are you ready to break through the barriers holding you back? With coaching grounded in psychological principles, we'll dive deep to uncover what's keeping you stuck, whether it's limiting beliefs, past experiences, or negative thought patterns. Together, we'll focus on identifying your unique strengths, reshaping your mindset, and eliminating the psychological obstacles hindering your growth.", boxed: true },
      { text: "Career coaching is all about helping you navigate your professional journey with clarity and confidence. Whether you're aiming for a promotion, changing industries, or simply seeking more job satisfaction, I'll guide you through the process of setting clear career goals, enhancing your skills, and achieving a fulfilling career. You'll gain the insights you need to grow, overcome challenges, and develop strategies for success. This strong foundation will allow you to build resilience, tackle obstacles, and unlock the confidence needed to reach your goals." },
      { text: "Let's work together to create lasting change and help you become the best version of yourself. Ready to embark on your journey to success and fulfillment? Let's begin today!" },
    ],
    benefitsTitle: 'Programme Benefits',
    benefitsCols: 3,
    benefits: [
      { title: 'Clarity & Career Direction', description: 'Gain clear insights into career motivations, strengths, and long-term aspirations. Identify career paths aligned with personal values and professional goals.' },
      { title: 'Strategic Career Planning', description: 'Develop a structured career roadmap for advancement or transition. Identify growth opportunities, required skills, and industry trends.' },
      { title: 'Confidence & Personal Branding', description: 'Enhance self-confidence in job search, interviews, and networking.' },
      { title: 'Skill Development & Professional Growth', description: 'Identify key skills to develop and create a personalized learning plan. Overcome imposter syndrome, career stagnation, and mindset barriers.' },
      { title: 'Interview & Negotiation Mastery', description: 'Gain interview confidence through coaching and mock interviews. Learn negotiation techniques to secure competitive job offers and salaries.' },
      { title: 'Long-Term Career Success & Work-Life Balance', description: 'Establish a sustainable career strategy for continuous professional growth. Maintain a healthy balance between career ambitions and personal well-being.' },
    ],
    ctaTitle: 'Ready to Begin Your Career Coaching Journey?',
    stories: [
      {
        heading: 'Client Success Story',
        quote: "I was initially unsure about committing to coaching, but after just six sessions, I can honestly say this program has made a world of difference. It helped me understand why I was feeling stuck in my career, there was a disconnect between my goals and my true values. The deep dive into the 'why beneath the why' was eye-opening. I've been able to refocus my efforts and break down larger goals into manageable steps, which has made a huge impact on my productivity. The sessions gave me practical tools to overcome self-doubt and improve my time management, and I feel more confident and clear about my path forward. The accountability and actionable steps kept me on track, and I've seen results both in my work and personal life. The change is real!",
        authorName: 'Emma L',
        authorTitle: 'Mid-Level Manager',
      },
    ],
  },

  {
    id: 'health-pain',
    tabLabel: 'Chronic Pain Management',
    icon: HeartPulse,
    iconBg: 'bg-pastel-yellow',
    panelTitle: 'Health & Pain Management Coaching Program',
    tagline: 'Transform your health and manage chronic pain with personalized coaching.',
    body: [
      { text: "Living with chronic pain or health issues can be physically and emotionally draining. It can impact your ability to work, enjoy hobbies, and maintain relationships. Health and pain management coaching offers a holistic approach to improving your quality of life by addressing the physical, psychological, and lifestyle factors that contribute to your condition.", boxed: true },
      { text: "Unlike traditional medical treatments that primarily focus on symptom management, coaching empowers you to take an active role in your well-being. Together, we'll explore strategies to manage pain, reduce stress, improve sleep, and adopt healthier habits." },
      { text: "Through personalized guidance, you'll learn to navigate the challenges of living with chronic conditions, develop coping mechanisms, and create a sustainable plan for long-term health and well-being. My role is to provide support, education, and accountability as you embark on your journey to a healthier, more fulfilling life." },
    ],
    benefitsTitle: 'Health & Pain Management Program Benefits',
    benefitsCols: 2,
    benefits: [
      { title: 'Personalized Pain Management Strategies', description: 'Develop a customized plan to manage pain effectively, incorporating techniques such as mindfulness, relaxation exercises, and gentle movement.' },
      { title: 'Improved Sleep Quality', description: 'Learn strategies to improve sleep hygiene, reduce insomnia, and promote restful sleep, which is essential for pain management and overall health.' },
      { title: 'Stress Reduction Techniques', description: 'Discover effective stress reduction techniques, such as meditation, deep breathing, and progressive muscle relaxation, to minimize the impact of stress on your health.' },
      { title: 'Healthier Lifestyle Habits', description: 'Develop sustainable habits related to nutrition, exercise, and self-care that support your overall health and well-being.' },
      { title: 'Emotional Support and Empowerment', description: 'Receive compassionate support and guidance to navigate the emotional challenges of living with chronic pain or health issues, empowering you to take control of your health journey.' },
      { title: 'Improved Quality of Life', description: 'Experience a significant improvement in your overall quality of life as you gain the tools and strategies to manage your health and pain effectively.' },
    ],
    ctaTitle: 'Ready to Begin Your Health & Pain Management Journey?',
    stories: [
      {
        heading: 'Client Transformation Story',
        quote: "I had been struggling with chronic back pain for years, and it was affecting every aspect of my life. Traditional treatments offered limited relief, and I felt frustrated and hopeless. Working with my coach was a game-changer. She helped me develop a personalized pain management plan that included mindfulness techniques, gentle exercises, and stress reduction strategies. I've experienced a significant reduction in my pain levels, improved sleep quality, and a renewed sense of hope. I'm now able to enjoy activities that I thought I would never be able to do again.",
        authorName: 'Emily R.',
        authorTitle: 'Software Engineer',
      },
    ],
  },

  {
    id: 'mental-health',
    tabLabel: 'Mental Health',
    icon: Brain,
    iconBg: 'bg-pastel-purple',
    panelTitle: 'Mental Health Coaching Program',
    tagline: "One to one, personalized support to help you manage anxiety and/or depression, take control of your thoughts, and enhance your mental well-being. Gain clarity, build emotional resilience, and establish healthy routines for a more balanced and fulfilling life.",
    subheading: 'Supporting your journey to better mental health',
    body: [
      { text: "Feeling overwhelmed, anxious, or stuck in negative thought patterns can make everyday life challenging. Mental health coaching provides a supportive, non-judgmental space where you can explore these challenges and develop practical strategies to overcome them." },
      { text: "Unlike therapy, which often focuses on past traumas and psychological disorders, coaching concentrates on your present circumstances and future goals. We'll work together to identify your strengths, develop coping mechanisms, and create actionable plans to improve your mental wellbeing." },
      { text: "Through our sessions, you'll learn to recognize and challenge unhelpful thought patterns, develop emotional regulation techniques, and establish daily routines that support your mental health. My role is to provide guidance, accountability, and unwavering support as you navigate your journey to better mental health." },
    ],
    benefitsTitle: 'Mental Health Coaching Program Benefits',
    benefitsCols: 2,
    benefits: [
      { title: 'Uncover and Address Root Causes', description: 'Gain deep insights into the root causes of your anxiety, depression, and negative habits. Identifying these underlying factors allows you to heal and free yourself from emotional burdens.' },
      { title: 'Shift Negative Thought Patterns', description: 'Learn techniques like cognitive restructuring and reframing to change negative thought patterns, replacing self-sabotaging thoughts with healthier perspectives.' },
      { title: 'Set Realistic, Purpose-Driven Goals', description: 'Develop clear, achievable goals aligned with your values and purpose. Break these down into manageable steps to create momentum for lasting change.' },
      { title: 'Build Emotional Resilience', description: 'Equip yourself with coping mechanisms for stress and anxiety, while building emotional regulation skills to navigate challenges with resilience.' },
      { title: 'Continuous Support and Accountability', description: 'Receive ongoing support and accountability to stay on track. Regular check-ins celebrate progress and offer guidance during setbacks.' },
      { title: 'Sustainable, Long-Term Growth', description: 'Create long-term strategies to maintain positive changes after coaching ends. The tools you gain will help you stay on track, ensuring lasting success.' },
    ],
    ctaTitle: 'Ready to Begin Your Mental Health Coaching Journey?',
    stories: [],
  },

  {
    id: 'health-wellness',
    tabLabel: 'Health & Wellness',
    icon: Leaf,
    iconBg: 'bg-pastel-green',
    panelTitle: 'Health & Wellness Coaching Program',
    tagline: "Transform your life with personalized Health & Wellness Coaching. Together, we'll create a roadmap to achieve your health goals, enhance your well-being, and cultivate a balanced lifestyle.",
    subheading: 'Your journey to a healthier, happier you',
    body: [
      { text: "Feeling overwhelmed by conflicting health advice or struggling to maintain healthy habits? Health & Wellness Coaching offers a supportive partnership to help you navigate these challenges and create sustainable change." },
      { text: "Unlike generic wellness programs, coaching focuses on your unique needs, preferences, and goals. We'll work together to identify your strengths, overcome obstacles, and develop actionable strategies to improve your physical, mental, and emotional well-being." },
      { text: "Through our sessions, you'll gain clarity on your health priorities, learn to make informed choices, and build the confidence to take control of your well-being. My role is to provide guidance, accountability, and unwavering support as you embark on your journey to a healthier, more fulfilling life." },
    ],
    benefitsTitle: 'Health & Wellness Coaching Program Benefits',
    benefitsCols: 2,
    benefits: [
      { title: 'Personalized Health Roadmap', description: 'Develop a customized plan tailored to your unique needs and goals, covering nutrition, exercise, stress management, and more.' },
      { title: 'Sustainable Habit Formation', description: 'Learn strategies to create lasting habits that support your health goals, from mindful eating to regular physical activity.' },
      { title: 'Stress Reduction Techniques', description: 'Discover effective methods to manage stress and cultivate emotional resilience, enhancing your overall well-being.' },
      { title: 'Improved Energy & Vitality', description: 'Optimize your nutrition and lifestyle to boost energy levels, reduce fatigue, and enhance your overall vitality.' },
      { title: 'Enhanced Self-Awareness', description: 'Gain deeper insights into your health patterns, triggers, and motivations, empowering you to make informed choices.' },
      { title: 'Ongoing Support & Accountability', description: 'Receive continuous guidance and support to stay on track, overcome challenges, and celebrate your progress.' },
    ],
    ctaTitle: 'Ready to Begin Your Health & Wellness Coaching Journey?',
    stories: [
      {
        heading: 'Client Transformation Story',
        quote: "Working with my health coach has been life-changing. I struggled with yo-yo dieting and constant fatigue for years. The personalized approach helped me understand my body better and develop sustainable habits. I now have more energy, feel confident in my food choices, and have finally broken free from the diet cycle.",
        authorName: 'Emily R.',
        authorTitle: 'Software Engineer',
      },
    ],
  },

  {
    id: 'executive-coaching',
    tabLabel: 'Executive Coaching',
    icon: Briefcase,
    iconBg: 'bg-pastel-green',
    panelTitle: 'Executive Coaching Program',
    tagline: 'Unlock Your Full Potential with Executive Coaching for Success and Well-being',
    body: [
      { text: "Achieve lasting success with a holistic approach to executive coaching. This isn't just about hitting goals—it's about uncovering your deeper motivations and aligning your actions with your core values. By blending executive coaching with a health-focused perspective, we'll enhance your professional performance while prioritizing your mental, emotional, and physical well-being.", boxed: true },
      { text: "Together, we'll break through barriers, build resilience, and create personalized strategies for sustainable success in both your career and life. We'll also keep an eye on the signs of burnout, ensuring that you maintain a healthy work-life balance. You'll not only improve your leadership skills but also learn how to safeguard your well-being, manage stress, and stay focused on what truly matters." },
      { text: "With regular check-ins, personalized support, and ongoing reflection, you'll celebrate your progress, stay motivated, and strengthen your ability to tackle challenges head-on. This isn't just a quick fix—it's a transformative journey toward a balanced, fulfilled life and career." },
      { text: "Ready to elevate your leadership and reach your highest potential without sacrificing your health? Let's make it happen!" },
    ],
    benefitsTitle: 'Executive Coaching Program Benefits',
    benefitsCols: 2,
    benefits: [
      { title: 'Enhanced Leadership Performance', description: 'Develop the mindset and skills needed to lead with confidence, emotional intelligence, and vision. Our coaching helps you refine your leadership approach to create greater impact and influence within your organization.' },
      { title: 'Sustainable Success Without Burnout', description: 'Identify and mitigate burnout triggers while optimizing energy management. Learn to recognize early warning signs of stress and develop strategies to maintain high performance without sacrificing your health.' },
      { title: 'Strategic Decision-Making & Influence', description: 'Improve executive presence, critical thinking, and high-impact communication. Enhance your ability to make confident decisions in complex situations and communicate them effectively to gain buy-in from stakeholders.' },
      { title: 'Resilience & Stress Management', description: 'Strengthen mental agility and adaptability to lead effectively under pressure. Develop techniques to maintain clarity and composure during challenging situations, turning obstacles into opportunities for growth.' },
      { title: 'Work-Life Integration', description: 'Learn practical strategies to balance professional responsibilities with personal well-being. Create boundaries that protect your energy while still achieving your leadership goals and maintaining key relationships.' },
      { title: 'Accountability & Long-Term Growth', description: 'Stay committed to leadership goals through ongoing check-ins and structured support. Develop a personalized roadmap for continued development that extends beyond the coaching engagement.' },
    ],
    storyBeforeCta: true,
    ctaTitle: 'Ready to Begin Your Executive Coaching Journey?',
    stories: [
      {
        heading: 'Leadership Transformation Story',
        quote: "Working with Halima as my executive coach has been truly transformative. When I started the program, I was struggling with imposter syndrome and difficulty delegating effectively. The personalized coaching approach helped me identify my leadership strengths and develop strategies to address my weaknesses. I now lead with more confidence and clarity, which has positively impacted my entire team. The sessions provided a safe space to explore challenges while offering practical tools I could immediately implement. My team now describes me as a more empathetic and decisive leader, and our department's performance metrics have improved considerably. This coaching investment has paid dividends for both my career and my organization.",
        authorName: 'Michael T.',
        authorTitle: 'Senior Director',
      },
    ],
  },

  {
    id: 'expatriation-coaching',
    tabLabel: 'Expatriation',
    icon: Globe,
    iconBg: 'bg-pastel-pink',
    panelTitle: 'Expatriation Coaching Program',
    subheading: 'Expatriation Coaching: Navigate the Emotional Rollercoaster and Thrive',
    body: [
      { text: "The initial excitement of moving to a new country can quickly fade as the realities of adapting to a new culture, work environment, and supporting your family take hold. Whether it's your first move or your tenth, expatriation is a major life change that can feel overwhelming.", boxed: true },
      { text: "The emotional rollercoaster of change can lead to stress, isolation, and anxiety, but with the right support system, you can not only survive but thrive. Coaching provides the tools, strategies, and accountability needed to navigate these challenges, regain balance, and make your expatriation journey a rewarding experience for you and your family." },
      { text: "Let's work together to ensure that your relocation isn't just a move—it's the beginning of a successful, fulfilling adventure. Reach out today to learn how coaching can help you embrace change, overcome obstacles, and build the expatriate life you deserve." },
    ],
    benefitsCols: 2,
    benefits: [
      { title: 'Cultural Adjustment Support', description: 'Develop tools and strategies to understand and adapt to your new cultural environment, reducing culture shock and building cultural intelligence that will serve you throughout your international experience.' },
      { title: 'Identity Transition', description: "Navigate the challenging process of redefining your sense of self in a new environment, especially if you've experienced career changes or family role adjustments as part of your move abroad." },
      { title: 'Family Adjustment Guidance', description: 'Support for the unique challenges facing expatriate families, including helping partners navigate career transitions and children adapt to new schools and social environments.' },
      { title: 'Building Your Support Network', description: 'Strategies for creating meaningful connections and establishing a strong social support system in your new location, essential for long-term happiness and success abroad.' },
    ],
    ctaTitle: 'Ready to Begin Your Expatriation Coaching Journey?',
    stories: [
      {
        heading: 'Expat Success Story',
        quote: "Moving to Singapore for my husband's job was a much bigger challenge than I anticipated. I left behind my career, friends, and familiar surroundings, and found myself struggling with my new identity. The coaching sessions gave me a safe space to process these complex emotions and develop practical strategies for building a fulfilling life abroad. We worked on reframing my perspective, identifying opportunities in my new environment, and setting meaningful goals that aligned with this new chapter. Within a few months, I had established new routines, made connections, and even discovered a passion project that has since evolved into a small business. The transformation in my outlook and daily experience has been remarkable.",
        authorName: 'Amelia T.',
        authorTitle: 'Singapore',
      },
      {
        heading: 'Expat Success Story',
        quote: "Moving to Dubai from the UK as a trailing spouse was both exciting and daunting. I left behind a job I loved, and while I adored our new life in Dubai, I soon found myself struggling to find my identity, becoming solely a mom. My sense of self was slipping, and without a routine, I didn't know where to begin rebuilding. Thankfully, with the support of my coach, Halima, everything changed. She provided the strategies and guidance I desperately needed to rediscover who I am and embrace the sacrifices I made. Now, I feel more confident than ever, have a job I love, and my routine has brought stability back into my life. My marriage is thriving, and my children are happier. The transformation is incredible I realised I had been giving from a half-full cup and was completely burnt out. With Halima's help, I've found a way to be the best version of myself, all while cherishing our life in Dubai.",
        authorName: 'Holly Graham',
      },
      {
        heading: 'Expat Success Story',
        quote: "Relocating to San Francisco from Germany was an exhilarating yet challenging adventure. I left behind a job I was passionate about, and moved to support my partner's dream of launching a start-up in one of the most innovative hubs in the world. Although I was excited about the new opportunities, adjusting to life in the USA came with its hurdles. The vibrant yet fast-paced lifestyle of San Francisco was a stark contrast to the more structured and methodical pace I was accustomed to in Germany. Everything from the food to the social norms felt unfamiliar. I soon found myself in a rut, struggling to connect with like-minded people and establish a social circle, especially because we don't have kids. Without the community ties that often come from other parents, and amidst the constant hustle and bustle, establishing a routine was difficult. Unlike Germany, where I relied on the predictability of daily life, I found myself overwhelmed at times, missing the order and efficiency I was used to. However, my turning point came when I started working with Halima, who provided me with invaluable guidance. She equipped me with tools and techniques, to help me break free from the mindset where I felt stuck. Halima helped me reframe my negative thoughts and guided me to view my situation from a more positive perspective. Through her support, I gradually started to rebuild my routine, focusing on activities and hobbies that resonated with me and aligned more with this dynamic setting. She helped boost my confidence, which empowered me to connect with others which helped me rediscover my passions and embrace the changes. Halima's coaching gave me the confidence to embrace this new chapter alongside my partner's exciting venture. I've learned resilience and adaptability, and I'm now looking forward to each day with renewed enthusiasm. I'm slowly creating a life here that I love, thanks to her guidance and support.",
        authorName: 'Claudia Müller',
      },
    ],
  },

  {
    id: 'repatriation-coaching',
    tabLabel: 'Repatriation',
    icon: Home,
    iconBg: 'bg-pastel-peach',
    panelTitle: 'Repatriation Coaching Program',
    subheading: 'Transition Smoothly Back to Life at Home',
    body: [
      { text: "Returning home after years abroad can be just as challenging—if not more so—than your initial move overseas. The excitement of reconnecting with familiar places and people can quickly give way to feelings of disorientation, loneliness, and anxiety. Adjusting to life back home, navigating family dynamics, and reintegrating into work and social networks can be overwhelming.", boxed: true },
      { text: "With experience living in over 10+ countries, I understand the complexities of repatriation. Returning home can evoke emotions as intense as expatriation. However, with the right support, you can thrive during this transition. Coaching offers the tools, strategies, and guidance necessary to adjust, overcome isolation, and confidently embrace your next chapter." },
      { text: "Let's work together to ensure that your repatriation is not just a return, but a fresh start filled with purpose, resilience, and success. Reach out today to begin your repatriation journey with the support you need to build a fulfilling life back home." },
    ],
    benefitsCols: 2,
    benefits: [
      { title: 'Reverse Culture Shock Management', description: "Develop strategies to navigate the unexpected challenges of re-adapting to your home culture, including processing feelings of alienation and reconnecting with your cultural roots in a new way." },
      { title: 'Professional Reintegration', description: "Support for navigating career transitions post-international assignment, including leveraging your global experience, rebuilding professional networks, and finding fulfilling work that values your unique perspective." },
      { title: 'Identity Integration', description: "Guidance for integrating your international experiences into your evolving identity and finding ways to honor and maintain the global perspective you've developed while living abroad." },
      { title: 'Family Readjustment Support', description: 'Strategies for helping your family navigate the social, educational, and emotional aspects of returning "home," particularly for children who may have spent their formative years abroad.' },
    ],
    ctaTitle: 'Ready to Begin Your Repatriation Coaching Journey?',
    stories: [
      {
        heading: 'Repatriation Success Story',
        quote: "Repatriation was tougher than I expected. Coming back home after living abroad for years, I felt out of place, disconnected, and honestly, a bit lost. The culture shock I wasn't prepared for hit me hard. But working with Halima made all the difference. She helped me understand and manage those overwhelming feelings of isolation and anxiety. We worked through career re-entry, rebuilding relationships, and just figuring out how to fit back in. I now feel more confident, clear on my goals, and truly supported. It's been a game-changer in making this transition smoother and more manageable. I'm finally settling back into life at home, and I'm so grateful for the guidance I received!",
        authorName: 'Sarah Javid',
      },
    ],
  },

  {
    id: 'corporate-workshops',
    tabLabel: 'Corporate Workshops on Health, Well-being, and Work-life Balance',
    icon: LayoutGrid,
    iconBg: 'bg-pastel-blue',
    panelTitle: 'Corporate Workshops on Health, Well-being, and Work-life Balance',
    tagline: "Help your team thrive with this interactive, engaging workshop focused on effective stress management and preventing burnout. Delivered either online or in-person, this flexible and customizable program addresses your team's unique challenges, equipping them with the tools and techniques for optimal work-life balance.",
    body: [
      { text: "Investing in your employees' well-being is essential to their long-term success and productivity. Ensure your team has the resources they need to stay resilient, focused, and energized. Contact me today to discuss how we can tailor this workshop to support a healthier, more balanced workforce!" },
    ],
    note: "Our corporate workshops are highly customizable to suit your organization's specific needs.",
    benefitsCols: 2,
    benefits: [
      { title: 'Customized Workshop Design', description: "Each workshop is tailored to address your organization's specific needs, industry challenges, and team dynamics, ensuring maximum relevance and impact for your employees." },
      { title: 'Interactive Learning Experience', description: 'Engaging activities, small group discussions, and practical exercises that keep participants actively involved and ensure knowledge retention and real-world application.' },
      { title: 'Evidence-Based Techniques', description: 'All strategies and tools are grounded in proven psychological principles and research on stress management, resilience, and workplace performance.' },
      { title: 'Ongoing Implementation Support', description: 'Optional follow-up sessions, resources, and check-ins to help your team implement and maintain the strategies learned, ensuring lasting change.' },
    ],
    splitSection: {
      sectionTitle: 'Program Benefits',
      leftLabel: 'Benefits for Employees',
      leftIcon: Users,
      leftItems: WORKSHOP_EMPLOYEE_BENEFITS,
      rightLabel: 'Benefits for the Organization',
      rightIcon: Building2,
      rightItems: WORKSHOP_ORG_BENEFITS,
    },
    ctaTitle: 'Ready to Begin Your Corporate Workshop Journey?',
    stories: [
      {
        heading: 'Client Success Story',
        quote: "The corporate workshop was transformative for our team. Halima's approach helped us identify stress triggers and develop practical strategies that improved our work environment. Our team's productivity and morale have significantly increased, and we've seen a measurable reduction in burnout. The techniques we learned are simple yet effective, and we continue to use them daily. This investment in our team's wellbeing has paid dividends beyond what we expected.",
        authorName: 'John Miller',
        authorTitle: 'HR Director',
      },
    ],
  },

  {
    id: 'group-workshops',
    tabLabel: 'Group Workshops',
    icon: Users,
    iconBg: 'bg-pastel-yellow',
    panelTitle: 'Corporate Group Workshop',
    tagline: "Transform your team with our interactive workshop designed to enhance communication, foster collaboration, and empower employees and leaders to manage change effectively. This program equips your workforce with essential skills to improve feedback strategies, embrace change, and develop stronger leadership. By boosting emotional intelligence, increasing employee engagement, and providing practical tools for sustainable growth, we help create a supportive, adaptable work environment. Tailored to your team's unique needs, this workshop ensures long-term success in communication and change management. Let's work together to build a resilient, empowered team!",
    body: [],
    note: "Our corporate workshops are highly customizable to suit your organization's specific needs.",
    topBenefits: [
      { title: 'Enhance Team Communication', description: 'Develop clear, effective communication channels and strategies that reduce misunderstandings and foster a collaborative environment.' },
      { title: 'Build Change Resilience', description: 'Equip your team with tools to navigate organizational changes with confidence, reducing resistance and increasing adaptability.' },
      { title: 'Develop Emotional Intelligence', description: "Strengthen your team's ability to recognize, understand, and manage emotions, leading to improved interactions and conflict resolution." },
    ],
    splitSection: {
      sectionTitle: 'Workshop Benefits',
      leftLabel: 'Benefits for Employees',
      leftIcon: Users,
      leftItems: WORKSHOP_EMPLOYEE_BENEFITS,
      rightLabel: 'Benefits for the Organization',
      rightIcon: Building2,
      rightItems: WORKSHOP_ORG_BENEFITS,
    },
    ctaTitle: 'Ready to Begin Your Group Workshop Journey?',
    stories: [
      {
        heading: 'Client Transformation Story',
        quote: "Prioritizing employee well-being was one of the best decisions we made as a company. We noticed that stress was affecting not only productivity but also the overall atmosphere in the workplace. Many of our employees were struggling with burnout, and it was impacting team dynamics. The health and wellbeing workshop has been a turning point for us. Employees now have tools to manage their stress, leading to fewer moments of overwhelm and greater resilience in the face of challenges. The positive shift in our work environment is palpable. Communication has improved, employees feel more in control of their roles, and we've seen a significant reduction in stress-related absenteeism. We are now more equipped to foster a healthier, more supportive culture that empowers our staff to perform at their best.",
        authorName: 'James R.',
        authorTitle: 'Operations Director',
      },
    ],
  },

  {
    id: 'coaching-skills',
    tabLabel: 'Leadership Coaching Skills',
    icon: GraduationCap,
    iconBg: 'bg-pastel-purple',
    panelTitle: 'Leadership Coaching Skills',
    tagline: "Empower your leaders with coaching skills that transform how they interact with their teams. This program equips leaders at all levels with practical coaching techniques that enhance their leadership effectiveness and create a coaching culture within your organization.",
    body: [],
    note: "Our corporate workshops are highly customizable to suit your organization's specific needs.",
    benefitsCols: 2,
    benefits: [
      { title: 'Enhanced Team Performance', description: 'Leaders learn to bring out the best in their team members through powerful questioning techniques and active listening skills, rather than simply providing solutions.' },
      { title: 'Improved Employee Development', description: 'Equip leaders with the skills to foster growth and development in their team members, helping employees reach their full potential and advance in their careers.' },
      { title: 'Increased Innovation', description: 'By using coaching approaches, leaders create an environment where team members feel empowered to contribute ideas and solve problems creatively.' },
      { title: 'Strengthened Organizational Culture', description: 'Develop a coaching culture that spreads beyond individual leaders to transform the entire organizational approach to leadership and employee development.' },
    ],
    programComponents: [
      { title: 'Coaching Skills Workshops', description: 'Interactive sessions where leaders learn and practice essential coaching skills including powerful questioning, active listening, and providing constructive feedback.' },
      { title: 'Practical Implementation Plans', description: 'Customized strategies for integrating coaching approaches into daily leadership practices, with concrete action steps and implementation timelines.' },
      { title: 'Follow-up Support', description: 'Ongoing support to help leaders refine their coaching skills and address challenges that arise as they implement new approaches with their teams.' },
      { title: 'Impact Measurement', description: 'Assessment tools to measure the effectiveness of coaching practices and their impact on team performance and employee engagement.' },
    ],
    storyBeforeCta: true,
    ctaTitle: 'Ready to Begin Your Leadership Coaching Skills Program Journey?',
    stories: [
      {
        heading: 'Leadership Impact Story',
        quote: "The leadership coaching skills program has transformed how our management team operates. Previously, our leaders were quick to provide solutions rather than empowering their teams to problem-solve. After working with Halima, we've seen a significant shift in leadership style. Our managers now ask powerful questions, actively listen, and foster a growth mindset in their teams. This has resulted in more engaged employees, innovative solutions to challenges, and a stronger leadership pipeline as team members develop their own capabilities. The impact extends beyond individual teams, we're seeing a cultural transformation across the organization.",
        authorName: 'Sarah Thompson',
        authorTitle: 'Chief People Officer',
      },
    ],
  },
];
