
import { useEffect, useState } from "react";
import { products } from "../../ProductsMock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";


const ItemListContainer = () => {
  const [items, setItems] = useState([])

  const  { categoryName } = useParams();


  const productosFiltrados = products.filter(item => item.categoria === categoryName)
 
 useEffect( ()=>{
      const productList = new Promise ((resolve)=>{
        resolve(categoryName ? productosFiltrados : products) 
     });
    productList
      .then((res)=>{setItems(res)})
      .catch((err)=> console.log(err))
  
    }, [categoryName])

  return (
  <div>
     <ItemList items={items} />
  </div>
)};

export default ItemListContainer;
