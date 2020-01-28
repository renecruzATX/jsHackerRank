function findDigits(n) {
  //set divisible number count to 0
  let count = 0;
  //turn number to an array of digits
  let number = n.toString().split('') 
  //for each digit in the array check if its divisible 
  // if it is update count 
  for (const x of number) {
      if (n % x === 0) {
          count++;
      } 
  }
  return count;    
}