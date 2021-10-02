import React from "react";
import { Link } from "react-router-dom";
import s from "./Aside.module.scss";

export default function Aside() {
  return (
    <div className={s.aside}>
      <nav>
        <ul>
          <li>
            <Link to="/reminds">Напоминания</Link>
          </li>
          <li>
            <Link to="/targets">Цели</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
