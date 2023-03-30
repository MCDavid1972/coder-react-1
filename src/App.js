/* import ItemCount from "./Components/ItemCount/ItemCount"; */

import { BrowserRouter, Routes, Route} from "react-router-dom";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import Cart from "./Components/Cart/Cart.jsx";
import Login from "./Components/Login/Login";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import NotFound from "./Components/NotFound/NotFound";
import NavbarCustom from "./Components/NavbarCustom/NavbarCustom";
import Form from "./Components/Form/Form";
import CartContextProvider from "./context/CartContext";



function App() {
  const onAdd = (cantidad) => {
    console.log(`Se agrego al Carrito ${cantidad} elementos`);
  };

 
  return (
    <BrowserRouter>
      <CartContextProvider>
        <NavbarCustom />
        <Routes>
          <Route path="/" element={ <ItemListContainer /> }/>
          <Route path="/category/:categoryName" element={ <ItemListContainer /> }/>
          <Route path="/cart" element={<Cart />} />
          <Route path="/detalle/:id" element={<ItemDetailContainer />} />
          <Route path="/login" element={<Login />} />
          <Route path="/formulario" element={<Form/>} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
