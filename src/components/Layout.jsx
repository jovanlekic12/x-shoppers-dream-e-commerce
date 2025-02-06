import Navbar from "./Navbar";
import { Outlet } from "react-router";
const Layout = ({ children }) => {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </>
  );
};

export default Layout;
