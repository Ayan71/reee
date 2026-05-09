"use client";

import { useRef } from "react";

import { motion, useInView, type Variants } from "framer-motion";

import {
  TrendingUp,
  Zap,
  Code2,
  BrainCircuit,
  ShieldCheck,
  Headphones,
} from "lucide-react";

import { whyChooseUs } from "@/lib/data";

const ICONS: Record<
  string,
  React.ComponentType<{
    size?: string | number;
    className?: string;
  }>
> = {
  "trending-up": TrendingUp,
  zap: Zap,
  "code-2": Code2,
  "brain-circuit": BrainCircuit,
  "shield-check": ShieldCheck,
  headphones: Headphones,
};

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
      ease: "easeOut",
    },
  }),
};

export default function WhyChooseUs() {
  const ref = useRef(null);

  const inView = useInView(ref, {
    once: true,
    margin: "-80px",
  });

  return (
    <section
      id="why-us"
      className="section-padding bg-[#0a0a0a] relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />

      {/* Glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(255,107,0,0.05) 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
      />

      <div className="container-custom relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <motion.span
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={0}
              variants={fadeUp}
              className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase text-[#ff6b00] border border-orange-500/30 bg-orange-500/5 mb-4"
            >
              Why Codentrixa
            </motion.span>

            <motion.h2
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={1}
              variants={fadeUp}
              className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight"
            >
              Built Different,{" "}
              <span className="orange-text-gradient">Delivered Better</span>
            </motion.h2>

            <motion.p
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={2}
              variants={fadeUp}
              className="text-white/50 text-lg leading-relaxed mb-8"
            >
              We don&apos;t just write code — we engineer competitive
              advantages. Every project is treated as a mission-critical product
              with standards that match the world&apos;s leading tech companies.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={3}
              variants={fadeUp}
              className="flex flex-col gap-4"
            >
              {[
                {
                  label: "Innovative Digital Solutions",
                  value: "24/7",
                },

                {
                  label: "Technologies & Frameworks",
                  value: "10+",
                },

                {
                  label: "Support & Maintenance",
                  value: "100%",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between glass-card rounded-xl px-6 py-4"
                >
                  <span className="text-white/60 text-sm">{item.label}</span>

                  <span className="font-bold text-lg orange-text-gradient">
                    {item.value}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {whyChooseUs.map((item, i) => {
              const Icon = ICONS[item.icon] || Zap;

              return (
                <motion.div
                  key={item.title}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  custom={i + 4}
                  variants={fadeUp}
                  whileHover={{
                    y: -6,
                    scale: 1.02,
                  }}
                  className="group glass-card gradient-border rounded-2xl p-6 relative overflow-hidden"
                >
                  {/* Hover Glow */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background:
                        "radial-gradient(circle at 50% 0%, rgba(255,107,0,0.08) 0%, transparent 70%)",
                    }}
                  />

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center mb-4 group-hover:bg-orange-500/20 transition-colors">
                      <Icon size={20} className="text-[#ff6b00]" />
                    </div>

                    {/* Title */}
                    <h4 className="font-semibold text-white text-sm mb-2 group-hover:text-[#ff6b00] transition-colors">
                      {item.title}
                    </h4>

                    {/* Description */}
                    <p className="text-white/40 text-xs leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
