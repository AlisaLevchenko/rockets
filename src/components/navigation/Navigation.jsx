import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { logOut } from "../../redux/auth/authSlice";
import { getIsAuth } from "../../redux/auth/authSelector";
import s from "./Navigation.module.scss";

const Navigation = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(getIsAuth);
  return (
    <nav className={s.nav}>
      <div className={s.menu}>
        <NavLink className={s.navLink} to="/">
          Home
        </NavLink>
        {isAuth && <NavLink to="/"></NavLink>}
        {isAuth && (
          <NavLink className={s.navLink} to="/favorite">
            Favorite
          </NavLink>
        )}
      </div>
      <div className={s.auth}>
        {!isAuth && (
          <NavLink className={s.navLink} to="/register">
            Sign Up
          </NavLink>
        )}
        {!isAuth && (
          <NavLink className={s.navLink} to="/login">
            Login
          </NavLink>
        )}
        {isAuth && (
          <button className={s.logoutBtn} onClick={() => dispatch(logOut())}>
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
