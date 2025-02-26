import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { removeItem } from "@/features/cart/cartSlice";
import CartContainer from "./CartContainer/Index";
import CartCategories from "./CartCategories/Index";
import CartArticle from "./CartArticle/CartArticle";
function CartPage() {
  const { cartItems } = useSelector((store) => store.cart);

  const dispatch = useDispatch();

  return (
    <section className="cart__section">
      <CartContainer cartItems={cartItems} />
      {cartItems.length > 0 && (
        <div className="cart__container cart__container__items">
          <CartCategories />
          {cartItems.map((item) => {
            return <CartArticle {...item} />;
          })}
        </div>
      )}
    </section>
  );
}
export default CartPage;
