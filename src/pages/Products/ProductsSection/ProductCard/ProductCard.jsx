function ProductCard(props) {
  const { name, price, image } = props;

  return (
    <article className="product__card">
      <a href="">
        <img src={image} alt="" className="product__card__img" />
      </a>
      <div className="product__name__div">
        <h5 className="product__card__name">{name}</h5>
        <span className="product__card__price">
          $
          {new Intl.NumberFormat("en-US", {
            style: "decimal",
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          }).format(price / 100)}
        </span>
      </div>
    </article>
  );
}

export default ProductCard;
