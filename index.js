/*To solve this problem what we need to do is to sort the flower base prices by increasing or decreasing order. Whichever you like better. I like to iterate arrays bottom up so i chose decreasing price. Now we need an array to keep track of the purchases of the friends initialized to 0s. We can get the minimum cost by choosing the (i%k)th person to buy the ith most expensive flower and add the adjusted price to our solution. After this we add one to the (i%k)th person’s purchases so the next time he buys a flower, the florist charges the adjusted price.*/

function getMinimumCost(k, c) {
  c.sort((a, b)=>b-a)
  let totalPrice = 0
  if (k >= c.length) {
    totalPrice = c.reduce((a,b)=>a+b)
  } else {
    for(let i=0; i<c.length; i++) {
      totalPrice += Math.floor(i/k + 1) * c[i];
    }
  }
  console.log(c)
  return totalPrice;
}

getMinimumCost(3, [ 1, 3, 5, 7, 9 ])