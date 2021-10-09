/* eslint-disable no-lone-blocks */
/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { NavLink, Route, BrowserRouter, Switch, Redirect, useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import s from "./App.module.scss";
import routesConfig from "../../routes/routes";
import Header from "../../components/Header/Header";
import Aside from "../../components/Aside/Aside";
import { checkAuth } from "../../store/reducers/userReducer";
import Login from "../Login/Login";
function App() {
  const dispatch = useDispatch();
  const { isAuth } = useSelector((store) => store.user);
  useEffect(() => {
    dispatch(checkAuth());
  }, []);
  return (
    <div className={s.App}>
      <BrowserRouter>
        <Header />
        <Aside />
        <Switch>
          {routesConfig.map((route) => {
            if (route.path === "/login" || route.path === "/signUp") {
              return (
                <Route
                  path={route.path}
                  exact={route.exact}
                  component={route.component}
                />
              );
            } {
              return (
                <Route
                  path={route.path}
                  exact={route.exact}
                  component={route.component}
                >
                  {!isAuth ? <Redirect to="/login" /> : ""}
                </Route>
              );
            }
          })}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
