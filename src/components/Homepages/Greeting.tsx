import { useIntersectionObserver } from '../transitions/useIntersectionObserver';

export default function Greeting() {
     const [ref] = useIntersectionObserver({
            name: 'card-group',
            threshold: 0.2,
            animateIn: 'animate__fadeIn',
            animateOut: 'animate__fadeOut',
          });
          
  return (
 <>
   <div className="flex lg:min-h-[23rem] mt-8 lg:mt-16 lg:mb-8 gap-4 lg:gap-8 w-full lg:w-[85%] " ref={ref}>
         <div className="w-1/2 lg:flex-1 flex flex-col justify-center p-4 lg:p-8 gap-2">
           <h1 className="text-xl lg:text-3xl font-bold">
             Your Gateway to Exclusive Homes & Elite Investments
           </h1>
           <p className="text-sm lg:text-lg">
             At Luxora Estates, we specialize in premium real estate, offering a
             curated collection of luxurious properties in the world’s most
             sought-after locations
           </p>
         </div>
         <div className="w-1/2 lg:flex-grow ">
           <div className=" w-full h-full">
             <video className="w-full h-full object-cover" autoPlay loop muted>
               <source
                 src={
                   "https://myport-video-public.s3.us-west-2.amazonaws.com/skyteam1-video.mov"
                 }
               />
             </video>
           </div>
         </div>
       </div>
 </>
  );
}