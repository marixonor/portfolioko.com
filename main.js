'use strict';

// Destructuring Objects
const restaurant = {
   name: 'Classic Italianio',
   location: 'Via Angelo Tavante 23, Firenze, Italy',
   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
   openingHours: {
      thu: {
         open: 12,
         close: 22,
      },
      fri: {
         open: 11,
         close: 23,
      },
      sat: {
         open: 0,
         close: 24,
      },
   },

   order: function(starterIndex, mainIndex) {
      return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
   },

   orderDelivery: function ({starterIndex = 1, mainIndex = 0, time = '20:00', address}) {
      console.log(
        `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
      );
   },
};

restaurant.orderDelivery({
   time: '22:30',
   address: 'Via del Sole, 21',
   mainIndex: 2, 
   starterIndex: 2,
});

restaurant.orderDelivery({
   address: 'Via del Sole, 21',
   starterIndex: 1,
});

const {name, openingHours, categories} = restaurant;
console.log(name, openingHours, categories);
 
const {
   name: restaurantName,
   openingHours: hours,
   categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

//Setting a default value
const {menu = [], starterMenu: starters = []} = restaurant;
console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 999;
const obj = {a: 23, b: 7, c: 14};
({a, b} = obj);
console.log(a, b);

//Nested Objects
const { fri: {open, close}, } = openingHours;
console.log(open, close);

//Nested objects asigned other variables
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

////////////////////////////////////////////////////////

const navbtn = document.querySelector('.nav-btn');
const customNav = document.querySelector('custom-nav');
const closebtn = document.querySelector('.close-btn');


const openNav = function(e) {
   e.preventDefault();
   navbtn.nextElementSibling.style.visibility = 'visible';
   document.querySelector(".nav-btn").style.display = 'none';
   document.getElementById('cust-nav').style.display = 'flex';
   document.querySelector(".close-btn").style.display = 'flex';
}
navbtn.addEventListener('click', openNav);

const closeNav = function () {
  document.querySelector(".close-btn").style.display = "none";
  document.getElementById("cust-nav").style.display = "none";
  document.querySelector(".nav-btn").style.display = 'flex';
};
closebtn.addEventListener("click", closeNav);
//---------------------------------------------------------------------------

// Destructuring Arrays
/*
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

const [first, second] = restaurant.categories;
console.log(first, second);

let [main, ,secondary] = restaurant.categories;
console.log(main, secondary);

//Switching Variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

//Recieve 2 return values from a function
const [starter, mainCourse] = (restaurant.order(2, 0));
console.log(starter, mainCourse);


//Nested Destructuring
const nested = [2, 4, [5, 6]];
// const [i, ,j] = nested;
// console.log(i, j);

const [i, , [j, k]] = nested;
console.log(i, j, k);

//Default Values
const [p=1, q=1, r=1] = [8, 9];
console.log(p, q, r);
*/


////////////// FROM THE BOOK /////////////////////////////////

var x;
x = 0;
console.log(x);

x = 1;

// Object
const book = { 
   topic: 'JavaScript',
   fat: true
};


