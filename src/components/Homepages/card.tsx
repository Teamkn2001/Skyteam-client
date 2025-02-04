import { useIntersectionObserver } from "../transitions/useIntersectionObserver";

interface CardProps {
    title: string;
    content: string;
    className?: string;
  }
  
  export const AnimatedCard: React.FC<CardProps> = ({ title, content, className = '' }) => {
    const [ref] = useIntersectionObserver({
      name: 'card-group',
      threshold: 0.2,
      animateIn: 'animate__fadeIn',
      animateOut: 'animate__fadeOut'
    });
  
    return (
      <div 
        ref={ref}
        className={`p-4 rounded-lg shadow-lg bg-white ${className}`}
      >
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p>{content}</p>
      </div>
    );
  };