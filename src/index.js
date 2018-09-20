module.exports = function solveEquation(equation) {
  var a, b, c, D, x1, x2;
  var arrSplitted = equation.split(' ');
  a = Number(arrSplitted[0]);
  b = Number(arrSplitted[3]+arrSplitted[4]);
  c = Number(arrSplitted[7]+arrSplitted[8]);
  var arrResult = [];
  if (a!=0){
    D = Math.pow(b,2) - (4*a*c);
    x1 = Math.round((-b + Math.sqrt(D))/(2*a));
    x2 = Math.round((-b - Math.sqrt(D))/(2*a));
    arrResult.push(x1, x2);

    arrResult.sort(function(x, y){
      return x - y;
    });
    return arrResult;
  }
  else {
    return 1;
  }
};
