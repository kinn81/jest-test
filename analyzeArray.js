function analyzeArray(arr) {
  let avg = arr.reduce((total, item) => total + item) / arr.length;
  let min = arr.reduce((smallest, item) => {
    if (item < smallest) {
      smallest = item;
    }
    return smallest;
  });

  let max = arr.reduce((biggest, item) => {
    if (item > biggest) {
      biggest = item;
    }
    return biggest;
  });

  let length = arr.reduce((count, item) => ++count, 0);
  return {
    avg: avg,
    min: min,
    max: max,
    length: length,
  };
}

//analyzeArray([5, 3, 7]);
export { analyzeArray };
