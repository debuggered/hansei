(() => {
  const aoc = require('../lib/aoc.js');
  let day2 = lines => {
    let checksum = 0;
    lines.forEach(function(line){
      let elements = line.split(' ').map( Number );
      let tmin = Math.min.apply(null, elements);
      let tmax = Math.max.apply(null, elements);
      checksum += tmax - tmin;
    });
    return checksum;
  }

  if (day2(['5 1 9 5','7 5 3','2 4 6 8']) != 18) {throw new Error('Something is Wrong!')};

  const spread = aoc.inputfile('./day02.txt', true);
  console.log(day2(spread));

})()


/*
*/
