import { useState } from 'react';
import { Trophy } from 'lucide-react';
import { calculateStandings } from '../utils/calculateStandings';
import StandingsTable from './StandingsTable';
import AgeGroupSelector from './AgeGroupSelector';

export default function StandingsView({ teams, games }) {
  const [selectedGroup, setSelectedGroup] = useState('1st-2nd');
  
  // Filter teams and games for the selected age group
  const filteredTeams = teams.filter(team => team.ageGroup === selectedGroup);
  const filteredGames = games.filter(game => game.ageGroup === selectedGroup);
  
  // Get team names for the selected age group
  const teamNames = filteredTeams.map(team => team.name);
  
  // Calculate standings
  const standings = calculateStandings(filteredGames, teamNames);

  return (
    <div className="space-y-8">
      <AgeGroupSelector selectedGroup={selectedGroup} onSelect={setSelectedGroup} />
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center gap-3 mb-6">
          <Trophy className="w-6 h-6 text-blue-600" />
          <h2 className="text-2xl font-bold text-gray-800">
            {selectedGroup} Grade Standings
          </h2>
        </div>
        
        {standings.length > 0 ? (
          <StandingsTable standings={standings} />
        ) : (
          <p className="text-center text-gray-600">
            No standings data available for this age group.
          </p>
        )}
      </div>
    </div>
  );
}