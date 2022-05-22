import { collection, doc, getDoc, getDocs, getFirestore, query, where } from "firebase/firestore"
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getItem } from "../../Service/asyncmock"
import ItemDetail from "./ItemDetail/ItemDetail"

const ItemDetailContainer = () => {
	const [product, setProduct] = useState({})
	const { id } = useParams()


	useEffect(() => {

		const db = getFirestore()

		var items

		items = doc(db, 'items', id)
		getDoc(items).then((snapshot) => {
			setProduct({ id: snapshot.id, ...snapshot.data() })
		})
	}, [id])
	return (
		<>
			<div className="container mx-auto my-8 max-w-4xl h-screen">
				<ItemDetail producto={product} />
			</div>
		</>
	)
}

export default ItemDetailContainer
