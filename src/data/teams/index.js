import { firstSecondTeams } from './1st-2nd.js';
import { thirdFourthTeams } from './3rd-4th.js';
import { fifthSixthTeams } from './5th-6th.js';

// Combine all teams
export const teams = [
  ...firstSecondTeams,
  ...thirdFourthTeams,
  ...fifthSixthTeams
];