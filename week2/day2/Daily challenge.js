// 1
const usernames = [];
gameInfo.forEach(player => {
  usernames.push(player.username + "!");
});

// 2
const winners = [];
gameInfo.forEach(player => {
  if (player.score > 5) {
    winners.push(player.username);
  }
});

// 3
let totalScore = 0;
gameInfo.forEach(player => {
  totalScore += player.score;
});

console.log(usernames);
console.log(winners);
console.log(totalScore);
