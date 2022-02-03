import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Toolbar from "./components/Toolbar";
import CreateProductPage from "./pages/CreateProductPage";
import AllProductsPage from "./pages/AllProductsPage";
import SingleProductViewPage from "./pages/SingleProductViewPage";
import {useState} from "react";
import mainContext from "./context/mainContext";
import ShoppingCartPage from "./pages/ShoppingCartPage";

function App() {

    const [getError, setError] = useState(null)
    const [getNewProduct, setNewProduct] = useState([])
    const [getProductsToCart, setProductsToCart] = useState([])
    const [getTotalProducts, setTotalProducts] = useState(0)
    const [getAddProduct, setAddProduct] = useState(0)
    const [getRemoved, setRemoved] = useState([])
    const [getDeleted, setDeleted] = useState([])
    const [getTotalMoney, setTotalMoney] = useState(0)

  return (
    <div className="App">
        <mainContext.Provider value={{getError, setError, getNewProduct, setNewProduct, getProductsToCart, setProductsToCart, getAddProduct, setAddProduct, getRemoved, setRemoved, getDeleted, setDeleted, getTotalMoney, setTotalMoney}}>

      <BrowserRouter>
            <Toolbar getTotalProducts={getTotalProducts} setTotalProducts={setTotalProducts} getProductsToCart={getProductsToCart}/>
        <Routes>
            <Route path="/" element={<AllProductsPage />}/>
            <Route path="/create" element={<CreateProductPage />}/>
            <Route path="/product/:title" element={<SingleProductViewPage />}/>
            <Route path="/cart" element={<ShoppingCartPage />}/>
        </Routes>

      </BrowserRouter>

        </mainContext.Provider>
    </div>
  );
}

export default App;
