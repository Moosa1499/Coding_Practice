/*35.	Animals: Think of at least three different animals that have a common characteristic. 
Store the names of these animals in a list, and then use a for loop to print out the name of each animal. 
• Modify your program to print a statement about each animal, such as A dog would make a great pet. 
• Add a line at the end of your program stating what these animals have in common. 
You could print a sentence such as Any of these animals would make a great pet!*/

// List Of Animals that can be kept as a pet :
const animals : string[] = ['Cat','Dog','Hamster','Parrot'];

console.log ("List Of Animals :");
for (const animal of animals){
    console.log(animal);
}
// Print a statement about each animal, such as A dog would make a great pet.

console.log("\nStatments about each Animal :");

for (const animal of animals) {
    if (animal === 'Cat'){
        console.log(`${animal}s are so Cute .`);
    } else if (animal === 'Dog'){
        console.log(`${animal}s are Man's Best Friend .`);
    } else if (animal === 'Hamster') {
        console.log(`${animal}s are a good Pet For Beginners .`);
    } else if (animal === 'Parrot') {
        console.log (`${animal}s are very Smart and can be Fun to train .`);
    }
}
// What they have in Common:
console.log("\nWhat these Animals All Have in Common :");
console.log("Any Of these Magnificent Animals Would Make For an Excellent Pet.");