function Price(props) {
  const { filters, setFilters } = props;
  return (
    <div className="sidebar__div">
      <h5 className="sidebar__heading">Price</h5>
      <h5 className="price__heading">{filters.price}$</h5>
      <input
        type="range"
        min="0"
        max="3999"
        value={filters.price}
        onChange={(e) =>
          setFilters((prev) => ({ ...prev, price: Number(e.target.value) }))
        }
      />
    </div>
  );
}

export default Price;
