import React from 'react';

import Brand1 from '../../images/AboutAndBrands/Brand1.png';
import Brand2 from '../../images/AboutAndBrands/Brand2.png';
import Brand3 from '../../images/AboutAndBrands/Brand3.png';
import Brand4 from '../../images/AboutAndBrands/Brand4.png';

import Anterior1 from '../../images/AboutAndBrands/Anterior1.png';
import Proximo2 from '../../images/AboutAndBrands/Proximo2.png';


import './AboutAndBrands.scss';

export default function AboutAndBrands() {
  return (
    <div>
      <div className="ctnTextTitle">
        <h2>
          AS <b>MELHORES</b> MARCAS
        </h2>
        <h4>it is a long established fact that a reader will be destracted by the readable</h4>
      </div>

      <div className="ctnBrands">
        <button className="ctnProximo" type="button"><img src={Proximo2} alt={Proximo2}/></button>
        <button className="ctnAnterior" type="button"><img src={Anterior1} alt={Anterior1}/></button>
        <div className="ctnBrandsImage">
          <img src={Brand1} alt={Brand1}/>
          <img src={Brand2} alt={Brand2}/>
          <img src={Brand3} alt={Brand3}/>
          <img src={Brand4} alt={Brand4}/>
        </div>
      </div>

      <div className="ctnContent">
        <h1>SOBRE NÓS</h1>
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when
          looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
          of letters, as opposed to using ‘Content here, content here’, making it look like readable English. Many 
          desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a
          search for ‘lorem ipsum’ will uncover many web sites still in their infancy. Lorem Ipsum as their default
          model text, and a search for ‘lorem ipsum’ will uncover many web sites still in their infancy. 
          Lorem Ipsum as their default model text, and a search for ‘lorem ipsum’ will uncover many web sites 
          still in their infancy. </p>
      </div>
    </div>
  )
}