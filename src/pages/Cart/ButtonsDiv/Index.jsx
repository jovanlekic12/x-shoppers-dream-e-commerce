import Button from "@/ui/Button";
import { Link } from "react-router";
import { useDispatch } from "react-redux";
import { clearCart } from "@/features/cart/cartSlice";
function ButtonsDiv() {
  const dispatch = useDispatch();

  return (
    <div className="cart__buttons__div">
      <Link to="/products" className="cart__products__link btn">
        Keep Shopping
      </Link>
      <Button
        onClick={() => dispatch(clearCart())}
        className="clear__cart__btn btn"
      >
        Clear the Cart
      </Button>
    </div>
  );
}

export default ButtonsDiv;
