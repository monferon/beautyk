import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css";
const Navbar = () => {
  return (
    <div className={s.nav}>
      <div className={s.item}>
        <NavLink to="/profile" activeClassName={s.active}>
          Profile
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/calendar" activeClassName={s.active}>
          Calendar
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/settings" activeClassName={s.active}>
          Settings
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
