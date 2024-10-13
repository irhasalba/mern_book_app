import { baseUrl } from "../config/axios";

export async function getAllBook() {
    const req = await baseUrl.get("/api/books")
    if(req.status === 200){
        return req.data
    }else {
        throw new Error("gagal mengambil data !")
    }
}
export async function getDetailBook(id) {
    const req = await baseUrl.get(`/api/books/${id}`)
    if(req.status === 200){
        return req.data
    }else {
        throw new Error("gagal mengambil data !")
    }
}
export async function createBook(payloadBody) {
    const req = await baseUrl.post("/api/books",payloadBody)
    if(req.status === 201){
        return req.data
    }else {
        throw new Error("gagal menambahkan  data !")
    }
}
export async function updateBook(id,payloadBody) {
    const req = await baseUrl.put(`/api/books/${id}`,payloadBody)
    if(req.status === 200){
        return req.data
    }else {
        throw new Error("gagal mengubah data !")
    }
}
export async function deleteBook(id) {
    const req = await baseUrl.delete(`/api/books/${id}`)
    if(req.status === 200){
        return req.data
    }else {
        throw new Error("gagal mengambil data !")
    }
}