import axios from "../configs/axios"

export const getItems = async () => {
    const res = await axios.get("/getItems")
    return res.data
}