function Price({ price }) {
  return (
    <h5 className="cart__item__price">
      $
      {new Intl.NumberFormat("en-US", {
        style: "decimal",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(price / 100)}
    </h5>
  );
}
export default Price;
