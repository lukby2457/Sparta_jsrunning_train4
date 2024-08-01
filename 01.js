// 1.
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  info() {
    console.log(`저의 이름은 ${this.name} 나이는 ${this.age} 입니다.`)
  }
}

// 2.
let jung = new Person("yuno", 20);
jung.info();

// 3.
class Student {
  constructor(name, age, study) {
    this.name = name;
    this.age = age;
    this.study = study;
  }

  info() {
    console.log(`저의 이름은 ${this.name} 나이는 ${this.age} 현재 ${this.study}를 학습하고 있습니다`)
  }
}

// 4.
let student1 = new Student("준현", 12000, "javascript");
student1.info();

// 5.
class Tutee extends Person {
  constructor(name, age, study) {
    super(name, age);
    this.study = study;
  }

  info() {
    console.log(`저의 이름은 ${this.name} 나이는 ${this.age} 현재 ${this.study}를 학습하고 있습니다`)
  }
}

let tutee = new Tutee("재상", 20, "javascript");
tutee.info();

// 6.
console.log(student1 instanceof Person);
console.log(tutee instanceof Person);
console.log(tutee instanceof Student);