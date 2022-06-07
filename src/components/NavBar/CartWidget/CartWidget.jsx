import React from "react"
import { Link } from "react-router-dom"
import { useCartContext } from "../../../context/CartContext"

const CartWidget = () => {

	const { cart } = useCartContext()

	return (
		<i className="fas fa-shopping-cart cart-style mr-5">
			<Link to="/cart">
				<label tabindex="0" class="btn btn-outline normal-case">
					<div class="indicator">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
						</svg>
						<span class="badge badge-sm indicator-item">{cart.length}</span>
					</div>
				</label>
			</Link>
		</i>
	)
}

export default CartWidget
