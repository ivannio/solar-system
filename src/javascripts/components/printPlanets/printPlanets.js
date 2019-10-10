import './printPlanets.scss';
import utils from '../../helpers/utilities';
import data from '../../helpers/data/planets';

const planetPrinter = () => {
  const planets = data.getPlanets();
  let domString = '';
  for (let i = 0; i < planets.length; i += 1) {
    domString += `<div class="planet" id="${planets[i].name}-div">
      <h1 class="planetHeader">${planets[i].name}</h1>
      </div>`;
  } utils.printToDom('planet-zone', domString);
};

export default { planetPrinter };
