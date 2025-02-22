import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { FaArrowDownLong } from "react-icons/fa6";
import { BsStarFill } from "react-icons/bs";
function SingleProduct(props) {
  let params = useParams();

  const [product, setProduct] = useState();

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

  useEffect(() => {
    fetchData();
  }, []);

  // console.log(product.images[0].url);

  return (
    <section className="single__product__section">
      <div className="single__product__container">
        <Link to="/products" className="back__link">
          Back to products <FaArrowDownLong />
        </Link>
        <article className="single__product__article">
          <div className="single__product__img__div">
            {product && (
              <img
                src={product.images[0].url}
                alt="product photo"
                className="single__product__main__img"
              />
            )}
            <div className="single__product__images__div">
              {product &&
                product.images.map((img) => {
                  return (
                    <img
                      src={img.url}
                      alt="product photo"
                      className="single__product__small__img"
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
          </div>
        </article>
      </div>
    </section>
  );
}
export default SingleProduct;
