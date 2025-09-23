import { ErrorMessage, Field, Form, Formik } from "formik";
import s from "./Login.module.css";
import { loginValidationSchema } from "../../../validation/validationSchema.js";
import { NavLink } from "react-router-dom";
import sprite from "../../assets/icons/sprite.svg";
import { useState } from "react";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (values, { resetForm }) => {
    console.log("Форма відправлена", values);
    resetForm();
  };

  return (
    <div className={s.container}>
      <div className={s.content}>
        <h2 className={s.title}>Увійти</h2>
        <p className={s.text}>
          Ще не маєте облікового запису?
          <NavLink to="/register" className={s.linkRegister}>
            Зареєструватися
          </NavLink>
        </p>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={loginValidationSchema}
          onSubmit={handleSubmit}
        >
          <Form className={s.form}>
            <div className={s.inputWrapper}>
              <Field
                placeholder="Введіть свій email"
                name="email"
                className={s.field}
              />
              <svg className={s.iconMail}>
                <use href={`${sprite}#icon-mail-icon`} />
              </svg>
            </div>
            <ErrorMessage name="email" component="div" className={s.error} />

            <div className={s.inputWrapper}>
              <Field
                placeholder="Введіть свій пароль"
                name="password"
                type={showPassword ? "text" : "password"}
                className={s.field}
              />
              <button
                type="button"
                className={s.btnToggle}
                onClick={() => setShowPassword(!showPassword)}
              >
                <svg className={s.icon}>
                  <use
                    href={
                      showPassword
                        ? `${sprite}#icon-password-open-icon`
                        : `${sprite}#icon-password-icon`
                    }
                  />
                </svg>
              </button>
            </div>
            <ErrorMessage name="password" component="div" className={s.error} />

            <NavLink to="/" className={s.linkReset}>
              Забули пароль?
            </NavLink>

            <button type="submit" className={s.button} onSubmit={handleSubmit}>
              Увійти
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
