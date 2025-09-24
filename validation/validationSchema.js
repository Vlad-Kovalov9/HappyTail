import * as Yup from "yup";

export const contactValidationSchema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[А-Яа-яІіЇїЄєҐґA-Za-z\s'-]+$/, "Ім’я може містити лише літери")
    .min(3, "Мінімум 3 символи")
    .max(30, "Максимум 30 символів")
    .required("Це поле є обов’язковим"),
  email: Yup.string()
    .email("Невірний формат email (приклад: name@gmail.com)")
    .required("Введіть вашу пошту"),
  tel: Yup.string()
    .matches(
      /^\+38(\(\d{3}\)|\d{3})\d{3}-?\d{2}-?\d{2}$/,
      "Невірний формат номера"
    )
    .required("Введіть номер телефону"),
  message: Yup.string()
    .min(15, "Повідомлення має містити не менше 15 символів")
    .required("Це поле є обов’язковим"),
  agreement: Yup.boolean().oneOf([true], "Потрібна ваша згода"),
});

export const loginValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Невірний формат email (приклад: name@gmail.com)")
    .required("Введіть вашу пошту"),
  password: Yup.string()
    .min(8, "Мінімум 8 символів")
    .max(20, "Максимум 30 символів")
    .matches(/[A-Z]/, "Пароль повинен містити хоча б одну велику літеру")
    .matches(/\d/, "Пароль повинен містити хоча б одну цифру")
    .required("Введіть пароль"),
});

export const registerValidationSchema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[А-Яа-яІіЇїЄєҐґA-Za-z\s'-]+$/, "Ім’я може містити лише літери")
    .min(3, "Мінімум 3 символи")
    .max(30, "Максимум 30 символів")
    .required("Це поле є обов’язковим"),
  email: Yup.string()
    .email("Невірний формат email (приклад: name@gmail.com)")
    .required("Введіть вашу пошту"),
  password: Yup.string()
    .min(8, "Мінімум 8 символів")
    .max(20, "Максимум 30 символів")
    .matches(/[A-Z]/, "Пароль повинен містити хоча б одну велику літеру")
    .matches(/\d/, "Пароль повинен містити хоча б одну цифру")
    .required("Введіть пароль"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Паролі повинні збігатися")
    .required("Повторіть пароль"),
});
