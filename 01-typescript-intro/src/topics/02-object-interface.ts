
const skills: string[] = ['Bash', 'Counter', 'Healing'];

interface Character {
    name: string;
    hp: number;
    skills: string[];
    hometwon?: string;
}

const strider: Character = {
    name: 'strider',
    hp: 100,
    skills: ['Bash', 'Counter']
}

strider.hometwon = 'Rivendell';

console.table(strider);

export {};