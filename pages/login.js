import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import user from "../static/index";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import * as yup from "yup";
import LoginMessage from "../components/loginMessage";

let schema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup.string().required().min(5),
});

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [getResult, setGetResult] = useState(null);

  async function onSubmit(newUser) {
    const response = await fetch(
      `http://localhost:8080/api/user/${newUser.email}/${newUser.password}`
    );
    const userData = await response.json();
    const result = { data: userData };
    console.log(result);
    setGetResult(result);
  }

  return (
    <main>
      <h1>Inicio de sesion</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <div className="form-input">
          <label>Email</label>
          <input name="email" type="email" {...register("email")} />
          <p className="errors">{errors.email?.message}</p>
        </div>

        <div className="form-input">
          <label>Contraseña</label>
          <input name="password" type="password" {...register("password")} />
          <p className="errors">{errors.password?.message}</p>
        </div>

        <div className="buttonLine">
          <button type="submit">Ingresar</button>
        </div>

        <div className="form-bottom">
          <p>No tienes una cuenta? </p>
          <Link href="/register">
            <a>Crea tu cuenta aqui</a>
          </Link>
        </div>
      </form>
      <LoginMessage sendData={getResult} />
    </main>
  );
}

export default Login;
