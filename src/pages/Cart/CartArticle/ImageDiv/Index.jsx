function ImageDiv({ images, name, chosenColor }) {
  return (
    <div className="cart__item__img__div">
      <img
        src={images[0].url}
        alt="product photo"
        className="cart__item__img"
      />
      <div className="cart__item__name__div">
        <h5 className="cart__item__name__heading">{name}</h5>
        <div className="cart__item__color__div">
          <p className="cart__item__color__p">Color:</p>
          <span
            className="cart__item__color"
            style={{ backgroundColor: `${chosenColor}` }}
          ></span>
        </div>
      </div>
    </div>
  );
}
export default ImageDiv;
