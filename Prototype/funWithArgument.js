function Animal (name) {
    this.animalName = name;
}


Animal.prototype.speak = function (sound) {
    console.log(this.animalName + `Makes a sound as ` + sound)
}

Animal.prototype.eat = function (food) {
    console.log(this.animalName + ` eat ` + food)
}

const Dog = new Animal('Dog')
Dog.speak("Bark")
Dog.eat("Bones")