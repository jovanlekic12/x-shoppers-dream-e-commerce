import { increase, decrease } from "@/features/cart/cartSlice";
import { useDispatch } from "react-redux";

function QuantityDiv({ amount, id }) {
  const dispatch = useDispatch();

  return (
    <div className="cart__quantity__div">
      <button
        className="amount__btn btn"
        onClick={() => dispatch(decrease(id))}
      >
        -
      </button>
      <p className="amount__counter">{amount}</p>
      <button
        className="amount__btn btn"
        onClick={() => dispatch(increase(id))}
      >
        +
      </button>
    </div>
  );
}
export default QuantityDiv;
