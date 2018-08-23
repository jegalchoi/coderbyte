function exOh(str) {
  let numberOfX = 0;
  let numberOfO = 0;
  for (i = 0; i < str.length; i++) {
    if(str[i] == "x") {
      numberOfX += 1;
    } else if(str[i] == "o") {
      numberOfO += 1;
    } else {
      continue;
    };
  };
  if(numberOfO == numberOfX) {
    return true;
  } else {
    return false;
  };
};
