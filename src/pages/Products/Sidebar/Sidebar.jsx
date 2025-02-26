import Categories from "@/pages/Products/Sidebar/Categories/Index";
import Companies from "./Companies/Index";
import Colors from "@/pages/Products/Sidebar/Colors/Index";
import Price from "@/pages/Products/Sidebar/Price/Index";
import Shipping from "@/pages/Products/Sidebar/Shipping/Index";
import Button from "@/ui/Button";
import Input from "@/ui/Input";
import { ImCross } from "react-icons/im";
function Sidebar(props) {
  const {
    isOpened,
    colors,
    companies,
    categories,
    handleFilter,
    setFilters,
    filters,
    setIsOpened,
  } = props;

  return (
    <aside className={isOpened ? "sidebar sidebar__mobile" : "sidebar"}>
      <ImCross className="x__icon" onClick={() => setIsOpened(false)}></ImCross>
      <Input
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
        filters={filters}
      />
      <Companies
        filters={filters}
        companies={companies}
        setFilters={setFilters}
      />
      <Colors colors={colors} setFilters={setFilters} filters={filters} />
      <Price filters={filters} setFilters={setFilters} />
      <Shipping setFilters={setFilters} filters={filters} />
      <Button
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
      </Button>
    </aside>
  );
}

export default Sidebar;
