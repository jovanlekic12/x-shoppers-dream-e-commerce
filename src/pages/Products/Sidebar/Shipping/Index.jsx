import Input from "@/ui/Input";

function Shipping(props) {
  const { filters, setFilters } = props;

  return (
    <div className="sidebar__shipping__div">
      <h5 className="sidebar__heading">Free Shipping</h5>
      <Input
        type="checkbox"
        className="sidebar__checkbox"
        checked={filters.freeShipping}
        onChange={(e) =>
          setFilters((prev) => ({ ...prev, freeShipping: e.target.checked }))
        }
      />
    </div>
  );
}

export default Shipping;
