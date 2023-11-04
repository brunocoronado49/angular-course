export function whatsMyType<T>(argument: T): T {
    return argument;
}

let resultString = whatsMyType<string>('Hola Mundo');
console.log(resultString);

let resultNumber = whatsMyType<number>(85);
console.log(resultNumber);

let resultArray = whatsMyType<number[]>([1,2,2,3]);
console.log(resultArray);

