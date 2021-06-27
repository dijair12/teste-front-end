import React from 'react';

import OptionSound from '../OptionSound/OptionSound.js';

import { OptionSoundData } from '../OptionSound/OptionSoundData';

import './ListOptionSound.scss';

export default function ListOptionSound() {
  return (
    <div className="ctnListOptionSound">
      {OptionSoundData.length > 0 ?
        OptionSoundData.map((item, index) => <OptionSound key={index} imagesSound={item.image} textSound={item.text} />)
        :
        null
      }
    </div>
  )
}