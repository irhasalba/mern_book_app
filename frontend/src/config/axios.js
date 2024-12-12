import axios from "axios";

export const baseUrl = axios.create({
    baseURL : "https://mernbookapp-production.up.railway.app"
})
