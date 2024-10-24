import { firstSecondGames } from './1st-2nd.js';
import { thirdFourthGames } from './3rd-4th.js';
import { fifthSixthGames } from './5th-6th.js';
import { scores } from '../scores/index.js';
import { mergeScores } from '../../utils/mergeScores.js';

// Combine all games
const allGames = [
  ...firstSecondGames,
  ...thirdFourthGames,
  ...fifthSixthGames
];

// Export the merged games with scores
export const games = mergeScores(allGames, scores);