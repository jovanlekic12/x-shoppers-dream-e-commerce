import { BsStars } from "react-icons/bs";
import { IoEyeOutline } from "react-icons/io5";
import { RiBookLine } from "react-icons/ri";
import { useInView } from "react-intersection-observer";
function CreedsSection() {
  const { ref: sectionRef, inView: isSectionVisible, entry } = useInView();

  const items = [
    {
      svg: <BsStars></BsStars>,
      title: "Radiance",
      text: "Our commitment to providing sparkling solutions ensures every customer enjoys a shining, glowing experience with unmatched quality.",
    },
    {
      svg: <IoEyeOutline></IoEyeOutline>,
      title: "Clarity",
      text: "With clear vision and keen insight, we guide customers down the path to lasting success with exceptional service and anticipation.",
    },
    {
      svg: <RiBookLine></RiBookLine>,
      title: "Heritage",
      text: "As a trusted partner, we offer expert guidance, drawing on our deep wisdom and wealth of experience to ensure satisfaction and success.",
    },
  ];

  return (
    <section
      className={isSectionVisible ? "section" : "section section__animate"}
      ref={sectionRef}
    >
      <div className="section__main">
        <header className="section__header">
          <h3 className="section__heading1">Creeds we live by</h3>
          <h4 className="section__heading2">
            Elevate your home with our attitude of excellence and timeless
            style.
          </h4>
        </header>
        <div className="section__container">
          {items.map((item) => {
            return (
              <article className="creed__article" key={item.title}>
                <div className="creed__icon__div">
                  <span className="creed__icon__span">{item.svg}</span>
                </div>
                <h3 className="creed__article__heading">{item.title}</h3>
                <p className="creed__article__p">{item.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
export default CreedsSection;
