import $ from 'jquery';
import './printPlanets.scss';
import utils from '../../helpers/utilities';
import data from '../../helpers/data/planets';

const planetPrinter = () => {
  const planets = data.getPlanets();
  let domString = '';
  for (let i = 0; i < planets.length; i += 1) {
    domString += `<div class="planet" id="${planets[i].name}">
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

// const clickOnPLanet = (planet) => {
//   const planets = data.getPlanets();
//   let domString = '';
//   for (let i = 0; planets.length; i += 1) {
//     domString += `<div class="planet-full>
//   <h1 class="planetHeader-full">${planets[i]}</h1>
//   </div>`

//   }
// }

const clickEvent = (e) => {
  const clickedPlanet = $(e.target);
  const planets = data.getPlanets();
  let planetObj = {};
  planetObj = planets.find((x) => x.name === clickedPlanet.prop('id'));
  console.log(planetObj);
};

const addClickEvent = () => {
  $('.planet').on('click', clickEvent);
};

const init = () => {
  planetPrinter();
  addHoverListeners();
  addClickEvent();
  addClickEvent();
  clickEvent();
};

export default { init };
