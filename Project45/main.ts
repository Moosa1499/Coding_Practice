/*45.	
Cars: Write a function that stores information about
a car in a Object. 
The function should always receive a manufacturer and a 
model name. It should then accept an arbitrary number of 
keyword arguments. Call the function with the required 
information and two other name-value pairs, such as a color 
or an optional feature. Print the Object that’s returned to 
make sure all the information was stored correctly.

 */


function createCar(Manufacturer: string , Model: string, ...    
properties: [string, any][]): any {
    const car: any ={
        Manufacturer,
        Model,
    };
    for (const [key, value] of properties){
        car[key] = value;
    }
return car;
}
// Example :
const myCar = createCar("Toyota","Prius",["Color","White"],
    ["OptionalFeature","Sun roof"]);

 const dreamCar = createCar("Nissan","GTR",["Color","Silver"],
    ["OptionalFeature","Super Charger"]);

const fancyCar = createCar("Lamborghini","Aventador",["Color","Green"],
    ["OptionalFeature","Carbon Fiber Kit"]);

    console.log(myCar);
    console.log(dreamCar);
    console.log(fancyCar);