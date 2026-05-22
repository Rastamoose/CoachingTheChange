import { Link } from 'react-router-dom';
import Container from './ui/Container';

export default function MeetCoachHalima() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white border-t border-gray-100">
      <Container size="lg">
        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 text-center mb-6">
          Meet Coach Halima
        </h2>

        <h3 className="font-playfair text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-8">
          Goals are achieved while also experiencing profound{' '}
          <Link to="/fulfillment" className="text-pastel-green hover:underline">
            fulfillment
          </Link>{' '}
          and continuous growth in both personal and professional life.
        </h3>

        <div className="space-y-5 text-gray-600 leading-relaxed text-base md:text-lg">
          <p>
            Having lived in 10+ countries, I bring a rich global perspective and deep understanding
            of diverse cultures. This allows me to adapt coaching to your unique needs, ensuring a
            personalized and impactful experience.
          </p>
          <p>
            With over 15 years of coaching experience, an MSc in Psychology, and post-graduate CBT
            training, I am a Board-Certified Health and Wellness Coach and Leadership Coach. I
            specialize in supporting individuals through life transitions, advancing their careers,
            and building unshakable confidence. Whether you're dealing with depression, and anxiety,
            breaking free from negative thought patterns, aiming for leadership growth, or looking to
            make lasting changes by breaking unhelpful habits, my proven 3-pillar approach, system,
            support, and accountability, will guide you toward lasting transformation and success.
          </p>
          <p>
            In my coaching approach, I've discovered that blending the powerful principles of CBT,
            Person-Centered Therapy (focused on cultivating empathy and unlocking your innate
            potential for growth), health and wellness coaching, and Motivational Interviewing (MI)
            creates the perfect formula for lasting transformation. By focusing on collaboration,
            empathy, and empowerment, we lay the foundation for genuine, meaningful change. This
            holistic method helps you not only achieve your goals but also transforms your mindset,
            emotions, and actions, building a strong, resilient foundation for your journey forward.
          </p>
          <p>
            Imagine you're building the ultimate high-performance car. The principles of coaching and
            CBT are like the blueprint and engine specs, providing a precise design and solid
            foundation for your mental and emotional well-being. Health and wellness coaching is the
            expert mechanic, tuning up your habits, actions, and energy, transforming them into
            high-octane fuel for success. When these components come together, you don't just have a
            car that gets you from point A to point B, you've got a powerhouse that's sleek,
            efficient, and built to go the distance. Just as a well-crafted car takes you on a
            thrilling journey for years, this holistic approach ensures your growth is not only
            sustainable, but your life is revved up and ready to race toward your goals.
          </p>
          <p className="font-bold text-gray-900">
            I'm passionate about unlocking potential, shifting mindsets, and creating real, lasting
            change.
          </p>
          <p>
            I collaborate with clients worldwide, including in the UK, US, Canada, the Middle East,
            and Asia, to unlock potential, shift mindsets, and create lasting change with the
            philosophy "change, commit, forever fit!"
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 mt-12">
          <div className="border border-gray-200 rounded-xl p-6 text-center">
            <p className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-1">1500+</p>
            <p className="text-gray-500 text-sm">Clients Coached</p>
          </div>
          <div className="border border-gray-200 rounded-xl p-6 text-center">
            <p className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-1">15+</p>
            <p className="text-gray-500 text-sm">Years Experience</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
