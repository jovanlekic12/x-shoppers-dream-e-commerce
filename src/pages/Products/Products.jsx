import { useEffect, useState } from "react";
import Sidebar from "@/pages/Products/Sidebar/Sidebar";
import ProductsSection from "./ProductsSection/ProductsSection";

function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [colors, setColors] = useState([]);
  const url = "https://www.course-api.com/react-store-products";
  async function fetchProducts() {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    let productCategories = products.map((product) => {
      return product.category;
    });
    let uniqueCategories = [...new Set(productCategories)];
    uniqueCategories.unshift("all");
    let productCompanies = products.map((product) => {
      return product.company;
    });
    let uniqueCompanies = [...new Set(productCompanies)];
    uniqueCompanies.unshift("all");
    let productColors = products.map((product) => {
      return product.colors;
    });
    let uniqueColors = Array.from(new Set(Object.values(productColors).flat()));

    setColors(uniqueColors);
    setCategories(uniqueCategories);
    setCompanies(uniqueCompanies);
  }, [products]);

  console.log(products);

  return (
    <section className="products__page__section">
      <div className="products__page__div">
        <Sidebar
          colors={colors}
          companies={companies}
          categories={categories}
        ></Sidebar>
        <ProductsSection products={products}></ProductsSection>
      </div>
    </section>
  );
}
export default ProductsPage;
