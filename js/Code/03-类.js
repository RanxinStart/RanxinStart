class User {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + ' ' + lastName;
    }
}
function greeter(person) {
    return 'Hello, ' + person.firstName + ' ' + person.lastName;
}
let user = new User('Yee', 'Huang');
console.log(greeter(user));
