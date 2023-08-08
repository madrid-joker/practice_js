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

module.exports = function(){
    console.log(getShippingCost("China"));
    console.log(getShippingCost("Australia"));
    console.log(getShippingCost("Chile"));
    console.log(getShippingCost("Jamaica"));
}