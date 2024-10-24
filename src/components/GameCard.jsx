import { Calendar } from 'lucide-react'

export default function GameCard({ date, time, homeTeam, awayTeam, location, homeScore, awayScore }) {
  const hasScores = typeof homeScore === 'number' && typeof awayScore === 'number'
  let homeClass = 'text-gray-800'
  let awayClass = 'text-gray-800'

  if (hasScores) {
    if (homeScore > awayScore) {
      homeClass = 'font-bold text-gray-900'
    } else if (awayScore > homeScore) {
      awayClass = 'font-bold text-gray-900'
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex items-center gap-4">
      <div className="flex items-center gap-3 min-w-[140px]">
        <Calendar className="w-5 h-5 text-blue-600" />
        <div>
          <p className="font-medium text-gray-800">{date}</p>
          <p className="text-sm text-gray-600">{time}</p>
        </div>
      </div>
      
      <div className="flex-1">
        <div className="flex items-center justify-center gap-3">
          <span className={homeClass}>{homeTeam}</span>
          {hasScores ? (
            <span className="font-medium text-gray-800">{homeScore} - {awayScore}</span>
          ) : (
            <span className="text-gray-400">vs</span>
          )}
          <span className={awayClass}>{awayTeam}</span>
        </div>
        <p className="text-sm text-gray-600 text-center mt-1">{location}</p>
      </div>
    </div>
  )
}