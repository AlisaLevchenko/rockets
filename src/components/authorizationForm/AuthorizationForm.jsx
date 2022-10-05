import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { signupUser, loginUser } from "../../redux/auth/authOperations";
import { getOutError } from "../../redux/auth/authSelector";
import { changeError } from "../../redux/auth/authSlice";

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
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <span>E-mail</span>
          <input
            type="text"
            name="email"
            placeholder="Enter your e-mail"
            onChange={handleChangeInput}
          />
        </label>
        <label>
          <span>Password</span>
          <input
            type="text"
            name="password"
            placeholder="Enter your password"
            onChange={handleChangeInput}
          />
        </label>
        <button type="submit">{title}</button>
      </form>
      <Link
        to={title === "Sign Up" ? "/login" : "/register"}
        onClick={onLinkClick}
      >
        {title === "Sign Up"
          ? "Do you have already account? Sign In"
          : "Don't have an account? Sign Up"}
      </Link>
    </div>
  );
};

export default AuthorizationForm;
