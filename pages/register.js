import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import user from "../static/index";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import * as yup from "yup";
import UserMessage from "../components/userMessage";

let schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().required().email(),
  password: yup.string().required().min(5),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [getResult, setGetResult] = useState(null);

  async function onSubmit(newUser) {
    const response = await fetch("http://localhost:8080/api/user/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: newUser.name,
        password: newUser.password,
        email: newUser.email,
      }),
    });
    const userData = await response.json();
    const result = { data: userData };
    setGetResult(result);
  }

  return (
    <main>
      <h1>Crear cuenta</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        {user.inputs.map((input, key) => {
          return (
            <div key={key} className="form-input">
              <label>{input.label}</label>
              <input
                name={input.name}
                type={input.type}
                {...register(`${input.name}`)}
              />
              <p className="errors">{errors[input.name]?.message}</p>
            </div>
          );
        })}
        <div className="buttonLine">
          <button type="submit">Crear</button>
        </div>
        <div className="form-bottom">
          <p>Ya tienes cuenta?</p>
          <Link href="/login">
            <a>Inicia session</a>
          </Link>
        </div>
      </form>
      <UserMessage sendData={getResult} />
    </main>
  );
};

export default Register;
