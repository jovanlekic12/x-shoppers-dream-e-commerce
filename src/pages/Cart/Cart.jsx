import { useSelector } from "react-redux";
import { Link } from "react-router";

function CartPage() {
  const { cartItems } = useSelector((store) => store.cart);
  console.log(cartItems);
  return (
    <section className="cart__section">
      <div className="cart__container">
        {cartItems.length === 0 && (
          <div className="empty__cart__div">
            <h1 className="empty__cart__heading">Your cart is empty...</h1>
            <Link className="btn keep__shoping__link" to="/products">
              Keep shopping
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
export default CartPage;
