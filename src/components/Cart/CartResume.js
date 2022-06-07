import { formatPrice } from "../Helpers/Helpers"

export const CartResume = ({ prod }) => {

  const styles = {
    text: "text-xs text-gray-700 tracking-wider leading-loose",
  }
  return (
    <>
      <div className={styles.text}>
        <h4>{formatPrice(prod.price * prod.quantity)} - {prod.title}</h4>
        <hr />
      </div>
    </>
  )
}