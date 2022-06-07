import React, { useState } from "react"
import { Link } from "react-router-dom"
import { formatPrice } from "../../Helpers/Helpers"
import ItemCount from "../../ItemCount/ItemCount"

const ItemDetail = ({ producto }) => {

	const styles = {
		title: "font-medium text-lg text-gray-800 tracking-wider leading-tight uppercase",
		subtitle: "font-medium text-base text-gray-600 tracking-wider leading-normal uppercase",
		text: "font-regular text-sm text-gray-600 tracking-wide leading-normal",
		highlight: "font-medium text-xs text-gray-700 tracking-wider leading-loose uppercase",
		button: "font-medium text-xxs tracking-wider leading-normal uppercase select-none",
		symbol: "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer text-gray-400 border border-gray-400 w-7 h-7 flex items-center justify-center p-0.5",
		counter: "border border-x-1 border-x-white border-y-gray-400 text-gray-600 h-full text-center w-5 p-0.5"
	}

	const { stock, id } =
		producto


	const [terminar, setTerminar] = useState(false)

	const onAdd = (count) => {
		setTerminar(true)
		console.log(count)
	}

	return (
		<div className="mx-auto flex flex-wrap gap-20 justify-center bg-white">

			<div className="flex flex-col lg:flex-row max-w-full lg:max-w-7xl mx-auto justify-center items-center lg:items-start">

				{/* Imágen */}
				<div className="group relative lg:w-1/2 overflow-hidden">
					<img
						src={producto.picUrl}
						alt={producto.title}
						className="p-6"
					/>
				</div>

				{/* Detalles */}
				<div className="w-full px-6 lg:py-6 lg:w-1/2">

					{/* Información */}
					<div className="flex flex-col justify-between items-start">
						<h1 className={styles.title}>{producto.title}</h1>
					</div>
					<p className={"mt-4 " + (styles.subtitle)}>{formatPrice(producto.price)}</p>
					<h2 className={"mt-4 " + (styles.highlight)}>Descripción</h2>
					<p className={"mt-2 " + (styles.text)}>{producto.description}</p>
					<hr className="border-gray-200 w-full mt-4" />
				</div>

				{terminar ? (
					<div className="flex flex-col space-y-8 mt-6">
						<Link to='/cart' className={(styles.button) + " focus:outline-none text-white bg-gray-700 focus:ring-transparent w-48 text-center py-3"}>Finalizar compra</Link>
					</div>
				) : (

					<ItemCount stock={stock} onAdd={onAdd} id={id} />
				)}


			</div>


		</div>
	)

}

export default ItemDetail
