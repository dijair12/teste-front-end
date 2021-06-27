import React from 'react';

import './OptionSound.scss';

export default function OptionSound({ textSound, imagesSound }) {
  return (
    <div className="ctnImages">
      <img src={imagesSound} alt={imagesSound} />
      <h3>{textSound}</h3>
    </div>
  )
}