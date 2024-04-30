/*24.	More Conditional Tests: You don’t have to limit the number of tests you 
create to 10. If you want to try more comparisons,
 write more tests. Have at least one True and one False result for each of the
following:
• Tests for equality and inequality with strings
• Tests using the lower case function
• Numerical tests involving equality and inequality, greater than and less than,
  greater than or equal to, and less than or equal to
• Tests using "and" and "or" operators
• Test whether an item is in a array
• Test whether an item is not in a array




*/
// Equality with strings

console.log("Testing equality with strings:");
const fruit1 : string = "apple"
const fruit2 : string = "Apple"
console.log(fruit1 == fruit1); // True
console.log(fruit1 != fruit2); // False

// Using the lower case function
console.log("Using the lower case function")
const text1 : string ="Apples Are A Tasty Fruit ."
const text2 : string ="apples are a tasty fruit ."
console.log("Printing Text with lower case:");
console.log(text1  === text2); // True

// Numerical tests
console.log("Numerical tests:");
console.log(10 > 5); 
console.log(2 < 1); 
console.log(20 > 15); 
console.log(2 < 13);  
console.log(110 > 254); 
console.log(302 < 101); 


// Tests using "and" and "or" operators
console.log("Tests using 'And' and 'Or' operators");
const a : number = 10;
const b : number = 25;
const c : number = 50;

console.log(a < b && b < c);
console.log(a < b || b > c);
console.log(a > b && b < c);

// Test whether an item is in an array
console.log ("Test whether an item is in a array");
const Fruits : string[] = ['Apple','Peach','Banana','Pineapple',
'Grape','Kiwi','Strawberry'];

console.log(Fruits.includes('Strawberry'));

// Test whether an item is not in a array
console.log("Test whether an item is not in a array");

console.log(Fruits.includes('Melon'));