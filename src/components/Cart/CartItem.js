import { useCartContext } from "../../context/CartContext"
import { formatPrice } from "../Helpers/Helpers"

export const CartItem = ({ product }) => {

  const styles = {
    title: "font-medium text-lg text-gray-900 tracking-wider leading-tight uppercase",
    subtitle: "font-medium text-base text-gray-600 tracking-wider leading-normal uppercase",
    text: "font-regular text-sm text-gray-600 tracking-wide leading-normal",
    highlight: "font-medium text-xs text-gray-700 tracking-wider leading-loose uppercase",
    symbol: "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer text-gray-400 border border-gray-400 w-7 h-7 flex items-center justify-center p-0.5",
    counter: "border border-x-1 border-x-white border-y-gray-400 text-gray-600 h-full text-center w-5 p-0.5",
    price: "font-normal text-l text-gray-600 tracking-widest leading-loose uppercase"
  }

  const { deleteFromCart } = useCartContext()

  return (
    <>

      <tr>

        {/*Imagenes*/}
        <th class="w-24 mask mask-squircle">
          <img src={product.picUrl} className="w-35 img-fluid" alt="" />
        </th>

        {/*Detalles*/}
        <th>
          <h4 className={styles.subtitle}>{`${product.title} `} </h4>
          <h1 className={styles.highlight}>{product.brand}</h1>
        </th>

        {/*Cantidad*/}
        <th>
          <h1 className={styles.title}>{`${product.quantity} unidades`}</h1>
        </th>

        {/*Costo*/}
        <th>
          <p className={styles.price}>{`${formatPrice(product.price)}`}</p>

        </th>

        {/*Borrar del carrito*/}
        <th>
          <button className="btn btn-circle btn-outline" onClick={() => deleteFromCart(product)}
          ><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg></button>
        </th>

      </tr>
    </>
  )
}