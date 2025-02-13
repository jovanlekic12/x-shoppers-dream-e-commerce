import ProductCard from "./ProductCard/ProductCard";

function ProductsSection(props) {
  const { products } = props;

  return (
    <section className="products__section">
      {products &&
        products.map((product) => {
          return <ProductCard key={product.id} {...product}></ProductCard>;
        })}
    </section>
  );
}
export default ProductsSection;
