import React from 'react';

import './DoubleNews.scss';

import NewsImage1 from '../../images/DoubleNews/NewsImage1.png';
import NewsImage2 from '../../images/DoubleNews/NewsImage2.png';

export default function DoubleNews() {
  return (
    <div className="ctnDoubleNews">
      <div className="ctnTwoContent">
        <img src={NewsImage1} alt="NewsImage1" />
        <div className="ctnText">
          <p>NOVIDADES</p>
          <h1><b>ÁUDIO</b></h1>
          <h1>PROFISSIONAL</h1>
          <button>CONFIRA</button>
        </div>
      </div>
      <div className="ctnTwoContent">
        <img src={NewsImage2} alt="NewsImage2" />
        <div className="ctnText">
          <p>NOVIDADES</p>
          <h1><b>INSTRUMENTOS</b></h1>
          <h1>MUSICAIS</h1>
          <button>CONFIRA</button>
        </div>
      </div>
    </div>
  )
}