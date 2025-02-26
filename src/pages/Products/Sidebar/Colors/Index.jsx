import { useState } from "react";

function Colors(props) {
  const { colors, setFilters, filters } = props;

  return (
    <div className="sidebar__div">
      <h5 className="sidebar__heading">Color</h5>
      <div className="colors__div">
        <button
          className={
            filters.color === "all"
              ? "sidebar__color__btn__all active__link"
              : "sidebar__color__btn__all"
          }
          onClick={() => {
            setFilters((prev) => ({ ...prev, color: "all" }));
          }}
        >
          All
        </button>
        {colors.map((color) => {
          return (
            <button
              key={color}
              className={
                filters.color === color
                  ? "sidebar__color__btn active__color"
                  : "sidebar__color__btn"
              }
              onClick={() => {
                setFilters((prev) => ({ ...prev, color: color }));
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
