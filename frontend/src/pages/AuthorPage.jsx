import { Breadcrumbs } from "../components/breadcrumbs";
import { Container } from "../components/container";
import IconBook from "../icons/iconBook";
import IconEdit from "../icons/IconEdit";
import IconTrash from "../icons/IconTrash";

export function AuthorPage() {
    return (
        <>
            <div className="mt-3 ml-3">
                <Breadcrumbs data={["Home","Daftar Author"]}  />
                <h2 className="text-lg mt-3">Halaman Daftar Author</h2>
            </div>
            <Container>
                <div className="flex gap-2 justify-end">
                    <button className="btn btn-accent text-white mb-3 btn-md" onClick={() => document.getElementById('my_modal_1').showModal()}> <IconBook /> Tambah Buku</button>
                </div>
                <div className="overflow-x-auto">
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
                            <tr>
                                <th>1</th>
                                <td>Naruto</td>
                                <td>Masashi Kishimoto</td>
                                <td>Anime</td>
                                <td>
                                    <button className="btn btn-warning  mb-3 btn-sm"><IconEdit /></button>
                                    <button className="btn btn-error  mb-3 btn-sm text-white ml-3"><IconTrash /></button>
                                </td>
                            </tr>
                            <tr>
                                <th>1</th>
                                <td>Naruto</td>
                                <td>Masashi Kishimoto</td>
                                <td>Anime</td>
                                <td>
                                    <button className="btn btn-warning  mb-3 btn-sm"><IconEdit /></button>
                                    <button className="btn btn-error  mb-3 btn-sm text-white ml-3"><IconTrash /></button>
                                </td>
                            </tr>
                            <tr>
                                <th>1</th>
                                <td>Naruto</td>
                                <td>Masashi Kishimoto</td>
                                <td>Anime</td>
                                <td>
                                    <button className="btn btn-warning  mb-3 btn-sm"><IconEdit /></button>
                                    <button className="btn btn-error  mb-3 btn-sm text-white ml-3"><IconTrash /></button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="join mx-auto mt-3">
                    <input
                        className="join-item btn btn-square"
                        type="radio"
                        name="options"
                        aria-label="1"
                        defaultChecked />
                    <input className="join-item btn btn-square" type="radio" name="options" aria-label="2" />
                    <input className="join-item btn btn-square" type="radio" name="options" aria-label="3" />
                    <input className="join-item btn btn-square" type="radio" name="options" aria-label="4" />
                </div>
            </Container>
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg mb-5">Form Tambah Buku</h3>
                    <form action="">
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Judul Buku</span>
                            </div>
                            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        </label>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Penulis Buku</span>
                            </div>
                            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        </label>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Pilih Kategori</span>
                            </div>
                            <select className="select select-bordered">
                                <option disabled selected>Pilih Kategori</option>
                                <option>Star Wars</option>
                                <option>Harry Potter</option>
                                <option>Lord of the Rings</option>
                                <option>Planet of the Apes</option>
                                <option>Star Trek</option>
                            </select>
                        </label>
                    </form>
                    <div className="modal-action">
                        <form>
                            <button className="btn btn-accent text-white">Submit</button>
                        </form>
                        <form method="dialog">
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </>

    )
}