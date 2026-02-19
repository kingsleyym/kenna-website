'use client';

import { useEffect, useRef, useState } from 'react';

interface TestimonialBubbleProps {
  text: string;
  position: { 
    top?: string; 
    left?: string; 
    right?: string; 
    bottom?: string;
  };
  delay?: number;
  icon?: React.ReactNode;
  parallaxSpeed?: number; // 0.1 = langsam, 0.5 = schnell
}

export function TestimonialBubble({ 
  text, 
  position, 
  delay = 0, 
  icon, 
  parallaxSpeed = 0.3 
}: TestimonialBubbleProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setOffset(scrollY * parallaxSpeed);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [parallaxSpeed]);

  return (
    <div 
      ref={ref}
      className="absolute bg-white rounded-2xl shadow-md px-4 py-3 flex items-center gap-2 text-sm font-medium text-dark-700 animate-float hidden md:flex"
      style={{ 
        ...position,
        transform: `translateY(${offset}px)`,
        transition: 'transform 0.1s ease-out',
        animationDelay: `${delay}s`
      }}
    >
      {icon && <div className="text-accent-400">{icon}</div>}
      <span>{text}</span>
    </div>
  );
}
