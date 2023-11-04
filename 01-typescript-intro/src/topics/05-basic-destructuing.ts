interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 80,
    songDuration: 5.8,
    song: 'N.I.B',
    details: {
        author: 'Black Sabbath',
        year: 1970
    }
}

const {song: rola, details: {author}} = audioPlayer;

console.log(rola);
console.log(author);


export {};