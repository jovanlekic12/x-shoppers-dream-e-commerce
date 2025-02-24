function ColorDiv(props) {
  const { productForCart, product, setProductForCart } = props;

  return (
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
  );
}

export default ColorDiv;
