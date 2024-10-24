import { useState } from 'react';
import { Trophy, CalendarDays, BarChart3 } from 'lucide-react';
import TeamCard from './components/TeamCard';
import GameCard from './components/GameCard';
import AgeGroupSelector from './components/AgeGroupSelector';
import StandingsView from './components/StandingsView';
import { teams } from './data/teams';
import { games } from './data/games';

export default function App() {
  const [activeTab, setActiveTab] = useState('teams');
  const [selectedGroup, setSelectedGroup] = useState('1st-2nd');

  const filteredTeams = teams.filter(team => team.ageGroup === selectedGroup);
  const filteredGames = games.filter(game => game.ageGroup === selectedGroup);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-blue-600 text-white py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center">
            Demopolis Youth Flag Football
          </h1>
          <p className="text-center mt-2 text-blue-100">
            Building champions through sportsmanship and fun
          </p>
        </div>
      </header>

      <nav className="bg-white shadow">
        <div className="container mx-auto px-4">
          <div className="flex space-x-4">
            <button
              onClick={() => setActiveTab('teams')}
              className={`flex items-center gap-2 px-4 py-3 font-medium transition-colors ${
                activeTab === 'teams'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              <Trophy className="w-5 h-5" />
              Teams
            </button>
            <button
              onClick={() => setActiveTab('schedule')}
              className={`flex items-center gap-2 px-4 py-3 font-medium transition-colors ${
                activeTab === 'schedule'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              <CalendarDays className="w-5 h-5" />
              Schedule
            </button>
            <button
              onClick={() => setActiveTab('standings')}
              className={`flex items-center gap-2 px-4 py-3 font-medium transition-colors ${
                activeTab === 'standings'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              <BarChart3 className="w-5 h-5" />
              Standings
            </button>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        {activeTab !== 'standings' && (
          <AgeGroupSelector
            selectedGroup={selectedGroup}
            onSelect={setSelectedGroup}
          />
        )}

        {activeTab === 'teams' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTeams.map((team, index) => (
              <TeamCard key={index} {...team} />
            ))}
          </div>
        )}

        {activeTab === 'schedule' && (
          <div className="max-w-3xl mx-auto space-y-4">
            {filteredGames.length > 0 ? (
              filteredGames.map((game, index) => (
                <GameCard key={index} {...game} />
              ))
            ) : (
              <p className="text-center text-gray-600">
                No games scheduled for this age group yet.
              </p>
            )}
          </div>
        )}

        {activeTab === 'standings' && (
          <StandingsView teams={teams} games={games} />
        )}
      </main>

      <footer className="bg-gray-800 text-gray-400 py-8 mt-auto">
        <div className="container mx-auto px-4 text-center">
          <p>© 2024 Demopolis Youth Flag Football. All rights reserved.</p>
          <p className="mt-2 text-sm">
            Coming soon: Online registration for the next season!
          </p>
        </div>
      </footer>
    </div>
  );
}