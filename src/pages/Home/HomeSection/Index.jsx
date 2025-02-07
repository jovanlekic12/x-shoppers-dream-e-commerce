import { Link } from "react-router";
import { FaArrowDownLong } from "react-icons/fa6";
function HomeSection() {
  return (
    <section className="home__section">
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
          <Link className="home__explore__btn btn">Explore products</Link>
          <button className="home__learn__btn btn" href="featured_products">
            Learn more <FaArrowDownLong />
          </button>
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
