function longestWord(sen) {
  let longest = [];
  let words = sen.match(/\b[a-z]+/gi);

  for(i = 0; i < words.length; i++) {
    longest = words[0];

    if(words[i].length > longest.length) {
      longest = words[i]
    } else {
      continue;
    };
  };
  return longest;
};
