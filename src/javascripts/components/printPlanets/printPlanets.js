import $ from 'jquery';
import './printPlanets.scss';
import utils from '../../helpers/utilities';
import data from '../../helpers/data/planets';


const planetPrinter = () => {
  const planets = data.getPlanets();
  let domString = '';
  for (let i = 0; i < planets.length; i += 1) {
    domString += `<div class="planet" id="${planets[i].name}-div">
      <h1 class="planetHeader">${planets[i].name}</h1> <img src="${planets[i].imageUrl}">
      </div>`;
  } utils.printToDom('planet-zone', domString);
  $('.planet img').hide();
};

const showImage = (e) => {
  const planet = $(e.target);
  planet.find('h1').hide();
  planet.find('img').show();
};

const showName = (e) => {
  const planet = $(e.target);
  planet.find('img').hide();
  planet.find('h1').show();
};

const addHoverListeners = () => {
  $('.planet').hover(showImage, showName);
};

export default { planetPrinter, addHoverListeners };
