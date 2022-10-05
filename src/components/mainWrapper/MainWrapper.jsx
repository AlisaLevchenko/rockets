import React from "react";
import { Suspense } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import Loader from "../loader/Loader";
import Navigation from "../navigation/Navigation";
import { logOut } from "../../redux/auth/authSlice";

export default function MainWrapper() {
  const dispatch = useDispatch();

  return (
    <>
      <header>
        <Navigation />
        <button onClick={() => dispatch(logOut())}> Logout</button>
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
}
