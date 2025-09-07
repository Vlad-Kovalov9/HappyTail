import s from "./Filters.module.css";
import { Formik, Form, Field } from "formik";
import FilterSection from "../FilterSection/FilterSection";

export default function Filters({ onApply }) {
  return (
    <Formik
      initialValues={{
        city: [],
        pet: [],
        gender: "",
        age: [],
        sterilization: "",
      }}
      onSubmit={(values) => onApply(values)}
    >
      {({ resetForm }) => (
        <Form className={s.filters}>
          <FilterSection title="Місто" iconId="icon-pets-location">
            <label className={s.label}>
              <Field
                type="checkbox"
                name="city"
                value="Усі"
                className={s.checkbox}
              />
              Усі
            </label>
            <label className={s.label}>
              <Field
                type="checkbox"
                name="city"
                value="Дніпро"
                className={s.checkbox}
              />
              Дніпро
            </label>
            <label className={s.label}>
              <Field
                type="checkbox"
                name="city"
                value="Одеса"
                className={s.checkbox}
              />
              Одеса
            </label>
            <label className={s.label}>
              <Field
                type="checkbox"
                name="city"
                value="Львів"
                className={s.checkbox}
              />
              Львів
            </label>
            <label className={s.label}>
              <Field
                type="checkbox"
                name="city"
                value="Київ"
                className={s.checkbox}
              />
              Київ
            </label>
          </FilterSection>

          <FilterSection title="Тварини" iconId="icon-pets-pet">
            <label className={s.label}>
              <Field
                type="checkbox"
                name="pet"
                value="Котик"
                className={s.checkbox}
              />
              Котик
            </label>
            <label className={s.label}>
              <Field
                type="checkbox"
                name="pet"
                value="Песик"
                className={s.checkbox}
              />
              Песик
            </label>
          </FilterSection>

          <FilterSection title="Стать" iconId="icon-pets-gender">
            <label className={s.label}>
              <Field
                type="radio"
                name="gender"
                value="Дівчинка"
                className={s.checkbox}
              />
              Дівчинка
            </label>
            <label className={s.label}>
              <Field
                type="radio"
                name="gender"
                value="Хлопчик"
                className={s.checkbox}
              />
              Хлопчик
            </label>
          </FilterSection>

          <FilterSection title="Вік" iconId="icon-pets-age">
            <label className={s.label}>
              <Field
                type="checkbox"
                name="age"
                value="1 - 2"
                className={s.checkbox}
              />
              1 - 2
            </label>
            <label className={s.label}>
              <Field
                type="checkbox"
                name="age"
                value="3 - 4"
                className={s.checkbox}
              />
              3 - 4
            </label>
            <label className={s.label}>
              <Field
                type="checkbox"
                name="age"
                value="4 +"
                className={s.checkbox}
              />
              4 +
            </label>
          </FilterSection>

          <FilterSection title="Стерилізація" iconId="icon-pets-sterilization">
            <label className={s.label}>
              <Field
                type="radio"
                name="sterilization"
                value="true"
                className={s.checkbox}
              />
              Проведено
            </label>
            <label className={s.label}>
              <Field
                type="radio"
                name="sterilization"
                value="false"
                className={s.checkbox}
              />
              Не проведено
            </label>
          </FilterSection>

          <div className={s.btnContainer}>
            <button type="submit" className={s.btnApply}>
              Застосувати
            </button>
            <button
              type="button"
              className={s.btnReset}
              onClick={() => resetForm()}
            >
              Очистити
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
