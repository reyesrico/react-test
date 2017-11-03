
class Person {

    constructor(public firstName: string, public lastName: string) {

    }
}

class Teacher extends Person {
    constructor(public firstName: string, public lastName: string, public subject: string) {
        super(firstName, lastName);
    }
}