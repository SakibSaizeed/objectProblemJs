const obj1 = new Address(2, 3, 4); // an seperate object
const obj2 = new Address(2, 3, 4); //this is also an different object
console.log(areSameObject(obj1, obj2)); //check objects are same or not
console.log(areSamevalue(obj1, obj2)); //checking the value of the objects are same or not

function Address(street, city, zipcode) {
    this.street = street;
    this.city = city;
    this.zipcode = zipcode;
}

function areSameObject(obj1, obj2) {
    if (obj1 === obj2) return true;
    else return false;
}

function areSamevalue(obj1, obj2) {
    if (
        obj1.street === obj2.street &&
        obj1.city === obj2.city &&
        obj1.zipcode === obj2.zipcode
    )
        return true;
    else return false;
}