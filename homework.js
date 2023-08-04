// class Hamster { 
//     constructor(owner, name, price) {
//         this.owner = owner;
//         this.name = name;
//         this.price = price;
//     }
// wheelRun() {
//     console.log("squeak squeak");
//     }
// eatFood() {
//     console.log("nibble nibble");
// }
// getPrice() {
//     return this.price;
// }
// }
// let gpig = new Hamster('Griselda', 'Blanco', '15'); //not sure why i cannot get the price to return its value*??
// gpig.wheelRun();
// gpig.eatFood();
// console.log(gpig.getPrice());

// class Person {
//     // let x = 0;
//     constructor(name, age = 0, height = 0, weight = 0, mood = 0, hamsters = [], bankAccount = 0) {
//         this.name = name;
//         this.age = age;
//         this.height = height;
//         this.weight = weight;
//         this.mood = mood;
//         this.hamsters = hamsters;
//         this.bankAccount = bankAccount;
//     }
//  getName() {
//     return this.name;
//  }   
//  getAge() {
//     return this.age;
//  }
//  getWeight() {
//     return this.weight;
//  }
//  greet() {
//     console.log("${this.name}");
//  }
//  eat() {
//     this.weight++; 
//     this.mood++;
//  }
//  exercise() {
//     this.weight--;
//  }
//  ageUp() {
//     this.age++; 
//     this.height++; 
//     this.weight++; 
//     this.mood--; 
//     this.bankAccount+=10;
//  }
//  buyHamster(hamster) {
//     //  Hamster.push(['']), ++this.mood; //?? how to decrement by value of hamster??
//     this.hamsters.push(hamster);
//     this.mood+=10;
//     this.bankAccount-=hamster.getPrice();
// }
// }

// let personTimmy = new Person('Timmy');
// console.log(personTimmy);
// personTimmy.ageUp();
// personTimmy.ageUp();
// personTimmy.ageUp();
// personTimmy.ageUp();
// personTimmy.ageUp();
// personTimmy.getAge();
// personTimmy.eat();
// personTimmy.eat();
// personTimmy.eat();
// personTimmy.eat();
// personTimmy.eat();
// personTimmy.exercise();
// personTimmy.exercise();
// personTimmy.exercise();
// personTimmy.exercise();
// personTimmy.exercise();
// personTimmy.ageUp();
// personTimmy.ageUp();
// personTimmy.ageUp();
// personTimmy.ageUp();

// const Gus = new Hamster("Timmy");
// personTimmy.buyHamster(Gus);

// personTimmy.ageUp();
// personTimmy.ageUp();
// personTimmy.ageUp();
// personTimmy.ageUp();
// personTimmy.ageUp();
// personTimmy.ageUp();
// personTimmy.eat();
// personTimmy.eat();
// personTimmy.exercise();
// personTimmy.exercise();
// // let personTrina = new Person('Trina', 35, 72);
// // console.log(personTrina);
// personTimmy.buyHamster(gpig);
// console.log(personTimmy);
// this.weight(5);
// this.age(4);
//?? confused on 6 - 11

class Dinner {
    constructor(appetizer, entree, dessert) {
        this.appetizer = appetizer;
        this.entree = entree;
        this.dessert = dessert;
    }
    cooks () {
        console.log("new meal");
    }
}
const newDinner = new Dinner('nachos', 'chicken', 'cookies');
console.log(newDinner);
class Chef {
    constructor (meal) {
        this.meal = meal;
        this.dinners = [];
    }
    cookDinner () {
        const newDinner = new Dinner(this.meal, this.dinners.lenght);
        this.dinners.push(newDinner);
     }
// // ??three arguments
 }
 const steak = new Chef('Steak');
 steak.cookDinner();
 steak.cookDinner();
 steak.cookDinner();
 console.log(steak);

// 3 dinners?