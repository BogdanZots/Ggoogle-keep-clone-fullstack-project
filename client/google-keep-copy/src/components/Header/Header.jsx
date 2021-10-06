import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import s from "./Header.module.scss";
export default function Header() {
  const { email } = useSelector((store) => store.user);
  console.log('header login', email);
  return (
    <div className={s.container}>
      <div className={s.header__toolbar}>
        <div className={s.header__menu}>Menu</div>
        <div className={s.header__logo}>Logo</div>
      </div>
      <div className={s.header__searching}>Searching</div>
      <div className={s.header__usebility}>
        {email ? <div>{email}</div> : (
          <div className={s.auth}>
            <div className={s.header__login}>
              <Link to="Login">Login</Link>
            </div>
            <div className={s.header__signUp}>
              <Link to="signUp">SignUp</Link>
            </div>
          </div>
        )}
        <div className={s.header__theme}>Theme</div>
        <div className={s.header__profile}>headerProfile</div>
      </div>
    </div>
  );
}
