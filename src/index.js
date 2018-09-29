module.exports = function solveEquation(equation) {
  let a, b, c, d, x1, x2;
  const arrSplitted = equation.split(' ');
  a = Number(arrSplitted[0]);
  b = Number(arrSplitted[3]+arrSplitted[4]);
  c = Number(arrSplitted[7]+arrSplitted[8]);
  const arrResult = [];
  if (a!=0){
    d = Math.pow(b,2) - (4*a*c);
    x1 = Math.round((-b + Math.sqrt(d))/(2*a));
    x2 = Math.round((-b - Math.sqrt(d))/(2*a));
    arrResult.push(x1, x2);

    arrResult.sort((x, y) =>  x - y);
    return arrResult;
  }
  else return 1;
}
