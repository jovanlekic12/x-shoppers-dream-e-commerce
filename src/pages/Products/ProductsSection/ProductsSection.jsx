import ProductCard from "./ProductCard/ProductCard";
import { BsLayoutTextSidebarReverse } from "react-icons/bs";
function ProductsSection(props) {
  const { products, setFilteredProducts, setIsOpened } = props;

  function handleSort(option) {
    if (option === "price lowest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else if (option === "price highest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    } else if (option === "name a-z") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.name.localeCompare(b.name))
      );
    } else if (option === "name z-a") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.name.localeCompare(a.name))
      );
    }
  }

  return (
    <section className="products__section">
      <div className="products__sort__div">
        <BsLayoutTextSidebarReverse
          className="filters__btn"
          onClick={() => setIsOpened(true)}
        ></BsLayoutTextSidebarReverse>
        <p className="products__count">
          {products.length} {products.length === 1 ? "product" : "products"}{" "}
          found
        </p>
        <hr className="products__count__line" />
        <div className="products__sort">
          <p className="products__sort__heading">Sort by</p>
          <select className="sort" onChange={(e) => handleSort(e.target.value)}>
            <option value="price lowest">Price (Lowest)</option>
            <option value="price highest">Price (Highest)</option>
            <option value="name a-z">Name (A-Z)</option>
            <option value="name z-a">Name (Z-A)</option>
          </select>
        </div>
      </div>
      <div className="products__div">
        {products &&
          products.map((product) => {
            return <ProductCard key={product.id} {...product}></ProductCard>;
          })}
      </div>
    </section>
  );
}

export default ProductsSection;
