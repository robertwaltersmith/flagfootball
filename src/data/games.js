import { firstSecondGames } from './games/1st-2nd';
import { thirdFourthGames } from './games/3rd-4th';
import { fifthSixthGames } from './games/5th-6th';
import { firstSecondScores } from './scores/1st-2nd';
import { thirdFourthScores } from './scores/3rd-4th';
import { fifthSixthScores } from './scores/5th-6th';

// Combine all scores
const scores = [
  ...firstSecondScores,
  ...thirdFourthScores,
  ...fifthSixthScores
];

// Create a map of scores by unique game identifier
const scoresMap = new Map();
scores.forEach(score => {
  const key = `${score.homeTeam}-${score.awayTeam}-${score.date}`;
  scoresMap.set(key, score);
});

// Combine all games and merge with scores
const allGames = [
  ...firstSecondGames,
  ...thirdFourthGames,
  ...fifthSixthGames
];

// Export games with scores merged
export const games = allGames.map(game => {
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