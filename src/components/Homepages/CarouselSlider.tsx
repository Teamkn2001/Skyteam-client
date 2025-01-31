import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function CarouselSlider() {
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

  return (
    <div className="w-full max-w-[1200px] mt-8 px-4">
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
      >
        <div 
         onClick={() => {
          const modal = document.getElementById(
            "my_modal_4"
          ) as HTMLDialogElement;
          modal?.showModal();
        }}
        className="w-full h-[300px] md:h-[400px] lg:h-[500px] hover:cursor-pointer">
          <img
            src="https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            alt="First slide"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        <div className="w-full h-[300px] md:h-[400px] lg:h-[500px]">
          <img
            src="https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
            alt="Second slide"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        <div className="w-full h-[300px] md:h-[400px] lg:h-[500px]">
          <img
            src="https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
            alt="Third slide"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        <div className="w-full h-[300px] md:h-[400px] lg:h-[500px]">
          <img
            src="https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
            alt="Fourth slide"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </Carousel>
    </div>
  );
}
