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
        <ul>
          <li>
            <img
              style={{ width: "250px" }}
              src={rocket.flickr_images ? rocket.flickr_images[0] : placeholder}
              alt={`Rocket`}
            />
          </li>
          <li>{rocket.name}</li>
          <li>{rocket.description}</li>
          <li>
            <a href={rocket.wikipedia} target="_blank" rel="noreferrer">
              Wikipedia
            </a>
          </li>
          <li>Доп параметры (высота, масса, год)</li>
        </ul>
      )}
    </div>
  );
}
