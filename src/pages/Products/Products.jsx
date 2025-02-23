import { useEffect, useState } from "react";
import Sidebar from "@/pages/Products/Sidebar/Sidebar";
import ProductsSection from "./ProductsSection/ProductsSection";

function ProductsPage() {
  const [products, setProducts] = useState([]);

  const colors = Array.from(
    new Set(Object.values(products.map((prod) => prod.colors)).flat())
  );

  const categories = Array.from(
    new Set(["all", ...products.map((prod) => prod.category)])
  );

  const companies = Array.from(
    new Set(["all", ...products.map((prod) => prod.company)])
  );
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filters, setFilters] = useState({
    search: "",
    category: "all",
    company: "all",
    color: "all",
    price: 3999,
    freeShipping: false,
  });

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
    let updatedProducts = [...products];

    if (filters.search) {
      updatedProducts = updatedProducts.filter((product) =>
        product.name.toLowerCase().includes(filters.search.toLowerCase())
      );
    }

    if (filters.category !== "all") {
      updatedProducts = updatedProducts.filter(
        (product) => product.category === filters.category
      );
    }

    if (filters.company !== "all") {
      updatedProducts = updatedProducts.filter(
        (product) => product.company === filters.company
      );
    }

    if (filters.color !== "all") {
      updatedProducts = updatedProducts.filter((product) =>
        product.colors.includes(filters.color)
      );
    }

    updatedProducts = updatedProducts.filter(
      (product) => product.price / 100 <= filters.price
    );

    if (filters.freeShipping) {
      updatedProducts = updatedProducts.filter(
        (product) => product.shipping === true
      );
    }

    setFilteredProducts(updatedProducts);
  }, [filters]);

  console.log(products);

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  return (
    <section className="products__page__section">
      <div className="products__page__div">
        <Sidebar
          colors={colors}
          companies={companies}
          categories={categories}
          setFilters={setFilters}
          filters={filters}
        ></Sidebar>
        <ProductsSection
          setFilteredProducts={setFilteredProducts}
          products={filteredProducts}
        ></ProductsSection>
      </div>
    </section>
  );
}
export default ProductsPage;
