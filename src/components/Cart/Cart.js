import { useEffect } from "react"
import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"
import { CartItem } from "./CartItem"
import { CartResume } from "./CartResume"

export const Cart = () => {

    const {cart, deleteCart} = useCartContext()
    let total = 0

    for (let i = 0; i < cart.length; i++) {
        const price = cart[i].price * cart[i].quantity;
        
        total += price
    }

  return (
    <div className="container">
    <h1 className="p-3 mt-2 text-center">Bienvenido al Carrito!</h1>
    <hr />
    
    <div className="row">
        <div className="col-md-8">
            {cart.length !== 0 &&(
            <>

                {cart.map(product =>(
                    <CartItem key={product.id} product={product}/>
                ))}
                <div className="text-end m-3">
                    <button className="btn btn-danger " onClick={deleteCart}>Limpiar Carrito</button>
                </div>
            </>
            )}
            {cart.length === 0 && 
            <>
                <h3>Parece que no hay productos en el carrito,</h3>
                <Link to='/' className="btn bg-principal text-white d-block w-100 mt-3 fw-bolder fs-5">Seguir Comprando   <i className="ps-3 fas fa-smile-wink fs-5"></i></Link>
            </>
            }
        </div>
        <div className="col-md-4">
                {cart.length !== 0 &&(
                <>
                    <div className="card container">
                        <h2 className="mt-3 ">Resumen Carrito</h2>
                    
                        {cart.map(prod => <CartResume key={prod.id} prod={prod}/>)}

                        <h3>Total a pagar: ${total}</h3> 
                        
                        <hr />
                        <p>Completa con tus datos para finalizar la compra</p>
                       

                    </div>
                </>
                )}
        </div>
    </div>
    

</div>
  )
}