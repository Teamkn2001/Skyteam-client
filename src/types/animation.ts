export interface IntersectionObserverOptions {
  name?: string;
  threshold?: number;
  rootMargin?: string;
  root?: Element | null;
  animateIn?: string;
  animateOut?: string;
  initiallyVisible?: boolean;
}

export type ObserverMap = Map<string, IntersectionObserver>;
