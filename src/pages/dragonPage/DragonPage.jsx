import React from "react";
import { useEffect } from "react";
import {
  // useNavigate,
  useParams,
} from "react-router-dom";
import { setIdRocket } from "../../redux/dragons/DragonsSlice";
import { useDispatch, useSelector } from "react-redux";
import { getFindedRocket } from "../../redux/dragons/DragonsSelector";
import placeholder from "../../components/images/posterholder.jpg";
import s from "./DragonPage.module.scss";

export default function DragonPage() {
  // const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const rocket = useSelector(getFindedRocket);
  console.log("id", id);

  useEffect(() => {
    dispatch(setIdRocket(id));
    // eslint-disable-next-line
  }, [dispatch]);

  return (
    <div>
      {/* <button onClick={() => navigate("/")}>Go back</button> */}
      {rocket && (
        <div className={s.content}>
          <img
            className={s.rocketImage}
            src={rocket.flickr_images ? rocket.flickr_images[0] : placeholder}
            alt={`Rocket`}
          />
          <ul className={s.rocketItems}>
            <li>
              <h2 className={s.rocketName}>{rocket.name}</h2>
            </li>
            <li>
              <p className={s.rocketDescr}>{rocket.description}</p>
            </li>
            <li>
              <a
                className={s.rocketLink}
                href={rocket.wikipedia}
                target="_blank"
                rel="noreferrer"
              >
                Link to Wikipedia
              </a>
            </li>
            <li>
              <p className={s.rocketAddParams}>
                Additional parameters: (height: {rocket.height_w_trunk.meters}
                meters, mass: {rocket.launch_payload_mass.kg} kg, first flight:{" "}
                {rocket.first_flight} )
              </p>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
