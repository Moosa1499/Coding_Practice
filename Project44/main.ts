/*44.	Sandwiches: Write a function that accepts a array 
of items a person wants on a sandwich. 
The function should have one parameter that collects as 
many items as the function call provides, and it should 
print a summary of the sandwich that is being ordered. 
Call the function three times,
using a different number of arguments each time. */

function makeSandwich(...items : string[]): void {
    console.log("Sandwich Summary:");
    if (items.length === 0) {
        console.log("   - You have Ordered an Empty Sandwich ,Please Add Some Items .")
    } else {
        items.forEach((item , index) => {
                console.log(`   ${index + 1}.${item}`);
        });
    }

console.log("\n");
}

// Call Function 

makeSandwich("Turkey Bacon","Lettuce","Tomato");
makeSandwich("Beef","Cheese","Jalapeno");
makeSandwich("Chicken","Lettuce","Mayonaise");