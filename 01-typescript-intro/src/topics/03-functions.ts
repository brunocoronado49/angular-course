function addNumbers(a: number, b: number): number {
    return a + b;
}

// const result = addNumbers(8, 5);
// console.log(result);

// const addNumbersArrow = (a: number, b: number): number => {
//     return a + b;
// }
const addNumbersArrow = (a: number, b: number): string =>  `${a + b}`;

// const resultArrow = addNumbersArrow(2, 5);
// console.log(resultArrow);

interface Character {
    name: string;
    hp: number;
    showHp: () => void;
}

const healCharacter = (character: Character, amount: number) => {
    character.hp += amount;
}

const strider: Character = {
    name: 'Strider',
    hp: 100,
    showHp() {
        console.log(`Puntos de vida: ${this.hp}`);
    },
}

healCharacter(strider, 45);

strider.showHp();

export {};