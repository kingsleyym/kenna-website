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
    transform?: string;
  };
  size?: 'sm' | 'md' | 'lg' | 'xl';
  speed?: 'normal' | 'slow' | 'fast';
  parallaxSpeed?: number; // 0.1 = langsam, 0.5 = schnell
  zIndex?: number; // NEW - z-index for layering
}

export function FloatingImage({ 
  src, 
  alt, 
  delay = 0, 
  position, 
  size = 'md',
  speed = 'normal',
  parallaxSpeed = 0.2,
  zIndex = 0
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
    sm: 'w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40',
    md: 'w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56',
    lg: 'w-40 h-40 sm:w-48 sm:h-48 md:w-72 md:h-72',
    xl: 'w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96'
  };

  const animationClass = speed === 'slow' ? 'animate-float-slow' : 
                         speed === 'fast' ? 'animate-float-fast' : 
                         'animate-float';

  return (
    <div 
      ref={ref}
      className={`absolute ${sizeClasses[size]} ${animationClass}`}
      style={{ 
        ...position,
        transform: position.transform 
          ? `${position.transform} translateY(-${offset}px)` 
          : `translateY(-${offset}px)`, // MINUS = move UP (disappear UNDER blur)
        transition: 'transform 0.1s ease-out',
        animationDelay: `${delay}s`,
        zIndex
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
