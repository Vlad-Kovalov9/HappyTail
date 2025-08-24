import { Field, ErrorMessage, useField } from "formik";
import s from "./FormField.module.css";

export default function FormField({
  label,
  name,
  type = "text",
  placeholder,
  as,
}) {
  const [field, meta] = useField(name);

  const fieldClass = meta.touched
    ? meta.error
      ? s.fieldError
      : s.fieldValid
    : s.field;

  return (
    <label className={s.label}>
      {label}
      <Field
        {...field}
        className={fieldClass}
        type={type}
        as={as}
        placeholder={placeholder}
      />
      <ErrorMessage className={s.error} name={name} component="span" />
    </label>
  );
}
