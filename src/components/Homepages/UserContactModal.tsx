import React, { useState } from "react";

const UserContactModal = () => {
  // Initialize with empty string for controlled input
  const [date, setDate] = useState("");
  console.log(date);

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };

  return (
    <dialog id="my_modal_4" className="modal">
      <div className="modal-box w-11/12 max-w-4xl relative max-h-[90vh] overflow-y-auto">
        <form method="dialog" className="absolute right-2 top-2">
          <button className=" btn btn-sm btn-circle">✕</button>
        </form>

        <div className="flex flex-col justify-center items-center gap-4 my-4">
          <div className="flex flex-col lg:flex-row items-center gap-4">
            <div className=" text-center  lg:p-4">

              <h3 className="font-bold text-lg py-2">
                Traditional Japanese Home for Sale – Serene & Elegant Living
              </h3>

              <div className="flex flex-col lg:flex-row gap-2 justify-center items-center">
                <div className="flex justify-center items-center ">
                  <div className="min-w-[20rem] min-h-[12rem] lg:min-w-[24rem]  lg:min-h-[16rem] bg-red-400">
                    <img
                      src="/api/placeholder/400/320"
                      alt="Property"
                      className="w-full h-full object-cover rounded"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-1/2 flex flex-col lg:flex-row  ">
                  <div className="w-full flex flex-col lg:gap-2 lg:w-1/2 ">
                    <p>Location: Kyoto, Japan</p>
                    <p>Price: ¥48,000,000 (Approx. $320,000 USD)</p>
                    <p> Property Type: Traditional Machiya (町家) </p>
                    <p>Size: 120 sqm (1,290 sq ft)</p>
                  </div>
                  <div className="w-full flex flex-col lg:gap-2 lg:w-1/2">
                    <p>Bedrooms: 3</p>
                    <p>Bathrooms: 2</p>
                    <p>Garden: Yes (Zen-style)</p>
                    <p>Parking: Available</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Property Features:</h2>
            <p>
              Authentic Traditional Design: A beautifully preserved machiya,
              featuring wooden beams, shoji (sliding paper doors), tatami
              flooring, and a tiled kawara roof.
            </p>
          </div>

          <div className="w-full p-4 bg-gray-50 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Contact Seller:</h2>
            <div className="space-y-4">
              {/* Date Selection */}
              <div className="relative z-10">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Select Viewing Date
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={handleDateChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Contact Form */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <textarea
                placeholder="Message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              ></textarea>
              <button
                type="submit"
                className="w-full md:w-auto px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
              >
                Submit Request
              </button>
            </div>
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default UserContactModal;
