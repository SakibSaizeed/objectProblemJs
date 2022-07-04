// const address = {
//     //     // street: 303,
//     //     // city: "Dhaka",
//     //     // zipcode: 1020,
// };

//Factory Function

// function factoryFunction(street, city, zipcode) {
//   return {
//     street,
//     city,
//     zipcode,
//   };
// }
// console.log(factoryFunction(1, "Ontario", 5690));

//Constructor function
const result = new Address(2, 3, 4);
console.log(result);

function Address(street, city, zipcode) {
    this.street = street;
    this.city = city;
    this.zipcode = zipcode;
}