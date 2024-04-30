/*41.	Magicians: Make a array of magician’s names. 
Pass the array to a 
function called show_magicians(), 
which prints the name of each magician in the array.*/

// Array of Magician Names :

const magicianNames : string[] = ["Harry","Garry","Timmy",
"Albus","Benjamin"];

function show_magicians(Magicians : string[]): void
{
    for (const magician of Magicians) {
        console.log (magician)
    }
}
show_magicians(magicianNames);
