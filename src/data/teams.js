import { firstSecondTeams } from './teams/1st-2nd';
import { thirdFourthTeams } from './teams/3rd-4th';
import { fifthSixthTeams } from './teams/5th-6th';

// Combine all teams
export const teams = [
  ...firstSecondTeams,
  ...thirdFourthTeams,
  ...fifthSixthTeams
];