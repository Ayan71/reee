'use client';

import { useRef, useState } from 'react';
import {
  motion,
  useInView,
  type Variants,
} from 'framer-motion';

import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  Loader2,
} from 'lucide-react';

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },

  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,

    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const CONTACT_INFO = [
  {
    icon: Mail,
    label: 'Email Us',
    value: 'contact@codentrixa.com',
    href: 'mailto:contact@codentrixa.com',
  },

];

const SERVICES_OPTIONS = [
  'MERN Stack Development',
  'Flutter App Development',
  'React Native',
  'Android & iOS App Development',
  'AI & Machine Learning',
  'Full Stack Web',
  'Mobile App Development',
  'API Integration',
  'Cloud Deployment',
  'UI/UX Design',
];

export default function Contact() {
  const ref = useRef(null);

  const inView = useInView(ref, {
    once: true,
    margin: '-80px',
  });

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
  });

  const [submitting, setSubmitting] = useState(false);

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setSubmitting(false);
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="section-padding bg-[#0a0a0a] relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />

      {/* Glow */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse, rgba(255,107,0,0.06) 0%, transparent 70%)',
        }}
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
      />

      <div className="container-custom relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={0}
          variants={fadeUp}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase text-[#ff6b00] border border-orange-500/30 bg-orange-500/5 mb-4">
            Get In Touch
          </span>

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Start Your{' '}
            <span className="orange-text-gradient">
              Project
            </span>
          </h2>

          <p className="text-white/50 max-w-xl mx-auto text-lg">
            Ready to build something extraordinary? Let&apos;s discuss your
            vision and turn it into reality.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Info */}
          <motion.div
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            custom={1}
            variants={fadeUp}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            {CONTACT_INFO.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                custom={i + 2}
                variants={fadeUp}
                whileHover={{
                  x: 4,
                }}
                className="flex items-start gap-4 glass-card rounded-2xl p-6 group"
              >
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center shrink-0 group-hover:bg-orange-500/20 transition-colors">
                  <item.icon
                    size={18}
                    className="text-[#ff6b00]"
                  />
                </div>

                <div>
                  <div className="text-white/40 text-xs font-medium tracking-wider uppercase mb-1">
                    {item.label}
                  </div>

                  <div className="text-white text-sm font-medium group-hover:text-[#ff6b00] transition-colors">
                    {item.value}
                  </div>
                </div>
              </motion.a>
            ))}

            {/* Location Card */}
            {/* <motion.div
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              custom={5}
              variants={fadeUp}
              className="glass-card rounded-2xl overflow-hidden h-48 relative flex items-center justify-center mt-2"
            >
              <div className="absolute inset-0 bg-grid-pattern opacity-40" />

              <div className="relative z-10 flex flex-col items-center gap-2 text-white/30">
                <MapPin
                  size={32}
                  className="text-[#ff6b00]/50"
                />

                <span className="text-xs tracking-widest uppercase">
                  Global Remote Team
                </span>

                <span className="text-xs">
                  Available Worldwide
                </span>
              </div>

              <div
                className="absolute inset-0"
                style={{
                  background:
                    'radial-gradient(circle at 50% 50%, rgba(255,107,0,0.05) 0%, transparent 70%)',
                }}
              />
            </motion.div> */}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            custom={2}
            variants={fadeUp}
            className="lg:col-span-3"
          >
            {submitted ? (
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.9,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                className="glass-card gradient-border rounded-2xl p-12 flex flex-col items-center justify-center gap-4 text-center h-full min-h-[480px]"
              >
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                  }}
                >
                  <CheckCircle
                    size={60}
                    className="text-[#ff6b00]"
                  />
                </motion.div>

                <h3 className="text-2xl font-bold text-white">
                  Message Sent!
                </h3>

                <p className="text-white/50 max-w-xs">
                  Thank you for reaching out. Our team will get back to you
                  within 24 hours.
                </p>

                <button
                  onClick={() => {
                    setSubmitted(false);

                    setFormState({
                      name: '',
                      email: '',
                      company: '',
                      service: '',
                      message: '',
                    });
                  }}
                  className="btn-secondary mt-4 text-sm"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="glass-card gradient-border rounded-2xl p-8"
              >
                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-white/50 text-xs font-medium tracking-wider uppercase mb-2">
                      Full Name *
                    </label>

                    <input
                      type="text"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      placeholder="John Smith"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-orange-500/50 focus:bg-white/8 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-white/50 text-xs font-medium tracking-wider uppercase mb-2">
                      Email Address *
                    </label>

                    <input
                      type="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      placeholder="john@company.com"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-orange-500/50 focus:bg-white/8 transition-all"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-white/50 text-xs font-medium tracking-wider uppercase mb-2">
                      Company
                    </label>

                    <input
                      type="text"
                      name="company"
                      value={formState.company}
                      onChange={handleChange}
                      placeholder="Your Company"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-orange-500/50 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-white/50 text-xs font-medium tracking-wider uppercase mb-2">
                      Service Needed
                    </label>

                    <select
                      name="service"
                      value={formState.service}
                      onChange={handleChange}
                      className="w-full bg-[#141414] border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-orange-500/50 transition-all"
                    >
                      <option value="">
                        Select a service
                      </option>

                      {SERVICES_OPTIONS.map((service) => (
                        <option
                          key={service}
                          value={service}
                        >
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-white/50 text-xs font-medium tracking-wider uppercase mb-2">
                    Project Details *
                  </label>

                  <textarea
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell us about your project, goals, and timeline..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-orange-500/50 transition-all resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={submitting}
                  whileHover={{
                    scale: 1.02,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  className="btn-primary w-full flex items-center justify-center gap-2 text-base disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {submitting ? (
                    <>
                      <Loader2
                        size={18}
                        className="animate-spin"
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={18} />
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}