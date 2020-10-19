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
function decode (expr) {
  let digitChars = [];
  for (let i = 0; i < expr.length/10; i++) {
    digitChars.push(expr.slice(i*10, (i + 1)*10));
  }
  
  const morseChars = digitChars.map((char) => char.replace(/\*{10}/g, ' ').replace(/11/g, '-').replace(/10/g, '.').replace(/0/g, ''));

  let wordsArray = [];
  morseChars.forEach(char => wordsArray.push(MORSE_TABLE[char] || ' '));

  return wordsArray.join('');

}

module.exports = {
  decode,
};