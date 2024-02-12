import css from "./NavBar/NavBar.module.css"
import { NavLink } from "react-router-dom";
import { clsx } from "clsx";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export const NavBar = () => {
  return (
      <nav className={css.nav}>
        <NavLink to="/" className={buildLinkClass} >
          Home
        </NavLink>
        <NavLink to="/movies" className={buildLinkClass}>
          Movies
        </NavLink>
      </nav>
  )
}

