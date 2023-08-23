function climbingLeaderboard(ranked, player) {
  const playerRankings = [];
  const uniqueRanked = [...new Set(ranked)];

  for (let i = 0; i < player.length; i++) {
    let left = 0;
    let right = uniqueRanked.length - 1;
    let playerRank = -1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);

      if (uniqueRanked[mid] === player[i]) {
        playerRank = mid + 1;
        break;
      } else if (uniqueRanked[mid] < player[i]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }

    if (playerRank === -1) {
      playerRank = left + 1;
    }
    playerRankings.push(playerRank);
  }

  return playerRankings;
}
