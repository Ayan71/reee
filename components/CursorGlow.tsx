'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CursorGlow() {
  const [position, setPosition] = useState({ x: -400, y: -400 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed z-[9998] rounded-full"
      style={{
        width: 500,
        height: 500,
        background: 'radial-gradient(circle, rgba(255, 107, 0, 0.06) 0%, transparent 70%)',
        left: position.x,
        top: position.y,
        transform: 'translate(-50%, -50%)',
      }}
      animate={{ x: 0, y: 0 }}
      transition={{ type: 'spring', stiffness: 150, damping: 20 }}
    />
  );
}
