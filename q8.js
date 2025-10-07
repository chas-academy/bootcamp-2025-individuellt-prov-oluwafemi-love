// denna funktion tar emot en array av strängar. gör så att den returnerar en enda sträng som sammanfogar alla strängar i arrayen
// this function receives an array of strings. make it return a single string that concatenates all the strings in the array

export function combineStrings(strings) {
  let result = "";
  strings.forEach((string) => {
    result = string.join();
  });

  return result;
}
// Uncaught TypeError: strings.forEach is not a function
    // at combineStrings (<anonymous>:3:11)
    // at <anonymous>:1:1


export function combineStringx(strings) {
  let result = "";
  let arr = strings.split();
  //let arrOfStrings = Array.from(strings)
  arr.forEach((string) => {
    result = string.concat();
  });

  return result;
}

