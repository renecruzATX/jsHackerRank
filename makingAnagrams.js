function makeAnagram(a, b) {
  let aChars = a.split('').sort();
  let bChars = b.split('').sort();
  let letters = [];
  while (aChars.length > 0 || bChars.length > 0) {
    //check if aChars array is empty
    if (aChars.length === 0) {
      letters.push(bChars.shift());
      continue;
    }

    //check if bChars array is empty
    if (bChars[0] === undefined) {
      letters.push(aChars.shift());
      continue;
    }

    //shift first element based on ascii comparison
    if (aChars[0] < bChars[0]) {
      letters.push(aChars.shift());
    } else if (aChars[0] > bChars[0]) {
      letters.push(bChars.shift());
    } else {
      aChars.shift();
      bChars.shift();
    }  
  }
  return letters.length;  
}