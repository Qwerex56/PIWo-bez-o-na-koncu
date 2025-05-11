import { NavLink } from "react-router";
import { loginWithGoogle, logOut, useUser } from "../services/UserService";

const NavBar = () => {
  const user = useUser();

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

      {!user &&

        <NavLink
          to="/"
          className="bg-[#EFD6AC] text-[2rem] text-[#04151F] rounded-2xl p-2.5 text-center"
          onClick={loginWithGoogle}
        >
          Zaloguj z Google
        </NavLink>

      }

      {user &&
        <>
          <p
            className="bg-[#EFD6AC] text-[2rem] text-[#04151F] rounded-2xl p-2.5 text-center"
          >
            Witaj: {user.displayName}
          </p>
        </>
      }
      {user &&
        <>
          <NavLink
            className="bg-[#EFD6AC] text-[2rem] text-[#04151F] rounded-2xl p-2.5 text-center"
            onClick={logOut}
          >
            Wyloguj
          </NavLink>
        </>
      }
    </nav>
  );
};

export default NavBar;