function classDecorator<T extends {new (...args:any[]): {}}>( constructor: T) {
    return class extends constructor {
        myProp = 'New prop';
        hello = 'override';
    }
}

@classDecorator
export class SuperClass {
    public myProp: string = '123abc';

    print() {
        console.log('Hello World');
    }
}

// definicion
console.log(SuperClass);

// instancia
const myClass = new SuperClass();
console.log(myClass);