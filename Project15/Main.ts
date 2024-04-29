//14.	Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner.
// Then use your list to print a message to each person, inviting them to dinner.

let guestList : Array <String> = [
    "Dr Zia Khan ",
    "Sir Ukasha",
    "Governor Kamran Tessouri",
    "Daniyal Nagori",
    "Elon Musk",
    "Bill Gates",
    "Satoshi Nakamura"
];


// 16.	More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

// Step #1 : Informing people that you found a bigger dinner table.
for (let guest of guestList) {
    console.log(`Salutations ${guest} We have Found a larger Dinner Table .`)
};
// Step#2 :Add one new guest to the beginning of your array.
let newGuestatStart :string= "Zeeshan Afzal"

guestList.unshift(newGuestatStart);
// console.log(guestList);

// Step#3 : Add one new guest to the middle of your array.

let newGuestinMiddle : string = "Sir Waqas"

let middleIndex : number = Math.floor(guestList.length/2);

guestList.splice(middleIndex,0, newGuestinMiddle) ;

// console.log (guestList);

// Step#4 : Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

let newGuestatEnd : string = "Moosa Afzal"
guestList.push(newGuestatEnd);
// console.log(guestList);

// Step#5 : Print the Invites for the new list.

console.log("New Set Of Invitations:");
for(let guest of guestList)
    {
        console.log(`Dear ${guest}, You Are Invited to our Annual Dinner.`)
    };