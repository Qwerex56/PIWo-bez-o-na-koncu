import { NavLink } from "react-router";

const NavBar = () => {
  return (
    <nav
      className="flex justify-between p-4 rounded-4xl bg-[#183A37] ">
      <NavLink 
        to="/new"
        className="bg-[#EFD6AC] text-[2rem] text-[#04151F] rounded-2xl p-2.5 text-center">
        Add Book
      </NavLink>

      <NavLink
        to="/"
        className="bg-[#EFD6AC] text-[2rem] text-[#04151F] rounded-2xl p-2.5 text-center">
        Library
      </NavLink>
      
      <NavLink 
        to="/"
        className="bg-[#EFD6AC] text-[2rem] text-[#04151F] rounded-2xl p-2.5 text-center">
        Login
      </NavLink>
    </nav>
  );
};

export default NavBar;