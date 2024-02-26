let obj1 = {
    firstName: "Suzy",
    lastName: "Waterson",
    age: 18,
    id: 5592,
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}

console.log(obj1.fullName());
console.log(obj1.age);
console.log(obj1["firstName"]);