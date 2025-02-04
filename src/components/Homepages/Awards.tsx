import CountUp from '../../animations/TextAnimations/CountUp/CountUp';
import { useIntersectionObserver } from '../transitions/useIntersectionObserver';

export default function Awards() {
   const [ref] = useIntersectionObserver({
          name: 'card-group',
          threshold: 0.4,
          animateIn: 'animate__fadeIn',
          animateOut: 'animate__fadeOut',
        });
  return (
   <>
     <div ref={ref}>
        <h1 className="text-xl lg:text-3xl font-extrabold ">Facts that matter</h1>
      </div>

      <div className="block lg:hidden [&_h2]:text-xl [&_h2]:font-semibold [&_p]:text-md w-full px-6 mt-4 lg:mt-8 " >
        <div className=" flex flex-col  ">
          <div className="w-full flex m-2 gap-4  text-center justify-around [&_div]:bg-[#8F8061]/20">
            <div className="w-1/2">
              <h2>
                {" "}
                <CountUp
                  from={0}
                  to={170}
                  separator=","
                  direction="up"
                  duration={1}
                  className="count-up-text"
                />{" "}
                +{" "}
              </h2>
              <p> Real Estate Projects</p>
            </div>
            <div className="w-1/2">
              <h2>
                <CountUp
                  from={0}
                  to={50}
                  separator=","
                  direction="up"
                  duration={1}
                  className="count-up-text"
                />
                +{" "}
              </h2>
              <p> Prime Locations</p>
            </div>
          </div>

          <div className="w-full flex m-2 gap-4  text-center justify-around [&_div]:bg-[#8F8061]/20 ">
            <div className="w-1/2">
              <h2>
                <CountUp
                  from={0}
                  to={8}
                  separator=","
                  direction="up"
                  duration={1}
                  className="count-up-text"
                />
              </h2>
              <p> Industry Awards</p>
            </div>
            <div className="w-1/2">
              <h2>
                <CountUp
                  from={0}
                  to={10000}
                  separator=","
                  direction="up"
                  duration={1}
                  className="count-up-text"
                />
                +
              </h2>
              <p> Happy Clients</p>
            </div>
          </div>

          <div className="w-full flex m-2 gap-4  text-center justify-around [&_div]:bg-[#8F8061]/20">
            <div className="w-1/2">
              <h2>
                $
                <CountUp
                  from={0}
                  to={100}
                  separator=","
                  direction="up"
                  duration={1}
                  className="count-up-text"
                />
                M+
              </h2>
              <p> in Property Sales</p>
            </div>
            <div className="w-1/2">
              <h2>
                {" "}
                <CountUp
                  from={0}
                  to={25}
                  separator=","
                  direction="up"
                  duration={1}
                  className="count-up-text"
                />
                +
              </h2>
              <p> Years of Experience</p>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden lg:block h-[14rem] w-full mb-[2rem] ">
        <div className="w-full h-full [&_h2]:text-2xl [&_h2]:font-bold [&_p]:text-lg  flex flex-col items-center justify-end  gap-6">
          <div className="w-[40rem] flex gap-8 text-center [&_div]:bg-[#8F8061]/20 [&_div]:rounded-sm [&_div]:hover:bg-[#8F8061]/35 [&_div]:hover:scale-105 [&_div]:duration-300">
            <div className="w-1/3 ">
              <h2>
                <CountUp
                  from={0}
                  to={170}
                  separator=","
                  direction="up"
                  duration={1}
                  className="count-up-text"
                />
                +
              </h2>
              <p> Prestigious Real Estate Projects</p>
            </div>
            <div className="w-1/3">
              <h2>
                <CountUp
                  from={0}
                  to={10000}
                  separator=","
                  direction="up"
                  duration={1}
                  className="count-up-text"
                />
                +
              </h2>
              <p> Happy Clients</p>
            </div>
            <div className="w-1/3 ">
              <h2>
                $
                <CountUp
                  from={0}
                  to={100}
                  separator=","
                  direction="up"
                  duration={1}
                  className="count-up-text"
                />
                M+
              </h2>
              <p> in Property Sales</p>
            </div>
          </div>
          <div className="w-[40rem] flex gap-8 text-center [&_div]:bg-[#8F8061]/20 [&_div]:rounded-sm [&_div]:hover:bg-[#8F8061]/35 [&_div]:hover:scale-105 [&_div]:duration-300">
            <div className="w-1/3">
              <h2>
                <CountUp
                  from={0}
                  to={8}
                  separator=","
                  direction="up"
                  duration={1}
                  className="count-up-text"
                />
              </h2>
              <p> Industry Awards</p>
            </div>
            <div className="w-1/3">
              <h2>
                {" "}
                <CountUp
                  from={0}
                  to={25}
                  separator=","
                  direction="up"
                  duration={1}
                  className="count-up-text"
                />
                +
              </h2>
              <p> Years of Experience</p>
            </div>
            <div className="w-1/3 bg-red-200">
              <h2>
                <CountUp
                  from={0}
                  to={50}
                  separator=","
                  direction="up"
                  duration={1}
                  className="count-up-text"
                />
                +{" "}
              </h2>
              <p> Prime Locations</p>
            </div>
          </div>
        </div>
      </div>
   </>
  );
}