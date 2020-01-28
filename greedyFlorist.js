/*k will be the number of friends and c will be an array of prices of flowers*/
function getMinimumCost(k, c) {
  //sort the array in descending order so that each friend will each buy a flower at the most expensive price
  c.sort((a, b) => b - a);
  //initialize the total price to 0
  let totalPrice = 0;
  //if the amount of friends is greater than or equal to the amount of flowers
  //then each flower gets bought at the original price once and is added to the total price
  if (k >= c.length) {
    totalPrice = c.reduce((a, b) => a + b)
  } else {
    //each friend buys flower at the most expensive price left and subsequent flowers are bought at the higher prices
    let i = 0;
    while (i < c.length) {
      totalPrice += Math.floor(i / k + 1) * c[i];
      i++
    }
  };
  return totalPrice;
}

getMinimumCost(5, [1, 11, 3, 5, 7, 9, 13, 15, 17, 19, 21, 30])