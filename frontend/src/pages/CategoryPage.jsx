import { useEffect, useState } from "react";
import { Breadcrumbs } from "../components/breadcrumbs";
import { Container } from "../components/container";
import IconBook from "../icons/iconBook";
import IconEdit from "../icons/IconEdit";
import IconTrash from "../icons/IconTrash";
import { createAuthor, deleteAuthor, getAllAuthor, getDetailAuthor, updateAuthor } from "../service/authorService";
import { AlertComponents } from "../components/alert";
import { createCategory, deleteCategory, getAllCategory, getDetailCategory, updateCategory } from "../service/categoryService";

export function CategoryPage() {
    const [category, setCategory] = useState([])
    const [categoryName, setCategoryName] = useState('')
    const [showAlert, setShowAlert] = useState(false)
    const [idSelected, setSelectedId] = useState(null)

    const deletedAuthor = (id) => {
        document.getElementById('modal_delete').showModal()
        setSelectedId(id)

    }
    const editCategory = (id) => {
        document.getElementById('edit_modal').showModal()
        setSelectedId(id)
        getDetailCategory(id).then((d) => {
            setCategoryName(d.name)
        })
    }
    const getCategory = () => {
        const req = getAllCategory()
        req.then((d) => setCategory(d))
    }

    const showModal = () => {
        document.getElementById('my_modal_1').showModal()
        setCategoryName('')
    }

    const submitUpdate = () => {
        const payloadBody = {
            name: categoryName,
        }
        updateCategory(idSelected, payloadBody).then(() => {
            setShowAlert(true)
        })
        document.getElementById('edit_modal').close()
    }

    useEffect(() => {
        getCategory()
    }, [])


    const submitForm = (e) => {
        e.preventDefault()
        createCategory({
            name: categoryName,
        }).then((r) => {
            setShowAlert(true)
            setCategoryName('')
        })
    }
    useEffect(() => {
        getCategory()
        document.getElementById('my_modal_1').close()
        setTimeout(() => {
            setShowAlert(false)
        }, 1000)
    }, [showAlert])

    const handleDelete = () => {
        if (idSelected != null) {
            deleteCategory(idSelected).then(() => setShowAlert(true))
            document.getElementById('modal_delete').close()
        }
    }

    return (
        <>
            <div className="mt-3 ml-3">
                <Breadcrumbs data={["Home", "Daftar Category"]} />
                <h2 className="text-lg mt-3">Halaman Daftar Category</h2>
            </div>
            {
                showAlert ? <AlertComponents message="Data Berhasil Diproses" /> : ''
            }
            <Container>
                <div className="flex gap-2 justify-end">
                    <button className="btn btn-accent text-white mb-3 btn-md" onClick={() => showModal()}> <IconBook /> Tambah Category</button>
                </div>
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Nama Category</th>
                                <th>Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                category.map((d, i) => (
                                    <tr>
                                        <th>{i + 1}</th>
                                        <td>{d.name}</td>
                                        <td>
                                            <button className="btn btn-warning  mb-3 btn-sm" onClick={() => editCategory(d._id)}><IconEdit /></button>
                                            <button className="btn btn-error  mb-3 btn-sm text-white ml-3" onClick={() => deletedAuthor(d._id)}><IconTrash /></button>
                                        </td>
                                    </tr>
                                ))
                            }

                        </tbody>
                    </table>
                </div>
            </Container>

            {/* add modal */}

            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg mb-5">Form Tambah Category</h3>
                    <form>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Nama Category</span>
                            </div>
                            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" onChange={(e) => setCategoryName(e.target.value)} value={categoryName} />
                        </label>
                    </form>
                    <div className="modal-action">
                        <button className="btn btn-accent text-white" onClick={submitForm}>Submit</button>
                        <form method="dialog">
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>

            {/* delete modal */}

            <dialog id="modal_delete" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Konfirmasi Penghapusan</h3>
                    <p className="py-4">Apakah Anda Yakin Akan Melakukan Penghapusan ? </p>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                        <button className="btn btn-error text-white" onClick={handleDelete}>Hapus</button>
                    </div>
                </div>
            </dialog>

            {/* edit modal */}

            <dialog id="edit_modal" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg mb-5">Form Edit Category</h3>
                    <form>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Nama Category</span>
                            </div>
                            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" onChange={(e) => setCategoryName(e.target.value)} value={categoryName} />
                        </label>
                    </form>
                    <div className="modal-action">
                        <button className="btn btn-accent text-white" onClick={submitUpdate}>Submit</button>
                        <form method="dialog">
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </>

    )
}