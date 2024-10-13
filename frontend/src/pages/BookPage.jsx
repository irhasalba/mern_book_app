import { useEffect, useState } from "react";
import { Breadcrumbs } from "../components/breadcrumbs";
import { Container } from "../components/container";
import IconBook from "../icons/iconBook";
import IconEdit from "../icons/IconEdit";
import IconTrash from "../icons/IconTrash";
import { createBook, deleteBook, getAllBook, getDetailBook, updateBook } from "../service/bookService";
import { getAllCategory } from "../service/categoryService";
import { getAllAuthor } from "../service/authorService";
import { AlertComponents } from "../components/alert";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export function BookPage() {
    const [books, setBooks] = useState([])
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState([])
    const [category, setCategory] = useState([])
    const [authorSelected, setAuthorSelected] = useState("")
    const [categorySelected, setCategorySelected] = useState("")
    const [showAlert, setShowAlert] = useState(false)
    const [idSelected, setSelectedId] = useState(null)
    const [loading, setLoading] = useState(true)

    const getAllBookService = () => {
        getAllBook().then((d) => {
            setBooks(d)
        })
    }

    const getCategory = () => {
        getAllCategory().then((d) => {
            setCategory(d)
        })
    }
    const getAuthor = () => {
        getAllAuthor().then((d) => {
            setAuthor(d)
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const payload = {
            title: title,
            author: authorSelected,
            category: categorySelected
        }
        createBook(payload).then((d) => {
            document.getElementById('add_modal').close()
            setShowAlert(true)
            setLoading(true)
        })
    }


    const showModal = () => {
        document.getElementById('add_modal').showModal()
        setTitle('')
        setAuthorSelected('')
        setCategorySelected('')

    }
    const deletedBook = (id) => {
        document.getElementById('modal_delete').showModal()
        setSelectedId(id)
    }
    const editBook = (id) => {
        document.getElementById('edit_modal').showModal()
        getDetailBook(id).then((d) => {
            setTitle(d.title)
            setCategorySelected(d.category._id)
            setAuthorSelected(d.author._id)
        })
        setSelectedId(id)
    }
    useEffect(() => {
        setTimeout(() => {
            getAllBookService()
            getCategory()
            getAuthor()
            setLoading(false)
        }, 1000)
    }, [loading])

    useEffect(() => {
        getAllBookService()
        getCategory()
        getAuthor()
        setTimeout(() => {
            setShowAlert(false)
        }, 1000)
    }, [showAlert])

    const handleDelete = () => {
        if (idSelected != null) {
            deleteBook(idSelected).then(() => {
                setShowAlert(true)
                setLoading(true)
            })
            document.getElementById('modal_delete').close()
        }
    }
    const handleEdit = (e) => {
        e.preventDefault()
        const payload = {
            title: title,
            author: authorSelected,
            category: categorySelected
        }
        updateBook(idSelected, payload).then((d) => {
            setShowAlert(true)
            setLoading(true)
            document.getElementById('edit_modal').close()
        })
    }

    return (
        <>
            <div className="mt-3 ml-3">
                <Breadcrumbs data={["Home", "Daftar Buku"]} />
                <h2 className="text-lg mt-3">Halaman Daftar Buku</h2>
            </div>
            {
                showAlert ? <AlertComponents message="Data Berhasil Diproses" /> : ''
            }
            <Container>
                <div className="flex gap-2 justify-end">
                    <button className="btn btn-accent text-white mb-3 btn-md" onClick={() => showModal()}> <IconBook /> Tambah Buku</button>
                </div>
                <div className="overflow-x-auto">
                    {
                        loading ? <Skeleton count={2} /> : <>
                            <table className="table table-zebra">
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Judul Buku</th>
                                        <th>Nama Penulis</th>
                                        <th>Kategori Buku</th>
                                        <th>Aksi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        books.map((d, i) => (
                                            <tr>
                                                <th>{i + 1}</th>
                                                <td>{d.title}</td>
                                                <td>{d.author.name}</td>
                                                <td>{d.category.name}</td>
                                                <td>
                                                    <button className="btn btn-warning  mb-3 btn-sm" onClick={() => editBook(d._id)}><IconEdit /></button>
                                                    <button className="btn btn-error  mb-3 btn-sm text-white ml-3" onClick={() => deletedBook(d._id)}><IconTrash /></button>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </>
                    }

                </div>
            </Container>
            <dialog id="add_modal" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg mb-5">Form Tambah Buku</h3>
                    <form action="">
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Judul Buku</span>
                            </div>
                            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" onChange={(e) => setTitle(e.target.value)} value={title} />
                        </label>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Pilih Penulis</span>
                            </div>
                            <select
                                className="select select-bordered"
                                onChange={(e) => setAuthorSelected(e.target.value)}
                                value={authorSelected}
                            >
                                <option value="" disabled>Pilih Penulis</option>
                                {
                                    author.map((d) => (
                                        <option key={d._id} value={d._id}>{d.name}</option>
                                    ))
                                }
                            </select>

                        </label>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Pilih Kategori</span>
                            </div>
                            <select
                                className="select select-bordered"
                                onChange={(e) => setCategorySelected(e.target.value)}
                                value={categorySelected}
                            >
                                <option value="" disabled>Pilih Kategori</option>
                                {
                                    category.map((d) => (
                                        <option key={d._id} value={d._id}>{d.name}</option>
                                    ))
                                }
                            </select>
                        </label>
                    </form>
                    <div className="modal-action">
                        <button className="btn btn-accent text-white" onClick={handleSubmit}>Submit</button>
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
                    <h3 className="font-bold text-lg mb-5">Form Edit Buku</h3>
                    <form action="">
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Judul Buku</span>
                            </div>
                            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" onChange={(e) => setTitle(e.target.value)} value={title} />
                        </label>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Pilih Penulis</span>
                            </div>
                            <select
                                className="select select-bordered"
                                onChange={(e) => setAuthorSelected(e.target.value)}
                                value={authorSelected}
                            >
                                <option value="" disabled>Pilih Penulis</option>
                                {
                                    author.map((d) => (
                                        <option key={d._id} value={d._id}>{d.name}</option>
                                    ))
                                }
                            </select>

                        </label>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Pilih Kategori</span>
                            </div>
                            <select
                                className="select select-bordered"
                                onChange={(e) => setCategorySelected(e.target.value)}
                                value={categorySelected}
                            >
                                <option value="" disabled>Pilih Kategori</option>
                                {
                                    category.map((d) => (
                                        <option key={d._id} value={d._id}>{d.name}</option>
                                    ))
                                }
                            </select>
                        </label>
                    </form>
                    <div className="modal-action">
                        <button className="btn btn-accent text-white" onClick={handleEdit}>Submit</button>
                        <form method="dialog">
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </>

    )
}