// Enum-like object for food types
const FoodType = Object.freeze({
    FAST_FOOD: "Fast Food",
    VEGETABLE: "Vegetable",
    FRUIT: "Fruit",
    NUT: "Nut"
});

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
function displayOutput(message) {
    const outputDiv = document.getElementById('output');
    const paragraph = document.createElement('p');
    paragraph.textContent = message;
    outputDiv.appendChild(paragraph);
}

// Demonstration
const teacher = new Teacher("Alice", 30, "Math");
const student = new Student("Bob", 16, "10th");
const cat = new Cat("Whiskers");
const dog = new Dog("Buddy");
const burger = new FastFood();
const carrot = new Vegetable();


displayOutput(teacher.describeRole()); // Alice is a teacher who teaches Math.
displayOutput(student.describeRole()); // Bob is a student in grade 10th.
displayOutput(cat.makeSound());        // Whiskers says Meow!
displayOutput(dog.makeSound());        // Buddy says Woof!
displayOutput(burger.getType()); // Fast Food
displayOutput(burger.prepare()); // Preparing fast food!
displayOutput(carrot.getType()); // Vegetable
displayOutput(carrot.prepare()); // Washing and chopping vegetables!
