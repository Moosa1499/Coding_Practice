/*42.	Great Magicians: Start with a copy of your program 
from Exercise 39. Write a function called make_great() 
that modifies the array of magicians by adding the phrase 
the Great to each magician’s name. Call show_magicians() 
to see that the list has actually been modified.*/

// Array of Magician Names :

const magicianNames : string[] = ["Harry","Garry","Timmy",
"Albus","Benjamin"];

function show_magicians(Magicians : string[]): void
{
    for (const magician of Magicians) {
        console.log (magician);
    }
}
function make_great(Magicians : string[]) : string[] {
    const greatMagicians : string[] = Magicians.map(magician =>
         `The Great ${magician}`);
         return greatMagicians;
}
//  Modify Array :
const greatMagicianNames : string[] = make_great(magicianNames);

// Show Original
console.log ("Original Magicians : ");
show_magicians(magicianNames);

// Show Great
console.log("\nGreat Magicians : ");
show_magicians(greatMagicianNames);