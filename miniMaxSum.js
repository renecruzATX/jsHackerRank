function miniMaxSum(arr) {
  arr.sort()
  const maxSum = () => [...arr].splice(-(arr.length-1), 4).reduce((a,b) => a+b)
  const minSum = () => [...arr].splice(0, 4).reduce((a,b) => a+b)
  console.log(minSum(), maxSum())
}