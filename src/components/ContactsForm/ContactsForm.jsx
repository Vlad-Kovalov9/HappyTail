import { ErrorMessage, Field, Form, Formik } from "formik";
import s from "./ContactsForm.module.css";
import FormField from "../FormField/FormField";
import { MaskedField } from "../FormField/MaskedField";
import { contactValidationSchema } from "../../../validation/validationSchema.js";

export default function ContactsForm({ onSuccess }) {
  const handleSubmit = (values, { resetForm }) => {
    console.log("Форма відправлена ", values);
    resetForm();
    if (onSuccess) onSuccess();
  };

  return (
    <div className={s.container}>
      <h2 className={s.title}>Зв’яжіться з нами</h2>
      <p className={s.subtitle}>
        Заповніть всі поля форми, щоб зв’затися з нами
      </p>

      <Formik
        initialValues={{
          name: "",
          email: "",
          tel: "",
          message: "",
          agreement: false,
        }}
        validationSchema={contactValidationSchema}
        onSubmit={handleSubmit}
      >
        {({ isValid, dirty }) => (
          <Form className={s.form}>
            <FormField label="Ваше ім’я" name="name" placeholder="Ім’я" />
            <FormField
              label="Електронна пошта"
              type="email"
              name="email"
              placeholder="mail@gmail.com"
            />
            <MaskedField
              label="Телефон"
              name="tel"
              mask="+38(999)999-99-99"
              placeholder="+38(___)___-__-__"
            />
            <FormField
              label="Ваше повідомлення"
              name="message"
              as="textarea"
              placeholder="Введіть повідомлення"
            />

            <label className={s.checkbox}>
              <Field
                type="checkbox"
                name="agreement"
                className={s.checkboxInput}
              />
              <span className={s.checkboxSpan}>
                Я даю згоду на обробку моїх персональних даних відповідно до{" "}
                <a
                  href="/policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={s.policy}
                >
                  Політики конфіденційності
                </a>
              </span>
            </label>
            <ErrorMessage
              className={s.error}
              name="agreement"
              component="span"
            />

            <button
              className={s.button}
              type="submit"
              disabled={!(isValid && dirty)}
            >
              Надіслати
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
