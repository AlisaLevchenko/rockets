import React from "react";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Loader from "../loader/Loader";
import Navigation from "../navigation/Navigation";

import s from "./MainWrapper.module.scss";

export default function MainWrapper() {
  return (
    <>
      <header className={s.header}>
        <div className={s.container}>
          <Navigation />
        </div>
      </header>
      <main className={s.main}>
        <div className={s.container}>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </div>
      </main>
    </>
  );
}
