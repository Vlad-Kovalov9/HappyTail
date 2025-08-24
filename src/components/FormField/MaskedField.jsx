import { useField } from "formik";
import { IMaskInput } from "react-imask";
import s from "./FormField.module.css";

export function MaskedField({ label, name, placeholder }) {
  const [field, meta, helpers] = useField(name);

  return (
    <label className={s.label}>
      {label}
      <IMaskInput
        {...field}
        mask="+{38}(000)000-00-00"
        placeholder={placeholder}
        className={meta.touched && meta.error ? s.fieldError : s.field}
        onAccept={(value) => helpers.setValue(value)}
      />
      {meta.touched && meta.error && (
        <span className={s.error}>{meta.error}</span>
      )}
    </label>
  );
}
