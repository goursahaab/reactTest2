import axios from "axios";

const response = axios.create({
    baseURL: "https://fakestoreapi.com/",
})

export default response