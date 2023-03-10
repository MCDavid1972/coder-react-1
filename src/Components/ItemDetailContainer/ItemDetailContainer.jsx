
import { useParams } from "react-router-dom"
import { products } from "../../ProductsMock"
import style from "./ItemDetailContainer.module.css"
import ItemCount from "../ItemCount/ItemCount"


const ItemDetailContainer = () => {

    const {id} = useParams()
   
    const productSelected =products.find((element) => element.id ===Number(id))
    const onAdd =(cantidad)=>{

        console.log(`Se Agrego al Carrito ${cantidad} productos`)

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