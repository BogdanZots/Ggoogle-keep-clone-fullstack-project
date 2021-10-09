import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { checkAuth } from "../../store/reducers/userReducer";
import keepImg from "../../assets/img/keep.png";
import s from "./Header.module.scss";
export default function Header() {
  const dispatch = useDispatch();
  const { name } = useSelector((store) => store.user);
  const logout = () => {
    localStorage.removeItem("token");
    dispatch(checkAuth());
  };
  return (
    <div className={s.header}>
      <div className={s.container}>
        <div className={s.header__toolbar}>
          <div className={s.header__menu}>
            <svg
              fill="none"
              height="40"
              viewBox="0 0 24 24"
              width="40"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 6H20M4 12H12M4 18H20"
                stroke="#4A5568"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          </div>
          <div className={s.header__logo} />
          <img alt="google-keep" src={keepImg} />
          <span className={s.keep}>Keep</span>
        </div>
        <div className={s.header__usebility}>
          <div className={s.header__theme}>Theme</div>
          <div>
            {name ? (
              <div>
                <span className={s.name}>
                  {name}
                </span>
                <Link className={s.logout} onClick={logout} to="Login">
                  Loguot
                </Link>
              </div>
            ) : (
              <div className={s.auth}>
                <div className={s.header__login}>
                  <Link to="Login">Login</Link>
                </div>
                <div className={s.header__signUp}>
                  <Link to="signUp">SignUp</Link>
                </div>
              </div>
            )}
          </div>
          <div className={s.header__profile}>headerProfile</div>
        </div>
      </div>
    </div>
  );
}
