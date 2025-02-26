import { GrSwift } from "react-icons/gr";
import { TbHeartHandshake } from "react-icons/tb";
import { FaCheck } from "react-icons/fa6";
import { AiOutlineDollar } from "react-icons/ai";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
function OperationsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const { ref: sectionRef, inView: isSectionVisible, entry } = useInView();

  const items = [
    {
      name: "Swift Delivery",
      title: "Get your home furnishings in a flash with rapid delivery.",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error accusamus architecto minus sint, perspiciatis blanditiis iusto dolor, temporibus aperiam explicabo est ex harum eligendi quia ipsa fugit. Explicabo, voluptatibus officia.",
      svg: <GrSwift />,
    },
    {
      name: "Stellar Support",
      title: "Always here to help: stellar support around the clock.",
      text: "Dolor sit amet consectetur adipisicing elit. Error accusamus architecto minus sint, plorem blanditiis iusto dolor, temporibus aperiam explicabo est ex harum eligendi quia ipsa fugit. Explicabo, voluptatibus officia minus sint, plorem ex harum.",
      svg: <TbHeartHandshake />,
    },
    {
      name: "Fresh Finds",
      title: "Stay ahead of the trends with our latest discoveries.",
      text: "Ipsum dolor sit amet consectetur adipisicing elit. Error accusamus architecto minus sint, pLorem blanditiis iusto dolor, temporibus aperiam explicabo est ex harum eligendi quia ipsa fugit. Explicabo, voluptatibus officia temporibus.",
      svg: <FaCheck />,
    },
    {
      name: "Easy Returns",
      title: "No stress or worries for your home goods.",
      text: "Explicabo ipsum Error sit ametperspiciati consectetur voluptatibus elit. Error accusamus arc explicabo explictecto minus sint, se blanditiis iusto dolor, temporibus aperiam explicabo est ex harum eligendi quia ipsa fugit sit amet architecto.",
      svg: <AiOutlineDollar />,
    },
  ];

  return (
    <section
      className={isSectionVisible ? "section" : "section section__animate"}
      ref={sectionRef}
    >
      <div className="section__main operations__main">
        <header className="section__header">
          <h3 className="section__heading1">Operations</h3>
          <h4 className="section__heading2">
            Where simplicity meets efficiency to bring your home to life.
          </h4>
        </header>

        <div className="operations__btns">
          {items.map((item, index) => {
            return (
              <button
                key={item.name}
                className={
                  index === activeIndex
                    ? "operations__btn active__btn"
                    : "operations__btn"
                }
                onClick={() => {
                  setActiveIndex(index);
                }}
              >
                {item.name}
              </button>
            );
          })}
        </div>
        <div className="operation__container">
          <div className="operation__title__div">
            <div className="operation__icon__div">
              <span className="operation__icon__span">
                {items[activeIndex].svg}
              </span>
            </div>
            <h3 className="operation__title">{items[activeIndex].title}</h3>
            <p className="operation__p">{items[activeIndex].text}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default OperationsSection;
