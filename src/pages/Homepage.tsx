import UserContactModal from "../components/Homepages/UserContactModal";
import ItemCard from "../components/Homepages/ItemCard";
import CarouselSlider from "../components/Homepages/CarouselSlider";
import { useQuery } from "@tanstack/react-query";
import { get4Items, getItems } from "../API/guestAPI";
import { Item } from "../types/items";
import { useState } from "react";
import "animate.css";
import Awards from "../components/Homepages/Awards";
import "react-vertical-timeline-component/style.min.css";
import Timeline from "../components/Homepages/Timeline";
import Greeting from "../components/Homepages/Greeting";
import Services from "../components/Homepages/Services";
import Ending from "../components/Homepages/Ending";

export default function Homepage() {
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);

  const itemQuery = useQuery({
    queryKey: ["items"],
    queryFn: async () => await getItems(),
  });

  const itemQuery2 = useQuery({
    queryKey: ["items2"],
    queryFn: async () => await get4Items(),
  });

  if (itemQuery.isLoading || itemQuery2.isLoading)
    return <div className="h-screen"></div>;
  if (itemQuery.isError || itemQuery2.isError)
    return (
      <div className="h-screen flex justify-center items-center">
        <h1 className="text-black text-4xl font-bold">
          Error: Something went wrong naja
        </h1>
      </div>
    );

  return (
    <div className="flex flex-col items-center justify-center mt-[2rem] lg:mt-[4rem] lg:mx-4">
      <Greeting />

      <Services />

      <div className="w-full lg:w-[85%] flex justify-center items-center mb-4 lg:my-8 ">
        <CarouselSlider
          itemSlide={itemQuery2.data}
          setSelectedItem={setSelectedItem}
        />
      </div>

      <Awards />

      <div className="w-full lg:w-[75%] px-8 mt-4 lg:mt-8 mb-8 hover:scale-105 duration-300 ">
        <div className="w-full h-full bg-black/85 text-white p-6 lg:p-10">
          <p className="indent-6 text-sm lg:text-lg ">
            we take pride in delivering world-class properties and exceptional
            service. Our dedication to quality, innovation, and customer
            satisfaction has been recognized with prestigious industry awards.
          </p>
        </div>
      </div>

      <div>
        <h1 className="text-xl lg:text-3xl font-bold">
          Our Premium Real Estate
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row lg:flex-wrap gap-4 mt-4 lg:gap-10 justify-center items-center">
        {itemQuery?.data.map((item: Item) => (
          <ItemCard
            key={item.id}
            item={item}
            setSelectedItem={setSelectedItem}
          />
        ))}
      </div>
      <Timeline />

      <Ending />

      {selectedItem && <UserContactModal selectedItem={selectedItem} />}
    </div>
  );
}
