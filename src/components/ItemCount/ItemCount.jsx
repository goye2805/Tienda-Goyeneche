import React, { useState } from "react"
import { useAppContext } from "../../context/AppContext"
import { useCartContext } from "../../context/CartContext"

const ItemCount = ({ stock, onAdd, id }) => {

	const styles = {
		text: "font-regular text-sm text-gray-600 tracking-wide leading-normal",
		highlight: "font-medium text-xs text-gray-700 tracking-wider leading-loose uppercase",
		button: "font-medium text-xxs tracking-wider leading-normal uppercase select-none",
		symbol: "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer text-gray-400 border border-gray-400 w-7 h-7 flex items-center justify-center p-0.5",
		counter: "border border-x-1 border-x-white border-y-gray-400 text-gray-600 h-full text-center w-6 p-0.5"
	}



	const [count, setCount] = useState(1)

	const { addToCart } = useCartContext()
	const { products } = useAppContext()

	const handleAdd = () => {
		if (count < stock) {
			setCount(count + 1)
		}
	}
	const handleRemove = () => {
		if (count > 1) {
			setCount(count - 1)
		}
	}

	const handleClick = (id, cantidad) => {
		const findProduct = products.find((producto) => producto.id === id)

		if (!findProduct) {
			alert("Error en la base de datos")
			return
		}

		addToCart(findProduct, cantidad)
		onAdd(count)
	}

	return (

		<>
			<div className="mt-8">


				{/*Contenedor de stok y terminar */}
				<div className="flex flex-col items-center space-x-4">

					{/* Contador */}

					<div className="flex flex-row">
						<div className="flex">
							<span onClick={handleRemove} className={"border-r-0 " + (styles.symbol)}>
								<svg width="15" height="15" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M4.16602 10H15.8327" stroke="#b7b7b7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
							</span>
							<input id="counter" aria-label="input" className={styles.counter} type="text" value={count} onChange={(e) => e.target.value} />
							<span onClick={handleAdd} className={"border-l-0 " + (styles.symbol)}>
								<svg width="15" height="15" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M10 4.1665V15.8332" stroke="#b7b7b7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
									<path d="M4.16602 10H15.8327" stroke="#b7b7b7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
							</span>
						</div>
					</div>

					{/*Boton */}
					<br />
					<button className={(styles.button) + " focus:outline-none text-white bg-gray-700 focus:ring-transparent w-48 text-center py-3"} onClick={() => handleClick(id, count)}>Agregar al Carrito
					</button>
				</div>
			</div>

		</>
	)
}

export default ItemCount
