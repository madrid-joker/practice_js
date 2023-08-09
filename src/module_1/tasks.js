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

function makeStringFromArray(array, delimiter) {
    let string = array.slice();
    // Change code below this line
  
    return string.join(delimiter)
  
    // Change code above this line
    
  }

function slugify(title) {
    // Change code below this line
  
return title.toLowerCase().split(" ").join("-");
  
    // Change code above this line
}

function makeArray(firstArray, secondArray, maxLength) { // Task #16 clarify to Nazar about optimization
    // Change code below this line

let array = [];    
if (maxLength == 0) {
    return  array;
} else {
    array = firstArray.concat(secondArray);
}
if (array.length > maxLength) {
    return array.slice(0, maxLength)
}
return array;

    // Change code above this line
}

function calculateTotal(number) {
    // Change code below this line
   let sum = 0;
   for (let i = 1; i <= number; i++) {
       sum += i;
   }
   return sum;
     // Change code above this line
}

function findLongestWord(string) { // Task #21 clarify to Nazar about optimization
    // Change code below this line
  
    let array;
    let counter = 0;
    let str;
    array = string.split(" ");
        for (let i = 0; i < array.length; i++) {            
                if (array[i].length > counter) {
                    counter = array[i].length;
                    str = array[i];
                }                
        }
    return str; 
  
    // Change code above this line
  }

function createArrayOfNumbers(min, max) {// Task #22 clarify to Nazar about optimization
const numbers = [];
let length = max - min + 1;
let counter = min - 1;
    // Change code below this line
    for (let i = 0; i < length; i++) {
        counter += 1;
        numbers.push(counter);
    }    
    // Change code above this line
return numbers;
}

function filterArray(numbers, value) {
    // Change code below this line
 let array = [];

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > value) {
            array.push(numbers[i])
        }
    }
 return array;
 
   // Change code above this line
 }

 function getCommonElements(array1, array2) {
    // Change code below this line
 
let array = [];    
 for (let i = 0; i < array1.length; i++) {
        if (array2.includes(array1[i])) {
            array.push(array1[i])
        }
 }
 return array; 
  
   // Change code above this line
  } 
module.exports = function() {
console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]))
console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]))
console.log(getCommonElements([1, 2, 3], [10, 20, 30]))
}