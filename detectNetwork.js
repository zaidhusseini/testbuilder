// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

// Generates a random number of certain length

function getRandomNumOfCertainLength(length){
  var num = "";
  
  for (var i=0; i<length; i++){
    num += getRandomIntInclusive(0,9);
  }

  return num;
}

function isChinaUnionPay(cardNumber){
  var lengthSet = new Set([16,17,18,19]);
  for (var i=622126; i<=622925; i++){
    if (cardNumber.substr(0,6) === i.toString() && lengthSet.has(cardNumber.length)){
      return true;
    }
  }
  
  return false;
}


var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long
  // Once you've read this, go ahead and try to implement this function, then return to the console.
  
  if (cardNumber.length === 14 && (cardNumber.substr(0,2) === '39' || cardNumber.substr(0,2) === '38')){
    return "Diner's Club";

  } else if (cardNumber.length === 15 && (cardNumber.substr(0,2) === '34' || cardNumber.substr(0,2) === '37')){
  	return 'American Express';

  } else if (( (cardNumber.length === 13) || (cardNumber.length === 16) || (cardNumber.length === 19)) && cardNumber.substr(0,1) === '4'){
  	return 'Visa'; 

  } else if (cardNumber.length === 16 && (cardNumber.substr(0,2) === '51' || cardNumber.substr(0,2) === '52' || cardNumber.substr(0,2) === '53' || cardNumber.substr(0,2) === '54' || cardNumber.substr(0,2) === '55')){
  	return 'MasterCard';

  } else if ((cardNumber.length === 16 || cardNumber.length === 19) && (cardNumber.substr(0,4) === '6011' || cardNumber.substr(0,3) === '644' || cardNumber.substr(0,3) === '645' || cardNumber.substr(0,3) === '646' || cardNumber.substr(0,3) === '647' || cardNumber.substr(0,3) === '648' || cardNumber.substr(0,3) === '649' ||  cardNumber.substr(0,2) === '65')){
  	return 'Discover';

  } else if ((cardNumber.length === 12 || cardNumber.length === 13 || cardNumber.length === 14 || cardNumber.length === 15 || cardNumber.length === 16 || cardNumber.length === 17 || cardNumber.length === 18 || cardNumber.length === 19) && (cardNumber.substr(0,4) === '5018' || cardNumber.substr(0,4) === '5020' || cardNumber.substr(0,4) === '5038' || cardNumber.substr(0,4) === '6304' )){
  	return 'Maestro';

  } else if (isChinaUnionPay(cardNumber)){
    return 'China UnionPay';
  } 

};
