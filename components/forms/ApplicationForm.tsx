'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Loader2, Send, CheckCircle2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { OPEN_POSITIONS } from '@/lib/constants';

const Schema = z.object({
  name: z.string().min(2, 'Please enter your full name.'),
  email: z.string().email('Enter a valid email address.'),
  position: z.string().min(1, 'Pick the role you’re applying for.'),
  experience: z.string().min(1, 'Pick your experience level.'),
  portfolio: z
    .string()
    .min(1, 'A portfolio or LinkedIn URL is required.')
    .refine((v) => /^https?:\/\//i.test(v), 'Include https:// in front of the URL.'),
  resumeName: z.string().min(1, 'Please attach your resume (PDF or DOCX).'),
  message: z.string().max(800, 'Keep this under 800 characters.').optional(),
});

type FormValues = z.infer<typeof Schema>;

const EXPERIENCE_LEVELS = ['0–1 years', '2–3 years', '4–6 years', '7+ years'];

type Props = { defaultPosition?: string };

export default function ApplicationForm({ defaultPosition }: Props) {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(Schema),
    defaultValues: {
      name: '',
      email: '',
      position: defaultPosition ?? '',
      experience: '',
      portfolio: '',
      resumeName: '',
      message: '',
    },
  });

  const resumeName = watch('resumeName');

  const onSubmit = async (values: FormValues) => {
    // Client-side stub: simulate latency, then show success.
    await new Promise((r) => setTimeout(r, 900));

    // eslint-disable-next-line no-console
    console.log('Application submitted', values);
    toast({
      title: 'Application received',
      description: 'Thanks — we’ll review and get back within 5 business days.',
    });
    setSubmitted(true);
    reset();
  };

  if (submitted) {
    return (
      <div className="card-surface p-8 text-center">
        <div
          className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center"
          style={{ background: 'var(--accent-soft)' }}
        >
          <CheckCircle2 className="w-6 h-6" style={{ color: 'var(--accent)' }} />
        </div>
        <h3 className="text-xl font-semibold" style={{ color: 'var(--ink)' }}>
          Application received
        </h3>
        <p className="mt-2 text-sm" style={{ color: 'var(--muted)' }}>
          Thanks for applying. We review every application and reply within five business days.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="btn-secondary mt-6"
        >
          Submit another application
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="card-surface p-6 md:p-8 space-y-5" noValidate>
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Full name" error={errors.name?.message}>
          <input
            type="text"
            autoComplete="name"
            placeholder="Jane Doe"
            {...register('name')}
            className="form-input"
          />
        </Field>
        <Field label="Email" error={errors.email?.message}>
          <input
            type="email"
            autoComplete="email"
            placeholder="jane@example.com"
            {...register('email')}
            className="form-input"
          />
        </Field>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Position" error={errors.position?.message}>
          <select {...register('position')} className="form-input">
            <option value="">Select a role…</option>
            {OPEN_POSITIONS.map((p) => (
              <option key={p.slug} value={p.title}>
                {p.title}
              </option>
            ))}
            <option value="Other">Other / open application</option>
          </select>
        </Field>
        <Field label="Experience" error={errors.experience?.message}>
          <select {...register('experience')} className="form-input">
            <option value="">Select level…</option>
            {EXPERIENCE_LEVELS.map((e) => (
              <option key={e} value={e}>
                {e}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Portfolio / LinkedIn URL" error={errors.portfolio?.message}>
        <input
          type="url"
          placeholder="https://linkedin.com/in/your-profile"
          {...register('portfolio')}
          className="form-input"
        />
      </Field>

      <Field label="Resume" error={errors.resumeName?.message}>
        <label
          className="flex items-center justify-between gap-3 px-3 py-2.5 rounded-md cursor-pointer text-sm transition-colors"
          style={{ background: 'var(--bg)', border: '1px solid var(--line)', color: 'var(--ink)' }}
        >
          <span style={{ color: resumeName ? 'var(--ink)' : 'var(--muted)' }}>
            {resumeName || 'Attach a PDF or DOCX (max 5 MB)'}
          </span>
          <span
            className="text-xs font-semibold px-3 py-1.5 rounded-md"
            style={{ background: 'var(--accent-soft)', color: 'var(--accent-dark)' }}
          >
            Browse
          </span>
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            className="hidden"
            onChange={(e) => {
              const f = e.target.files?.[0];
              if (f) setValue('resumeName', f.name, { shouldValidate: true });
            }}
          />
        </label>
      </Field>

      <Field label="Anything else? (optional)" error={errors.message?.message}>
        <textarea
          rows={4}
          placeholder="Tell us briefly why you’re a fit."
          {...register('message')}
          className="form-input resize-none"
        />
      </Field>

      <button type="submit" disabled={isSubmitting} className="btn-primary w-full sm:w-auto">
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" /> Submitting…
          </>
        ) : (
          <>
            Submit application <Send className="w-4 h-4" />
          </>
        )}
      </button>

      <p className="text-xs" style={{ color: 'var(--muted)' }}>
        By submitting, you agree to our privacy policy. We never share applications with third parties.
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
      <span className="block text-xs font-semibold tracking-[0.12em] uppercase mb-1.5" style={{ color: 'var(--muted)' }}>
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
