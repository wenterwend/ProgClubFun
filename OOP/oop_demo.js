// Enum-like object for food types
const FoodType = Object.freeze({
    FAST_FOOD: "Fast Food",
    VEGETABLE: "Vegetable",
    FRUIT: "Fruit",
    NUT: "Nut"
});

//REGION Classes
// Base class: Person
class Person {
    #name; // Encapsulation: private field
    constructor(name, age) {
        this.#name = name;
        this.age = age;
    }

    getName() {
        return this.#name; // Encapsulation: controlled access
    }

    // Abstraction: Abstract method
    describeRole() {
        throw new Error("Method 'describeRole()' must be implemented.");
    }
}

//Subclass: Pope
class Pope extends Person {
    constructor(name, age, papalName) {
        super(name, age);
        this.papalName = papalName;
    }
    getName() {
        return `${super.getName()} is the Pope with the papal name ${this.papalName}.`;
    }
    // Polymorphism: Overriding describeRole
    describeRole() {
        return `The pope serves as the spiritual father and servant leader of the universal Church`;
    }
}

// Subclass: Teacher
class Teacher extends Person {
    constructor(name, age, subject) {
        super(name, age);
        this.subject = subject;
    }

    // Polymorphism: Overriding describeRole
    describeRole() {
        return `${this.getName()} is a teacher who teaches ${this.subject}.`;
    }
}

// Subclass: Student
class Student extends Person {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }

    // Polymorphism: Overriding describeRole
    describeRole() {
        return `${this.getName()} is a student in grade ${this.grade}.`;
    }
}

// Subclass: Create your own Person here!

// Base class: Food
class Food {
    #type; // Encapsulation: private field
    constructor(type) {
        this.#type = type;
    }

    getType() {
        return this.#type; // Encapsulation: controlled access
    }

    // Abstraction: Abstract method
    prepare() {
        throw new Error("Method 'prepare()' must be implemented.");
    }
}


// Example subclass: FastFood
class FastFood extends Food {
    constructor() {
        super(FoodType.FAST_FOOD);
    }

    prepare() {
        return "Preparing fast food!";
    }
}

// Example subclass: Vegetable
class Vegetable extends Food {
    constructor() {
        super(FoodType.VEGETABLE);
    }

    prepare() {
        return "Washing and chopping vegetables!";
    }
}

// Example subclass: Create your own Food here!

// Base class: Animal
class Animal {
    #species; // Encapsulation: private field
    constructor(species) {
        this.#species = species;
    }

    getSpecies() {
        return this.#species; // Encapsulation: controlled access
    }

    // Abstraction: Abstract method
    makeSound() {
        throw new Error("Method 'makeSound()' must be implemented.");
    }
}

// Subclass: Cat
class Cat extends Animal {
    constructor(name) {
        super("Cat");
        this.name = name;
    }

    // Polymorphism: Overriding makeSound
    makeSound() {
        return `${this.name} says Meow!`;
    }
}

// Subclass: Dog
class Dog extends Animal {
    constructor(name) {
        super("Dog");
        this.name = name;
    }

    // Polymorphism: Overriding makeSound
    makeSound() {
        return `${this.name} says Woof!`;
    }
}

// Subclass: Create your own Animal here!


// Utility function to display output on the page
function showOutput(message) {
    const outputDiv = document.getElementById('output');
    const paragraph = document.createElement('p');
    paragraph.textContent = message;
    outputDiv.appendChild(paragraph);
}

function runUserCode() {
    const userCode = document.getElementById('userCode').value;
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = ""; // Clear previous output
    try {
        // Evaluate the user's code
        eval(userCode);
    } catch (error) {
        // Display any errors in the output div
        const errorParagraph = document.createElement('p');
        errorParagraph.textContent = `Error: ${error.message}`;
        outputDiv.appendChild(errorParagraph);
    }
}

//REGION execution

// Demonstration
const teacher = new Teacher("Alice", 30, "Math");
const student = new Student("Bob", 16, "10th");
const cat = new Cat("Whiskers");
const dog = new Dog("Buddy");
const burger = new FastFood();
const carrot = new Vegetable();

const pope = new Pope("Jorge Mario Bergoglio",88,"Francis");
showOutput(pope.getName()); // Jorge Mario Bergoglio is the Pope with the papal name Francis.
showOutput(pope.describeRole());

showOutput(teacher.describeRole()); // Alice is a teacher who teaches Math.
showOutput(student.describeRole()); // Bob is a student in grade 10th.
showOutput(cat.makeSound());        // Whiskers says Meow!
showOutput(dog.makeSound());        // Buddy says Woof!
showOutput(burger.getType());       // Fast Food
showOutput(burger.prepare());       // Preparing fast food!
showOutput(carrot.getType());       // Vegetable
showOutput(carrot.prepare());       // Washing and chopping vegetables!


/*

const dog2 = new Dog("Jake");
displayOutput(dog2.makeSound())

class MilkShake extends Food {
constructor() {
super("MilkShake");
}
prepare() {
return "Blend Ice Cream and ingredients";
}
}
const milkshake = new MilkShake();
displayOutput(milkshake.prepare());
*/