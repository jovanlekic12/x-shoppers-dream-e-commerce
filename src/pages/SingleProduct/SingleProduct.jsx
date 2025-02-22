import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { FaArrowDownLong } from "react-icons/fa6";

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
        </article>
      </div>
    </section>
  );
}
export default SingleProduct;
