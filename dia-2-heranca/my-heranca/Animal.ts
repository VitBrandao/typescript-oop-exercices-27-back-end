class Animal {
  constructor(public name: string, protected age: number) {};

  run() {
    return `${this.name} is running`;
  }
}

class Mammal extends Animal {
  walk() {
    return `${this.name} is walking`;
  }
}

const tiger = new Mammal('Tiger', 8);
// console.log(tiger.run());
// console.log(tiger.walk());

class Bird extends Animal {
  fly() {
    return `${this.name} is flying`;
  }

  showAge() {
    return `Animal age: ${this.age}`;
  }
}

const parrot = new Bird('Parrot', 10);
console.log(parrot.fly());
console.log(parrot.showAge());

// protected: o atributo pode ser modificado pelas subclasses