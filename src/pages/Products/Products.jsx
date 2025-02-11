import { useEffect, useState } from "react";

function ProductsPage() {
  const [products, setProducts] = useState();
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

  return <></>;
}
export default ProductsPage;
