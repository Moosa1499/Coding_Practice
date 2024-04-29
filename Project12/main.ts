// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, 
// and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

let favoriteTransportation : Array<[transport: string , brand:string , model: string]> = []

favoriteTransportation.push (["Car","Nissan","GTR"])
favoriteTransportation.push (["Bike","Suzuki","Hayabusa"])
favoriteTransportation.push (["Jet","Lockheed Martin","F-22"])

// console.log(favoriteTransportation)

favoriteTransportation.forEach(([transport, brand, model]) =>
{console.log(`I would like to own a ${brand} ${model} ${transport}`)
}
)
 