function letterCapitalize (str) {
  capitalized = str.replace(/\b[a-z]/g, function(letter) {
    return letter.toUpperCase();
  });
  return capitalized;
};
