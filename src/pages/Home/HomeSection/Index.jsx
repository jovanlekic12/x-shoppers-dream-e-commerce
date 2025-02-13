import { Link } from "react-router";
import { FaArrowDownLong } from "react-icons/fa6";
function HomeSection({ sectionRef }) {
  return (
    <section className="home__section" ref={sectionRef}>
      <div className="home__section__left">
        <div className="home__section__text">
          <h1 className="heading__primary">
            Furniture design to make you feel at home
          </h1>
          <p className="home__paragraph">
            Create your perfect space with our designs.
          </p>
        </div>
        <div className="home__section__btns">
          <Link className="home__explore__btn btn" to="/products">
            Explore products
          </Link>
          <a className="home__learn__btn btn" href="#featured__products">
            Learn more <FaArrowDownLong />
          </a>
        </div>
      </div>
      <div className="home__section__right">
        <img
          className="home__section__img"
          src="/src/assets/images/heroimg.png"
          alt=""
        />
      </div>
    </section>
  );
}

export default HomeSection;
