import { createPortal } from "react-dom";
import s from "./ModalBase.module.css";

const modalRoot = document.getElementById("modal-root") || document.body;

export default function ModalBase({ children, onClose }) {
  return createPortal(
    <div className={s.backdrop} onClick={onClose}>
      <div className={s.modal} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>,
    modalRoot
  );
}
