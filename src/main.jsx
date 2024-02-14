import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import navs from "./Component/Routes/Navigation";

const user = {
  username: "",
  role: "SELLER",
  isAuthenticated: true,
};

const { role, isAuthenticated } = user;

const allRoutes = () => {
  return (
    <Route path={"/"} element={<App />}>
      {navs.map((nav, i) => {
        if (isAuthenticated && nav.isVisibleAfterAuth) {
          if (nav.role === role || nav.role === "ALL") {
            return <Route key={i} path={nav.path} element={nav.element} />;
          }
        } else {
          if (!nav.isVisibleAfterAuth && nav.role === "ALL") {
            console.log(nav);
            return <Route key={i} path={nav.path} element={nav.element} />;
          }
        }
      })}
    </Route>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>{allRoutes()}</Routes>
    </BrowserRouter>
  </React.StrictMode>
);
