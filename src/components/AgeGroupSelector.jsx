import { School } from 'lucide-react'

const AGE_GROUPS = ['1st-2nd', '3rd-4th', '5th-6th']

export default function AgeGroupSelector({ selectedGroup, onSelect }) {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-2 mb-4 justify-center">
        <School className="w-5 h-5 text-blue-600" />
        <h2 className="text-lg font-semibold text-gray-800">Age Group</h2>
      </div>
      
      <div className="flex justify-center gap-4">
        {AGE_GROUPS.map(group => (
          <button
            key={group}
            onClick={() => onSelect(group)}
            className={`px-4 py-2 rounded-full transition-colors ${
              selectedGroup === group
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {group} Grade
          </button>
        ))}
      </div>
    </div>
  )
}