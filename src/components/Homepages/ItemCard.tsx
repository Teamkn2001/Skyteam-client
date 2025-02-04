import { Item } from "../../types/items";
import { useIntersectionObserver } from "../transitions/useIntersectionObserver";

export default function ItemCard({ item, setSelectedItem } : { item: Item , setSelectedItem: React.Dispatch<React.SetStateAction<Item | null>>}) {

  const [ref] = useIntersectionObserver({
        name: 'card-group',
        threshold: 0.2,
        animateIn: 'animate__fadeIn',
        animateOut: 'animate__fadeOut',
      });

  return (
    <div
    ref={ref}
    className="card bg-base-100 w-96 shadow-sm border-2 border-base-300 hover:border-black/50 hover:bg-[#8B7C5E]/80 transition-colors duration-500 group">
      <figure className="px-6 pt-6 lg:px-10 lg:pt-10 transition-transform duration-700 group-hover:scale-105">
        <img
          src={item.image}
          alt="Shoes"
          className="rounded-xl "
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{item.name}</h2>
        <p>
          {item.description}
        </p>
        <div className="card-actions">
          <button
            className="btn bg-black text-white hover:bg-white hover:text-black hover:scale-105 border-2 border-black rounded-xl"
            onClick={() => {
              setSelectedItem(item);
              const modal = document.getElementById(
                "my_modal_4"
              ) as HTMLDialogElement;
              modal?.showModal();
            }}
          >
            View more
          </button>
        </div>
      </div>
    </div>
  );
}
