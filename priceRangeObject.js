// const priceRange = [
//     { label: "$", catagory: "cheap", minPerPerson: 0, maxPerPerson: 10 },
//     { label: "$$", catagory: "medium", minPerPerson: 11, maxPerPerson: 20 },
//     { label: "$$$", catagory: "expensive", minPerPerson: 21, maxPerPerson: 50 },
// ];
// SEARCH A PRICE from the selected price range and display the result
const restaurants = [
    { id: 1, averagePerHead: 5, Name: "StarKabab", Address: "Banani" },
    { id: 2, averagePerHead: 15, Name: "KacchiVai", Address: "Dhanmondi" },
    { id: 3, averagePerHead: 21, Name: "Westin", Address: "Gulshan" },
];

function SearchByPrice(maxPerPerson) {
    // for (let keys of restaurants) {
    //     console.log(keys);
    // }  // UnComment this if we want to display all the array of objects

    const searchResult = restaurants.find(function(resObjElement) {
        return resObjElement.averagePerHead === maxPerPerson;
    }); // for Searching an array element from an Object we have to use fine method.

    if (searchResult === undefined)
        console.log("Not Found!!!Check the price again or go Home!!");
    else console.log(searchResult);
}
SearchByPrice(0);