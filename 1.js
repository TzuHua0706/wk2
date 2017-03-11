//push
let a = ["1","2"];
console.log(a);
a.push('3');
console.log(a);

//slice
let a = ['zero','one','two','three'];
let sliced = a.slice(1,3);
console.log(a);//['zero','one','two','three']
console.log(sliced);//['one','two']

//foreach
var colors = ['red','blue','green'];
for(var i = 0; i < colors.length; i++){
  console.log(colors[i]);
}
colors.forEach(
  (color) => console.log(color)
 );

//use forEach to add HTML elements
$(document).ready(function(){
  colors.forEach(
    (color) => $('body').append(`<div>${color}</div>`)
    );
});

//map
var numbers = [1,2,3];
var doublenumbers;
doublenumbers = [];
for(var i = 0; i < numbers.length; i++){
  doublenumbers.push(numbers[i] * 2);
}
console.log(doublenumbers);
doublenumbers = [];
doublenumbers = numbers.map(
  (number) => number * 2
 );
 console.log(doublenumbers);

//map_2
var cars = [
  {model: 'Buick', price:'cheap'},
  {model: 'BMW',price:'expensive'}
 ];
var prices = cars.map((car) => car.price);
console.log(prices);
//use map to add Html elements
$(document).ready(function(){
  const carModel = cars.map(car => `<div>${car.model}</div>`);
  $('body').addend(carModel);
});

//spread operator
let array1 = [1,2,3];
let array2 = [4,5,6];
let array3 = [array1,array2];
console.log(array3);//[[1,2,3],[4,5,6]]
let array4 = [...array1, ...array2];
console.log(array4);//[1,2,3,4,5,6]

//spread operator_2
let state = {a:1, b:2, c:3};
console.log(state);
state = {...state, d:4};
console.log(state);
state = {...state, a:10};
console.log(state);

//spread operator_3
function adder (base, ...numbers) {
  numbers.forEach(function(number){
    console.log(base + number);
  });
}
adder(3,5,7,1);
