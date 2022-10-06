import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRockets } from "../../redux/dragons/DragonsOperations";
import { getDragons } from "../../redux/dragons/DragonsSelector";
import RocketsList from "../../components/rocketsList/RocketsList";
import s from "./HomePage.module.scss";

export default function HomePage() {
  const dragons = useSelector(getDragons);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRockets());
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <h1 className={s.title}>Rockets model</h1>
      <RocketsList dragons={dragons} />
    </div>
  );
}
