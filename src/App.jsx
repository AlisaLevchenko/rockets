// import logo from "./logo.svg";
// import "./App.css";

import { useEffect, lazy } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import MainWrapper from "./components/mainWrapper/MainWrapper.jsx";
import { getIsAuth, getMustCurUser } from "./redux/auth/authSelector";
import { getCurrentUser } from "./redux/auth/authOperations";

const HomePage = lazy(() => import("./pages/homePage/HomePage"));
const DragonPage = lazy(() => import("./pages/dragonPage/DragonPage"));
const RegisterPage = lazy(() => import("./pages/registerPage/RegisterPage"));
const LoginPage = lazy(() => import("./pages/loginPage/LoginPage"));

function App() {
  const isAuth = useSelector(getIsAuth);
  const mustCurUser = useSelector(getMustCurUser);
  const dispatch = useDispatch();

  useEffect(() => {
    mustCurUser && dispatch(getCurrentUser());
  }, [dispatch, mustCurUser]);

  return isAuth ? (
    <Routes>
      <Route path="/" element={<MainWrapper />}>
        <Route index element={<HomePage />} />
        <Route path="favorite" element={<DragonPage />} />
        <Route path="dragons/:id" element={<DragonPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  ) : (
    <Routes>
      <Route path="/" element={<MainWrapper />}>
        <Route index element={<HomePage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="login" element={<LoginPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}

export default App;
