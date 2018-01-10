(() => {
	const aoc = require('../lib/aoc.js');
	let day2 = lines =>{
		let checksum = 0;
		lines.forEach(function(line){
			let elements = line.split(' ').map( Number ).sort();
			aoc.allcompare(elements, (numA, numB) => {
				if (numA != numB && numA > numB && numA % numB == 0) checksum += (numA / numB);
			})
		});
		return checksum;
	}

	if (day2(['5 9 2 8','9 4 7 3','3 8 6 5']) != 9) {throw new Error('Something is Wrong!')};

	const spread = aoc.inputfile('./day02.txt', true);
	console.log(day2(spread));
	
})()
