import ItemCount from "./ItemCount"

const Item = (props) => {
  
  return (
  <div className="card card-side bg-base-100 shadow-xl flex items-center flex-col">
    <img className="h-80 w-52 m-10" src={props.prod.imagen} alt="Producto"/>
    <div>
      <h2>{props.prod.nombre}</h2>
      <div>$ {props.prod.precio}</div>
      <ItemCount stock={props.prod.stock} inicial="1"/>
    </div>
  </div>
  )
}
export default Item