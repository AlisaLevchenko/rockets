import axios from "axios";

const API_KEY = "AIzaSyBrjN2REr_FtHOhgA9cpfVkckI1a0BLEEM";

// axios.defaults.baseURL = "https://api.spacexdata.com/v4/dragons/";
// 5e9d058759b1ff74a7ad5f8f

const url = {
  AUTH: "https://identitytoolkit.googleapis.com/v1/",
  DB: "https://api.spacexdata.com/v4/dragons/",
};

const setBaseUrl = (url) => (axios.defaults.baseURL = url);

export const getRocketsApi = () => {
  setBaseUrl(url.DB);
  return axios.get("/").then((response) => response.data);
};

export const registerUserApi = (userData) => {
  setBaseUrl(url.AUTH);
  return axios
    .post(
      `/accounts:signUp`,
      { ...userData, returnSecureToken: true },
      {
        params: {
          key: API_KEY,
        },
      }
    )
    .then(({ data }) => {
      const { expiresIn, kind, ...postedUserData } = data;
      return postedUserData;
    });
};

export const loginUserApi = (userData) => {
  setBaseUrl(url.AUTH);
  return axios
    .post(
      `/accounts:signInWithPassword`,
      { ...userData, returnSecureToken: true },
      {
        params: {
          key: API_KEY,
        },
      }
    )
    .then(({ data }) => {
      const { idToken, email, refreshToken, lockalId } = data;
      return { idToken, email, refreshToken, lockalId };
    });
};

//https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=[API_KEY]
export const getCurrentUserApi = (idToken) => {
  setBaseUrl(url.AUTH);
  return axios
    .post(
      `/accounts:lookup`,
      {
        idToken,
      },
      {
        params: {
          key: API_KEY,
        },
      }
    )
    .then(({ data }) => {
      const { localId, email } = data.users[0];
      return { localId, email };
    });
};
