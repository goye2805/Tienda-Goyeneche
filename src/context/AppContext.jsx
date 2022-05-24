import { collection, getDocs, getFirestore } from "firebase/firestore"
import React, { createContext, useContext, useEffect, useState } from "react"


const AppContext = createContext()

export const useAppContext = () => useContext(AppContext)

const AppContextProvider = ({ children }) => {
	const [products, setProducts] = useState([])

	useEffect(() => {
		const db = getFirestore()

		var items = collection(db, 'items')
		getDocs(items).then((snapshot) => {
			setProducts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
		})
	}, [])
	return (
		<AppContext.Provider value={{ products }}>{children}</AppContext.Provider>
	)
}

export default AppContextProvider
