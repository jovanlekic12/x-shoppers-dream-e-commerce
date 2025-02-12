function Sidebar(props) {
  const { colors, companies, categories } = props;

  return (
    <aside className="sidebar">
      <input type="text" className="sidebar__search" />
      <div className="sidebar__div">
        <h5 className="sidebar__heading">Category</h5>
        {categories.map((category) => {
          return <button className="category__btn">{category}</button>;
        })}
      </div>
      <div className="sidebar__div">
        <h5 className="sidebar__heading">Company</h5>
        <select className="sidebar__select">
          <option value="all">All</option>
          {companies.map((company) => {
            return <option value={company}>{company}</option>;
          })}
        </select>
      </div>
      <div className="sidebar__div">
        <h5 className="sidebar__heading">Color</h5>
        <div className="colors__div">
          <button className="sidebar__color__btn__all">All</button>
          {colors.map((color) => {
            return (
              <button
                className="sidebar__color__btn"
                style={{ backgroundColor: `${color}` }}
              ></button>
            );
          })}
        </div>
      </div>
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
