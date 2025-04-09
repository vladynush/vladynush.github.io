import React from 'react';
import './Modal.css';

type ModalProps = {
  visible: boolean;
  children: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({ visible, children }) => {
  if (!visible) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-window">
        <button className="modal-close">×</button>
        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
