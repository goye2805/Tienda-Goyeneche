import { useState } from "react"

const ItemCount = (props) => {

    const[count, setCount] = useState(0)

    const add = () => {

        if (count < props.stock) 
        {
            setCount(count + 1)
        } 
        else 
        {
            console.log("no se puede sumar")
        }
    }

    const res = () => {
        
        if (count >= 1) 
        {
            setCount(count - props.inicial
                )
        } 
        else 
        {
            console.log("no se puede restar")
        }
    }

  return (
    <>

    <div>C A N T I D A D</div>
    <div class="border-dashed border-2 border-sky-500">
    <button onClick={res} class="text-4xl"> - </button>
    <input type="text" placeholder={count} class="text-center text-2xl"></input>
    <button onClick={add} class="text-4xl">+</button>
    </div>

    </>
  )
}
export default ItemCount