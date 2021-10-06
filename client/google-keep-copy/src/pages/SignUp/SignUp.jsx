import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../../store/reducers/userReducer";
const SignUp = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const data = {
    email,
    password,
    name,
  };
  return (
    <div>
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        placeholder="введите логин"
      />
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="введите имя"
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        placeholder="введите пароль
        "
      />
      <button
        type="button"
        onClick={() => {
          setEmail("");
          setPassword("");
          setName("");
          dispatch(registerUser(data));
        }}
      >
        Зарегестрировать
      </button>
    </div>
  );
};

export default SignUp;
