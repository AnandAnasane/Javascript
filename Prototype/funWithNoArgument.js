function printDetails(name){
    this.vehicleName = name;
}

printDetails.prototype.printName = function (){
    console.log(`Vehicle Name is ` + this.vehicleName)
}

const Car = new printDetails("Audi")
Car.printName();

