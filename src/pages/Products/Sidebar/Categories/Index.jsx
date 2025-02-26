import { useState } from "react";

function Categories(props) {
  const { categories, setFilters, filters } = props;

  return (
    <div className="sidebar__div">
      <h5 className="sidebar__heading">Category</h5>
      {categories.map((category) => {
        return (
          <button
            key={category}
            className={
              filters.category === category
                ? "category__btn active__link"
                : "category__btn"
            }
            onClick={() => {
              setFilters((prev) => ({ ...prev, category: category }));
            }}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
export default Categories;
