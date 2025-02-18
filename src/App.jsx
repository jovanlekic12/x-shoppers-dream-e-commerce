import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "@/pages/Home/Home";
import Layout from "@/components/Layout";
import { useInView } from "react-intersection-observer";
import ProductsPage from "./pages/Products/Products";
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
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
