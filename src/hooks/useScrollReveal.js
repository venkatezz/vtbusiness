import { useEffect, useRef, useState } from 'react';

/**
 * Custom React hook to trigger CSS scroll reveals using IntersectionObserver.
 * Returns a ref to attach to the target DOM element, and a boolean indicating
 * if the element has scrolled into view.
 */
export function useScrollReveal(options = { threshold: 0.15, rootMargin: '0px' }) {
  const elementRef = useRef(null);
  
  // Safe initial check: If the browser lacks IntersectionObserver, default isRevealed to true
  const [isRevealed, setIsRevealed] = useState(() => {
    if (typeof window === 'undefined') return false;
    return !window.IntersectionObserver;
  });

  useEffect(() => {
    if (typeof window === 'undefined' || !window.IntersectionObserver) {
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsRevealed(true);
        // Unobserve after activation to prevent redundant calls and free up CPU
        if (elementRef.current) {
          observer.unobserve(elementRef.current);
        }
      }
    }, options);

    const currentEl = elementRef.current;
    if (currentEl) {
      observer.observe(currentEl);
    }

    return () => {
      if (currentEl) {
        observer.unobserve(currentEl);
      }
    };
  }, [options]);

  return [elementRef, isRevealed];
}
