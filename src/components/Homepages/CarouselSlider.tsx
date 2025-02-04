import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Item } from "../../types/items";
import { useState } from "react";
import { Pointer } from "lucide-react";

export default function CarouselSlider({
  itemSlide,
  setSelectedItem,
}: {
  itemSlide: Item[];
  setSelectedItem: React.Dispatch<React.SetStateAction<Item | null>>;
}) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const [isSliding, setIsSliding] = useState<boolean>(false)

  return (
    <div className="w-full max-w-[1200px] mt-2 px-4">
      <Carousel
        responsive={responsive}
        autoPlay={true}
        autoPlaySpeed={4500}
        infinite={true}
        showDots={true}
        arrows={true}
        containerClass="carousel-container"
        dotListClass="custom-dot-list"
        itemClass="carousel-item"
        beforeChange={() => setIsSliding(true)}
        afterChange={() => setIsSliding(false)}
      >
        {itemSlide?.map((item: Item) => (
          <div
            key={item.id}
            onClick={() => {
              setSelectedItem(item);
              const modal = document.getElementById(
                "my_modal_4"
              ) as HTMLDialogElement;
              modal?.showModal();
            }}
            className="w-full h-[300px] md:h-[400px] lg:h-[500px] hover:cursor-pointer relative"
          >
            <div className={`hidden lg:w-[60%] lg:flex flex-col absolute top-10 gap-4 justify-center ml-10 rounded-lg `}>
              <h1 className={`text-6xl font-semibold text-white [text-shadow:_2px_2px_2px_rgb(0_0_0_/_90%)] ${isSliding ? 'opacity-0' : 'animate__animated animate__fadeInUp'}`}>
                {item.name}
              </h1>
              <p className={`text-2xl text-white font-medium [text-shadow:_2px_2px_2px_rgb(0_0_0_/_90%)]  ${isSliding ? 'opacity-0' : 'animate__animated animate__fadeInUp'}`}>
                {item.description}
              </p>
            </div>

            <div className={`absolute bottom-4 right-4 lg:bottom-8 lg:right-8 text-white -rotate-30  ${isSliding ? 'opacity-0' : 'animate__animated animate__fadeInUp'}`}><Pointer className="w-[35px] h-[35px] lg:w-[45px] lg:h-[45px]"/></div>
            <img
              src={item.image}
              alt="property image"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
