'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Loader2, Send, CheckCircle2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Schema = z.object({
  name: z.string().min(2, 'Please enter your full name.'),
  email: z.string().email('Enter a valid email address.'),
  company: z.string().optional(),
  budget: z.string().min(1, 'Pick a budget range so we can match the right team.'),
  service: z.string().min(1, 'Pick the service you’re interested in.'),
  message: z
    .string()
    .min(20, 'Tell us a little more — at least 20 characters.')
    .max(1500, 'Keep this under 1500 characters.'),
});

type FormValues = z.infer<typeof Schema>;

const SERVICES = [
  'Web Development',
  'Mobile App Development',
  'Flutter App Development',
  'Backend / API Development',
  'AI Solutions',
  'SaaS Product Development',
  'Cloud & DevOps',
  'Dedicated Developer Hiring',
  'Outsourcing / Offshore Team',
  'IT Consulting',
  'Other',
];

const BUDGETS = [
  'Under $10k',
  '$10k – $25k',
  '$25k – $75k',
  '$75k – $200k',
  '$200k+',
  'Monthly retainer',
];

export default function InquiryForm() {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(Schema),
    defaultValues: {
      name: '',
      email: '',
      company: '',
      budget: '',
      service: '',
      message: '',
    },
  });

  const onSubmit = async (values: FormValues) => {
    await new Promise((r) => setTimeout(r, 900));

    // eslint-disable-next-line no-console
    console.log('Inquiry submitted', values);
    toast({
      title: 'Message received',
      description: 'Thanks — we’ll be in touch within one business day.',
    });
    setSubmitted(true);
    reset();
  };

  if (submitted) {
    return (
      <div className="card-surface p-8">
        <div
          className="w-12 h-12 rounded-full mb-4 flex items-center justify-center"
          style={{ background: 'var(--accent-soft)' }}
        >
          <CheckCircle2 className="w-6 h-6" style={{ color: 'var(--accent)' }} />
        </div>
        <h3 className="text-xl font-semibold" style={{ color: 'var(--ink)' }}>
          Thanks — we got your message.
        </h3>
        <p className="mt-2 text-sm" style={{ color: 'var(--muted)' }}>
          A delivery lead will reply within one business day with a discovery slot or follow-up questions.
        </p>
        <button type="button" onClick={() => setSubmitted(false)} className="btn-secondary mt-6">
          Send another inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="card-surface p-6 md:p-8 space-y-5" noValidate>
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Your name" error={errors.name?.message}>
          <input
            type="text"
            autoComplete="name"
            placeholder="Jane Doe"
            {...register('name')}
            className="form-input"
          />
        </Field>
        <Field label="Work email" error={errors.email?.message}>
          <input
            type="email"
            autoComplete="email"
            placeholder="jane@company.com"
            {...register('email')}
            className="form-input"
          />
        </Field>
      </div>

      <Field label="Company (optional)" error={errors.company?.message}>
        <input
          type="text"
          placeholder="Company or product name"
          {...register('company')}
          className="form-input"
        />
      </Field>

      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="What do you need?" error={errors.service?.message}>
          <select {...register('service')} className="form-input">
            <option value="">Pick a service…</option>
            {SERVICES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Budget range" error={errors.budget?.message}>
          <select {...register('budget')} className="form-input">
            <option value="">Pick a budget…</option>
            {BUDGETS.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Tell us about the project" error={errors.message?.message}>
        <textarea
          rows={5}
          placeholder="What are you building? What does success look like? Any deadlines we should know about?"
          {...register('message')}
          className="form-input resize-none"
        />
      </Field>

      <button type="submit" disabled={isSubmitting} className="btn-primary w-full sm:w-auto">
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" /> Sending…
          </>
        ) : (
          <>
            Send inquiry <Send className="w-4 h-4" />
          </>
        )}
      </button>

      <p className="text-xs" style={{ color: 'var(--muted)' }}>
        We sign NDAs upfront. Your details stay private and are never shared with third parties.
      </p>
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span
        className="block text-xs font-semibold tracking-[0.12em] uppercase mb-1.5"
        style={{ color: 'var(--muted)' }}
      >
        {label}
      </span>
      {children}
      {error && (
        <span className="mt-1 block text-xs font-medium" style={{ color: '#C8420A' }}>
          {error}
        </span>
      )}
    </label>
  );
}
