import { Link } from "react-router";

function FeaturedProductsSection() {
  const products = [
    {
      img: "https://www.course-api.com/images/store/product-15.jpeg",
      name: "Sofa Set",
      price: 1299.99,
    },
    {
      img: "https://www.course-api.com/images/store/product-16.jpeg",
      name: "Suede Armchair",
      price: 159.99,
    },
    {
      img: "https://www.course-api.com/images/store/product-17.jpeg",
      name: "Sofa Set",
      price: 799.99,
    },
  ];

  return (
    <section className="section">
      <div className="section__main">
        <header className="section__header">
          <h3 className="section__heading1">Creeds we live by</h3>
          <h4 className="section__heading2">
            Elevate your home with our attitude of excellence and timeless
            style.
          </h4>
        </header>
        <div className="section__container">
          {products.map((product) => {
            return (
              <article className="featured__products__card" key={product.img}>
                <Link>
                  <img
                    src={product.img}
                    alt="product image"
                    className="featured__product__img"
                  />
                </Link>
                <div className="featured__product__div">
                  <span className="featured__product__name">
                    {product.name}
                  </span>
                  <span className="featured__product__price">
                    $
                    {product.price.toLocaleString("en-US", {
                      minimumFractionDigits: 2,
                    })}
                  </span>
                </div>
              </article>
            );
          })}
        </div>
        <Link className="all__products__btn btn">All products</Link>
      </div>
    </section>
  );
}

export default FeaturedProductsSection;
