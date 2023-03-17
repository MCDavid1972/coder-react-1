import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../ProductsMock";
import ItemList from "../ItemList/ItemList";



const ItemListContainer = () => {
  const  { categoryName } = useParams();
  
  const [items, setItems] = useState([])

  const productosFiltrados = products.filter(
    (elemento) => elemento.category === categoryName
  );

 useEffect( ()=>{
      const productList = new Promise ((resolve)=>{
        resolve(categoryName ?  productosFiltrados : products) 
     });
    productList
      .then((res)=>{setItems(res)})
      .catch((err)=> console.log(err))
  
    },[categoryName])

  return (
  <div>
     <ItemList items={items} />
  </div>
)};

export default ItemListContainer;
