const ftoc = function(temp) {
  let celsiusAll = (temp - 32) * (5/9);
  let celsiusOne = Math.round(celsiusAll * 10)/10;
  return celsiusOne
}

const ctof = function(temp) {
  let FahAll = temp * (9/5) + 32;
  let FahOne = Math.round(FahAll * 10)/10;
  return FahOne
  
}

module.exports = {
  ftoc,
  ctof
}
