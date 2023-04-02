import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Button } from "@mui/material";
import Swal from 'sweetalert2'
const Cart = () => {
  const { cart, clearCart, getPrecioTotal, deleteProductById } =
    useContext(CartContext);

  const precioTotal = getPrecioTotal();
  console.log(precioTotal);
  const clear  = ()=>{
    Swal.fire({
      title: "Seguro que Quieres Borrar el Carrito",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Si Limpiar',
      denyButtonText: `No limpiar`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Carrito Limpiado', '', 'success')
        clearCart()
      } else if (result.isDenied) {
        Swal.fire('No se limpio el carrito', '', 'error')
      }
    }) 
    
  }
  
  return (
    <div>
      {cart.map((elemento) => {
        return (
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-evenly",
              border: "2px solid gray",
            }}
            key={elemento.id}
          >
            <img
              style={{ width: "250px", height: "250px" }}
              src={elemento.img}
              alt=""
            />
            <h2> {elemento.nombre}</h2>
            <h3> $ {elemento.precio}</h3>
            <h3>cantidad: {elemento.quantity}</h3>
            <Button onClick={() => deleteProductById(elemento.id)}> Eliminar</Button>
          </div>
        ); 
      })}
            
      <h1>El total del Carrito es: {precioTotal} </h1>
      {
        cart.length > 0 && (<button onClick={clear}>Limpiar Carrito</button>)
      }
     
    </div>
  );
};

export default Cart;
