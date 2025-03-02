import { AiOutlineShopping } from "react-icons/ai";
import { Link } from "react-router";
import { ImCross } from "react-icons/im";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { selectTotalAmount } from "@/features/cart/cartSlice";
import { useSelector } from "react-redux";
function Navbar({ isSectionVisible }) {
  const [isOpened, setIsOpened] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const links = ["home", "products"];
  const totalAmount = useSelector(selectTotalAmount);

  return (
    <header className={isSectionVisible ? "header" : "header header__sticky"}>
      <div className="inner__header">
        <Link className="logo__div" to="/">
          <AiOutlineShopping />
          <span className="logo">X Shoppers Dream</span>
        </Link>
        <nav className={isOpened ? "main__nav main__nav__mobile" : "main__nav"}>
          <div className="links__div">
            {links.map((link, index) => {
              return (
                <Link
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={
                    activeIndex === index
                      ? "nav__link active__link"
                      : "nav__link"
                  }
                  to={link === "home" ? "/" : link}
                >
                  {link}
                </Link>
              );
            })}
          </div>
          <div className="cart__div">
            <div>
              <span>Cart</span>
              <Link className="cart__link" to="/cart">
                <AiOutlineShopping />
              </Link>
            </div>
            <span className="cart__counter">{totalAmount}</span>
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
      </div>
    </header>
  );
}

export default Navbar;
