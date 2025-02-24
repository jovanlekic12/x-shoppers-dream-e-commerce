import { Link } from "react-router";

function FeaturedProductsSection() {
  const products = [
    {
      id: "recs5BSVU3qQrOj4E",
      img: "https://www.course-api.com/images/store/product-15.jpeg",
      name: "Sofa Set",
      price: 1299.99,
    },
    {
      id: "recroK1VD8qVdMP5H",
      img: "https://www.course-api.com/images/store/product-16.jpeg",
      name: "Suede Armchair",
      price: 159.99,
    },
    {
      id: "rec7JInsuCEHgmaGe",
      img: "https://www.course-api.com/images/store/product-17.jpeg",
      name: "Utopia Sofa",
      price: 799.99,
    },
  ];

  return (
    <section className="section" id="featured_products">
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
                <Link to={`/products/${product.id}`}>
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
        <Link className="all__products__btn btn" to="products">
          All products
        </Link>
      </div>
    </section>
  );
}

export default FeaturedProductsSection;
