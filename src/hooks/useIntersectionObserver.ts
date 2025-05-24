
import { useEffect, useState, useRef } from 'react';

interface IntersectionObserverOptions {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
}

const useIntersectionObserver = (
  options: IntersectionObserverOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
) => {
  const [elements, setElements] = useState<Element[]>([]);
  const [entries, setEntries] = useState<IntersectionObserverEntry[]>([]);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (elements.length === 0) return;

    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver((observedEntries) => {
      setEntries(observedEntries);
      observedEntries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          // Optional: unobserve after animation
          // observer.current?.unobserve(entry.target);
        }
      });
    }, options);

    elements.forEach(element => observer.current?.observe(element));

    return () => observer.current?.disconnect();
  }, [elements, options]);

  // Function to add elements to observe after initial mount
  const observeElements = (elementsToObserve: Element[]) => {
     // Filter out already observed elements
    const newElements = elementsToObserve.filter(el => !elements.includes(el));
    if (newElements.length > 0) {
        setElements(prevElements => [...prevElements, ...newElements]);
    }
  };
  
  // Function to specifically get elements by class and observe them
  const observeElementsByClass = (className: string) => {
    const els = Array.from(document.querySelectorAll(`.${className}`));
    observeElements(els);
  };


  return { entries, observeElements, observeElementsByClass };
};

export default useIntersectionObserver;
