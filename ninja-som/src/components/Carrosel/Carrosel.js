import React, { useState } from 'react';

import { CarroselData } from './CarroselData';

import './Carrosel.scss';

import Anterior from '../../images/Carrosel/anterior.png';
import Proxima from '../../images/Carrosel/proxima.png';

export default function Carrosel({ slides }) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div className="ctnCarrosel">
      <div className="lsCarrosel">

        <button className="ctnAnterior Hover" type="button">
          <img src={Anterior} alt={Anterior} onClick={prevSlide} style={{ width: '34px', height: '69px' }} />
        </button>

        <button className="ctnProximo Hover" type="button">
          <img src={Proxima} alt={Proxima} onClick={nextSlide} style={{ width: '34px', height: '69px' }} />
        </button>

        {CarroselData.map((slide, index) => {
          return (
            <div className={index === current ? 'slide active' : 'slide'} key={index}>

              {index === current && (
                <>
                  <img src={slide.image} alt={slide.image} />
                  <div className="ctnContentText1">
                    <h3>NOVOS PRODUTOS</h3>
                    <h1>INSTRUMENTOS</h1>
                    <h2>PROFISSIONAIS</h2>

                    <div className="ctnContenText2">
                      <h5>CONFIRA</h5>
                      <hr className="ctnLineText2" />
                    </div>
                  </div>

                </>
              )}

            </div>
          );
        })}

      </div>
    </div>
  )
}
