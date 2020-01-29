function maximumToys(prices, k) {
  const sorted = prices.sort((a, b) => a - b);
  let budget = k;
  let toys = 0;
  
  for (let i = 0; i < sorted.length; i++){
      if (budget < sorted[i]) {
          break;
      } else {
          budget = budget - sorted[i];
          toys++;
      }
  }

  return toys;

}