import axios from "../configs/axios"
import { BookingRequest } from "../types/form"

export const getItems = async () => {
    const res = await axios.get("/getItems")
    return res.data.items.slice(4)
}

export const get4Items = async () => {
    const res = await axios.get("/getItems")
    return res.data.items.slice(0, 4)
}

export const bookItem = async (bookingRequest : BookingRequest) => {
    console.log(bookingRequest)
    const res = await axios.post("/createBooking", bookingRequest)
    return res.data
}