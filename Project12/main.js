// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, 
// and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
var favoriteTransportation = [];
favoriteTransportation.push(["Car", "Nissan", "GTR"]);
favoriteTransportation.push(["Bike", "Suzuki", "Hayabusa"]);
favoriteTransportation.push(["Jet", "Lockheed Martin", "F-22"]);
// console.log(favoriteTransportation)
favoriteTransportation.forEach(function (_a) {
    var transport = _a[0], brand = _a[1], model = _a[2];
    console.log("I would like to own a ".concat(brand, " ").concat(model, " ").concat(transport));
});
