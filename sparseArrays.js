function matchingStrings(strings, queries) {
  let counts = []
  for (const q of queries) {    
    let count = 0;
    for (const s of strings) {                     
      if (s == q) {
        count++;
      }
    }
    counts.push(count);
  }
  return counts
}