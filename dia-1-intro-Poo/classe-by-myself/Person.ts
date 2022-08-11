class Person {
  private _name: string;
  private _age: number;
  private _height: number;

  constructor(n: string, a: number, h: number) {
    // console.log('Building person');
    this._name = n;
    this._age = a;
    this._height = h;
  }

  sleep() {
    return console.log(`${this._name} is sleeping ZzZzZzZ`);
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    if(newName.length > 3) {
      this._name = newName;
    }
  }

  get age() {
    return this._age;
  }

  get height() {
    return this._height;
  }
}

const p1 = new Person('Vitor', 25, 182);
const p2 = new Person('George', 64, 176);

// p1.sleep();
// p2.sleep();

console.log(p1.age);

p2.name = 'Martin';
console.log(p2.name);