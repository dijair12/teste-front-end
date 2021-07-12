import React from 'react';

import './ModalVitrineItems.scss';

export default function ModalVitrineItems({ id = 'ctnModal', onClose = () => { }, children }) {
  const handleOutsideClick = (e) => {
    e.target.id === id && onClose()
  }

  return (
    <div id={id} className="ctnModal" onClick={handleOutsideClick}>
      <div className="ctnContent">
        <div className="ctnButtonClose">
          <button type="button" className="ctnClose" onClick={onClose} />
        </div>

        <div className="ctnTextContent">{children}</div>
      </div>
    </div>
  )
}