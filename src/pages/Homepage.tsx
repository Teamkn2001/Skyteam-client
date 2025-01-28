import UserContactModal from "../components/Homepages/UserContactModal";
import UserForm from "../components/Homepages/UserForm";
import SplitText from "../animations/Components/SplitText1";
import ItemCard from "../components/Homepages/ItemCard";
import CarouselSlider from "../components/Homepages/CarouselSlider";

export default function Homepage() {
  return (
    <div className="flex flex-col items-center justify-center mt-[2rem] lg:mt-[4rem]">
      <SplitText
        text="Hello, 1 2 3!"
        className="text-4xl font-semibold text-center"
        delay={100}
        animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
        animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
        // easing="easeOutCubic"
        threshold={0.2}
        rootMargin="-50px"
        // onLetterAnimationComplete={handleAnimationComplete}
      />

      <div className="flex flex-col lg:flex-row lg:flex-wrap  gap-4 justify-center items-center">
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <UserContactModal />
      </div>

      <div className="w-full lg:w-[85%]  my-4 lg:my-8 ">
        <CarouselSlider />
      </div>
      <UserForm />
    </div>
  );
}
