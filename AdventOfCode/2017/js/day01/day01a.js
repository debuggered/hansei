(() => {
  const aoc = require('../lib/aoc.js');
  let day1 = secret =>{
    let sumtotal = 0;
    let comparer = 0;
    let jump = 1;

    for (let m = 0; m < secret.length; m++) {
      let start = parseInt(secret.charAt(m));

      if (m + jump >= secret.length) {
        comparer = parseInt(secret.charAt(jump + m - secret.length));
      } else {
        comparer = parseInt(secret.charAt(jump + m));
      }
      if (start == comparer) {sumtotal += start};
    }
    return sumtotal
  }

  if (day1('1122')     != 3) {throw new Error('Something is Wrong')};
  if (day1('1111')     != 4) {throw new Error('Something is Wrong')};
  if (day1('1234')     != 0) {throw new Error('Something is Wrong')};
  if (day1('91212129') != 9) {throw new Error('Something is Wrong')};

  const secret = aoc.inputfile('./day01.txt');
  console.log(day1(secret));

})(
