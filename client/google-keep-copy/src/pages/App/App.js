import React, { useEffect } from "react";
import { NavLink, Route, BrowserRouter, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import s from "./App.module.scss";
import routesConfig from "../../routes/routes";
import Header from "../../components/Header/Header";
import Aside from "../../components/Aside/Aside";
import { checkAuth } from "../../store/reducers/userReducer";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkAuth());
  }, []);
  return (
    <div className={s.App}>
      <BrowserRouter>
        <Header />
        <Aside />
        <Switch>
          {routesConfig.map((route) => (
            <Route
              path={route.path}
              exact={route.exact}
              component={route.component}
            />
          ))}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
