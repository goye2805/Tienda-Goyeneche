import { doc, getDoc, getFirestore } from "firebase/firestore"
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Swal from "sweetalert2"
import ItemDetail from "./ItemDetail/ItemDetail"

const ItemDetailContainer = () => {
	const [product, setProduct] = useState({})
	const { id } = useParams()


	useEffect(() => {

		const db = getFirestore()

		var items

		items = doc(db, 'items', id)
		getDoc(items).then((snapshot) => {
			if (snapshot.exists()) {
				setProduct({ id: snapshot.id, ...snapshot.data() })
			}
			else {
				Swal.fire({
					title: "OOPS!! =(",
					text: "Lo sentimos pero ese producto no esta disponible",
					icon: "error",
					button: "Ok",
				})
					.then(function () { window.location = "/" })
			}
		})
	}, [id])

	return (
		<>
			<div className="container mx-auto my-8 max-w-4xlbg-white">
				<ItemDetail producto={product} />
			</div>
		</>
	)
}

export default ItemDetailContainer
