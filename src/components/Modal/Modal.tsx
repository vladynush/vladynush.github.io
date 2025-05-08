import React, { useCallback, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styles from './Modal.module.css';

export type ModalProps = {
  visible: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const ModalComponent: React.FC<ModalProps> = ({ visible, onClose, children }) => {
  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);

  // Закрытие по Escape и блокировка прокрутки
  useEffect(() => {
    if (!visible) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [visible, handleClose]);

  if (!visible) return null;

  return ReactDOM.createPortal(
    <div className={styles.modalOverlay} onClick={handleClose}>
      <div className={styles.modalWindow} onClick={(e) => e.stopPropagation()}>
        <button className={styles.modalClose} onClick={handleClose}>
          ×
        </button>
        <div className={styles.modalContent}>{children}</div>
      </div>
    </div>,
    document.body
  );
};

export const Modal = React.memo(ModalComponent);
