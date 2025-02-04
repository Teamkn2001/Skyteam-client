import { Item } from "../../types/items";

export default function ItemDetailTop({
  selectedItem,
}: {
  selectedItem: Item;
}) {
  return (
    <>
      <div className="flex flex-col lg:flex-row items-center gap-4">
        <div className=" text-center  lg:p-4">
          <h3 className="font-bold text-2xl py-2 mb-2 lg:mb-6">
            {selectedItem?.name}
          </h3>

          <div className="flex flex-col lg:flex-row gap-4 lg:gap-10 justify-center items-center ">
            <div className="lg:w-1/2 flex justify-center items-center ">
              <div className="w-[20rem] h-[12rem] lg:w-[40rem] lg:h-[20rem]">
                <img
                  src={selectedItem?.image}
                  alt="Property"
                  className="w-full h-full object-cover rounded"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2 flex flex-col lg:flex-row ">
              <div className="w-full flex flex-col items-start lg:gap-4 ">
                <p>
                  <span className="font-semibold lg:font-bold">Location :</span>{" "}
                  {selectedItem?.location}
                </p>
                <p>
                  <span className="font-semibold lg:font-bold">Price:</span>{" "}
                  {selectedItem?.price}
                </p>
                <p>
                  <span className="font-semibold lg:font-bold">Size:</span>{" "}
                  {selectedItem?.size}
                </p>
                <p>
                  <span className="font-semibold lg:font-bold">Bedrooms :</span>{" "}
                  {selectedItem?.bedroom}
                </p>
                <p>
                  <span className="font-semibold lg:font-bold">
                    Bathrooms :
                  </span>{" "}
                  {selectedItem?.bathroom}
                </p>
                <p>
                  <span className="font-semibold lg:font-bold">Garden :</span>{" "}
                  {selectedItem?.garden ? "yes" : "no"}
                </p>
                <p>
                  <span className="font-semibold lg:font-bold">Parking :</span>{" "}
                  {selectedItem?.parking ? "yes" : "no"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
