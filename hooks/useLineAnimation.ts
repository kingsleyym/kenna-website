'use client';
import { useEffect, useState } from 'react';

export function useLineAnimation(totalLines: number, isVisible: boolean, delayPerLine = 400) {
  const [currentWhiteLine, setCurrentWhiteLine] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    const intervals: NodeJS.Timeout[] = [];
    for (let i = 1; i <= totalLines; i++) {
      const timeout = setTimeout(() => {
        setCurrentWhiteLine(i);
      }, i * delayPerLine);
      intervals.push(timeout);
    }
    return () => intervals.forEach(clearTimeout);
  }, [isVisible, totalLines, delayPerLine]);

  return currentWhiteLine;
}
