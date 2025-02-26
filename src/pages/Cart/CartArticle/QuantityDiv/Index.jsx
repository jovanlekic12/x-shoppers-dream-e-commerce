import { increase, decrease } from "@/features/cart/cartSlice";
import { useDispatch } from "react-redux";

function QuantityDiv({ amount, id, chosenColor }) {
  const dispatch = useDispatch();

  return (
    <div className="cart__quantity__div">
      <button
        className="amount__btn btn"
        onClick={() => dispatch(decrease({ id, chosenColor }))}
      >
        -
      </button>
      <p className="amount__counter">{amount}</p>
      <button
        className="amount__btn btn"
        onClick={() => dispatch(increase({ id, chosenColor }))}
      >
        +
      </button>
    </div>
  );
}
export default QuantityDiv;
