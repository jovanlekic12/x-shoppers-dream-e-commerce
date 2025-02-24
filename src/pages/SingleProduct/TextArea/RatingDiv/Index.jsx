import { BsStarFill } from "react-icons/bs";

function RatingDiv(props) {
  const { product } = props;

  return (
    <div className="rating__div">
      <span className="rating">{product.stars}</span>
      <div className="stars__div">
        <span className="star">
          <BsStarFill />
        </span>
        <span className="star">
          <BsStarFill />
        </span>{" "}
        <span className="star">
          <BsStarFill />
        </span>{" "}
        <span className="star">
          <BsStarFill />
        </span>{" "}
        <span className="star">
          <BsStarFill />
        </span>
      </div>
      <p className="rating__reviews">({product.reviews} customers ratings)</p>
    </div>
  );
}
export default RatingDiv;
