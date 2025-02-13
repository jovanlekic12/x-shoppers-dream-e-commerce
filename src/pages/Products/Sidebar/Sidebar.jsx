import Categories from "@/pages/Products/Sidebar/Categories/Index";
import Companies from "./Companies/Index";
import Colors from "@/pages/Products/Sidebar/Colors/Index";
function Sidebar(props) {
  const { colors, companies, categories } = props;

  return (
    <aside className="sidebar">
      <input type="text" className="sidebar__search" placeholder="Search" />
      <Categories categories={categories} />
      <Companies companies={companies} />
      <Colors colors={colors} />
      <div className="sidebar__div">
        <h5 className="sidebar__heading">Price</h5>

        <h5 className="price__heading">4</h5>
        <input type="range" />
      </div>
      <div className="sidebar__shipping__div">
        <h5 className="sidebar__heading">Free Shipping</h5>
        <input type="checkbox" className="sidebar__checkbox" />
      </div>
      <button className="sidebar__clear__btn btn">Clear filters</button>
    </aside>
  );
}

export default Sidebar;
