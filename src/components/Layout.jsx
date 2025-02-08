import Navbar from "./Navbar";
import { Outlet } from "react-router";
const Layout = ({ isSectionVisible }) => {
  return (
    <>
      <Navbar isSectionVisible={isSectionVisible}></Navbar>
      <Outlet></Outlet>
    </>
  );
};

export default Layout;
