const convertToCelsius = function(degreesF) {
  return Math.round(5/9*(degreesF-32)*10)/10;
};

const convertToFahrenheit = function(degreesC) {
  return Math.round((9/5*degreesC+32)*10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
