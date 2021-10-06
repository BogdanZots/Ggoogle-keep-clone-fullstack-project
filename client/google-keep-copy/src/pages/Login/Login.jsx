import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { checkAuth, loginUser } from "../../store/reducers/userReducer";

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const data = {
    email,
    password
  };
  return (
    <div>
      Login
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Введите емейл"
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Введите пароль"
      />
      <button
        onClick={() => {
          setEmail("");
          setPassword("");
          dispatch(loginUser(data));
          setTimeout(1000, dispatch(checkAuth()));
        }}
        type="button"
      >
        Войти
      </button>
    </div>
  );
};

export default Login;
