import { Link } from "react-router";

function CartContainer({ cartItems }) {
  return (
    cartItems.length === 0 && (
      <div className="cart__container">
        <div className="empty__cart__div">
          <h1 className="empty__cart__heading">Your cart is empty...</h1>
          <Link className="btn keep__shoping__link" to="/products">
            Keep shopping
          </Link>
        </div>
      </div>
    )
  );
}

export default CartContainer;
