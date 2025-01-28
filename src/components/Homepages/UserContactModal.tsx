import { useState } from "react";
import UserForm from "./UserForm";

export default function UserContactModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-11/12 max-w-4xl relative">
          {" "}
          {/* Added relative positioning */}
          {/* Close button at top right */}
          <form method="dialog" className="absolute right-2 top-2">
            <button className="btn btn-sm btn-circle">✕</button>
          </form>
          <div className="flex flex-col lg:flex-row justify-center items-center gap-4">
            <h3 className="font-bold text-lg lg:hidden">Hello!</h3>
            <div>
              <div className="w-[20rem] h-[12rem] bg-red-200">
                <img src="" alt="" />
              </div>
              <p className="py-4">this is the house details</p>
            </div>

            {/* this must be when user click */}
            <div>
              <UserForm />
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
}
