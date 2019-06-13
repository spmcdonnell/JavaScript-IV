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
        return `${student.name} receives a perfect score on ${subject}`;
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
        return `${this.name} has submitted a PR request for ${subject}`;
    }

    sprintChallenge() {
        return `${this.name} has begun a sprint challenge on ${subject}`;
    }
}

class ProjectManager extends Instructor {
    constructor(props) {
        super(props);

        this.gradClassName = props.gradClassName;
        this.favInstructor = props.favInstructor;
    }
}
