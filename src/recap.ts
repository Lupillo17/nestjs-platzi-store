const suma = (a: number, b: number) => {
  return a + b;
};

suma(12, 12);

class Persona {
  private age;
  private name;

  constructor(age: number, name: string) {
    this.age = age;
    this.name = name;
  }

  getSummary() {
    return `my name is ${this.name}, ${this.age}`;
  }
}

const nicolas = new Persona(15, 'nicolas');
nicolas.getSummary();
