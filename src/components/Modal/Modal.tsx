import React, { ReactNode } from 'react';
import styles from './Modal.module.css';

type ModalProps = {
  visible: boolean;
  children: ReactNode;
  onClose?: () => void;
};

const Modal = ({ visible, children, onClose }: ModalProps): JSX.Element | null => {
  if (!visible) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalWindow}>
        <button className={styles.modalClose} onClick={onClose}>
          ×
        </button>
        <div className={styles.modalContent}>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
