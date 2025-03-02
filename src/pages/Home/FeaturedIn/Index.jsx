function FeaturedInSection() {
  const images = [
    "/images/techCrunch.png",
    "/images/businessInsider.png",
    "/images/newYorkTimes.png",
    "/images/forbes.png",
    "/images/usaToday.png",
  ];

  return (
    <section className="featured__in__section section">
      <h2 className="featured__in__heading">AS FEATURED IN</h2>
      <div className="featured__in__logos">
        {images.map((image) => {
          return (
            <img
              src={image}
              alt="logo image"
              className="featured__in__logo"
              key={image}
            />
          );
        })}
      </div>
    </section>
  );
}

export default FeaturedInSection;
