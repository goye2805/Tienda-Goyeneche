const ItemListContainer = (props) => {
  return (
    <h1 className="text-3xl font-bold" style={{color:'blue', border:'double'}}>
      {props.greeting}
    </h1>
  )
}
export default ItemListContainer