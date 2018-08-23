function palindrome(str) {
  let arr = [];
  let arrReversed = [];

  for(i = str.length - 1; i >= 0; i--) {
    if(str[i] == " ") {
      continue;
    }else {
      arrReversed.push(str[i]);
    };
  };

  for(i = 0; i < str.length; i++) {
    if(str[i] == " ") {
      continue;
    }else {
      arr.push(str[i]);
    };
  };

  for (i = 0; i < str.length; i++) {
    if(arr[i] !== arrReversed[i]) {
      return false;
      break;
    } else {
      continue;
    };
  };
  return true;
};
