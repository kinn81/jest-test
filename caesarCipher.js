let caesarCipher = {
  encrypt: (s, offset) => {
    let encrypted = "";

    for (let i = 0; i < s.length; i++) {
      let char = s.charAt(i);
      encrypted += getNextChar(char, offset);
    }
    return encrypted;
  },
};

function getNextChar(char, offset) {
  if (char === " " || (!/[a-z]/.test(char) && !/[A-Z]/.test(char))) return char;
  let lowerRange = "abcdefghijklmnopqrstuvwxyz";
  let upperRange = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let newChar;
  //Its a lower case character
  if (/[a-z]/.test(char)) {
    let i = lowerRange.indexOf(char);
    while (true) {
      if (offset == 0) {
        return lowerRange[i];
      }
      if (i == 25) {
        i = 0;
      } else {
        i++;
      }
      offset--;
    }
  }
}

//console.log("this is a" + getNextChar(" ", 1) + "space");
export { caesarCipher };
