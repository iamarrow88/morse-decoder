const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const space = '**********';
    const mapOfChars = {
        '10': '.',
        '11': '-'
    }
    let wordsArray = expr.split(space);
    let newArray = wordsArray.map(word => {
        let index = 0;
        let subArray = [];
        for(let i = 0; i < word.length/10; i++){
            let binaryLetter = word.slice(index, index + 10);
            let binaryLetterLite;
            for(let k = 0; k < binaryLetter.length; k++) {
                if(binaryLetter[k] !== '0') {
                    binaryLetterLite = binaryLetter.slice(k, binaryLetter.length);
                    break;
                }
            }
            let theWord = '';
            for (let q = 0; q < binaryLetterLite.length; q+= 2) {
                let chunkOfBinaryLetterLite = binaryLetterLite[q] + binaryLetterLite[q + 1];
                theWord += mapOfChars[chunkOfBinaryLetterLite];
            }
            const result = MORSE_TABLE[theWord];
            subArray.push(result);
            index += 10;
        }
        return subArray.join('');
    })
    return newArray.join(' ');
}
module.exports = {
    decode
}