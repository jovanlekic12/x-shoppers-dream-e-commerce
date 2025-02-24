function InfoDiv(props) {
  const { product } = props;
  return (
    <div className="single__product__infos">
      <div className="single__product__info__div">
        <h5 className="single__product__info__heading">Available:</h5>
        <span className="single__product__info__span">{product.stock}</span>
      </div>
      <div className="single__product__info__div">
        <h5 className="single__product__info__heading">SKU:</h5>
        <span className="single__product__info__span">{product.id}</span>
      </div>
      <div className="single__product__info__div">
        <h5 className="single__product__info__heading">Available:</h5>
        <span className="single__product__info__span">{product.company}</span>
      </div>
    </div>
  );
}

export default InfoDiv;
