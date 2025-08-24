import ContactsForm from "../../components/ContactsForm/ContactsForm";
import ContactsInfo from "../../components/ContactsInfo/ContactsInfo";
import s from "./ContactsPage.module.css";

export default function ContactsPage() {
  return (
    <div className={s.container}>
      <h2 className={s.title}>Напишіть нам або завітайте особисто</h2>

      <ContactsInfo />
      <ContactsForm />
    </div>
  );
}
