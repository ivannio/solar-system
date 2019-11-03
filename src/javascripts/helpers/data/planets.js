const planets = [
  {
    name: 'Mercury',
    imageUrl: 'https://cdn.mos.cms.futurecdn.net/MTEiJvP99DScN3vkAsE9LA-650-80.jpg',
    description: 'Mercury is the smallest and innermost planet in the Solar System. Its orbit around the Sun takes only 87.97 days, the shortest of all the planets in the Solar System. It is named after the Roman deity Mercury, the messenger of the gods.',
    isGasPlanet: false,
    numberOfMoons: 0,
    nameOfLargestMoon: 'n/a',
  },
  {
    name: 'Venus',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e5/Venus-real_color.jpg',
    description: 'Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the second-brightest natural object in the night sky after the Moon, Venus can cast shadows and, rarely, is visible to the naked eye in broad daylight.',
    isGasPlanet: false,
    numberOfMoons: 0,
    nameOfLargestMoon: 'n/a',
  },
  {
    name: 'Earth',
    imageUrl: 'https://images.pexels.com/photos/87651/earth-blue-planet-globe-planet-87651.jpeg',
    description: 'Earth is the third planet from the Sun and the only astronomical object known to harbor life. According to radiometric dating and other sources of evidence, Earth formed over 4.5 billion years ago.',
    isGasPlanet: false,
    numberOfMoons: 1,
    nameOfLargestMoon: 'The Moon',
  },
  {
    name: 'Mars',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/OSIRIS_Mars_true_color.jpg/1024px-OSIRIS_Mars_true_color.jpg',
    description: 'Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System after Mercury. In English, Mars carries a name of the Roman god of war and is often referred to as the \'Red Planet\'.',
    isGasPlanet: false,
    numberOfMoons: 2,
    nameOfLargestMoon: 'Phobos',
  },
  {
    name: 'Jupiter',
    imageUrl: 'https://cdn.mos.cms.futurecdn.net/iEv6pmS4gfbefs5JbwHWiJ-650-80.png',
    description: 'Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass one-thousandth that of the Sun, but two-and-a-half times that of all the other planets in the Solar System combined.',
    isGasPlanet: true,
    numberOfMoons: 79,
    nameOfLargestMoon: 'Ganymede',
  },
  {
    name: 'Saturn',
    imageUrl: 'https://space-facts.com/wp-content/uploads/saturn.png',
    description: 'Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius about nine times that of Earth.',
    isGasPlanet: true,
    numberOfMoons: 82,
    nameOfLargestMoon: 'Titan',
  },
  {
    name: 'Uranus',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Uranus2.jpg/1024px-Uranus2.jpg',
    description: 'Uranus is the seventh planet from the Sun. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.',
    isGasPlanet: true,
    numberOfMoons: 27,
    nameOfLargestMoon: 'Titania',
  },
  {
    name: 'Neptune',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/63/Neptune_-_Voyager_2_%2829347980845%29_flatten_crop.jpg',
    description: 'Neptune is the eighth and farthest known planet from the Sun in the Solar System. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet.',
    isGasPlanet: true,
    numberOfMoons: 14,
    nameOfLargestMoon: 'Triton',
  },
  {
    name: 'Pluto',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Pluto_in_True_Color_-_High-Res.jpg/1024px-Pluto_in_True_Color_-_High-Res.jpg',
    description: 'Pluto may not be an actual planet anymore, but I grew up being taught that it was, so it holds a special place in my heart. Also, including it here makes this page show up with a nice 3 row 3 column set of planet cards on my machine, so I\'m adding it',
    isGasPlanet: false,
    numberOfMoons: 5,
    nameOfLargestMoon: 'Charon',
  },
];

const getPlanets = () => planets;

export default { getPlanets };
