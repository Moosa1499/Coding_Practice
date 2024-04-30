/*39.	City Names: Write a function called city_country()
 that takes in the name of a city and its country.
 The function should return a string formatted like this:
"Lahore, Pakistan"
Call your function with at least three city-country pairs, and print the value that’s returned.
 */
// Function :
var city_country = function (city, country) {
    return "".concat(city, ",").concat(country);
};
// Test Runs :
console.log(city_country("Rome", "Italy"));
console.log(city_country("Tokyo", "Japan"));
console.log(city_country("Seoul", "South Korea"));
