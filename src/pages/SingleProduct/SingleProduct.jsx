import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { FaArrowDownLong } from "react-icons/fa6";
import { BsStarFill } from "react-icons/bs";
import { useDispatch } from "react-redux";

import { addCartItem, decrease, increase } from "@/features/cart/cartSlice";

function SingleProduct(props) {
  let params = useParams();
  const dispatch = useDispatch();

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
            <div className="single__product__img__div">
              {mainPhoto && (
                <img
                  src={mainPhoto}
                  alt="product photo"
                  className="single__product__main__img"
                />
              )}
              <div className="single__product__images__div">
                {product.images.map((img) => {
                  return (
                    <img
                      src={img.url}
                      alt="product photo"
                      className={
                        mainPhoto === img.url
                          ? "single__product__small__img active__img"
                          : "single__product__small__img"
                      }
                      onClick={() => setMainPhoto(img.url)}
                    />
                  );
                })}
              </div>
            </div>
            <div className="single__product__text__area">
              <h2 className="single__product__heading">{product.name}</h2>
              <div className="rating__div">
                <span className="rating">{product.stars}</span>
                <div className="stars__div">
                  <span className="star">
                    <BsStarFill />
                  </span>
                  <span className="star">
                    <BsStarFill />
                  </span>{" "}
                  <span className="star">
                    <BsStarFill />
                  </span>{" "}
                  <span className="star">
                    <BsStarFill />
                  </span>{" "}
                  <span className="star">
                    <BsStarFill />
                  </span>
                </div>
                <p className="rating__reviews">
                  ({product.reviews} customers ratings)
                </p>
              </div>
              <p className="single__product__price">
                $
                {new Intl.NumberFormat("en-US", {
                  style: "decimal",
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                }).format(product.price / 100)}
              </p>
              <p className="single__product__description">
                {product.description}
              </p>
              <div className="single__product__infos">
                <div className="single__product__info__div">
                  <h5 className="single__product__info__heading">Available:</h5>
                  <span className="single__product__info__span">
                    {product.stock}
                  </span>
                </div>
                <div className="single__product__info__div">
                  <h5 className="single__product__info__heading">SKU:</h5>
                  <span className="single__product__info__span">
                    {product.id}
                  </span>
                </div>
                <div className="single__product__info__div">
                  <h5 className="single__product__info__heading">Available:</h5>
                  <span className="single__product__info__span">
                    {product.company}
                  </span>
                </div>
              </div>
              {product.stock > 0 && (
                <div className="single__product__stock__div">
                  <div className="single__product__color__div">
                    <h5 className="single__product__info__heading">Colors:</h5>
                    <div className="single__product__colors__div">
                      {productForCart &&
                        product.colors.map((color) => {
                          return (
                            <button
                              className={
                                productForCart.chosenColor === color
                                  ? "single__product__color__btn active__color"
                                  : "single__product__color__btn"
                              }
                              onClick={() =>
                                setProductForCart((prev) => ({
                                  ...prev,
                                  chosenColor: color,
                                }))
                              }
                            >
                              <div
                                className="sidebar__color__btn__div"
                                style={{ backgroundColor: `${color}` }}
                              ></div>
                            </button>
                          );
                        })}
                    </div>
                  </div>
                  {productForCart && (
                    <div className="single__product__amount__div">
                      <button
                        className="amount__btn btn"
                        onClick={handleDecrement}
                      >
                        -
                      </button>
                      <p className="amount__counter">{productForCart.amount}</p>
                      <button
                        className="amount__btn btn"
                        onClick={handleIncrement}
                      >
                        +
                      </button>
                    </div>
                  )}
                  <Link to="/cart">
                    <button
                      className="add__to__cart__btn btn"
                      onClick={() => {
                        dispatch(addCartItem(productForCart));
                      }}
                    >
                      Add to cart
                    </button>
                  </Link>
                </div>
              )}
            </div>
          </article>
        )}
      </div>
    </section>
  );
}
export default SingleProduct;
