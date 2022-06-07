import { addDoc, collection, getFirestore, Timestamp } from "firebase/firestore";
import { useState } from "react";

import Swal from "sweetalert2";
import { useCartContext } from "../../context/CartContext";



const Checkout = () => {

    const initialBuyer = {
        name: '',
        lastname: '',
        phone: '',
        email: '',
        confimail: ''
    }

    const [buyer, setBuyer] = useState(initialBuyer)

    const { cart, deleteCart } = useCartContext()


    let total = 0

    const styles = {
        title: "font-medium text-xl text-gray-800 tracking-wider leading-tight uppercase",
        text: "font-light text-sm text-gray-600 tracking-wide leading-normal",
        highlight: "font-medium text-xs text-gray-700 tracking-wider leading-loose uppercase",
        button: "font-medium text-xxs text-gray-700 tracking-wider leading-normal uppercase select-none",
        symbol: "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer text-gray-400 border border-gray-400 w-7 h-7 flex items-center justify-center p-0.5",
        counter: "border border-x-1 border-x-white border-y-gray-400 text-gray-600 h-full text-center w-5 p-0.5"
    }

    const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
    const telephoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{1,6}$/im

    const handlerSubmit = async (e) => {

        const order = {
            buyer,
            item: cart.map((cart) => ({ id: cart.id, title: cart.title, price: cart.price })),
            date: Timestamp.fromDate(new Date()), total
        }

        e.preventDefault();

        if (buyer.name !== '' && buyer.lastname !== '' && buyer.email !== '' && (buyer.email === buyer.confimail) && emailRegex.test(buyer.email, buyer.confimail) && telephoneRegex.test(buyer.phone)) {

            const db = getFirestore()

            const ordenCollection = collection(db, "orders")

            const respon = await addDoc(ordenCollection, order)

            Swal.fire({
                title: "Tu orden fue enviada con éxito!",
                text: `!Muchas Gracias por tu compra ${buyer.name} ${buyer.lastname}  -  Tu n° de orden es: ${respon.id}`,
                icon: "success",
                button: "Ok",
            })
                .then(deleteCart())
                .then(function () { window.location = "/" })


        } else {
            Swal.fire({
                title: "Hubo un error en tus datos",
                text: "Verifica que tus datos esten correctos y vuelve a enviar el pedido",
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
        <div className="flex justify-center items-center mx-auto  mx-6 xl:mx-auto bg-white">

            <div className="flex w-full flex-col justify-center items-center">

                <h1 className={(styles.title) + "self-start mb-6"}>Checkout</h1>

                {/* Detalle de facturación */}
                <div className="flex flex-col justify-start items-start mt-6 lg:mt-0 mb-3">

                    <form
                        onSubmit={handlerSubmit}
                        onChange={handlerChange}
                        className="d-flex flex-column align-center container mt-2 mb-3">
                        <h2 className={styles.highlight}>Detalles de facturación</h2>

                        <input
                            className={"px-2 border-b border-gray-200 placeholder-gray-600 py-4 w-full " + styles.text}
                            type="text"
                            placeholder="Nombre"
                            name="name"
                            required
                            value={buyer.name} />


                        <input
                            className={"px-2 border-b border-gray-200 placeholder-gray-600 py-4 w-full " + styles.text}
                            type="text"
                            placeholder="Apellido"
                            name="lastname"
                            required
                            value={buyer.lastname} />

                        <input
                            className={"px-2 border-b border-gray-200 placeholder-gray-600 py-4 w-full " + styles.text}
                            type="tel"
                            placeholder="Telefono (Ingresar minimo 7 digitos)"
                            name="phone"
                            required
                            value={buyer.phone} />

                        <input
                            className={"px-2 border-b border-gray-200 placeholder-gray-600 py-4 w-full " + styles.text}
                            type="email"
                            placeholder="e-mail"
                            name="email"
                            required
                            value={buyer.email} />

                        <input
                            className={"px-2 border-b border-gray-200 placeholder-gray-600 py-4 w-full " + styles.text}
                            type="email"
                            placeholder="Confirma e-mail"
                            name="confimail"
                            required
                            value={buyer.confimail} />
                        <br />

                        <br />

                        <button className="btn btn-block btn-success">Enviar orden</button>

                    </form>

                </div>

            </div>

        </div >
    )
}
export default Checkout