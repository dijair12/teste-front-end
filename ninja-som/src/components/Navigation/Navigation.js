import React from 'react';

import './Navigation.scss';

import Cadiado from '../../images/cadiado.png';
import Setas from '../../images/setas.png';
import Porcentagem from '../../images/porcetagem.png';
import Caminhao from '../../images/caminhao.png';

import LogoNinja from '../../images/logo.png';
import WhatsApp from '../../images/whats-app.png';
import Person from '../../images/person.png';
import Commerce from '../../images/commerce.png';


export default function Navigation() {
  return (
    <div>
      <nav>
        <ul className="ctnNav">
          <li>
            <img alt="cadiado" src={Cadiado} />
            COMPRA 100% SEGURA
          </li>
          <li>
            <img alt="" src={Setas} />
            TROCA GRÁTIS
          </li>
          <li>
            <img alt="" src={Porcentagem} />
            SEM JUROS
          </li>
          <li>
            <img alt="" src={Caminhao} />
            ENTREGA EM TODO O BRASIL
          </li>
        </ul>
      </nav>

      <div className="mainNav">
        <div className="centerNav">
          <div className="ctnLogo">
            <img src={LogoNinja} style={{ width: '180px', height: '28px' }} alt="ninja-logo" />
          </div>
          <div className="divSearch">
            <input className="inputSearch" type="text" placeholder="BUSQUE AQUI" />
          </div>
          <div className="ctnWhatsApp">
            <img src={WhatsApp} alt="whatsapp" style={{ width: '30px', height: '30px' }} />
            <p>(11) 99999-9999</p>
          </div>
          <div className="ctnPerson">
            <img src={Person} alt="person" style={{ width: '25px', height: '30px' }} />
            <div className="textAcount">
              <p>OLÁ, VISITANTE</p>
              <p>MINHA CONTA</p>
            </div>
          </div>

          <div className="ctnCommerce">
            <img src={Commerce} alt="commerce" style={{ width: '34px', height: '40px' }} />
            <p>SEU CARRINHO</p>
            <p>0 Iten (s)</p>
          </div>
        </div>
      </div>
      <hr style={{ border: '1px solid rgba(120, 117, 117, 0.22)' }} />

      <div className="ctnMenu">
        <ul className="ctnOptions">
          <li>TODAS AS CATEGORIAS</li>
          <li>
            <select>
              <option>SOM PROFISSIONAL</option>
              <option>SOM PROFISSIONAL 1</option>
            </select>
          </li>
          <li>
            <select>
              <option>INSTRUMENTOS MUSICAIS</option>
              <option>INSTRUMENTOS MUSICAIS 1</option>
            </select>
          </li>
          <li>PROMOÇÕES</li>
          <li>CONTATO</li>
        </ul>
      </div>
    </div>
  )
}