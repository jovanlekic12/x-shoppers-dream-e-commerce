import { useState } from "react";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import { useInView } from "react-intersection-observer";
function TestimonialsSection() {
  const [moveIndex, setMoveIndex] = useState(0);
  const { ref: sectionRef, inView: isSectionVisible, entry } = useInView();

  const reviews = [
    {
      name: "Anastasiya Petrova",
      city: "Kyiv",
      country: "Ukraine",
      img: "./src/assets/images/human1.webp",
      title: "These pieces transformed my home!",
      text: "The level of hospitality and professionalism shown by the company made my shopping experience a breeze. The modern designs and top-quality materials of these products exceeded my expectations, and I couldn't be happier with my purchase!",
    },
    {
      name: "Sophie Martin",
      city: "Paris",
      country: "France",
      img: "./src/assets/images/human2.jpg",
      title: "My space now finally feels complete.",
      text: "The beautiful furniture pieces I purchased fit perfectly in my home and bring me so much joy every day. The quality and modern design exceeded my expectations, and the entire experience with your company was seamless.",
    },
    {
      name: "Tyron Mayers",
      city: "San Francisco",
      country: "USA",
      img: "./src/assets/images/human3.jpg",
      title: "You guys brought vision back to my life.",
      text: "I cannot speak highly enough of the quality of the products I received from this company. The attention to detail and craftsmanship is unparalleled. I am so grateful to have found such a reliable and professional source for my furniture needs.",
    },
    {
      name: "Vinney Malesh",
      city: "Los Angeles",
      country: "USA",
      img: "./src/assets/images/human4.jpg",
      title: "Can't believe I have been missing on this!",
      text: "The furniture I found on this e-commerce store was exactly what I was looking for. The pieces have truly transformed my home and brought my vision to life, adding a touch of sophistication and elegance to every corner.",
    },
  ];

  function handleSlide(side) {
    if (side === "left") {
      setMoveIndex(moveIndex === 0 ? reviews.length - 1 : moveIndex - 1);
    } else if (side === "right") {
      setMoveIndex(moveIndex === reviews.length - 1 ? 0 : moveIndex + 1);
    }
  }
  // setInterval(() => handleSlide("right"), 5000);

  return (
    <section
      className={
        isSectionVisible
          ? "section testimonials__section"
          : "section testimonials__section section__animate"
      }
      ref={sectionRef}
    >
      <div className="section__main testimonials__main">
        <header className="section__header">
          <h3 className="section__heading1">Testimonialss</h3>
          <h4 className="section__heading2">
            Discover the stories of our delighted customers - thousands and
            counting!
          </h4>
        </header>
      </div>
      <div className="reviews__container">
        {reviews.map((item, index) => {
          return (
            <div
              key={item.name}
              className="slider"
              style={{ transform: `translateX(${index - moveIndex}00%)` }}
            >
              <article className="review__article">
                <h5 className="review__title">{item.title}</h5>
                <div className="timer__div__outside">
                  <div className="timer__div__inside"></div>
                </div>
                <p className="review__text">{item.text}</p>
                <div className="review__author__div">
                  <img
                    src={item.img}
                    alt="author image"
                    className="review__author__img"
                  />
                  <h6 className="review__author__name">{item.name}</h6>
                  <p className="review__author__origin">
                    {item.city}, {item.country}
                  </p>
                </div>
              </article>
            </div>
          );
        })}
        <button
          className="arrow arrow__left"
          onClick={() => handleSlide("left")}
        >
          <FaArrowLeftLong></FaArrowLeftLong>
        </button>
        <button
          className="arrow arrow__right"
          onClick={() => handleSlide("right")}
        >
          <FaArrowRightLong></FaArrowRightLong>
        </button>
      </div>
    </section>
  );
}
export default TestimonialsSection;
