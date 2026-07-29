const repeatString = function(str , num) {
  let huh = [];
  for (let i = 0; i < num; i++){
    huh.push(str);
  }
  let newstr = huh.join("");
  return newstr;
};

let str= prompt("banana");
let num = +prompt("OKBRO");

alert(repeatString())
// Do not edit below this line
module.exports = repeatString;
