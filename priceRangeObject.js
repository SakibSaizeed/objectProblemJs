const priceRange = [
    { label: "$", catagory: "cheap", minPerPerson: 0, maxPerPerson: 10 },
    { label: "$$", catagory: "medium", minPerPerson: 11, maxPerPerson: 20 },
    { label: "$$$", catagory: "expensive", minPerPerson: 21, maxPerPerson: 50 },
];

const restaurants = [
    { id: 1, averagePerHead: 5, Name: "StarKabab", Address: "Banani" },
    { id: 2, averagePerHead: 15, Name: "KacchiVai", Address: "Dhanmondi" },
];

function SearchByPrice(maxPerPerson) {
    for (let keys of restaurants) {
        console.log(keys);
    }
}
SearchByPrice(2);
// /console.log(result);