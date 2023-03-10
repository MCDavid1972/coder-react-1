/* import ItemCount from "./Components/ItemCount/ItemCount"; */

import {  BrowserRouter, Routes, Route} from "react-router-dom";
import Bullet from "./Components/Bullet/Bullet";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import Navbar from "./Components/Navbar/Navbar";
import Cart from "./Components/Cart/Cart.jsx"
import Login from "./Components/Login/Login";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import NotFound from "./Components/NotFound/NotFound";

function App() {
  const onAdd = (cantidad) => {
    console.log(`Se agrego al Carrito ${cantidad} elementos`)
  }

 /*  let stock = 5
  let initial = 1
 */
  return (
    
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route  path="/" element={<ItemListContainer/>}/>
          <Route  path="/cart" element={<Cart />}/>
          <Route  path="/detalle/:id" element={<ItemDetailContainer />}/>

          <Route  path="/login" element={<Login/>}/>
          <Route  path="*" element={<NotFound />}/>
         
          
        </Routes>
        
      </BrowserRouter>
     
  );
}

export default App;
