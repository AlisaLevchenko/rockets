import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, NavLink } from "react-router-dom";
import { signupUser, loginUser } from "../../redux/auth/authOperations";
import { getOutError } from "../../redux/auth/authSelector";
import { changeError } from "../../redux/auth/authSlice";
import s from "./AuthorizationForm.module.scss";

const AuthorizationForm = ({ title }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const error = useSelector(getOutError);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!error) return;
    alert("You have entered invalid data.");
  }, [error]);

  const onLinkClick = (e) => {
    dispatch(changeError());
  };

  const handleChangeInput = (evt) => {
    const { name, value } = evt.target;
    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        return;
    }
    // console.log(value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if ((title === "Sign Up" && password === "") || email === "") {
      alert("completed all fields ");
      return;
    }
    if (title === "Sign Up") {
      const userRegisterData = { email, password };
      dispatch(signupUser(userRegisterData));
      navigate("/");
      resetForm();
      return;
    }

    const userLoginData = { email, password };
    dispatch(loginUser(userLoginData));

    navigate("/");
    resetForm();
  };

  const resetForm = () => {
    setEmail("");
    setPassword("");
  };

  return (
    <div className={s.formWrapper}>
      <form className={s.authForm} onSubmit={handleSubmit}>
        <label className={s.authLable}>
          <span className={s.authText}>E-mail</span>
          <input
            className={s.authInput}
            type="text"
            name="email"
            placeholder="Enter your e-mail"
            onChange={handleChangeInput}
            required
          />
        </label>
        <label className={s.authLable}>
          <span className={s.authText}>Password</span>
          <input
            className={s.authInput}
            type="text"
            name="password"
            placeholder="Enter your password"
            onChange={handleChangeInput}
            required
          />
        </label>
        <button className={s.authBtn} type="submit">
          {title}
        </button>
      </form>
      <NavLink
        className={s.authLink}
        to={title === "Sign Up" ? "/login" : "/register"}
        onClick={onLinkClick}
      >
        {title === "Sign Up"
          ? "Do you already have an account? Sign In"
          : "Don't have an account? Sign Up"}
      </NavLink>
    </div>
  );
};

export default AuthorizationForm;
