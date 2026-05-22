export interface IndividualPlan {
  id: string;
  title: string;
  price: string;
  currency: string;
  features: string[];
}

export interface CorporatePlan {
  id: string;
  title: string;
  subtitle: string;
  features: string[];
  learnMoreHref: string;
}

export const individualPlans: IndividualPlan[] = [
  {
    id: '6-8-week',
    title: '6-8 Week Program',
    price: '£1,085',
    currency: 'GBP',
    features: [
      '6 x 60-Minute Coaching Sessions: Conducted over a flexible period of 6-8 weeks.',
      'Full-Spectrum Personal Development: Comprehensive support to explore various areas of personal growth.',
      'Personalized Growth Plan & Accountability: Tailored strategies to meet your specific goals with regular check-ins for progress tracking.',
      'Diverse Range of Tools and Techniques: Equipped with a variety of methods to support and facilitate your transformations.',
      'Email Support & Resources: Access to continuous email support and educational resources to aid your development journey.',
    ],
  },
  {
    id: '12-14-week',
    title: '12-14 Week Program',
    price: '£2,085',
    currency: 'GBP',
    features: [
      '12 x 60-Minute Coaching Sessions: Spanning a comfortable 12-14 weeks.',
      'Deep Coaching Across Core Development Areas: In-depth exploration of essential aspects of personal and professional growth.',
      'Hands-On Goal Setting, Tailored to Your Life: Personalized goal-setting experiences to align with your lifestyle and aspirations.',
      'Ongoing Feedback & Mindset Shifts: Regular input and innovative approaches to foster positive mindset adjustments.',
      'Email Support & Coaching Materials: Continual support via email and access to enriching coaching materials to enhance your learning.',
    ],
  },
];

export const corporatePlans: CorporatePlan[] = [
  {
    id: 'corporate-workshops',
    title: 'Corporate Workshops',
    subtitle: 'Team development and growth',
    features: [
      'Tailored workshop design',
      'Trained facilitator',
      'Workshop materials',
      'Pre and post-workshop assessment',
      'Follow-up implementation plan',
    ],
    learnMoreHref: '/services',
  },
  {
    id: 'leadership-coaching',
    title: 'Leadership Coaching Skills',
    subtitle: 'Empower leaders with coaching capabilities',
    features: [
      'Leadership transformation',
      'Enhanced leadership effectiveness',
      'Improved employee empowerment',
      'Coaching culture development',
      'Organizational impact assessment',
    ],
    learnMoreHref: '/services',
  },
];
