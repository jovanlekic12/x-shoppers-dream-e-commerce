import AmountDiv from "./AmountDiv/Index";
import ColorDiv from "./ColorDiv/Index";
import RatingDiv from "./RatingDiv/Index";
import InfoDiv from "./InfoDiv/Index";
import { Link } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addCartItem, selectItemsById } from "@/features/cart/cartSlice";
function TextArea(props) {
  const {
    product,
    productForCart,
    setProductForCart,
    handleDecrement,
    handleIncrement,
  } = props;

  const dispatch = useDispatch();
  const sameCartItems = useSelector(selectItemsById(product.id));

  const cartItemsAmount = sameCartItems.reduce(
    (amount, item) => amount + item.amount,
    0
  );

  return (
    <div className="single__product__text__area">
      <h2 className="single__product__heading">{product.name}</h2>
      <RatingDiv product={product}></RatingDiv>
      <p className="single__product__price">
        $
        {new Intl.NumberFormat("en-US", {
          style: "decimal",
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        }).format(product.price / 100)}
      </p>
      <p className="single__product__description">{product.description}</p>
      <InfoDiv product={product}></InfoDiv>
      {product.stock > 0 && (
        <div className="single__product__stock__div">
          <ColorDiv
            productForCart={productForCart}
            product={product}
            setProductForCart={setProductForCart}
          ></ColorDiv>
          {productForCart && (
            <AmountDiv
              handleIncrement={handleIncrement}
              handleDecrement={handleDecrement}
              productForCart={productForCart}
            ></AmountDiv>
          )}
          {productForCart && (
            <Link to="/cart">
              <button
                className={
                  cartItemsAmount + productForCart.amount > productForCart.stock
                    ? "add__to__cart__btn btn disabled btn"
                    : "add__to__cart__btn btn "
                }
                onClick={() => {
                  dispatch(addCartItem(productForCart));
                }}
                disabled={
                  cartItemsAmount + productForCart.amount > productForCart.stock
                    ? true
                    : false
                }
              >
                Add to cart
              </button>
            </Link>
          )}
        </div>
      )}
    </div>
  );
}

export default TextArea;
