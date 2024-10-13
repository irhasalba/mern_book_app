import { baseUrl } from "../config/axios";

export async function getAllCategory() {
    const req = await baseUrl.get("/api/categories")
    if(req.status === 200){
        return req.data
    }else{
        throw new Error("error")
    }
}
export async function getDetailCategory(id) {
    const req = await baseUrl.get(`/api/categories/${id}`)
    if(req.status === 200){
        return req.data
    }else{
        throw new Error("error")
    }
}
export async function createCategory(payloadBody) {
    const req = await baseUrl.post("/api/categories",payloadBody)
    if(req.status === 201){
        return req.data
    }else{
        throw new Error("error")
    }
}
export async function updateCategory(id,payloadBody) {
    const req = await baseUrl.put(`/api/categories/${id}`,payloadBody)
    if(req.status === 200){
        return req.data
    }else{
        throw new Error("error")
    }
}
export async function deleteCategory(id) {
    const req = await baseUrl.delete(`/api/categories/${id}`)
    if(req.status === 200){
        return req.data
    }else{
        throw new Error("error")
    }
}

