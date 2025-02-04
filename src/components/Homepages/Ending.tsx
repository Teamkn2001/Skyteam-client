import { Dot } from "lucide-react";
import { useIntersectionObserver } from "../transitions/useIntersectionObserver";

export default function Ending() {
    const [ref] = useIntersectionObserver({
            name: 'card-group',
            threshold: 0.2,
            animateIn: 'animate__fadeIn',
            animateOut: 'animate__fadeOut',
          });
    
  return (
    <>
      <div className="w-[90%] lg:w-[70%] lg:my-[5rem]" ref={ref}>
        <div className="bg-black h-1 my-4 "></div>
        <h1 className="px-4 lg:text-xl py-2 lg:py-8">
          we don’t just build properties—we create legacies. With a commitment
          to excellence, innovation, and customer satisfaction, we continue to
          redefine luxury living. Your dream home is more than a destination;
          it's a journey we take together. Let’s build the future, one home at a
          time."
        </h1>

        <div className="flex justify-center">
          {Array.from({ length: 6 }, (_, index) => (
            <Dot key={index} />
          ))}
        </div>
      </div>
    </>
  );
}
