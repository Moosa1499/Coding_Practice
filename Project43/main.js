/*43.	Unchanged Magicians: Start with your work from
Exercise 40. Call the function make_great() with a copy of
the array of magicians’ names. Because the original array
will be unchanged, return the new array and store it in a
separate array. Call show_magicians() with each array to
show that you have one array of the original names
and one array with the Great added to each magician’s name.*/
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
