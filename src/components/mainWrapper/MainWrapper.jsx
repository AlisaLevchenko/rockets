import React from "react";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Loader from "../loader/Loader";

export default function MainWrapper() {
  return (
    <>
      <header></header>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
}
