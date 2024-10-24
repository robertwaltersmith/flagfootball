import { Users } from 'lucide-react'

export default function TeamCard({ name, coach, players, color }) {
  return (
    <div className={`bg-white rounded-lg shadow-md p-6 border-t-4 ${color}`}>
      <div className="flex items-center gap-3 mb-4">
        <Users className="w-6 h-6 text-gray-600" />
        <h3 className="text-xl font-bold text-gray-800">{name}</h3>
      </div>
      
      <div className="mb-4">
        <p className="text-sm text-gray-600">Coach</p>
        <p className="font-medium text-gray-800">{coach}</p>
      </div>
      
      <div>
        <p className="text-sm text-gray-600 mb-2">Players</p>
        <ul className="space-y-1">
          {players.map((player, index) => (
            <li key={index} className="text-gray-700">{player}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}