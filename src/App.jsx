// import logo from "./logo.svg";
// import "./App.css";
import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import MainWrapper from "./components/mainWrapper/MainWrapper.jsx";

const HomePage = lazy(() => import("./pages/homePage/HomePage"));
const DragonPage = lazy(() => import("./pages/dragonPage/DragonPage"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainWrapper />}>
        <Route index element={<HomePage />} />
        <Route path="dragons/:id" element={<DragonPage />} />
      </Route>
    </Routes>
  );
}

export default App;
