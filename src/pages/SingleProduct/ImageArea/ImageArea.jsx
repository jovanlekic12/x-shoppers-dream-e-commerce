function ImageArea(props) {
  const { mainPhoto, setMainPhoto, product } = props;

  return (
    <div className="single__product__img__div">
      {mainPhoto && (
        <img
          src={mainPhoto}
          alt="product photo"
          className="single__product__main__img"
        />
      )}
      <div className="single__product__images__div">
        {product.images.map((img) => {
          return (
            <img
              key={img.url}
              src={img.url}
              alt="product photo"
              className={
                mainPhoto === img.url
                  ? "single__product__small__img active__img"
                  : "single__product__small__img"
              }
              onClick={() => setMainPhoto(img.url)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ImageArea;
