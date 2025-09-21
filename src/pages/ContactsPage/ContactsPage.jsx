import { useState } from "react";
import ContactsForm from "../../components/ContactsForm/ContactsForm";
import ContactsInfo from "../../components/ContactsInfo/ContactsInfo";
import s from "./ContactsPage.module.css";
import ContactsModalMessage from "../../components/ContactsModalMessage/ContactsModalMessage";

export default function ContactsPage() {
  const [showModal, setShowModal] = useState(false);

  const handleFormSuccess = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className={s.container}>
      <h2 className={s.title}>Напишіть нам або завітайте особисто</h2>

      <div className={s.components}>
        <ContactsInfo />
        <ContactsForm onSuccess={handleFormSuccess} />

        {showModal && <ContactsModalMessage onClose={closeModal} />}
      </div>
    </div>
  );
}
