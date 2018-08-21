

function simpleSymbols(str) {
let acceptableSequence;
  for (i = 0; i < str.length; i++) {
    if (!(str.charCodeAt(i) <= 122
    && str.charCodeAt(i) >= 65
    && !(str.charCodeAt(i) >= 91 && str.charCodeAt(i) <=96))) {
      continue;
    } else if(str.charCodeAt(i) <= 122
    && str.charCodeAt(i) >= 65
    && !(str.charCodeAt(i) >= 91 && str.charCodeAt(i) <=96)
    && (str.charCodeAt(i - 1) == 43 && str.charCodeAt(i + 1) == 43)
    ) {
      acceptableSequence = true;
    } else {
      acceptableSequence = false;
      break;
    };
  };
  if(acceptableSequence == true) {
    return true;
  } else {
    return false;
  };
};
