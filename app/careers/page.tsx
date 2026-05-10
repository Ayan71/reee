'use client';

import { useState } from 'react';
import PageHeader from '@/components/sections/PageHeader';
import { WorkCulture, PerksBenefits, HiringProcess } from '@/components/sections/CareersSections';
import JobOpenings from '@/components/sections/JobOpenings';
import ApplicationForm from '@/components/forms/ApplicationForm';
import { OPEN_POSITIONS } from '@/lib/constants';

export default function CareersPage() {
  const [defaultPosition, setDefaultPosition] = useState<string | undefined>(undefined);

  return (
    <>
      <PageHeader
        eyebrow="Join our team"
        title="Build serious software with people who care."
        description="We're a remote-first software studio working with mid-market and venture-backed clients across the US, EU, and APAC. We hire slowly, treat people well, and ship products we're proud of."
        chips={['Remote-first', 'Senior team', 'Long-tenured', 'Async-friendly']}
      />
      <WorkCulture />
      <PerksBenefits />
      <JobOpenings
        onApply={(slug) => {
          const role = OPEN_POSITIONS.find((p) => p.slug === slug);
          if (role) setDefaultPosition(role.title);
        }}
      />
      <HiringProcess />

      {/* Application form */}
      <section id="apply" className="section-padding" style={{ background: 'var(--bg)' }}>
        <div className="container-custom">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5">
              <span className="eyebrow">Application form</span>
              <h2 className="h-section mt-3 text-balance">Tell us about yourself.</h2>
              <p className="lede mt-4 text-pretty">
                Submit your details below and we&apos;ll come back within 5 business days. We read every
                application — no automated rejections.
              </p>
              <div className="mt-6 card-flat p-5 text-sm" style={{ color: 'var(--ink)' }}>
                <p className="font-semibold">Don&apos;t see your role?</p>
                <p className="mt-1" style={{ color: 'var(--muted)' }}>
                  Pick &ldquo;Other / open application&rdquo; in the form. We&apos;re always looking for
                  exceptional engineers, designers, and operators.
                </p>
              </div>
            </div>
            <div className="lg:col-span-7">
              <ApplicationForm defaultPosition={defaultPosition} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
