var factorial = function (n) {
  var product = 1,
      i = 1;

  for(i = 1; i <= n; i++){
    product *= i;
  }

  return product;
};

var combinations = function (n, k) {
  return (factorial(n) / (factorial(k) * factorial(n - k)));
};

var generatePascalsTriangle = function(rowCount) {
  var rows = [],
      i = 0,
      j = 0;

  for (i = 0; i <= rowCount; i += 1) {
    rows.push([]);

    for (j = 0; j <= i; j += 1) {
      rows[i][j] = combinations(i, j);
    }
  }
  return rows;
};
