function FeaturedInSection() {
  const images = [
    "/src/assets/images/techCrunch.png",
    "/src/assets/images/businessInsider.png",
    "/src/assets/images/newYorkTimes.png",
    "/src/assets/images/usaToday.png",
    "/src/assets/images/forbes.png",
  ];

  return (
    <section className="featured__in__section">
      <h2 className="featured__in__heading">AS FEATURED IN</h2>
      <div className="featured__in__logos">
        {images.map((image) => {
          return (
            <img src={image} alt="logo image" className="featured__in__logo" />
          );
        })}
      </div>
    </section>
  );
}

export default FeaturedInSection;
