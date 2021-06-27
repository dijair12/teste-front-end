import React, { useState, useEffect } from 'react';

import api from '../../services/api';
import VitrineInstruments from '../VitrineInstruments/VitrineInstruments';

import './ListVitrineInstruments.scss';

export default function ListVitrineInstruments() {
  const [itemsVitrine, setItemsVitrine] = useState([]);

  useEffect(() => {
    api.get('teste-front-end/junior/ninja-som/lista-produtos/produtos.json')
      .then(response => {
        const items = response.data.products;

        setItemsVitrine(items)
      })
  })


  return (
    <div>
      <div className="ctnTitle">
        <h2>INSTRUMENTOS <b>DESTAQUE</b></h2>

        <h4>it is a long established fact that a reader will be destracted by the readable</h4>
      </div>
      <div className="ctnVitrine">
        {
          itemsVitrine.filter((item, index) => index < 8).map((product, index) => {
            return (
              <VitrineInstruments
                key={index}
                productName={product.productName}
                descriptionShort={product.descriptionShort}
                photo={product.photo}
                price={product.price}
              />
            )
          })
        }
      </div>
      <div className="ctnButton">
        <button type="button">VER MAIS</button>
      </div>

    </div>
  )
}