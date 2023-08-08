const sumModule = require("./module_1/tasks");
sumModule();

/*
// module 1 homework
let productName = "Droid";
let pricePerItem = 2000;

productName = "Repair droid";
pricePerItem = 3500;

let topSpeed = 160;
let distance = 617.54;
let login = "mango935";
let isOnline = true;
const isAdmin = false;


const orderedQuantity = 6;


const pricePerDroid = 800;
const deliveryFee = 50;
const totalPrice = pricePerDroid * orderedQuantity - deliveryFee;
const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;
console.log(message);

//------------29//
function getShippingCost(country) {
  let message;
  let cost;
  // Change code below this line
switch(country) {

case "China":
cost = 100;
message = `Shipping to ${country} will cost  ${cost} credits`;
break;

case "Chile":
cost = 250;
message = `Shipping to ${country} will cost  ${cost} credits`;
break;

case "Australia":
cost = 170;
message = `Shipping to ${country} will cost  ${cost} credits`;
break;

case "Jamaica":
cost = 120;
message = `Shipping to ${country} will cost  ${cost} credits`;
break;

default:
message = "Sorry, there is no delivery to your country";
}
  // Change code above this line
  return message;
}

//------------33//
function formatMessage(message, maxLength) {
  let result = "...";
  // Change code below this line
  if (maxLength > message) {
    result += message.slice(0, maxLength);
  }
  else {
    result = message;
  }
  /// Change code above this line
  return result;
}

//---------------3 in Module 2//
function checkStorage(available, ordered) {
  // Change code below this line
  let message;

  if (ordered === 0) {
    message = "Your order is empty!";
  } else if (ordered > available) {
    message = "Your order is too large, not enough goods in stock!";
  } else {
    message = "The order is accepted, our manager will contact you";
  }

  return message;
  // Change code above this line
}


function getExtremeElements(array) {
  // Change code below this line


console.log(array);  
let newArray = array.splice(1, array.length - 2)
console.log(array);  

return array;

  // Change code above this line
}
getExtremeElements([1, 2, 3, 4, 5]);
getExtremeElements(["Earth", "Mars", "Venus"]);


function calculateEngravingPrice(message, pricePerWord) {
  // Change code below this line

let array = message.split(" ");
console.log(array.length * pricePerWord);


  // Change code above this line
}

calculateEngravingPrice("JavaScript is in my blood", 10);
calculateEngravingPrice("Web-development is creative work", 40);*/
