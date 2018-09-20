module.exports = function solveEquation(equation) {
  var a, b, c, D, x1, x2;
  var arrSplited = equation.split(' ');
  a = Number(arrSplited[0]);
  b = Number(arrSplited[3]+arrSplited[4]);
  c = Number(arrSplited[7]+arrSplited[8]);
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
    return 0;
  }
}
