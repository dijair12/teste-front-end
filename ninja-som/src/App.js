import { CarroselData } from './components/Carrosel/CarroselData';

import Navigation from './components/Navigation/Navigation.js';
import Carrosel from './components/Carrosel/Carrosel.js';
import ListOptionSound from './components/ListOptionSound/ListOptionSound.js';
import DoubleNews from './components/DoubleNews/DoubleNews.js';
import ListVitrineInstruments from './components/ListVitrineInstruments/ListVitrineInstruments.js';
import AboutAndBrands from './components/AboutAndBrands/AboutAndBrands.js';


import './global.scss';

function App() {

  return (
    <div className="App">
      <header>
        <Navigation />
      </header>
      <main>
        <Carrosel slides={CarroselData} />
        <ListOptionSound />
        <DoubleNews />
        <ListVitrineInstruments />
        <AboutAndBrands />
        {/*
        </main>
        <footer>
          <Footers />
        </footer> */}
      </main>
    </div>
  );
}

export default App;
