export class Person {
    constructor(public firtsName: string, public lastName: string, private address: string = 'No address') {
        this.firtsName = firtsName;
        this.lastName = lastName;
        this.address = address;
    }
}

// export class Hero extends Person {
//     constructor(
//         public alterEgo: string,
//         public age: number,
//         public realName: string,
//     ) {
//         super(realName, 'Ciudad Gotica');
//     }
// } 

export class Hero {    
    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person,
    ) {
        // this.person = new Person(realName);
    }
}
const person = new Person('Bruce', 'Wayne', 'Ciudad gotica');
const bruce = new Hero('Batman', 35, 'Bruce Wayne', person);
console.log(bruce);