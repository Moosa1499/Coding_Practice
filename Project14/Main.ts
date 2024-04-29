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

// Step#1 Print The Name of The Guest Unable To Attend :

let guestWhocantAttend : String = "Bill Gates"
console.log(`${guestWhocantAttend} will be Unable to Attend The Event .`);

//Step#2 : Replace The Guest who cant Attend

let newGuest : string = "Zeeshan Afzal"

let indexOfguestWhocantAttend : number = guestList.indexOf(guestWhocantAttend)
console.log(indexOfguestWhocantAttend);

if (indexOfguestWhocantAttend !== -1 )
{guestList[indexOfguestWhocantAttend]= newGuest


}
// console.log(guestList[5])

// Step 3 Print The new invitations.

console.log ("Second Set Of Invitations : ")
guestList.forEach((guest:string) =>
{
    console.log(`Dear ${guest} You are invited to our end of Semester Dinner.`)
});
