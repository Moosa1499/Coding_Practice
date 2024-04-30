/* 29.	Favorite Fruit: Make a array of your favorite fruits, and then write
a series of 
independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.
• Write five if statements. Each should check whether a certain kind of fruit
 is in your array. If the fruit is in your array,
 the if block should print a statement, such as You really like bananas!
*/

//Array Of Fruits :
const favorite_fruits: string[] = ["Apple","Banana","Orange","Mango"];

// check for certain fruits in your array.

if (favorite_fruits.includes("Apple")){
    console.log("I Like Eating Apples.");
}

if (favorite_fruits.includes("Banana")){
    console.log("I Enjoy Eating Bananas.");
}

if (favorite_fruits.includes("Orange")){
    console.log("Oranges are so Juicy.")
}

if (favorite_fruits.includes("Mango")){
    console.log("Mangoes Are the King Of Fruits.");
}