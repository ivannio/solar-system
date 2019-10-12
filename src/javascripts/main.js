import '../styles/main.scss';
import planets from './components/printPlanets/printPlanets';

const init = () => {
  planets.planetPrinter();
  planets.addHoverListeners();
};

init();
