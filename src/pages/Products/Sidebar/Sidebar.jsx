import Categories from "@/pages/Products/Sidebar/Categories/Index";
import Companies from "./Companies/Index";
import Colors from "@/pages/Products/Sidebar/Colors/Index";
import Price from "@/pages/Products/Sidebar/Price/Index";
import Shipping from "@/pages/Products/Sidebar/Shipping/Index";
function Sidebar(props) {
  const { colors, companies, categories, handleFilter, setFilters, filters } =
    props;

  return (
    <aside className="sidebar">
      <input
        type="text"
        className="sidebar__search"
        placeholder="Search"
        value={filters.search}
        onChange={(e) =>
          setFilters((prev) => ({ ...prev, search: e.target.value }))
        }
      />
      <Categories
        categories={categories}
        handleFilter={handleFilter}
        setFilters={setFilters}
      />
      <Companies
        filters={filters}
        companies={companies}
        setFilters={setFilters}
      />
      <Colors colors={colors} setFilters={setFilters} filters={filters} />
      <Price filters={filters} setFilters={setFilters} />
      <Shipping setFilters={setFilters} filters={filters} />
      <button
        className="sidebar__clear__btn btn"
        onClick={() =>
          setFilters({
            search: "",
            category: "all",
            company: "all",
            color: "all",
            price: 3999,
            freeShipping: false,
          })
        }
      >
        Clear filters
      </button>
    </aside>
  );
}

export default Sidebar;
