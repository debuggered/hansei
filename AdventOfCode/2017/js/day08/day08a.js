(() => {
  const aoc = require('../lib/aoc.js');
  const instruct = aoc.inputfile('./day08.txt', true);

  let pocket = []
  instruct.forEach(elements => {
    elements = elements.split(' ');
    let ins_name = elements[0];
    let ins_direction = elements[1];
    let ins_duration = elements[2];

    let con_name = elements[4];
    let con_symbol = elements[5];
    let con_result = elements[6];

    console.log(ins_name, ins_direction, ins_duration);
    console.log(con_name con_symbol con_result);
  })
})()

/*

  if {[expr ($con_value $con_symbol $con_result)]} {
    set ins_value [expr {[info exists pocket($ins_name)]? $pocket($ins_name) : 0 } ]
    set pocket($ins_name) [expr {$ins_value + [expr {($ins_direction eq "inc")? $ins_duration : -$ins_duration }]}]
  }
}

set largest 0
foreach a [array names pocket] {
  set largest [expr {$pocket($a) > $largest ? $pocket($a) : $largest}]
}
puts $largest
*/