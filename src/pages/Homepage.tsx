import UserContactModal from "../components/Homepages/UserContactModal";
import UserForm from "../components/Homepages/UserForm";
import SplitText from "../animations/Components/SplitText1";
import ItemCard from "../components/Homepages/ItemCard";
import CarouselSlider from "../components/Homepages/CarouselSlider";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getItems } from "../API/guestAPI";
import { Item } from "../types/items";

export default function Homepage() {
  const queryClient = useQueryClient(); // use for validate

  const itemQuery = useQuery({
    queryKey: ["items"],
    queryFn: async () => await getItems(),
  });

  console.log(itemQuery.data);

  if (itemQuery.isLoading) return <div className="h-screen">Loading...</div>;
  if (itemQuery.isError)
    return (
      <div className="h-screen">Error: {JSON.stringify(itemQuery.error)}</div>
    );

  return (
    <div className="flex flex-col items-center justify-center mt-[2rem] lg:mt-[4rem]">
      <SplitText
        text="Skyteam Properties"
        className="text-3xl font-semibold text-center"
        delay={100}
        animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
        animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
        // easing="easeOutCubic"
        threshold={0.2}
        rootMargin="-50px"
        // onLetterAnimationComplete={handleAnimationComplete}
      />

      <div className="w-full lg:w-[85%]  my-4 lg:my-8 ">
        <CarouselSlider />
      </div>

      <div className="flex flex-col lg:flex-row lg:flex-wrap gap-4 lg:gap-10 justify-center items-center">
      {itemQuery?.data.items.map((item: Item) => (
          <ItemCard name={item.name} image={item.image} description={item.description} />
      ))}
      </div>

      <div className="flex flex-col  lg:flex-row lg:flex-wrap  gap-4 justify-center items-center">
        {/*        
        <ItemCard />
        <ItemCard />
        <ItemCard /> */}
        <UserContactModal />
      </div>

    </div>
  );
}
