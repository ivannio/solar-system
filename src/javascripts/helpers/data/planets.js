const planets = [
  {
    name: 'Mercury',
    imageUrl: 'https://en.wikipedia.org/wiki/Mercury_(planet)#/media/File:Mercury_in_color_-_Prockter07-edit1.jpg',
    description: 'Mercury is the smallest and innermost planet in the Solar System. Its orbit around the Sun takes only 87.97 days, the shortest of all the planets in the Solar System. It is named after the Roman deity Mercury, the messenger of the gods.',
    isGasPlanet: false,
    numberOfMoons: 0,
    nameOfLargestMoon: 'n/a',
  },
  {
    name: 'Venus',
    imageUrl: 'https://en.wikipedia.org/wiki/Venus#/media/File:Venus-real_color.jpg',
    description: 'Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the second-brightest natural object in the night sky after the Moon, Venus can cast shadows and, rarely, is visible to the naked eye in broad daylight.',
    isGasPlanet: false,
    numberOfMoons: 0,
    nameOfLargestMoon: 'n/a',
  },
  {
    name: 'Earth',
    imageUrl: 'https://en.wikipedia.org/wiki/Earth#/media/File:The_Earth_seen_from_Apollo_17.jpg',
    description: 'Earth is the third planet from the Sun and the only astronomical object known to harbor life. According to radiometric dating and other sources of evidence, Earth formed over 4.5 billion years ago.',
    isGasPlanet: false,
    numberOfMoons: 1,
    nameOfLargestMoon: 'The Moon',
  },
  {
    name: 'Mars',
    imageUrl: 'https://en.wikipedia.org/wiki/Mars#/media/File:OSIRIS_Mars_true_color.jpg',
    description: 'Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System after Mercury. In English, Mars carries a name of the Roman god of war and is often referred to as the \'Red Planet\'.',
    isGasPlanet: false,
    numberOfMoons: 2,
    nameOfLargestMoon: 'Phobos',
  },
  {
    name: 'Jupiter',
    imageUrl: 'https://en.wikipedia.org/wiki/Jupiter#/media/File:Jupiter,_image_taken_by_NASA\'s_Hubble_Space_Telescope,_June_2019_-_Edited.jpg',
    description: 'Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass one-thousandth that of the Sun, but two-and-a-half times that of all the other planets in the Solar System combined.',
    isGasPlanet: true,
    numberOfMoons: 79,
    nameOfLargestMoon: 'Ganymede',
  },
  {
    name: 'Saturn',
    imageUrl: 'https://en.wikipedia.org/wiki/Saturn#/media/File:Saturn_during_Equinox.jpg',
    description: 'Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius about nine times that of Earth.',
    isGasPlanet: true,
    numberOfMoons: 82,
    nameOfLargestMoon: 'Titan',
  },
  {
    name: 'Uranus',
    imageUrl: 'https://en.wikipedia.org/wiki/Uranus#/media/File:Uranus2.jpg',
    description: 'Uranus is the seventh planet from the Sun. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.',
    isGasPlanet: true,
    numberOfMoons: 27,
    nameOfLargestMoon: 'Titania',
  },
  {
    name: 'Neptune',
    imageUrl: 'https://en.wikipedia.org/wiki/Neptune#/media/File:Neptune_-_Voyager_2_(29347980845)_flatten_crop.jpg',
    description: 'Neptune is the eighth and farthest known planet from the Sun in the Solar System. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet.',
    isGasPlanet: true,
    numberOfMoons: 14,
    nameOfLargestMoon: 'Triton',
  },
];

const getPlanets = () => planets;

export default { getPlanets };
