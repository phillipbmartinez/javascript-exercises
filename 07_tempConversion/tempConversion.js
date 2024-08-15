const convertToCelsius = function (degrees) {
  degreesCelsius = (degrees - 32) * (5/9);
  console.log(degreesCelsius);
  roundedDegreesCelsius = Math.round(degreesCelsius * 10) / 10;
  return roundedDegreesCelsius;
};

const convertToFahrenheit = function (degrees) {
  degreesFahrenheit = degrees * (9/5) + 32;
  console.log(degreesFahrenheit);
  roundedDegreesFahrenheit = Math.round(degreesFahrenheit * 10) / 10;
  return roundedDegreesFahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
