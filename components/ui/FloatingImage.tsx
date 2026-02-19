'use client';

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
  speed?: 'normal' | 'slow';
}

export function FloatingImage({ 
  src, 
  alt, 
  delay = 0, 
  position, 
  size = 'md',
  speed = 'normal'
}: FloatingImageProps) {
  const sizeClasses = {
    sm: 'w-24 h-24 md:w-32 md:h-32',
    md: 'w-32 h-32 md:w-48 md:h-48',
    lg: 'w-40 h-40 md:w-64 md:h-64'
  };

  const animationClass = speed === 'slow' ? 'animate-float-slow' : 'animate-float';

  return (
    <div 
      className={`absolute ${sizeClasses[size]} ${animationClass} hidden md:block`}
      style={{ 
        ...position,
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
