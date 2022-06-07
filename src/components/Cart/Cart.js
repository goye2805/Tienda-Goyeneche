
import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"
import { CartItem } from "./CartItem"
import { CartResume } from "./CartResume"
import { formatPrice } from "../Helpers/Helpers"



export const Cart = () => {



    const { cart, deleteCart } = useCartContext()
    let total = 0

    for (let i = 0; i < cart.length; i++) {
        const price = cart[i].price * cart[i].quantity;

        total += price
    }


    return (
        <div>
            <h1 className="p-3 mt-2 text-center">Bienvenido al Carrito!</h1>

            <div className="row flex justify-between bg-white">
                <div className="col-md-8 hero-content flex-col lg:flex-row w-full">
                    {cart.length !== 0 && (
                        <>
                            <table className="table table-striped w-full">
                                {cart.map(product => (
                                    <CartItem key={product.id} product={product} />
                                ))}
                            </table>

                            <div className="text-end m-3 ">
                                <button className="btn btn-block" onClick={deleteCart}>Limpiar Carrito</button>
                            </div>
                        </>

                    )}
                    {cart.length === 0 &&
                        <>
                            <h3 className="font-medium text-lg text-gray-900 tracking-wider leading-tight uppercase">Parece que no hay productos en el carrito {"----------->"}
                                <Link to='/' className="btn bg-principal text-white d-block">Seguir Comprando   <i className="ps-3 fas fa-smile-wink fs-5"></i></Link>
                            </h3>
                        </>
                    }

                </div>
                <div className="col-md-4">
                    {cart.length !== 0 && (
                        <>
                            <div className="card container p-8">
                                <h2 className="text-gray-600 h-full text-center tracking-wider p-3 font-medium">Resumen Carrito</h2>

                                {cart.map(prod => <CartResume key={prod.id} prod={prod} />)}

                                <h2 className="font-medium text-base text-gray-600 tracking-wider leading-normal uppercase">{formatPrice(total)} - Total a pagar</h2>
                                <br />
                                <div>
                                    <Link to="/" className="btn btn-sm">
                                        Seguir Comprando
                                    </Link>

                                </div>
                                <br />
                                <hr />
                                <br />
                                <Link to="/checkout" className="btn btn-block btn-success">
                                    Checkout
                                </Link>

                            </div>
                        </>
                    )}
                </div>

            </div>
        </div>
    )
}