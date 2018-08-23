let arr = [];
let sortedArr;
function alphabetSoup(str) {
  arr = str.split("");
  sortedArr = arr.sort();
  return sortedArr.join("");
};
