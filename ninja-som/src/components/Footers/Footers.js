import React from 'react';

import './Footers.scss';

import Foto from '../../images/Footers/foto.png';
import Instagram from '../../images/Footers/instagram.png';
import Twitter from '../../images/Footers/twitter.png';
import Facebook from '../../images/Footers/facebook.png';
import Bd1 from '../../images/Footers/bd1.png';
import Bd2 from '../../images/Footers/bd2.png';
import Bd3 from '../../images/Footers/bd3.png';
import Bd4 from '../../images/Footers/bd4.png';
import Bd5 from '../../images/Footers/bd5.png';
import Sg1 from '../../images/Footers/sg1.png';
import Sg2 from '../../images/Footers/sg2.png';

export default function Footers() {
  return (
    <div>

      <div>
        <img src={Foto} alt={Foto} />
        <div>
          <h3>Felipe Salmim</h3>
          <h4>Designer</h4>
        </div>
        <div>
          <p>Many desktop publishing packages and web page editors now use Lorem Ipsum
            as their default model text, and a search for ‘lorem ipsum’</p>
        </div>
      </div>

      <div>
        <div>
          <section>
            <h3>INSTITUCIONAL</h3>
            <h3>QUEM SOMOS</h3>
            <h3>NOSSAS LOJAS</h3>
          </section>
          <section>
            <h3>ATENDIMENTO</h3>
            <h3>FALE CONOSCO</h3>
            <h3>VENDAS@NINJASOM.COM.BR</h3>
          </section>
        </div>
        <div>
          <section>
            <h3>AJUDA E SUPORTE</h3>
            <h3>POLÍTICA DE PRIVACIDADE</h3>
            <h3>POLÍTICA DE TROCAS</h3>
            <h3>PRAZOS DE ENTREGA</h3>
            <h3>TERMOS DE USP</h3>
          </section>
          <section>
            <img src={Instagram} alt={Instagram} />
            <img src={Twitter} alt={Twitter} />
            <img src={Facebook} alt={Facebook} />
          </section>
        </div>
        <div>
          <section>
            <h3>FORMAS DE PAGAMENTO</h3>
          </section>
          <section>
            <img src={Bd1} alt={Bd1} />
            <img src={Bd2} alt={Bd2} />
            <img src={Bd3} alt={Bd3} />
            <img src={Bd4} alt={Bd4} />
            <img src={Bd5} alt={Bd5} />
          </section>
          <section>
            <h3>SEGURANÇA</h3>
          </section>
          <section>
            <img src={Sg1} alt={Sg1} />
            <img src={Sg2} alt={Sg2} />
          </section>
        </div>
        <div>
          <section>
            <h3>ASSINE NOSSO <b>NEWSLETTER</b> E RECEBA NOVIDADES E PROMOÇÕES</h3>
          </section>
          <section>
            <h3>SEU NOME</h3>
            <hr />
            <h3>SEU E-MAIL</h3>
            <hr />
          </section>
          <section>
            <button type="button">
              ENVIAR
            </button>
          </section>
        </div>
      </div>
    </div>
  )
}