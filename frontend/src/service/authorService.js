import { baseUrl } from "../config/axios";


export async function getAllAuthor() {
    const request = await baseUrl.get("/api/authors")
    if (request.status === 200) {
        return request.data
    } else {
        throw new Error("gagal mengambil data")
    }
}

export async function createAuthor(payloadBody) {
    const request = await baseUrl.post("/api/authors", payloadBody)
    if (request.status === 201) {
        return request.data
    } else {
        throw new Error("gagal menambah data")
    }
}

export async function updateAuthor(id, payloadBody) {
    const request = await baseUrl.put(`/api/authors/${id}`, payloadBody)
    if (request.status === 200) {
        return request.data
    } else {
        throw new Error("gagal menambah data")
    }
}

export async function deleteAuthor(id) {
    const request = await baseUrl.delete(`/api/authors/${id}`)
    if (request.status === 200) {
        return request.data
    } else {
        throw new Error("gagal menghapus data")
    }
}

export async function getDetailAuthor(id) {
    const request = await baseUrl.get(`/api/authors/${id}`)
    if (request.status === 200) {
        return request.data
    } else {
        throw new Error("gagal memuat data")
    }
}
