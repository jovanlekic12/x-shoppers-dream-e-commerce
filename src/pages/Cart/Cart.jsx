import { useDispatch, useSelector } from "react-redux";
import CartContainer from "./CartContainer/Index";
import CartCategories from "./CartCategories/Index";
import CartArticle from "./CartArticle/CartArticle";
import ButtonsDiv from "./ButtonsDiv/Index";
import PriceDiv from "./PriceDiv/Index";
function CartPage() {
  const { cartItems } = useSelector((store) => store.cart);

  const dispatch = useDispatch();

  return (
    <section className="cart__section">
      <CartContainer cartItems={cartItems} />
      {cartItems.length > 0 && (
        <div className="cart__container cart__container__items">
          <CartCategories />
          <div className="cart__list">
            {cartItems.map((item) => {
              return <CartArticle {...item} />;
            })}
          </div>
          <ButtonsDiv />
          <PriceDiv cartItems={cartItems} />
        </div>
      )}
    </section>
  );
}
export default CartPage;
