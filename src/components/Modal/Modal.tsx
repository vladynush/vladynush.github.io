import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import styles from './Modal.module.css';

type ModalProps = {
  visible: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({ visible, onClose, children }) => {
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  useEffect(() => {
    if (visible && closeButtonRef.current) {
      closeButtonRef.current.focus();
    }
  }, [visible]);

  if (!visible) return null;

  return ReactDOM.createPortal(
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalWindow} onClick={(e) => e.stopPropagation()}>
        <button ref={closeButtonRef} className={styles.modalClose} onClick={onClose} aria-label="Close modal">
          ×
        </button>
        <div className={styles.modalContent}>{children}</div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
