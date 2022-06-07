import { collection, getDocs, getFirestore, query, where } from "firebase/firestore"
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemList from "./ItemList/ItemList"

const ItemListContainer = ({ greetings }) => {
	const [category, setProduct] = useState()
	const { categoryId } = useParams()

	useEffect(() => {

		const db = getFirestore()

		var items

		if (categoryId) {
			items = query(collection(db, 'items'), where('category', '==', categoryId))
			getDocs(items).then((snapshot) => {
				setProduct(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
			})
		}
		else {
			items = collection(db, 'items')
			getDocs(items).then((snapshot) => {
				setProduct(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
			})
		}

	}, [categoryId])


	return (
		<>
			<div
				className="hero min-height: 100vh"
				style={{
					backgroundImage: `url('https://i.ibb.co/Cz3ZKGC/inicio-imagen.png')`,
				}}
			>
				<div className="hero-overlay bg-opacity-40"></div>
				<div className="hero-content text-center text-neutral-content">
					<div className="max-w-md">
						<h1 className="mb-5 text-5xl font-bold">{greetings}</h1>
						<p className="mb-5">Tienda Online de Ropas</p>
					</div>
				</div>
			</div>
			<div className="divider"></div>
			<ItemList category={category} />
		</>
	)
}

export default ItemListContainer
