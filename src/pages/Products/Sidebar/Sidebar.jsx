import Categories from "@/pages/Products/Sidebar/Categories/Index";
import Companies from "./Companies/Index";
import Colors from "@/pages/Products/Sidebar/Colors/Index";
import Price from "@/pages/Products/Sidebar/Price/Index";
import Shipping from "@/pages/Products/Sidebar/Shipping/Index";
function Sidebar(props) {
  const { colors, companies, categories, handleFilter, setActiveFilters } =
    props;

  return (
    <aside className="sidebar">
      <input type="text" className="sidebar__search" placeholder="Search" />
      <Categories
        categories={categories}
        handleFilter={handleFilter}
        setActiveFilters={setActiveFilters}
      />
      <Companies companies={companies} setActiveFilters={setActiveFilters} />
      <Colors colors={colors} />
      <Price />
      <Shipping />
      <button className="sidebar__clear__btn btn">Clear filters</button>
    </aside>
  );
}

export default Sidebar;
