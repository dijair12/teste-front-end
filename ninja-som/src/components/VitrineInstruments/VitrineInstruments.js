import React from 'react';

import './VitrineInstruments.scss';

export default function VitrineInstruments({
  productName,
  descriptionShort,
  photo,
  price
}) {
  return (
    <div className="ctnVitrineItems">
      <img src={photo} alt={photo} />
      <div>
        <h4 className="ctnText">{productName}</h4>
        <h5 className="ctnText">{descriptionShort}</h5>
        <h3 className="ctnText">R$ {price}</h3>
      </div>
    </div>
  )
}