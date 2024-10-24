import { firstSecondScores } from './1st-2nd.js';
import { thirdFourthScores } from './3rd-4th.js';
import { fifthSixthScores } from './5th-6th.js';

// Combine all scores
export const scores = [
  ...firstSecondScores,
  ...thirdFourthScores,
  ...fifthSixthScores
];