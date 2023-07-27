import axios from "axios";

export const api = axios.create({
  headers: {
    "content-type": "application/json",
  },
});

api.interceptors.response.use(
  function (response) {
    return response;
  },
  function (er) {
    if (axios.isAxiosError(er)) {
      if (er.response) {
        if (er.response.status === 403) {
          localStorage.removeItem("persist:root");
          window.location.href = "/"; // Joga o usuario para a tela de login
        }
      }
    }

    return Promise.reject(er);
  }
);
