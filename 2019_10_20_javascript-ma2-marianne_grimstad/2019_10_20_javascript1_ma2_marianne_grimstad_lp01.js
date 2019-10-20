//MODULE ASSIGNMENT 2 - LEVEL 1
//1. Create a function that displays prototypal inheritance

function Dog () {
	this.make = "Poodle"
}

Dog.prototype.model = function() {
	console.log(" I have a " + this.make + " at home");
};

var standard = new Dog();
standard.model();

//2. Create an array of numbers from 1 - 10; slice the 5th number in the array

var numbers = [1,2,3,4,5,6,7,8,9,10];
	console.log(numbers.length);
	
	console.log(numbers.slice(4,5));
	
//3. Delete the last number in the array that you created above.

numbers.splice(9,1);

//4. Given the following paragraph, create a JavaScript function that changes all mentions of strawberry to banana and strawberries to bananas: 

var p = "Strawberries are a popular part of spring and summer diets throughout America. Mouths water from coast to coast each spring, when small white blossoms start to appear on strawberry bushes. They announce the impending arrival of the ruby red berries that so many people crave. Ripe strawberries taste sweet and have only a slight hint of tartness. They are also one of the healthiest fruits around. There are countless recipes for the luscious red berry, but many people prefer to eat them fresh and unaccompanied.";

console.log(p.replace(/Strawberries/gi, "Bananas"));

// I couldn't figure out how to get then other words to change at the same time.


//5. Create an array and a button. The array should contain 4 football clubs names. When the button is clicked, remove all elements out of the array that we just created. There after add in 4 names of cars inside that array. Log it to the console.

var myArray = ["Arsenal", "Liverpool", "Tottenham", "Leeds"];
	console.log(myArray);
	
var removed = myArray.splice(0,4, "Ford", "Volvo", "Saab", "Toyota");
	console.log(myArray);
	
// I couldn't figure out how to do the button.
	

//6. Create an array of objects with 3 people inside it. Use the filter function to map by a name.

var people [
	{ firstname: "Peter", lastname: "Pan", age: 15}
	{ firstname: "Roger", lastname: "Rabbit", age: 25}
	{ firstname: "Donald" lastname: "Duck", age: 40}
];

try {
	console.log("Test");
	failedTest;
	console.log("Test that fails");
}catch(err) {
	console.log("Error has occurred:" + err);
}

//7. Create a simple function that logs the date.

var d = new Date ();
	console.log(d);