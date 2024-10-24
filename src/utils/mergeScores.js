export function mergeScores(games, scores) {
  // Create a map of scores by unique game identifier
  const scoresMap = new Map();
  scores.forEach(score => {
    const key = `${score.homeTeam}-${score.awayTeam}-${score.date}`;
    scoresMap.set(key, score);
  });
  
  return games.map(game => {
    const key = `${game.homeTeam}-${game.awayTeam}-${game.date}`;
    const score = scoresMap.get(key);
    
    if (score) {
      return {
        ...game,
        homeScore: score.homeScore,
        awayScore: score.awayScore
      };
    }
    
    return game;
  });
}