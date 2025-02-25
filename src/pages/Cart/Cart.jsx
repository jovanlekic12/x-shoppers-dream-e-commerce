import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { removeItem } from "@/features/cart/cartSlice";
function CartPage() {
  const { cartItems } = useSelector((store) => store.cart);
  const cartCategories = ["item", "price", "quantity", "subtotal"];
  console.log(cartItems);

  const dispatch = useDispatch();

  return (
    <section className="cart__section">
      {cartItems.length === 0 && (
        <div className="cart__container">
          <div className="empty__cart__div">
            <h1 className="empty__cart__heading">Your cart is empty...</h1>
            <Link className="btn keep__shoping__link" to="/products">
              Keep shopping
            </Link>
          </div>
        </div>
      )}
      {cartItems.length > 0 && (
        <div className="cart__container cart__container__items">
          <div className="cart__categories">
            {cartCategories.map((item) => {
              return <h5 className="heading__cart__category">{item}</h5>;
            })}
          </div>
          {cartItems.map((item) => {
            return (
              <article className="cart__article">
                <div className="cart__item__img__div">
                  <img
                    src={item.images[0].url}
                    alt="product photo"
                    className="cart__item__img"
                  />
                  <div className="cart__item__name__div">
                    <h5 className="cart__item__name__heading">{item.name}</h5>
                    <div className="cart__item__color__div">
                      <p className="cart__item__color__p">Color:</p>
                      <span
                        className="cart__item__color"
                        style={{ backgroundColor: `${item.chosenColor}` }}
                      ></span>
                    </div>
                  </div>
                </div>
                <h5 className="cart__item__price">
                  $
                  {new Intl.NumberFormat("en-US", {
                    style: "decimal",
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  }).format(item.price / 100)}
                </h5>
                <div className="cart__quantity__div">
                  <button className="amount__btn btn">-</button>
                  <p className="amount__counter">{item.amount}</p>
                  <button className="amount__btn btn">+</button>
                </div>
                <h5 className="cart__item__price">
                  $
                  {new Intl.NumberFormat("en-US", {
                    style: "decimal",
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  }).format((item.price * item.amount) / 100)}
                </h5>
                <button
                  onClick={() => dispatch(removeItem(item))}
                  className="cart__item__delete__btn"
                >
                  <RiDeleteBin5Fill />
                </button>
              </article>
            );
          })}
        </div>
      )}
    </section>
  );
}
export default CartPage;
