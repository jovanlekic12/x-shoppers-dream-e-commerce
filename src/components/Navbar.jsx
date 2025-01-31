import { AiOutlineShopping } from "react-icons/ai";
import { Link } from "react-router";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo__div">
        <AiOutlineShopping />
        <span className="logo">X Shoppers Dream</span>
      </div>
      <div className="links__div">
        <Link className="nav__link active__link">Home</Link>
        <Link className="nav__link">About</Link>
        <Link className="nav__link">Products</Link>
      </div>
      <div className="cart__div">
        <div>
          <span>Cart</span>
          <Link className="cart__link">
            <AiOutlineShopping />
          </Link>
        </div>
        <span className="cart__counter">0</span>
      </div>
    </nav>
  );
}

export default Navbar;
