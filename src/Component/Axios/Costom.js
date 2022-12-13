import axios from "axios";

let data = localStorage.getItem("userData")
let r = JSON.parse(data)

const dataFetch = axios.create({
    baseURL: "http://localhost:4000",
    headers: {
        Accept: 'application/json',
        Authorization: "Bearer " + r?.jwtToken
    }
})

export default dataFetch