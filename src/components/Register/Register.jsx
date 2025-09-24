import { ErrorMessage, Field, Form, Formik } from "formik";
import s from "./Register.module.css";
import { registerValidationSchema } from "../../../validation/validationSchema.js";
import { NavLink, useNavigate } from "react-router-dom";
import sprite from "../../assets/icons/sprite.svg";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/store/userSlice.js";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const res = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Помилка реєстрації");
        return;
      }

      dispatch(
        setUser({
          user: data.user,
          token: data.accessToken,
          refreshToken: data.refreshToken,
        })
      );

      resetForm();
      navigate("/");
    } catch (error) {
      alert("Сервер недоступний");
      console.log(error);
    }
  };

  return (
    <div className={s.container}>
      <div className={s.content}>
        <h2 className={s.title}>Зареєструватися</h2>
        <p className={s.text}>
          Вже маєте обліковий запис?
          <NavLink to="/login" className={s.linkRegister}>
            Увійти
          </NavLink>
        </p>
        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          validationSchema={registerValidationSchema}
          onSubmit={handleSubmit}
        >
          <Form className={s.form}>
            <div className={s.inputWrapper}>
              <Field
                placeholder="Введіть своє ім’я"
                name="name"
                className={s.field}
              />
              <svg className={s.iconMail}>
                <use href={`${sprite}#icon-register-user`} />
              </svg>
            </div>
            <ErrorMessage name="name" component="div" className={s.error} />

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

            <div className={s.inputWrapper}>
              <Field
                placeholder="Повторіть свій пароль"
                name="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                className={s.field}
              />
              <button
                type="button"
                className={s.btnToggle}
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                <svg className={s.icon}>
                  <use
                    href={
                      showConfirmPassword
                        ? `${sprite}#icon-password-open-icon`
                        : `${sprite}#icon-password-icon`
                    }
                  />
                </svg>
              </button>
            </div>
            <ErrorMessage
              name="confirmPassword"
              component="div"
              className={s.error}
            />

            <NavLink to="/" className={s.linkReset}>
              Забули пароль?
            </NavLink>

            <button type="submit" className={s.button}>
              Зареєструватися
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
