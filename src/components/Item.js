
const Item = (props) => {

  const {nombre, precio, stock, imagen} = props.Producto

  const defaultImg = 'https://previews.123rf.com/images/pavlostv/pavlostv1806/pavlostv180600511/102793693-icono-de-pel%C3%ADcula-vector-de-stock.jpg?fj=1'

  return (
  <div className="card card-side bg-base-100 shadow-xl">
    <img className="h-80 w-52 m-10" src={imagen} alt="Producto"/>
    <div>
      <h2>{nombre}</h2>
      <div>{stock}</div>
      <div>$ {precio}</div>
    </div>
  </div>
  )
}
export default Item