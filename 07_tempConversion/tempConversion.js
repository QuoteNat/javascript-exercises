const convertToCelsius = function(fahrenheit) {
  return parseFloat((5/9 * (fahrenheit - 32)).toFixed(1));
};

const convertToFahrenheit = function() {
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
