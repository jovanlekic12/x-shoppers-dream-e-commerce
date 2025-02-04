import { AiOutlineShopping } from "react-icons/ai";
import { Link } from "react-router";
import { ImCross } from "react-icons/im";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
function Navbar() {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <header className="header">
      <div className="logo__div">
        <AiOutlineShopping />
        <span className="logo">X Shoppers Dream</span>
      </div>
      <nav className={isOpened ? "main__nav main__nav__mobile" : "main__nav"}>
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
        <ImCross
          className="x__icon"
          onClick={() => setIsOpened(false)}
        ></ImCross>
      </nav>
      <FaBars
        className="sidebar__btn"
        onClick={() => setIsOpened(true)}
      ></FaBars>
    </header>
  );
}

export default Navbar;
