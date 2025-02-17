import { useState } from "react";

function Categories(props) {
  const { categories, handleFilter, setActiveFilters, activeFilters } = props;
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="sidebar__div">
      <h5 className="sidebar__heading">Category</h5>
      {categories.map((category, index) => {
        return (
          <button
            className={
              activeIndex === index
                ? "category__btn active__link"
                : "category__btn"
            }
            onClick={() => {
              setActiveFilters((prev) => {
                if (category === "all") {
                  return { ...prev, category: null };
                }
                return { ...prev, category: category };
              });
              setActiveIndex(index);
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
