function breakingRecords(scores) {
  let highScore = scores[0];
  let lowScore = scores[0];
  let highChange = 0;
  let lowChange = 0;
  for (let i=1; i<scores.length; i++) {
    if (scores[i] > highScore) {
      highScore = scores[i];
      highChange++;
    } else if (scores[i] < lowScore) {
      lowScore = scores[i];
      lowChange++;
    }
    
  } 
  return [highChange, lowChange];
}