import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "@/pages/Home/Home";
import Layout from "@/components/Layout";
import { useInView } from "react-intersection-observer";
import ProductsPage from "./pages/Products/Products";
import SingleProduct from "./pages/SingleProduct/SingleProduct";
import CartPage from "./pages/Cart/Cart";
function App() {
  const { ref: sectionRef, inView: isSectionVisible, entry } = useInView();

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Layout isSectionVisible={isSectionVisible} />}
        >
          <Route index element={<Home sectionRef={sectionRef} />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="products/:id" element={<SingleProduct />} />
          <Route path="cart" element={<CartPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
