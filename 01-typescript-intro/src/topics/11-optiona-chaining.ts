export interface Passenger {
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: 'Bruno',
}

const passenger2: Passenger = {
    name: 'Francisco',
    children: ['seven', 'atena'],
}

const printChildren = (passenger: Passenger) => {
    const manyChildren = passenger.children?.length || 0;
    console.log(manyChildren);
}

printChildren(passenger1);
printChildren(passenger2);
