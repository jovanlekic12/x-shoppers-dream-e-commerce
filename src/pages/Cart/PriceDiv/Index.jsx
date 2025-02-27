import { selectTotalPrice } from "@/features/cart/cartSlice";
import { useSelector } from "react-redux";

function PriceDiv({ cartItems }) {
  const subTotal = useSelector(selectTotalPrice);
  const hasShipping = cartItems.some((item) => item.shipping === true);
  const shippingPrice = hasShipping ? 725 : 0;
  const totalPrice = subTotal + shippingPrice;

  return (
    <div className="cart__price__container">
      <div className="cart__price__div">
        <div className="cart__subtotal__shipping">
          <div className="cart__subtotal__div">
            <h5 className="subtotal__heading">Subtotal:</h5>
            <h5 className="subtotal__heading">
              $
              {new Intl.NumberFormat("en-US", {
                style: "decimal",
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              }).format(subTotal / 100)}
            </h5>
          </div>
          <div className="cart__shipping__div">
            <p className="shipping__p">Shipping Fee:</p>
            <p className="shipping__p">
              $
              {new Intl.NumberFormat("en-US", {
                style: "decimal",
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              }).format(shippingPrice / 100)}
            </p>
          </div>
        </div>
        <div className="total__price__div">
          <h4 className="total__price__heading">Total:</h4>
          <h4 className="total__price__heading">
            $
            {new Intl.NumberFormat("en-US", {
              style: "decimal",
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            }).format(totalPrice / 100)}
          </h4>
        </div>
      </div>
    </div>
  );
}

export default PriceDiv;
