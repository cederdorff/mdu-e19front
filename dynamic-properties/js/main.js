"use strict"; // to enable strict mode and modern JavaScript functionality


const propName = "firstName";

let user = {
  [propName]: "Rasmus"
};

console.log("propName:", propName);
console.log("user: ", user);

function objectCreator(property, value) {
  let object = {
    [property]: value
  }
  console.log(object);
  return object;
}

objectCreator("brandName", "Adidas");


