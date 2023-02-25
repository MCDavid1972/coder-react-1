import CardWidget from "./Components/CardWidget/CardWidget";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import Navbar from "./Components/Navbar/Navbar";
/*  import ProductCard from "./Components/ProductCard/ProductCard";*/

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer saludo="¡Bienvenidos!" />

      {/* <ProductCard title="Mesa didactica" price={5000} isRed={false} />
      <ProductCard title="Rompecabezas" price={250} isRed={true}/>
      <ProductCard title="Trofeos" price={2500} isRed={true} /> */}
    </div>
  );
}

export default App;
