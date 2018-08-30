const aoc = require('../lib/aoc.js');
const spread = aoc.inputfile('./day02.txt', true);

let day2 = lines => 
Array.from(lines)
  .map(line => {
    elements = line.split(' ');
    let tmin = Math.min.apply(null, elements);
    let tmax = Math.max.apply(null, elements);
    return tmax - tmin;
  })
  .reduce((checksum, item) => checksum + item)
  
console.log(day2(spread));