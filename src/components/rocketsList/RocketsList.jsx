import { NavLink } from "react-router-dom";
import placeholder from "../../components/images/posterholder.jpg";
import React from "react";
import s from "./RocketsList.module.scss";

export default function RocketsList({ dragons }) {
  return (
    <div>
      <ul className={s.rocketsList}>
        {dragons.map(({ name, id, flickr_images }) => (
          <li key={id} className={s.rocketItem}>
            <NavLink to={`/dragons/${id}`}>
              <img
                className={s.rocketImage}
                src={flickr_images ? flickr_images[0] : placeholder}
                alt={`Rocket`}
              />
              {name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
