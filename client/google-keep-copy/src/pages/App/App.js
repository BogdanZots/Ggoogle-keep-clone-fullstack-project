import React from "react";
import { NavLink, Route, BrowserRouter, Switch } from "react-router-dom";
import s from "./App.module.scss";
import routesConfig from "../../routes/routes";
import Header from "../../components/Header/Header";
import Aside from "../../components/Aside/Aside";
function App() {
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
