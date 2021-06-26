import React from 'react';

import './VitrineInstruments.scss';

export default function VitrineInstruments({
  productName,
  descriptionShort,
  photo,
  price
}) {
  return (
    <div>
      <div className="ctnVitrine">

        <div className="ctnVitrineItems">
          <img src={photo} alt={photo} />
          <h4>{productName}</h4>
          <h5>{descriptionShort}</h5>
          <h3>{price}</h3>
        </div>

      </div>
    </div>
  )
}