import React from "react"
import Item from "../../Item/Item"

const ItemList = ({ category }) => {
	return (
		<>
			<div className="mx-auto flex flex-wrap gap-20 justify-center bg-white">
				{category &&
					category.map((producto) => (
						<Item key={producto.id} producto={producto} />
					))}
			</div>
		</>
	)
}

export default ItemList
