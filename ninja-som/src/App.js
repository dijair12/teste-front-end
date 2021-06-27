import { CarroselData } from './components/Carrosel/CarroselData';

import './global.scss';
import Navigation from './components/Navigation/Navigation.js';
import Carrosel from './components/Carrosel/Carrosel.js';
import ListVitrineInstruments from './components/ListVitrineInstruments/ListVitrineInstruments.js';

function App() {



  return (
    <div className="App">
      <header>
        <Navigation />
      </header>
      <Carrosel slides={CarroselData} />
      <ListVitrineInstruments />

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
