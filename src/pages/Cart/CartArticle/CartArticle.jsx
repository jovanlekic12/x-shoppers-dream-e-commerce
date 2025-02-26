import { RiDeleteBin5Fill } from "react-icons/ri";
import ImageDiv from "./ImageDiv/Index";
import Price from "./Price/Index";
import QuantityDiv from "./QuantityDiv/Index";
import { useDispatch } from "react-redux";
import { removeItem } from "@/features/cart/cartSlice";
function CartArticle(props) {
  const { id, name, images, chosenColor, price, amount } = props;

  const subTotal = price * amount;
  const dispatch = useDispatch();
  return (
    <article className="cart__article" key={id}>
      <ImageDiv images={images} name={name} chosenColor={chosenColor} />
      <Price price={price} />
      <QuantityDiv amount={amount} id={id} chosenColor={chosenColor} />
      <Price price={subTotal} />

      <button
        onClick={() => dispatch(removeItem({ id, chosenColor }))}
        className="cart__item__delete__btn"
      >
        <RiDeleteBin5Fill />
      </button>
    </article>
  );
}

export default CartArticle;
