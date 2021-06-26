import { CarroselData } from './components/Carrosel/CarroselData';

import api from './services/api';

import './global.scss';
import Navigation from './components/Navigation/Navigation.js';
import Carrosel from './components/Carrosel/Carrosel.js';
import VitrineInstruments from './components/VitrineInstruments/VitrineInstruments.js';
import { useEffect, useState } from 'react';

function App() {
  const [itemsVitrine, setItemsVitrine] = useState([]);

  useEffect(() => {
    api.get('teste-front-end/junior/ninja-som/lista-produtos/produtos.json')
      .then(response => {
        const items = response.data.products;

        setItemsVitrine(items)
      })
  })


  return (
    <div className="App">
      <header>
        <Navigation />
      </header>
      <Carrosel slides={CarroselData} />
      {itemsVitrine.map((product, index) => {
        return (
          <VitrineInstruments
            key={index}
            productName={product.productName}
            descriptionShort={product.descriptionShort}
            photo={product.photo}
            price={product.price}
          />
        )
      })}

      {/* <main>
        <OptionSound />
        <DoubleNews />
        <VitrineInstruments />
        <AboutAndBrands />
      </main>
      <footer>
        <Footers />
      </footer> */}
    </div>
  );
}

export default App;
