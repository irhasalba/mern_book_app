import { baseUrl } from "../config/axios";

export async function getAllCategory() {
    const req = await baseUrl.get("/api/categories")
    if(req.status === 200){
        return req.data
    }else{
        throw new Error("error")
    }
}