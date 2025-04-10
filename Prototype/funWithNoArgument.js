function printDetails(name){
    this.vehicleName = name;
}

printDetails.prototype.printName = function (){
    console.log(`Vehicle Name is ` + this.vehicleName)
}

const Car = new printDetails("Audi")
Car.printName();



///////////////////////

// Prototype with Object

var student = {
    name: 'Anand',
    city: 'Pune',
    printName: function(){
        console.log('MyName is' + this.name)
    }

}

let Student2 = {
    name: 'Rahul',
    city: 'Banglore'
}

Student2.__proto__ = student
Student2.printName();
