import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getIsAuth } from "../../redux/auth/authSelector";

const Navigation = () => {
  const isAuth = useSelector(getIsAuth);
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      {isAuth && <NavLink to="/"></NavLink>}
      {isAuth && <NavLink to="/favorite">Favorite</NavLink>}
      {!isAuth && <NavLink to="/register">Sign Up</NavLink>}
      {!isAuth && <NavLink to="/login">Login</NavLink>}
    </nav>
  );
};

export default Navigation;
