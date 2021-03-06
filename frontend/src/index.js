import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import axios from "axios";
import { Provider } from "react-redux";
import { store } from "./app/redux/store";

axios.interceptors.request.use((request) => {
  const { token } = JSON.parse(localStorage.getItem("token"));
  if (token) {
    request.headers.Authorization = `Bearer ${token}`;
  }
  return request;
});

axios.interceptors.response.use(
  (response) => {
    console.log("====================================");
    console.log(response);
    console.log("====================================");
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      localStorage.removeItem("token");
      window.location.reload();
    }
    return Promise.reject(error);
  }
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
