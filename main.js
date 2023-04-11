class Employee {
  constructor(name, age, salary) {
    this._name = name;
    this._age = age;
    this._salary = salary;
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
  constructor(name, age, salary, lang) {
    super(name, age, salary);
    this._lang = lang;
  }
  get salary() {
    return (this._salary *= 3);
  }
}

const programmerFirst = new Programmer("Petro", 20, 8000, [
  "Ukrainian",
  "English",
]);

console.log(programmerFirst);
console.log(programmerFirst.salary);

const programmerSecond = new Programmer("Alisa", 24, 15000, [
  "Ukrainian",
  "English",
  "Spanish",
]);

console.log(programmerSecond);
console.log(programmerSecond.salary);

const programmerThird = new Programmer("Ivan", 53, 24000, [
  "Ukrainian",
  "Italian",
  "German",
]);

console.log(programmerThird);
console.log(programmerThird.salary);
