let figure  = ['cat', 'dog', 'fish'];
let color   = ['orange', 'white', 'black'];
let texture = ['solid', 'striped', 'spotted'];
let numberof = 3

generateCards = () => {
  let cards = [];
  figure.forEach((a, ai) => {
    color.forEach((c, ci) => {
      texture.forEach((t, ti) => {
        for (x = 1; x <= numberof; x++){
          cards.push (ai.toString() + ci.toString() + ti.toString() + (x - 1).toString());
        };
      });    
    });
  });
return cards;
}

defineCard = (card) => {
  return (parseInt(card.charAt(3)) + 1).toString() + " " + color[card.charAt(1)] + " " + texture[card.charAt(2)] + " " + figure[card.charAt(0)];
}

showCard = (card) => {
  // Display a div with card aspects
  return `<div class="${card}"></div>`
}

checkSet = (card1, card2, card3) => {
  card1 = card1.toString();
  card2 = card2.toString();
  card3 = card3.toString();

  let setCheck = true;
  
  for(x = 0; x <=3; x++) {
    if (!(card1.charAt(x) != card2.charAt(x) && card1.charAt(x) != card3.charAt(x) && card2.charAt(x) != card3.charAt(x)) 
       && !(card1.charAt(x) == card2.charAt(x) && card1.charAt(x) == card3.charAt(x) && card2.charAt(x) == card3.charAt(x))) {
      setCheck = false;
    }
  }
  return setCheck;
}

findThirdCard = (card1, card2) => {
  card1 = card1.toString();
  card2 = card2.toString();
  let card3 = "";
  for(x = 0; x <= 3; x++) {
    if (card1.charAt(x) == card2.charAt(x)) {
      card3 += card1.charAt(x);
    } else {
      card3 += (numberof - (parseInt(card1.charAt(x)) + parseInt(card2.charAt(x)))).toString();
      //set missing char
  }
}
  return card3;
}

let deck = generateCards();

deck.forEach(e => {
  console.log(defineCard(e));
});

console.log(checkSet(1121,1211,1331));
console.log(showCard(1221));

console.log(findThirdCard(1120,1211));
