import { useEffect, useState } from "react";
import Sidebar from "@/pages/Products/Sidebar/Sidebar";

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
    const productCategories = products.map((product) => {
      return product.category;
    });
    const uniqueCategories = [...new Set(productCategories)];
    const productCompanies = products.map((product) => {
      return product.company;
    });
    const uniqueCompanies = [...new Set(productCompanies)];
    const productColors = products.map((product) => {
      return product.colors;
    });
    const uniqueColors = Array.from(
      new Set(Object.values(productColors).flat())
    );
    setColors(uniqueColors);
    setCategories(uniqueCategories);
    setCompanies(uniqueCompanies);
  }, [products]);

  console.log(colors);

  return (
    <>
      <Sidebar
        colors={colors}
        companies={companies}
        categories={categories}
      ></Sidebar>
    </>
  );
}
export default ProductsPage;
