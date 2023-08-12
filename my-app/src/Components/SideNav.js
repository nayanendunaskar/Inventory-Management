import { NavLink } from "react-router-dom";
import "./SideNav.css";
export const SideNav = () => {
  return (
    <nav className="side-nav">
      <NavLink to="/">Dashboard</NavLink>
      <NavLink to="/Departments">Departments</NavLink>
      <NavLink to="/ProductsListingPage">Products</NavLink>
    </nav>
  );
};