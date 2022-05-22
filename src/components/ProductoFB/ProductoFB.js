import {collection, getDoc, getDocs, getFirestore} from "firebase/firestore"
import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetailContainer/ItemDetail/ItemDetail"
import ItemList from "../ItemListContainer/ItemList/ItemList"

const ProductoFB = () => {

const [product, setProduct] = useState({})

//este trae un item por ID
{/*useEffect(() => {
  
    const db = getFirestore()

    const camisa = doc(db, 'items', 'PCQtVoudfSRzscoDbrst')
    getDoc( camisa ).then(resp => {
       setProduct(resp.data())
    })
}, [])*/}

//este me trae todo del DB
useEffect(() => {

  const db = getFirestore()

  const itemCollection = collection(db,'items')
  getDocs(itemCollection).then ((snapshot) => {
      setProduct (snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})))
  })
}, [])

console.log(product)

  return (
    <>
        <div>ProductoFB</div>
        
    </>
    )

}
export default ProductoFB