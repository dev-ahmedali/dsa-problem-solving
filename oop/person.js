
class Person {
  constructor(name, age, isMarried) {
    this.name = name;
    this.age = age;
    this.isMarried = isMarried;
  }
  updateInfo(isMarried) {
    this.isMarried = isMarried;
  }
}

let shawonBio = new Person("Shawon", 26, true);
shawonBio.updateInfo = false;
console.log(shawonBio);