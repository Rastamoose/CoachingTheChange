export type TestimonialCategory =
  | 'Expatriation & Repatriation'
  | 'Health & Pain Management'
  | 'Personal Development'
  | 'Corporate & Leadership';

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  rating: 5;
  category: TestimonialCategory;
}

export const testimonials: Testimonial[] = [
  // Expatriation & Repatriation
  {
    quote:
      "Repatriation was tougher than I expected. Coming back home after living abroad for years, I felt out of place, disconnected, and honestly, a bit lost. The culture shock I wasn't prepared for hit me hard. But working with Halima made all the difference. She helped me understand and manage those overwhelming feelings of isolation and anxiety. We worked through career re-entry, rebuilding relationships, and just figuring out how to fit back in. I now feel more confident, clear on my goals, and truly supported. It's been a game-changer in making this transition smoother and more manageable. I'm finally settling back into life at home, and I'm so grateful for the guidance I received!",
    name: 'Sarah Javid',
    title: 'HR Manager, United Kingdom',
    rating: 5,
    category: 'Expatriation & Repatriation',
  },
  {
    quote:
      "After spending several years abroad, I was excited to return home, but I quickly found that repatriation was far harder than I imagined. It felt like I didn't belong anymore—there was 'reverse culture shock', feelings of isolation, and honestly, a bit of anxiety and depression. I didn't know how to re-adjust to life back home, my career was uncertain, and relationships with family and friends felt strained. Working with Halima really turned things around. She helped me navigate those overwhelming emotions, rebuild my professional path, and reconnect with my loved ones. I'm now adjusting with more clarity and confidence, and I can honestly say that coaching made all the difference in making this transition smoother and more manageable. I feel empowered and ready for the next chapter.",
    name: 'John Dickenson',
    title: 'Operations Manager, Finland',
    rating: 5,
    category: 'Expatriation & Repatriation',
  },
  {
    quote:
      "Moving from the UK to China was an exciting adventure, but it came with its challenges. The cultural differences were huge, and I struggled to adjust both personally and professionally. Coaching helped me navigate those early stages, from dealing with new cultures to finding my footing in my new work environment. When I moved to the USA from China, I thought I was prepared, but I quickly realized that the transition was just as tough, if not tougher. Once again, coaching provided me with the tools to adapt—whether it was managing my career transition or learning how to connect with a completely new social environment. It's been an incredibly valuable journey, and I'm so much more confident and resilient now. The support I received through each phase of my expatriation has been a game-changer, and I can imagine going through it all without it.",
    name: 'Jack Saunders',
    title: 'CFO, United States',
    rating: 5,
    category: 'Expatriation & Repatriation',
  },
  {
    quote:
      "Moving from the UK to Russia was a huge step, and honestly, I wasn't prepared for how challenging it would be. The language barrier, cultural differences, and the isolation I felt were overwhelming at times. The coaching I received was exactly what I needed to manage the emotional and practical aspects of this big transition. It helped me build resilience, navigate the challenges of my new job, and even adjust to life in a city that felt so different from home. What I really appreciated was how coaching supported me through the tough moments, like when I felt disconnected and lost. It helped me gain a clearer sense of direction and empowered me to take control of my journey. I truly helped me remain true to myself.",
    name: 'Tom Patterson',
    title: '',
    rating: 5,
    category: 'Expatriation & Repatriation',
  },
  {
    quote:
      "Relocating to San Francisco from Germany was an exhilarating yet challenging adventure. I left behind a job I was passionate about, and moved to support my partner's dream of launching a start-up. The vibrant yet fast-paced lifestyle was a stark contrast to the more structured pace I was accustomed to in Germany. My turning point came when I started working with Halima, who provided me with invaluable guidance. She equipped me with tools and techniques to break free from the mindset where I felt stuck. Through her support, I gradually rebuilt my routine and gained the confidence to embrace this new chapter.",
    name: 'Claudia Müller',
    title: 'Expatriate, San Francisco',
    rating: 5,
    category: 'Expatriation & Repatriation',
  },
  {
    quote:
      "Moving to Dubai from the UK as a trailing spouse was both exciting and daunting. I left behind a job I loved, and while I adored our new life in Dubai, I soon found myself struggling to find my identity, becoming solely a mom. My sense of self was slipping, and without a routine, I didn't know where to begin rebuilding. Thankfully, with the support of my coach, Halima, everything changed. She provided the strategies and guidance I desperately needed to rediscover who I am and embrace the sacrifices I made. Now, I feel more confident than ever, have a job I love, and my routine has brought stability back into my life. My marriage is thriving, and my children are happier.",
    name: 'Holly Graham',
    title: 'Expatriate, Dubai',
    rating: 5,
    category: 'Expatriation & Repatriation',
  },

  // Health & Pain Management
  {
    quote:
      "Living with arthritis for years had me feeling like I was slowly losing myself. The constant pain made it difficult to keep up with everyday tasks, let alone enjoy things I used to love, like going for walks or gardening. I was stuck in a rut, feeling frustrated and defeated. The coaching sessions were a game changer. Through our work together, I learned how to reframe my mindset. Instead of focusing on what I couldn't do, I started celebrating the small wins, like walking a little further each day or managing my pain better. Halima helped me break down my goals into small, manageable steps, which made everything feel achievable. I've developed better coping strategies and, more importantly, gained emotional resilience. I'm no longer stuck—I've got a clear path forward and feel empowered, even with arthritis.",
    name: 'Janet L.',
    title: 'Retired Teacher',
    rating: 5,
    category: 'Health & Pain Management',
  },
  {
    quote:
      "I've been struggling with chronic back pain for several years. It got to the point where I was missing out on time with my family and even simple pleasures like playing with my kids or going on trips. The frustration and emotional toll were starting to weigh me down. The coaching experience gave me a completely new perspective. Instead of focusing on the limitations of my back pain, we worked together to identify what I could do. Halima helped me shift my mindset, develop healthier habits, and create realistic goals that didn't feel overwhelming. The consistent check-ins kept me accountable, and celebrating small successes really built my confidence. Now, I can look forward to life again, even if I still have pain. I've learned how to manage it better, and I'm more optimistic about the future.",
    name: 'Mark R.',
    title: 'Father & Engineer',
    rating: 5,
    category: 'Health & Pain Management',
  },
  {
    quote:
      "I've been living with fibromyalgia for nearly a decade, and the pain and fatigue have had a profound effect on my life. There were days I didn't know how I was going to get through, and I felt isolated, stuck in my own body. The coaching was a breath of fresh air. Halima provided a compassionate space where I could truly express my struggles, and together we worked on reframing my thoughts around my pain. Through the coaching process, I started focusing on small, actionable steps instead of the overwhelming mountain of challenges I was facing. With a clear plan and emotional resilience strategies, I've been able to make incremental progress. It's not about getting rid of the pain, but learning how to manage it and reclaim my life. I'm more empowered and hopeful now, something I never thought I would feel with fibromyalgia.",
    name: 'Susan W.',
    title: 'Writer',
    rating: 5,
    category: 'Health & Pain Management',
  },
  {
    quote:
      "I went through a spinal operation that didn't go as planned, followed by a hip operation that took longer to heal than I expected. Not only was I in constant pain, but I also felt utterly useless as I couldn't take care of my children or do things I loved, like playing basketball. I was depressed, overwhelmed, and couldn't see a way forward. The coaching experience completely shifted my perspective. Halima helped me understand that my worth isn't defined by what I can physically do, and that it was okay to focus on healing in small steps. The coaching sessions gave me the tools to stay focused on recovery without getting discouraged, even when things didn't improve as fast as I wanted. I started setting realistic goals that gave me a sense of progress, and the emotional resilience I built helped me overcome the depression that was holding me back. I still have challenges, but now I have hope and a plan to move forward, no matter how long it takes.",
    name: 'David M.',
    title: 'Former Basketball Player',
    rating: 5,
    category: 'Health & Pain Management',
  },
  {
    quote:
      "I have severe arthritis in my spine, hips, hands, and knees – and have undergone back surgery twice. I was a teacher, runner, hiker, soccer player, and generally very active in mind and body. That has all stopped. Despite pain management procedures, I suffer chronic pain. Depression and seclusion followed, and life became simply an existence. I heard about health coaching and was so extremely fortunate to be teamed up with Halima. As my Health Coach, she has turned my existence back into a life. By having someone on your side, someone who understands the medical part, someone who is trained to listen and help me understand what I am trying to express has been a miracle; And because of the tools she has given me or helped me discover I am a much better patient.",
    name: 'Anne Harvey',
    title: 'Teacher, Runner, Hiker, Soccer Player',
    rating: 5,
    category: 'Health & Pain Management',
  },

  // Personal Development
  {
    quote:
      "My experience with coaching with Halima has been incredibly impactful. The sessions were structured in such a way that I always knew what to focus on, but they also allowed space for reflection and personal growth. What I appreciated most was the ability to identify my deeper motivations and align them with my career and personal goals. The non-judgmental space provided me with the freedom to explore challenges and make meaningful shifts in my thinking. My coach was always there to hold me accountable, which helped me stay on track during moments when I felt uncertain. By the end of the 8 sessions, I felt more confident, energized, and focused than I ever have before. I've already seen improvements in how I approach challenges, and I'm more motivated than ever to continue growing.",
    name: 'Jonathan T.',
    title: 'Senior Analyst',
    rating: 5,
    category: 'Personal Development',
  },
  {
    quote:
      "I was initially unsure about committing to coaching, but after just six sessions, I can honestly say this program has made a world of difference. It helped me understand why I was feeling stuck in my career there was a disconnect between my goals and my true values. The deep dive into the 'why beneath the why' was eye-opening. I've been able to refocus my efforts and break down larger goals into manageable steps, which has made a huge impact on my productivity. The sessions gave me practical tools to overcome self-doubt and improve my time management, and I feel more confident and clear about my path forward. The accountability and actionable steps kept me on track, and I've seen results both in my work and personal life. The change is real!!",
    name: 'Emma L.',
    title: 'Mid-Level Manager',
    rating: 5,
    category: 'Personal Development',
  },
  {
    quote:
      "Working with my coach over 6 sessions was nothing short of transformative. At first, I wasn't sure what to expect, but the personalized approach really helped me dive deep and understand my goals. I came to realize that my biggest challenge wasn't the goals themselves, but the self-limiting beliefs I was holding onto. Through practical exercises and actionable steps, I was able to shift my mindset and create lasting habits that have already brought about positive changes in my life. The coaching gave me clarity, accountability, and a deep sense of purpose. It was exactly what I needed to break through old patterns and set myself on a path toward real success.",
    name: 'Sandra P.',
    title: 'Marketing Manager',
    rating: 5,
    category: 'Personal Development',
  },
  {
    quote:
      "I warmly recommend Halima. She has been wonderful in helping me restore my confidence and sense of self worth. I continue to pursue my health and wellness goals which has brought a very positive change in my life. I wholeheartedly recommend Halima.",
    name: 'Client',
    title: 'International Expatriate',
    rating: 5,
    category: 'Personal Development',
  },
  {
    quote:
      "As a small business owner, I've often felt overwhelmed with the daily grind and constant decision-making. After just four coaching sessions, I noticed a significant shift. I gained clarity on what truly matters in my business, as well as a deeper understanding of my personal motivations. The coaching gave me a safe space to reflect on my challenges, and the tools provided were easy to implement. The coaching process helped me establish better work-life balance and focus on the right priorities. I feel less overwhelmed, and I now approach business challenges with renewed energy and a more structured plan. Even just four sessions have helped me feel empowered and more in control.",
    name: 'Greg S.',
    title: 'Entrepreneur',
    rating: 5,
    category: 'Personal Development',
  },

  // Corporate & Leadership
  {
    quote:
      "Since we implemented the leadership and health and wellbeing workshop for our team, we've seen a noticeable improvement in both employee well-being and overall performance. Our workforce has always been dedicated, but the pressures they faced were starting to take a toll on their mental health and productivity. This program provided them with practical tools to manage stress, improve their focus, and stay energized in their roles. The results speak for themselves—employee morale has increased, absenteeism has decreased, and the team is collaborating more effectively than ever. Investing in employee well-being was a game-changer for us. It's clear that when our employees feel supported, they are more productive, engaged, and loyal.",
    name: 'Sarah T.',
    title: 'HR Manager',
    rating: 5,
    category: 'Corporate & Leadership',
  },
  {
    quote:
      "Prioritizing employee well-being was one of the best decisions we made as a company. We noticed that stress was affecting not only productivity but also the overall atmosphere in the workplace. Many of our employees were struggling with burnout, and it was impacting team dynamics. The health and wellbeing workshop has been a turning point for us. Employees now have tools to manage their stress, leading to fewer moments of overwhelm and greater resilience in the face of challenges. The positive shift in our work environment is palpable. Communication has improved, employees feel more in control of their roles, and we've seen a significant reduction in stress-related absenteeism. We are now more equipped to foster a healthier, more supportive culture that empowers our staff to perform at their best.",
    name: 'James R.',
    title: 'Operations Director',
    rating: 5,
    category: 'Corporate & Leadership',
  },
  {
    quote:
      "As a team leader, this Coaching program truly transformed how I approach my leadership role. Before, my conversations with team members often felt transactional focused on tasks and outcomes. Now, with the tools I've learned, I listen with more empathy, ask powerful questions, and provide feedback in a way that feels more motivating than critical. The results have been incredible. Team communication has improved, and I see a stronger sense of trust and collaboration within the group. I've also noticed how much more receptive my team is to feedback, and how they're taking ownership of their development. This program has made a noticeable change in the way we work together everyone feels more supported and empowered.",
    name: 'Jane M.',
    title: 'Team Leader',
    rating: 5,
    category: 'Corporate & Leadership',
  },
  {
    quote:
      "Participating in this coaching program has had a profound impact on how I communicate with my manager and peers. I used to feel like feedback was something I had to endure, but now, I feel like my manager is actually listening to me and guiding me to find my own solutions. The questions asked during our coaching conversations have really helped me reflect on my goals and motivations. This approach has encouraged me to step outside my comfort zone and take more proactive actions. I feel more confident in my role, and the team dynamic has shifted in a positive direction. The program helped me realize that coaching isn't just about receiving feedback; it's about engaging in a meaningful conversation that drives growth.",
    name: 'Ben K.',
    title: 'Employee',
    rating: 5,
    category: 'Corporate & Leadership',
  },
  {
    quote:
      "Implementing the Coaching program for our leadership team has been a game-changer. The shift in how leaders communicate has been remarkable. They've transitioned from simply telling their teams what to do to asking powerful questions that inspire self-reflection and development. Not only have leaders become more effective coaches, but they also now receive and give feedback in a way that promotes growth, rather than causing defensiveness. We've seen improvements in communication across all levels, and the team is more motivated and collaborative. The leadership program didn't just teach new skills—it changed the culture of how we interact, giving us a stronger foundation for success.",
    name: 'Olivia H.',
    title: 'HR Manager',
    rating: 5,
    category: 'Corporate & Leadership',
  },
  {
    quote:
      "Halima has been the most effective and impactful executive coach that I have worked with. She helped me distinguish professional goals from personal goals and understand the difference each journey makes when approached with a focused mindset. A true Coaching champion.",
    name: 'Executive Client',
    title: "McDonald's Franchisee",
    rating: 5,
    category: 'Corporate & Leadership',
  },
];

export const CATEGORIES: TestimonialCategory[] = [
  'Expatriation & Repatriation',
  'Health & Pain Management',
  'Personal Development',
  'Corporate & Leadership',
];
