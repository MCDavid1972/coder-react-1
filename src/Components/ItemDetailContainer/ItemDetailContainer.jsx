
import { useParams } from "react-router-dom"
import { products } from "../../ProductsMock"
import style from "./ItemDetailContainer.module.css"
import ItemCount from "../ItemCount/ItemCount"
import { CartContext } from "../../context/CartContext"
import { useContext} from "react"

const ItemDetailContainer = () => {
    const {id} = useParams()

    const {agregarAlCarrito} = useContext (CartContext)

    const productSelected =products.find((element) => element.id ===Number(id))

    const onAdd =(cantidad)=>{
      const producto = { 
        ...productSelected,
        quantity: cantidad
      }

       agregarAlCarrito(producto)

    }
    
  return (
    <div>
        <h1 className={style.nombre}>{productSelected.nombre}</h1>
        <img className={style.img}  src={productSelected.img} alt="" />
        <h2> ${productSelected.precio}</h2>
        <ItemCount stock={productSelected.stock} onAdd={onAdd}/>
    </div>
  )
}

export default ItemDetailContainer