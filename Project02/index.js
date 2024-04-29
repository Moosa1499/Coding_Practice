"use strict";
// Name Cases: Store a name in a variable, and show in lower, upper, title case
let PersonName = "Moosa Afzal Dawood";
// Step#1 : Show in Lower Case
let LowercaseName = PersonName.toLowerCase();
console.log(LowercaseName);
// Step#2 : Show in Upper Case
let uppercaseName = PersonName.toLocaleUpperCase();
console.log(uppercaseName);
// Step#3 : Show Name in Title Case
let words = PersonName.split(" ");
let TitleCaseName = "";
for (let i = 0; i < words.length; i++) {
    TitleCaseName += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase() + " ";
}
;
console.log(TitleCaseName);
