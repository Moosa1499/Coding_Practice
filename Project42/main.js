/*42.	Great Magicians: Start with a copy of your program
from Exercise 39. Write a function called make_great()
that modifies the array of magicians by adding the phrase
the Great to each magician’s name. Call show_magicians()
to see that the list has actually been modified.*/
// Array of Magician Names :
var magicianNames = ["Harry", "Garry", "Timmy",
    "Albus", "Benjamin"];
function show_magicians(Magicians) {
    for (var _i = 0, Magicians_1 = Magicians; _i < Magicians_1.length; _i++) {
        var magician = Magicians_1[_i];
        console.log(magician);
    }
}
function make_great(Magicians) {
    var greatMagicians = Magicians.map(function (magician) {
        return "The Great ".concat(magician);
    });
    return greatMagicians;
}
//  Modify Array :
var greatMagicianNames = make_great(magicianNames);
// Show Original
console.log("Original Magicians : ");
show_magicians(magicianNames);
// Show Great
console.log("\nGreat Magicians : ");
show_magicians(greatMagicianNames);
