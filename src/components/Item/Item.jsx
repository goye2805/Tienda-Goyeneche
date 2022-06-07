import React from "react"
import { Link } from "react-router-dom"
import { formatPrice } from "../Helpers/Helpers"

const Item = ({ producto }) => {

	const styles = {
		name: "font-medium text-xs text-gray-700 tracking-wider leading-loose uppercase",
		price: "font-normal text-xl text-gray-600 tracking-widest leading-loose uppercase"
	}

	return (

		<>
			<div key={producto.id} className="group relative overflow-hidden font-body">

				<Link to={`/item/${producto.id}`}>
					<div className="w-full aspect-w-5 aspect-h-7 overflow-hidden">
						<img
							src={producto.picUrl1}
							alt={producto.title}
							className="p-6"
						/>

					</div>
				</Link>

				<div className="flex flex-col justify-start p-3">
					<h3 className={styles.name}>
						<Link to={`/item/${producto.id}`}>
							{producto.title}
						</Link>
					</h3>
					<p className={styles.price}>
						<Link to={`/item/${producto.id}`}>
							{formatPrice(producto.price)}
						</Link>
					</p>
				</div>
			</div>
		</>




	)
}

export default Item
