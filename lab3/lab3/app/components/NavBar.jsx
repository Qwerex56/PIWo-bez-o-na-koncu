import { NavLink } from "react-router";

const NavBar = () => {
  return (
    <nav>
      <NavLink to="/">Add Book</NavLink>
      <NavLink to="/">Login</NavLink>
    </nav>
  );
};

export default NavBar;