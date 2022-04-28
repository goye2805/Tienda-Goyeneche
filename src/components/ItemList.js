//aqui tiene que ir el MAP
import  {productList} from "../Data/data"
import { useEffect, useState } from "react"
import Item from "./Item"

const ItemList = () => {

   const [producto, setProducto] = useState ([])

   useEffect(() => {
     getProducto()
   }, [])

    const getProducto = () => {
     const getProductoPromesa = new Promise((resolve) =>{
       setTimeout(() =>{
         resolve(productList)
       }, 3000);
     })

     getProductoPromesa.then (productList => {
       setProducto(productList)
     })
    }
    return (
      <div>
        {producto.map (p => <Item key={p.id} prod={p}/> )}
      </div>
    ) 
}
export default ItemList