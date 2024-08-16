const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  const numbersArray = [];
  const morseArray = [];

  for (i = 0; i < expr.length; i += 10) {
    numbersArray.push(expr.substring(i, i + 10));
  }

  for (const number of numbersArray) {
    let str = "";

    for (let i = 0; i < number.length; i += 2) {
      const pair = number.substring(i, i + 2);
      if (pair === "10") {
        str += ".";
      } else if (pair === "11") {
        str += "-";
      }
    }

    morseArray.push(str);
  }

  return morseArray.map((morse) => MORSE_TABLE[morse] || " ").join("");
}

module.exports = {
  decode,
};
