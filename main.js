class Employee {
  constructor(argument) {
    this._name = argument.name;
    this._age = argument.age;
    this._salary = argument.salary;
  }
  get name() {
    return this._name;
  }
  set name(valueN) {
    this._name = valueN;
  }
  get age() {
    return this._age;
  }
  set age(valueA) {
    this._age = valueA;
  }
  get salary() {
    return this._salary;
  }
  set salary(valueS) {
    this._salary = valueS;
  }
}

class Programmer extends Employee {
  constructor(argument) {
    super(argument);
    this._lang = argument.lang;
  }
  get salary() {
    return (this._salary *= 3);
  }

}

const programmerFirst = new Programmer({
  name: "Petro",
  age: 20,
  salary: 8000,
  lang: ["Ukrainian", "English"],
});

console.log(programmerFirst);
console.log(programmerFirst.salary);

const programmerSecond = new Programmer({
  name: "Alisa",
  age: 24,
  salary: 15000,
  lang: ["Ukrainian", "English", "Spanish"],
});

console.log(programmerSecond);
console.log(programmerSecond.salary);

const programmerThird = new Programmer({
  name: "Ivan",
  age: 53,
  salary: 24000,
  lang: ["Ukrainian", "Italian", "German"],
});

console.log(programmerThird);
console.log(programmerThird.salary);
