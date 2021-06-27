import React, { useState } from 'react';
import ModalVitrineItems from '../ModalVitrineItems/ModalVitrineItems';

import './VitrineInstruments.scss';

export default function VitrineInstruments({
  productName,
  descriptionShort,
  photo,
  price
}) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <>
      <div className="ctnVitrineItems" onClick={() => setIsModalVisible(true)}>
        <img src={photo} alt={photo} />
        <div>
          <h4 className="ctnText">{productName}</h4>
          <h5 className="ctnText">{descriptionShort}</h5>
          <h3 className="ctnText">R$ {price}</h3>
        </div>
      </div>
      {isModalVisible ?
        <ModalVitrineItems onClose={() => setIsModalVisible(false)}>
          <div className="ctnModalContent">
            <div>
              <img src={photo} alt={photo} />
            </div>
            <div>
              <h4 className="ctnText">{productName}</h4>
              <h3 className="ctnText">R$ {price}</h3>
              <h5 className="ctnText">{descriptionShort}</h5>

              <a className="ctnText" href={productName} >{'Veja mais detalhes do produto >'}</a>
              <button type="button">Adicionar carrinho</button>
            </div>
          </div>
        </ModalVitrineItems>
        : null
      }
    </>
  )
}