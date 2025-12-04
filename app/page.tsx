'use client'

import { useState, useEffect } from 'react'
import { getCount, incrementCount } from './actions'

export default function Home() {
  const [visits, setVisits] = useState(0)
  const [votes, setVotes] = useState(0)
  const [hasVoted, setHasVoted] = useState(false)

  useEffect(() => {
    // 1. Get current numbers from the database
    getCount('page_visits').then((val) => setVisits(val))
    getCount('house_votes').then((val) => setVotes(val))

    // 2. Count this new visit
    incrementCount('page_visits').then((newVal) => setVisits(newVal))
  }, [])

  const handleVote = async () => {
    if (hasVoted) return 
    
    // Update the screen instantly (so it feels fast)
    setVotes(prev => prev + 1)
    setHasVoted(true)

    // Send the vote to the database in the background
    await incrementCount('house_votes')
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Drafted House</h1>
      
      <div className="flex flex-col items-center gap-4 border p-8 rounded-lg shadow-lg">
        <div className="text-xl">
          Total Visits: <strong>{visits}</strong>
        </div>

        <div className="text-xl">
          Total Votes: <strong>{votes}</strong>
        </div>

        <button 
          onClick={handleVote}
          disabled={hasVoted}
          className={`px-6 py-3 rounded-full text-white font-bold transition ${
            hasVoted 
              ? "bg-gray-400 cursor-not-allowed" 
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {hasVoted ? "Voted!" : "Vote for this House"}
        </button>
      </div>
    </main>
  )
}
