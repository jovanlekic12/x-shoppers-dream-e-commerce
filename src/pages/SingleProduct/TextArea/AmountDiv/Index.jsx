function AmountDiv(props) {
  const { handleDecrement, handleIncrement, productForCart } = props;

  return (
    <div className="single__product__amount__div">
      <button className="amount__btn btn" onClick={handleDecrement}>
        -
      </button>
      <p className="amount__counter">{productForCart.amount}</p>
      <button className="amount__btn btn" onClick={handleIncrement}>
        +
      </button>
    </div>
  );
}
export default AmountDiv;
