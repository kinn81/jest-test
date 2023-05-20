function reverseString(s) {
  let returnString = "";
  for (let i = s.length - 1; i >= 0; i--) {
    returnString += s.charAt(i);
  }
  return returnString;
}

export { reverseString };
