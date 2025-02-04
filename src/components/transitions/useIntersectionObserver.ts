import { RefObject, useEffect, useRef, useState } from "react";
import { IntersectionObserverOptions, ObserverMap } from "../../types/animation";

// Store observers globally to reuse them
const observers: ObserverMap = new Map();

export const useIntersectionObserver = <T extends HTMLElement = HTMLDivElement>({
  name = 'default',
  threshold = 0,
  rootMargin = '0px',
  root = null,
  animateIn = '',
  animateOut = 'animate__bounceOutDown',
  initiallyVisible = false
}: IntersectionObserverOptions = {}): [RefObject<T>, boolean] => {
  const elementRef = useRef<T>(null);
  const [isVisible, setIsVisible] = useState<boolean>(initiallyVisible);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const handleIntersection = (entries: IntersectionObserverEntry[]): void => {
      entries.forEach(entry => {
        const targetElement = entry.target as HTMLElement;
        const isElementVisible = entry.isIntersecting;

        // Update state only for the current element
        if (targetElement === element) {
          setIsVisible(isElementVisible);
        }

        // Handle animations
        if (isElementVisible && animateIn) {
          targetElement.classList.remove('animate__animated', ...animateOut.split(' '));
          targetElement.classList.add('animate__animated', ...animateIn.split(' '));
        } else if (!isElementVisible && animateOut) {
          targetElement.classList.remove('animate__animated', ...animateIn.split(' '));
          targetElement.classList.add('animate__animated', ...animateOut.split(' '));
        }
      });
    };

    // Get existing observer or create new one
    let observer = observers.get(name);
    if (!observer) {
      observer = new IntersectionObserver(handleIntersection, {
        root,
        rootMargin,
        threshold
      });
      observers.set(name, observer);
    }

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
        
        // If no more elements are being observed, disconnect and remove the observer
        if (observer.takeRecords().length === 0) {
          observer.disconnect();
          observers.delete(name);
        }
      }
    };
  }, [name, animateIn, animateOut, root, rootMargin, threshold]);

  return [elementRef, isVisible];
};