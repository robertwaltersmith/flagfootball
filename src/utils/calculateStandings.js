export function calculateStandings(games, teamNames) {
  // Initialize standings object
  const standings = {};
  
  // Initialize each team's stats
  teamNames.forEach(team => {
    standings[team] = {
      teamName: team,
      wins: 0,
      losses: 0,
      ties: 0,
      pointsScored: 0,
      pointsAllowed: 0,
      winPercentage: 0,
      pointsDifferential: 0,
      headToHead: {}
    };
    
    // Initialize head-to-head records
    teamNames.forEach(opponent => {
      if (team !== opponent) {
        standings[team].headToHead[opponent] = {
          wins: 0,
          losses: 0,
          ties: 0
        };
      }
    });
  });

  // Process completed games
  games.forEach(game => {
    if (typeof game.homeScore === 'number' && typeof game.awayScore === 'number') {
      const homeTeam = standings[game.homeTeam];
      const awayTeam = standings[game.awayTeam];
      
      if (homeTeam && awayTeam) {
        // Update points
        homeTeam.pointsScored += game.homeScore;
        homeTeam.pointsAllowed += game.awayScore;
        awayTeam.pointsScored += game.awayScore;
        awayTeam.pointsAllowed += game.homeScore;

        // Update records
        if (game.homeScore > game.awayScore) {
          homeTeam.wins++;
          awayTeam.losses++;
          homeTeam.headToHead[game.awayTeam].wins++;
          awayTeam.headToHead[game.homeTeam].losses++;
        } else if (game.homeScore < game.awayScore) {
          homeTeam.losses++;
          awayTeam.wins++;
          homeTeam.headToHead[game.awayTeam].losses++;
          awayTeam.headToHead[game.homeTeam].wins++;
        } else {
          homeTeam.ties++;
          awayTeam.ties++;
          homeTeam.headToHead[game.awayTeam].ties++;
          awayTeam.headToHead[game.homeTeam].ties++;
        }
      }
    }
  });

  // Calculate percentages and differentials
  Object.values(standings).forEach(team => {
    const totalGames = team.wins + team.losses + team.ties;
    team.winPercentage = totalGames > 0 ? (team.wins + team.ties * 0.5) / totalGames : 0;
    team.pointsDifferential = team.pointsScored - team.pointsAllowed;
  });

  // Sort teams
  return Object.values(standings).sort((a, b) => {
    // First by win percentage
    if (a.winPercentage !== b.winPercentage) {
      return b.winPercentage - a.winPercentage;
    }
    
    // Then by head-to-head
    const headToHead = a.headToHead[b.teamName];
    if (headToHead) {
      const totalGames = headToHead.wins + headToHead.losses + headToHead.ties;
      if (totalGames > 0) {
        const h2hPercentage = (headToHead.wins + headToHead.ties * 0.5) / totalGames;
        if (h2hPercentage !== 0.5) {
          return h2hPercentage > 0.5 ? -1 : 1;
        }
      }
    }
    
    // Finally by point differential
    return b.pointsDifferential - a.pointsDifferential;
  });
}