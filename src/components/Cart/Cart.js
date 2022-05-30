import { useState } from "react"
import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"
import { CartItem } from "./CartItem"
import { CartResume } from "./CartResume"
import { addDoc, collection, getFirestore, Timestamp } from "firebase/firestore"
import swal from 'sweetalert2'

const initialBuyer = {
    name: '',
    phone: '',
    email: ''
}

export const Cart = () => {

    const [buyer, setBuyer] = useState(initialBuyer)

    const [ordenid, setOrdenId] = useState()

    const { cart, deleteCart } = useCartContext()
    let total = 0

    for (let i = 0; i < cart.length; i++) {
        const price = cart[i].price * cart[i].quantity;

        total += price
    }

    const handlerSubmit = async (e) => {

        const order = {
            buyer,
            item: cart.map((cart) => ({ id: cart.id, title: cart.title, price: cart.price })),
            date: Timestamp.fromDate(new Date()), total
        }

        e.preventDefault();
        if (buyer.name !== '' && buyer.phone !== '' && buyer.email !== '') {

            const db = getFirestore()

            const ordenCollection = collection(db, "orders")

            const respon = await addDoc(ordenCollection, order)

            swal.fire({
                title: "Tu orden fue enviada con éxito!",
                text: `Tu n° de orden es: ${respon.id}`,
                icon: "success",
                button: "Ok",
            })

                .then(deleteCart())
        } else {
            swal.fire({
                title: "Hubo un error en tus datos",
                text: "Revisa el formulario de tus datos y vuelve a enviar el pedido",
                icon: "error",
                button: "Ok",
            })
        }
    }
    const handlerChange = (e) => {
        setBuyer({
            ...buyer,
            [e.target.name]: e.target.value
        })
    }


    return (
        <div className="container">
            <h1 className="p-3 mt-2 text-center">Bienvenido al Carrito!</h1>
            <hr />

            <div className="row">
                <div className="col-md-8 hero-content flex-col lg:flex-row">
                    {cart.length !== 0 && (
                        <>

                            {cart.map(product => (
                                <CartItem key={product.id} product={product} />
                            ))}
                            <div className="text-end m-3 ">
                                <button className="btn btn-danger " onClick={deleteCart}>Limpiar Carrito</button>
                            </div>
                        </>
                    )}
                    {cart.length === 0 &&
                        <>
                            <h3>Parece que no hay productos en el carrito - </h3>
                            <Link to='/' className="btn bg-principal text-white d-block w-100 mt-3 fw-bolder fs-5">Seguir Comprando   <i className="ps-3 fas fa-smile-wink fs-5"></i></Link>
                        </>
                    }
                </div>
                <div className="col-md-4">
                    {cart.length !== 0 && (
                        <>
                            <div className="card container">
                                <h2 className="mt-3 ">Resumen Carrito</h2>

                                {cart.map(prod => <CartResume key={prod.id} prod={prod} />)}

                                <h3>Total a pagar: ${total}</h3>

                                <hr />

                                <p>Completa con tus datos para finalizar la compra</p>

                                <form
                                    onSubmit={handlerSubmit}
                                    onChange={handlerChange}
                                    className="d-flex flex-column align-center container mt-2 mb-3">

                                    <input
                                        className="form-control mb-2"
                                        type="text"
                                        placeholder="Nombre"
                                        name="name"
                                        value={buyer.name} />
                                    <input
                                        className="form-control mb-2"
                                        type="number"
                                        placeholder="Telefono"
                                        name="phone"
                                        value={buyer.phone} />
                                    <input
                                        className="form-control mb-2"
                                        type="email"
                                        placeholder="Email"
                                        name="email"
                                        value={buyer.email} />

                                    <button className="btn btn-success d-block mt-2">Enviar orden</button>
                                </form>
                            </div>
                        </>
                    )}
                </div>
            </div>


        </div>
    )
}