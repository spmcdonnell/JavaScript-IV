// CODE here for your Lambda Classes

class Person {
    constructor(props) {
        this.name = props.name;
        this.age = props.age;
        this.location = props.location;
    }

    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}.`;
    }
}

class Instructor extends Person {
    constructor(props) {
        super(props);

        this.speciality = props.speciality;
        this.favLanguage = props.favLanguage;
        this.catchPhrase = props.catchPhrase;
    }

    demo(subject) {
        return `Today we are learning about ${subject}.`;
    }

    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}.`;
    }
}

class Student extends Person {
    constructor(props) {
        super(props);

        this.previousBackground = props.previousBackground;
        this.className = props.className;
        this.favSubjects = props.favSubjects;
    }

    listsSubjects() {
        return this.favSubjects.join(', ');
    }

    PRAssignment(subject) {
        return `${this.name} has submitted a PR request for ${subject}.`;
    }

    sprintChallenge(subject) {
        return `${this.name} has begun a sprint challenge on ${subject}.`;
    }
}

class ProjectManager extends Instructor {
    constructor(props) {
        super(props);

        this.gradClassName = props.gradClassName;
        this.favInstructor = props.favInstructor;
    }

    standUp(channelName) {
        return `${this.name} announces to ${
            this.channelName
        }, @channel standy times!​​​​​`;
    }

    debugsCode(student, subject) {
        var possessive =
            student.name[student.name.length - 1] === 's' ? "'" : "'s";

        return `${this.name} debugs ${
            student.name
        }${possessive} code on ${subject}.`;
    }
}

var bob = new Instructor({
    name: 'Bob',
    location: 'Cairo',
    age: 46,
    favLanguage: 'COBOL',
    specialty: 'Front-end',
    catchPhrase: `And that's the way it goes.`
});

var chris = new Student({
    name: 'Chris',
    location: 'Timbuktu',
    age: 6,
    previousBackground: 'Invented computers',
    className: 'WEB21',
    favSubjects: ['Math', 'Culinary Art', 'Veterinary Medicine']
});

var jamie = new Student({
    name: 'Jamie',
    location: 'Kansas',
    age: 101,
    previousBackground: 'Lion tamer',
    className: 'DS5',
    favSubjects: ['Literature', 'PhysEd', 'Psychology']
});

var kat = new ProjectManager({
    name: 'Kat',
    location: 'Siberia',
    age: 11,
    favLanguage: 'Assembly',
    specialty: 'games',
    catchPhrase: `Wubbalubbadubdub.`,
    gradClassName: 'WEB21',
    favInstructor: 'Bob'
});

console.log(bob.speak());
console.log(bob.demo('Angular'));
console.log(bob.grade(chris, 'React lifecycle methods'));

console.log(chris.speak());
console.log(chris.listsSubjects());
console.log(chris.PRAssignment('OOP exercise 1'));

console.log(kat.speak());
console.log(kat.demo('Webpack'));
console.log(kat.grade(jamie, 'CSS'));
console.log(kat.standUp('#web21'));
console.log(kat.debugsCode(jamie, 'merge sort'));
console.log(kat.debugsCode(chris, 'Node'));
