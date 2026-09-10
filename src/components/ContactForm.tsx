import { useState } from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { coachingTypes, timeframes, FORMSPREE_ID } from '../data/contact';
import Container from './ui/Container';

type FormState = {
  name: string;
  email: string;
  timezone: string;
  coachingType: string;
  timeframe: string;
  workedBefore: string;
  goals: string;
  message: string;
};

const EMPTY_FORM: FormState = {
  name: '',
  email: '',
  timezone: '',
  coachingType: '',
  timeframe: '',
  workedBefore: '',
  goals: '',
  message: '',
};

const REQUIRED_FIELDS: (keyof FormState)[] = [
  'name', 'email', 'timezone', 'coachingType', 'timeframe', 'goals',
];

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const setField = (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((f) => ({ ...f, [field]: e.target.value }));

  const isValid = () => REQUIRED_FIELDS.every((f) => form[f].trim() !== '');

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid()) {
      alert('Please fill in all required fields.');
      return;
    }
    setStatus('sending');
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        // _subject sets the subject line Formspree uses for the notification email.
        // Without it these all arrive as a generic "New submission from ...".
        body: JSON.stringify({ ...form, _subject: `Discovery call request — ${form.name}` }),
      });
      setStatus(res.ok ? 'success' : 'error');
      if (res.ok) setForm(EMPTY_FORM);
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white border-t border-gray-100">
      <Container size="md">
        <div className="text-center mb-10">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Ready to Transform Your Life?
          </h2>
          <p className="font-lora text-xl text-gray-800 mb-2">Book a Free Discovery Call</p>
          <p className="text-gray-600 text-base">
            Tell us a little about yourself and we'll arrange a discovery call, free of charge.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 md:p-10">
          <div className="flex items-center gap-3 mb-8">
            <MessageCircle className="w-6 h-6 text-gray-400" />
            <h3 className="font-playfair text-xl font-bold text-gray-900">Get in Touch</h3>
          </div>

          {status === 'success' ? (
            <div className="text-center py-12">
              <p className="text-green-600 font-medium text-lg">
                Message sent! We'll be in touch soon.
              </p>
            </div>
          ) : (
            <form onSubmit={submit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="field-label">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input type="text" className="input-field" value={form.name} onChange={setField('name')} required />
                </div>
                <div>
                  <label className="field-label">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input type="email" className="input-field" value={form.email} onChange={setField('email')} required />
                </div>
              </div>

              <div>
                <label className="field-label">
                  Your Timezone <span className="text-red-500">*</span>
                </label>
                <select className="input-field" value={form.timezone} onChange={setField('timezone')} required>
                  <option value="" disabled>Select your timezone</option>
                  {Intl.supportedValuesOf('timeZone').map((tz) => (
                    <option key={tz} value={tz}>{tz}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="field-label">
                  Type of Coaching <span className="text-red-500">*</span>
                </label>
                <select className="input-field" value={form.coachingType} onChange={setField('coachingType')} required>
                  <option value="" disabled>Select a coaching service</option>
                  {coachingTypes.map((t) => (
                    <option key={t.value} value={t.value}>{t.label}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="field-label">
                  How soon would you like to get started? <span className="text-red-500">*</span>
                </label>
                <select className="input-field" value={form.timeframe} onChange={setField('timeframe')} required>
                  <option value="" disabled>Select timeframe</option>
                  {timeframes.map((t) => (
                    <option key={t.value} value={t.value}>{t.label}</option>
                  ))}
                </select>
              </div>

              <div>
                <p className="field-label">Have you worked with a coach before?</p>
                <div className="flex items-center justify-center gap-8">
                  {['Yes', 'No'].map((opt) => (
                    <label key={opt} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="workedBefore"
                        value={opt.toLowerCase()}
                        checked={form.workedBefore === opt.toLowerCase()}
                        onChange={setField('workedBefore')}
                        className="w-4 h-4 accent-gray-800"
                      />
                      <span className="text-sm text-gray-700">{opt}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="field-label">
                  What are your primary goals for coaching? <span className="text-red-500">*</span>
                </label>
                <textarea
                  className="input-field"
                  rows={5}
                  placeholder="Please share what you hope to achieve through coaching..."
                  value={form.goals}
                  onChange={setField('goals')}
                  required
                />
              </div>

              <div>
                <label className="field-label">
                  Additional Message{' '}
                  <span className="text-gray-400 text-xs">(optional)</span>
                </label>
                <textarea
                  className="input-field"
                  rows={4}
                  placeholder="Any other details you'd like to share..."
                  value={form.message}
                  onChange={setField('message')}
                />
              </div>

              {status === 'error' && (
                <p className="text-red-500 text-sm text-center">
                  There was a problem sending your message. Please try again.
                </p>
              )}

              <div className="text-center">
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="btn-primary-pill group disabled:opacity-60"
                >
                  {status === 'sending' ? 'Sending...' : 'Book Your Discovery Call'}
                  {status !== 'sending' && (
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </Container>
    </section>
  );
}
