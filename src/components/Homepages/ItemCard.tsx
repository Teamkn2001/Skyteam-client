import { ItemCardProps } from "../../types/items";

export default function ItemCard({ name = "name", description = "detail", image} : ItemCardProps) {
  return (
    <div className="card bg-base-100 w-96 shadow-sm border-2 border-base-300 hover:border-primary transition-colors duration-500 group">
      <figure className="px-6 pt-6 lg:px-10 lg:pt-10 transition-transform duration-700 group-hover:scale-105">
        <img
          src={image}
          alt="Shoes"
          className="rounded-xl "
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>
          {description}
        </p>
        <div className="card-actions">
          <button
            className="btn btn-primary"
            onClick={() => {
              const modal = document.getElementById(
                "my_modal_4"
              ) as HTMLDialogElement;
              modal?.showModal();
            }}
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
