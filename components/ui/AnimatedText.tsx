'use client';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useLineAnimation } from '@/hooks/useLineAnimation';

interface AnimatedTextProps {
  lines: string[];
  className?: string;
  delayPerLine?: number;
}

export function AnimatedText({ lines, className = '', delayPerLine = 500 }: AnimatedTextProps) {
  const { ref, isVisible } = useScrollAnimation();
  const currentWhiteLine = useLineAnimation(lines.length, isVisible, delayPerLine);

  return (
    <div ref={ref} className={`space-y-2 ${className}`}>
      {lines.map((line, index) => {
        const lineNumber = index + 1;
        const isWhite = lineNumber <= currentWhiteLine;
        return (
          <p
            key={index}
            className={`text-3xl sm:text-4xl md:text-5xl font-light tracking-tight transition-colors duration-1000 ease-in-out ${isWhite ? 'text-white' : 'text-gray-400/50'}`}
          >
            {line}
          </p>
        );
      })}
    </div>
  );
}
