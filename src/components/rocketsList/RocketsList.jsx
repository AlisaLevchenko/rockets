import { NavLink } from "react-router-dom";
import placeholder from "../../components/images/posterholder.jpg";
import React from "react";

export default function RocketsList({ dragons }) {
  return (
    <div>
      <ul>
        {dragons.map(({ name, id, flickr_images }) => (
          <li key={id}>
            <NavLink to={`/dragons/${id}`}>
              <img
                style={{ width: "250px" }}
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
