function firstReverse(str) {
  var result = [];
  for (var i = str.length - 1; i >= 0; i--) {
      result.push(str[i]);
  };
  console.log(result.join(''));
}
