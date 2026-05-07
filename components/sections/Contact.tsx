'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CircleCheck as CheckCircle, Twitter, Linkedin, Github, Instagram } from 'lucide-react';
import { COMPANY_EMAIL, COMPANY_PHONE, COMPANY_ADDRESS } from '@/lib/constants';

const CONTACT_INFO = [
  { icon: Mail, label: 'Email', value: COMPANY_EMAIL, href: `mailto:${COMPANY_EMAIL}` },
  { icon: Phone, label: 'Phone', value: COMPANY_PHONE, href: `tel:${COMPANY_PHONE}` },
  { icon: MapPin, label: 'Address', value: COMPANY_ADDRESS, href: '#' },
];

const SERVICES_LIST = [
  'MERN Stack Development',
  'Flutter App Development',
  'React Native Development',
  'AI & Machine Learning',
  'Full Stack Web Development',
  'Cloud Deployment',
  'UI/UX Design',
  'API Integration',
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    budget: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-[#0a0a0a] overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#ff6b00]/6 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          className="flex flex-col items-center text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#ff6b00]/10 border border-[#ff6b00]/15 text-[#ff8c40] text-xs font-semibold uppercase tracking-widest mb-5">
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-5">
            Let's Build Something <span className="gradient-text">Amazing</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl leading-relaxed">
            Have a project in mind? We'd love to hear about it. Drop us a message and we'll get back within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Left: Contact info */}
          <motion.div
            className="lg:col-span-2 space-y-5"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            {/* Contact cards */}
            {CONTACT_INFO.map(({ icon: Icon, label, value, href }) => (
              <a key={label} href={href} className="glass-card rounded-2xl p-5 flex items-center gap-4 hover:border-[#ff6b00]/30 transition-all duration-300 group block">
                <div className="w-11 h-11 rounded-xl bg-[#ff6b00]/10 border border-[#ff6b00]/15 flex items-center justify-center flex-shrink-0 group-hover:bg-[#ff6b00]/20 transition-colors">
                  <Icon className="w-5 h-5 text-[#ff6b00]" />
                </div>
                <div>
                  <p className="text-white/40 text-xs font-medium uppercase tracking-wider">{label}</p>
                  <p className="text-white text-sm font-medium mt-0.5 group-hover:text-[#ff8c40] transition-colors">{value}</p>
                </div>
              </a>
            ))}

            {/* Social links */}
            <div className="glass-card rounded-2xl p-5">
              <p className="text-white/40 text-xs font-medium uppercase tracking-wider mb-4">Follow Us</p>
              <div className="flex items-center gap-3">
                {[
                  { Icon: Twitter, label: 'Twitter' },
                  { Icon: Linkedin, label: 'LinkedIn' },
                  { Icon: Github, label: 'GitHub' },
                  { Icon: Instagram, label: 'Instagram' },
                ].map(({ Icon, label }) => (
                  <a
                    key={label}
                    href="#"
                    className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.07] flex items-center justify-center text-white/50 hover:text-[#ff6b00] hover:border-[#ff6b00]/30 hover:bg-[#ff6b00]/8 transition-all duration-200"
                    aria-label={label}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Map placeholder */}
            <div className="glass-card rounded-2xl overflow-hidden h-40 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#ff6b00]/10 to-transparent flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-[#ff6b00] mx-auto mb-2 opacity-70" />
                  <p className="text-white/40 text-xs">San Francisco, CA</p>
                  <p className="text-white/25 text-xs mt-0.5">United States</p>
                </div>
              </div>
              <div className="absolute inset-0 grid-pattern opacity-30" />
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            <div className="glass-card rounded-2xl p-6 lg:p-8 border-[#ff6b00]/12">
              {submitted ? (
                <motion.div
                  className="flex flex-col items-center justify-center py-12 text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="w-16 h-16 rounded-full bg-[#ff6b00]/15 border border-[#ff6b00]/25 flex items-center justify-center mb-5">
                    <CheckCircle className="w-8 h-8 text-[#ff6b00]" />
                  </div>
                  <h3 className="text-white font-bold text-xl mb-2">Message Sent!</h3>
                  <p className="text-white/50 text-sm max-w-sm leading-relaxed">
                    Thank you for reaching out! Our team will get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', email: '', company: '', service: '', budget: '', message: '' }); }}
                    className="mt-6 px-5 py-2.5 rounded-xl border border-[#ff6b00]/25 text-[#ff8c40] text-sm font-medium hover:bg-[#ff6b00]/8 transition-colors"
                  >
                    Send Another
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-white/50 text-xs font-medium uppercase tracking-wider mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="John Smith"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-[#ff6b00]/40 focus:bg-white/[0.06] transition-all duration-200"
                      />
                    </div>
                    <div>
                      <label className="block text-white/50 text-xs font-medium uppercase tracking-wider mb-2">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="john@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-[#ff6b00]/40 focus:bg-white/[0.06] transition-all duration-200"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-white/50 text-xs font-medium uppercase tracking-wider mb-2">Company</label>
                      <input
                        type="text"
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Your Company Inc."
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-[#ff6b00]/40 focus:bg-white/[0.06] transition-all duration-200"
                      />
                    </div>
                    <div>
                      <label className="block text-white/50 text-xs font-medium uppercase tracking-wider mb-2">Service Needed</label>
                      <select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white text-sm focus:outline-none focus:border-[#ff6b00]/40 transition-all duration-200 appearance-none"
                        style={{ colorScheme: 'dark' }}
                      >
                        <option value="" className="bg-[#111]">Select a service...</option>
                        {SERVICES_LIST.map((s) => (
                          <option key={s} value={s} className="bg-[#111]">{s}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-white/50 text-xs font-medium uppercase tracking-wider mb-2">Estimated Budget</label>
                    <select
                      name="budget"
                      value={form.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white text-sm focus:outline-none focus:border-[#ff6b00]/40 transition-all duration-200 appearance-none"
                      style={{ colorScheme: 'dark' }}
                    >
                      <option value="" className="bg-[#111]">Select budget range...</option>
                      <option value="5k-10k" className="bg-[#111]">$5,000 - $10,000</option>
                      <option value="10k-25k" className="bg-[#111]">$10,000 - $25,000</option>
                      <option value="25k-50k" className="bg-[#111]">$25,000 - $50,000</option>
                      <option value="50k+" className="bg-[#111]">$50,000+</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-white/50 text-xs font-medium uppercase tracking-wider mb-2">Project Details *</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-[#ff6b00]/40 focus:bg-white/[0.06] transition-all duration-200 resize-none"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2.5 py-4 rounded-xl bg-gradient-to-r from-[#ff6b00] to-[#ff8c40] text-white font-bold text-sm shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed hover:-translate-y-0.5"
                    whileTap={{ scale: 0.98 }}
                  >
                    {loading ? (
                      <>
                        <motion.div
                          className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
