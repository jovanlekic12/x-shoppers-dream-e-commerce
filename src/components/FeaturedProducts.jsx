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
    <section className="featured__products__section">
      <header className="featured__products__header">
        <h3 className="featured__products__heading1">FEATURED PRODUCTS</h3>
        <h4 className="featured__products__heading2">
          The art of modern living unlocked.
        </h4>
      </header>
      <div className="featured__products__container">
        {products.map((product) => {
          return (
            <article className="featured__products__card">
              <Link>
                <img
                  src={product.img}
                  alt="product image"
                  className="featured__product__img"
                />
              </Link>
              <div className="featured__product__div">
                <span className="featured__product__name">{product.name}</span>
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
    </section>
  );
}

export default FeaturedProductsSection;
