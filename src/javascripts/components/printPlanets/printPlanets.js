import $ from 'jquery';
import './printPlanets.scss';
import utils from '../../helpers/utilities';
import data from '../../helpers/data/planets';

const getPlanetNames = () => {
  const planets = data.getPlanets();
  const planetNames = [];
  for (let i = 0; i < planets.length; i += 1) {
    planetNames.push(planets[i].name);
  }
  return planetNames;
};

const addSearchListener = () => {
  $('#searchBar').keyup(() => {
    let searchInput = '';
    searchInput = document.getElementById('searchBar').value;
    const planetNames = getPlanetNames();
    for (let j = 0; j < planetNames.length; j += 1) {
      $(`#${planetNames[j]}`).addClass('hide');
      if (searchInput.toLowerCase() === planetNames[j].toLowerCase()) {
        $(`#${planetNames[j]}`).removeClass('hide');
      }
    }
    if (searchInput === '') {
      for (let i = 0; i < planetNames.length; i += 1) {
        $(`#${planetNames[i]}`).removeClass('hide');
      }
    }
  });
};

const planetPrinter = () => {
  const planets = data.getPlanets();
  let domString = '';
  for (let i = 0; i < planets.length; i += 1) {
    domString += `<div class="planet" id="${planets[i].name}">
      <h1 class="planetHeader">${planets[i].name}</h1> <img src="${planets[i].imageUrl}">
      </div>`;
  } utils.printToDom('planet-zone', domString);
  $('.planet img').hide();
  utils.printToDom('full-planet', '');
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

// const addClickEvents = (funct) => {
//   $('.planet').on('click', funct);
// };

// const clickEvent = (e) => {
//   const clickedPlanet = $(e.target);
//   const planets = data.getPlanets();
//   let planetObj = {};
//   planetObj = planets.find((x) => x.name === clickedPlanet.prop('id'));
//   let domString = '';
//   domString += `<div class="planet-full">
//   <span class="planetHeader-full">${planetObj.name}</span>
//   <span class="x">❌</span>
//   <img class="img-full" src="${planetObj.imageUrl}">
//   <p class="planet-description">${planetObj.description}</p>
//   </div>`;
//   utils.printToDom('planet-zone', '');
//   utils.printToDom('full-planet', domString);
//   $('.x').on('click', () => {
//     planetPrinter();
//     addHoverListeners();
//     addClickEvents(clickEvent);
//   });
// };

const init = () => {
  planetPrinter();
  addHoverListeners();
  // addClickEvents(clickEvent);
  // clickEvent();
  addSearchListener();
};

export default { init };
