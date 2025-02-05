import React, { Dispatch, SetStateAction, useState } from "react";
import { BookingForm } from "../../types/form";
import { toast } from "react-toastify";
import { bookItem } from "../../API/guestAPI";
import { Item } from "../../types/items";

export default function UserBookingForm({
  selectedItem,
  setIsSendingEmail,
}: {
  selectedItem: Item;
  setIsSendingEmail: Dispatch<SetStateAction<boolean>>;
}) {
  const [bookingForm, setBookingForm] = useState<BookingForm>({
    username: "",
    email: "",
    phone: "",
    message: null,
    bookingDate: null,
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    bookingDate: "",
    phone: "",
    message: "",
  });

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBookingForm((prev) => ({
      ...prev,
      bookingDate: e.target.value ? new Date(e.target.value) : null,
    }));
    // Clear error when user types
    setErrors((prev) => ({ ...prev, bookingDate: "" }));
  };

  const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setBookingForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    // Clear error when user types
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };

    // Validate name
    if (!bookingForm.username.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    // Validate email
    if (!bookingForm.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(bookingForm.email)) {
      newErrors.email = "Email is invalid";
      isValid = false;
    }

    if (!bookingForm.phone.trim()) {
      newErrors.phone = "Phone is required";
      isValid = false;
    }

    // Validate date
    if (!bookingForm.bookingDate) {
      newErrors.bookingDate = "Viewing date is required";
      isValid = false;
    }

    if (bookingForm.message && bookingForm.message.length > 500) {
      newErrors.message = "Message is too long";
      isValid = false;
    }

    if (!bookingForm.bookingDate) {
      newErrors.bookingDate = "Viewing date is required";
      isValid = false;
    } else {
      const today = new Date();
      today.setHours(0, 0, 0, 0); // Reset time to start of day

      const selectedDate = new Date(bookingForm.bookingDate);
      selectedDate.setHours(0, 0, 0, 0); // Reset time to start of day

      const sevenDaysFromNow = new Date(today);
      sevenDaysFromNow.setDate(today.getDate() + 7);

      if (selectedDate < today) {
        newErrors.bookingDate = "Viewing date cannot be in the past";
        isValid = false;
      } else if (selectedDate > sevenDaysFromNow) {
        newErrors.bookingDate = "Viewing date cannot exceed 7 days from today";
        isValid = false;
      }
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        setIsSendingEmail(true);

        const formData = {
          username: bookingForm.username,
          email: bookingForm.email,
          phone: bookingForm.phone,
          bookingDate: bookingForm.bookingDate,
          message: bookingForm.message,
        };

        const bookingRequest = {
          formData: formData,
          item: selectedItem,
        };

        await bookItem(bookingRequest);
        toast.success("Booking request sent successfully");

        setBookingForm({
          username: "",
          email: "",
          phone: "",
          message: null,
          bookingDate: null,
        });

        const modal = document.getElementById(
          "my_modal_4"
        ) as HTMLDialogElement;
        if (modal) modal.close();
      } catch (error: any) {
        return toast.error(error.response.data.message);
      } finally {
        setIsSendingEmail(false);
      }
    }
  };
  return (
    <>
      <div className="w-full p-4  lg:p-16 bg-white rounded-xl shadow-md border border-gray-200">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
          Contact Seller
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Date Selection */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Viewing Date (7 days from today)
            </label>
            <input
              type="date"
              value={
                bookingForm.bookingDate
                  ? bookingForm.bookingDate.toISOString().split("T")[0]
                  : ""
              }
              min={new Date().toISOString().split("T")[0]}
              max={
                new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
                  .toISOString()
                  .split("T")[0]
              }
              onChange={handleDateChange}
              className={`
                   w-full px-4 py-2.5 
                   border ${
                     errors.bookingDate ? "border-red-500" : "border-gray-300"
                   } 
                   rounded-lg 
                   focus:ring-2 focus:ring-blue-500 focus:border-transparent 
                   transition duration-200 
                   bg-gray-50 hover:bg-gray-100
                    cursor-pointer
                    appearance-none 
                         [&::-webkit-calendar-picker-indicator]:bg-gray-400  
                         [&::-webkit-calendar-picker-indicator]:hover:bg-gray-500
                               [&::-webkit-calendar-picker-indicator]:p-1
                         [&::-webkit-calendar-picker-indicator]:cursor-pointer
                          [&::-webkit-calendar-picker-indicator]:rounded-lg
                        `}
            />
            {errors.bookingDate && (
              <p className="text-red-500 text-sm mt-1">{errors.bookingDate}</p>
            )}
          </div>

          {/* Contact Form */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <input
                name="username"
                value={bookingForm.username}
                onChange={handleOnChange}
                type="text"
                placeholder="name"
                className={`w-full px-4 py-2.5 border ${
                  errors.name ? "border-red-500" : "border-gray-300"
                } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 bg-gray-50 hover:bg-gray-100 placeholder-gray-400`}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>
            <div>
              <input
                name="email"
                value={bookingForm.email}
                onChange={handleOnChange}
                type="email"
                placeholder="Email"
                className={`w-full px-4 py-2.5 border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 bg-gray-50 hover:bg-gray-100 placeholder-gray-400`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>
            <div>
              <input
                name="phone"
                value={bookingForm.phone}
                onChange={handleOnChange}
                type="text"
                placeholder="phone number"
                className={`w-full px-4 py-2.5 border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 bg-gray-50 hover:bg-gray-100 placeholder-gray-400`}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
              )}
            </div>
          </div>

          <div>
            <textarea
              name="message"
              value={bookingForm.message || ""}
              onChange={handleOnChange}
              placeholder="Message"
              rows={4}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 bg-gray-50 hover:bg-gray-100 placeholder-gray-400 resize-none`}
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full md:w-auto px-8 py-3 cursor-pointer bg-black text-white rounded-lg hover:scale-105 transition duration-200 font-medium shadow-sm hover:shadow-md active:transform active:scale-95"
            >
              Book
            </button>
            <p className="text-error font-light!">
              ** only mocking for sending email, able to test **
            </p>
          </div>
        </form>
      </div>
    </>
  );
}
