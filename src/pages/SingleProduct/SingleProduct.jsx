import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { FaArrowDownLong } from "react-icons/fa6";
import { BsStarFill } from "react-icons/bs";

import { addCartItem, decrease, increase } from "@/features/cart/cartSlice";
import ImageArea from "./ImageArea/ImageArea";
import TextArea from "./TextArea/TextArea";

function SingleProduct(props) {
  let params = useParams();

  const [product, setProduct] = useState();
  const [mainPhoto, setMainPhoto] = useState();
  const [activeIndex, setActiveIndex] = useState(0);
  const [productForCart, setProductForCart] = useState();
  const url = "https://www.course-api.com/react-store-single-product?id=";

  async function fetchData() {
    try {
      const response = await fetch(url + params.id);
      const data = await response.json();
      setProduct(data);
    } catch (error) {
      console.log(error);
    }
  }

  function handleIncrement() {
    if (productForCart.amount < productForCart.stock) {
      setProductForCart((prev) => ({ ...prev, amount: prev.amount + 1 }));
    }
  }

  function handleDecrement() {
    if (productForCart.amount > 1) {
      setProductForCart((prev) => ({ ...prev, amount: prev.amount - 1 }));
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (product) {
      setMainPhoto(product.images[0].url);
      const item = { ...product, amount: 1, chosenColor: product.colors[0] };
      setProductForCart(item);
    }
  }, [product]);

  console.log(productForCart);

  return (
    <section className="single__product__section">
      <div className="single__product__container">
        <Link to="/products" className="back__link">
          Back to products <FaArrowDownLong />
        </Link>
        {product && (
          <article className="single__product__article">
            <ImageArea
              mainPhoto={mainPhoto}
              setMainPhoto={setMainPhoto}
              product={product}
            />
            <TextArea
              product={product}
              productForCart={productForCart}
              setProductForCart={setProductForCart}
              handleDecrement={handleDecrement}
              handleIncrement={handleIncrement}
            ></TextArea>
          </article>
        )}
      </div>
    </section>
  );
}
export default SingleProduct;
