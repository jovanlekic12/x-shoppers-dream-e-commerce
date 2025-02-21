import { useEffect, useState } from "react";
import Sidebar from "@/pages/Products/Sidebar/Sidebar";
import ProductsSection from "./ProductsSection/ProductsSection";

function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [colors, setColors] = useState([]);
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
  }, [filters, products]);

  console.log(filters);

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
        <ProductsSection products={filteredProducts}></ProductsSection>
      </div>
    </section>
  );
}
export default ProductsPage;
