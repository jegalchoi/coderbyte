function letterChanges (str) {
  let array = [];

  for(i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) == 90 || str.charCodeAt(i) == 122) {
      array.push("a");
    }else if(str.charCodeAt(i) <= 122 && str.charCodeAt(i) >= 65) {
        array.push(String.fromCharCode(str.charCodeAt(i) + 1));
    }else {
        array.push(String.fromCharCode(str.charCodeAt(i)));
    }
  };

  let newString = array.join("");

  newString = newString.replace(/a/g, "A");
  newString = newString.replace(/e/g, "E");
  newString = newString.replace(/i/g, "I");
  newString = newString.replace(/o/g, "O");
  newString = newString.replace(/u/g, "U");

  return newString;
};
