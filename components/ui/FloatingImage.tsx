'use client';

import { useEffect, useRef, useState } from 'react';

interface FloatingImageProps {
  src: string;
  alt: string;
  delay?: number;
  position: { 
    top?: string; 
    left?: string; 
    right?: string; 
    bottom?: string;
  };
  size?: 'sm' | 'md' | 'lg';
  speed?: 'normal' | 'slow' | 'fast';
  parallaxSpeed?: number; // 0.1 = langsam, 0.5 = schnell
}

export function FloatingImage({ 
  src, 
  alt, 
  delay = 0, 
  position, 
  size = 'md',
  speed = 'normal',
  parallaxSpeed = 0.2
}: FloatingImageProps) {
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

  const sizeClasses = {
    sm: 'w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48',
    md: 'w-40 h-40 md:w-56 md:h-56 lg:w-64 lg:h-64',
    lg: 'w-48 h-48 md:w-72 md:h-72 lg:w-80 lg:h-80'
  };

  const animationClass = speed === 'slow' ? 'animate-float-slow' : 
                         speed === 'fast' ? 'animate-float-fast' : 
                         'animate-float';

  return (
    <div 
      ref={ref}
      className={`absolute ${sizeClasses[size]} ${animationClass} hidden md:block`}
      style={{ 
        ...position,
        transform: `translateY(${offset}px)`,
        transition: 'transform 0.1s ease-out',
        animationDelay: `${delay}s`
      }}
    >
      <img 
        src={src} 
        alt={alt} 
        className="w-full h-full object-cover rounded-2xl shadow-2xl"
        loading="lazy"
      />
    </div>
  );
}
