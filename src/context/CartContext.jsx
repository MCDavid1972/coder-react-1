import { createContext, useState } from "react";

export const CartContext = createContext(); // crear contexto

const CartContextProvider = ({ children }) => {
  /// ponerlo a dispocisión
  const [cart, setCart] = useState([]);

  const agregarAlCarrito = (producto) => {
    let existe = isInCart(producto.id);
    if (existe) {
      let newCart = cart.map((elemento) => {
        if (elemento.id === producto.id) {
          return {
            ...elemento,
            quantity: producto.quantity,
          };
        } else {
          return elemento;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, producto]);
    }

    
    
    };
    // consulta si el Producto existe
    const isInCart = (id) => {
    return cart.some((elemento) => elemento.id === id);
    };
    //LIMPIAR CARRITO///
    const clearCart = ()=>{
        setCart([])
    }
    //TOTAL DE CANTIDADES ///
    const getTotalQuantity = ()=>{
         
        return cart.reduce((acc, elemento)=>{
            return acc + elemento.quantity
        },0)
    } 
      // PRECIO TOTAL DEL CARRITO//
    const getPrecioTotal = ()=>{
         
       let precioTotal = cart.reduce((acc, elemento)=>{
            return acc + elemento.quantity * elemento.price
        }, 0)
        return precioTotal
    }

      /// ELIMINAR CARRITO//
    const deleteProductById = (id)=>{
      const newCart = cart.filter((elemento)=>elemento.id !== id)
      setCart(newCart)
    }

    const getQuantityById = (id)=>{
     const productSelected = cart.find( (elemento => elemento.id === id))
     return productSelected?.quantity
    }

    let data = {
    cart,
    agregarAlCarrito,
    clearCart,
    getTotalQuantity,
    getPrecioTotal,
    deleteProductById,
    getQuantityById
    };
return (
        // metodo .Provider
        <CartContext.Provider value={data}>{children}</CartContext.Provider>
    )};
export default CartContextProvider;
