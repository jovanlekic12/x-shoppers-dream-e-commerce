function CartCategories() {
  const cartCategories = ["item", "price", "quantity", "subtotal"];

  return (
    <div className="cart__categories">
      {cartCategories.map((item) => {
        return (
          <h5 key={item} className="heading__cart__category">
            {item}
          </h5>
        );
      })}
    </div>
  );
}

export default CartCategories;
