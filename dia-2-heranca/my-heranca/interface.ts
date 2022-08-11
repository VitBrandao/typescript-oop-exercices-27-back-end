interface Animals {
  name: string;
  age: number;
  height: number;
}

class Fish implements Animals {
  constructor(
    public name: string, 
    public age: number, 
    public height: number
  ) {}

  getAge() {
    return this.age;
  }
}

const tainha = new Fish('Tainha', 2, 1.5);
console.log(tainha.getAge());