import React, { FC, useState } from 'react';
import Modal from '../Modal/Modal';
import Input from '../Input/Input';
import Button from '../Button/Button';

const ModalPlayground: FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <div style={{ padding: '16px' }}>
      <Input placeholder="Введите текст" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      <br />
      <Button onClick={() => setIsModalVisible(true)}>Открыть модалку</Button>

      <Modal visible={isModalVisible} onClose={() => setIsModalVisible(false)}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <p>{inputValue || 'Ничего не введено'}</p>
          <Button onClick={() => setIsModalVisible(false)}>Закрыть</Button>
        </div>
      </Modal>
    </div>
  );
};

export default ModalPlayground;
