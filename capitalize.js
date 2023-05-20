function capitalize(s) {
  let returnString = "";
  for (let i = 0; i < s.length; i++) {
    if (i == 0) {
      returnString += s.charAt(i).toUpperCase();
    } else {
      returnString += s.charAt(i).toLowerCase();
    }
  }

  return returnString;
}

export { capitalize };
