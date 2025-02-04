import { Item } from "./items";

export interface BookingForm {
    username: string;
    email: string;
    phone: string;
    bookingDate: Date | null;
    message: string | null;
}

export interface BookingRequest {
    formData: BookingForm;
    item: Item | undefined;
}