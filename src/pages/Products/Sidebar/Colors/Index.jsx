import { useState } from "react";

function Colors(props) {
  const { colors } = props;
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="sidebar__div">
      <h5 className="sidebar__heading">Color</h5>
      <div className="colors__div">
        <button
          className={
            activeIndex === 0
              ? "sidebar__color__btn__all active__link"
              : "sidebar__color__btn__all"
          }
          onClick={() => setActiveIndex(0)}
        >
          All
        </button>
        {colors.map((color, index) => {
          return (
            <button
              className={
                activeIndex === index + 1
                  ? "sidebar__color__btn active__link"
                  : "sidebar__color__btn"
              }
              onClick={() => {
                setActiveIndex(index + 1);
              }}
            >
              <div
                className="sidebar__color__btn__div"
                style={{ backgroundColor: `${color}` }}
              ></div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
export default Colors;
